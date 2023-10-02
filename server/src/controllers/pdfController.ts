import { Request, Response } from 'express';
import User from '../models/users'; // Assuming you have a User model
import { UpdateWriteOpResult } from 'mongoose';
import { Chart, registerables } from 'chart.js';
import { createCanvas } from 'canvas';
import { PDFDocument, PDFImage, rgb, StandardFonts } from 'pdf-lib';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getFeedback } from '../utils/feedbackFunction';
import fs from 'fs';

export async function makeBarChartPdf(req: Request, res: Response, testType: string, pageNumber: number): Promise<void> {
    // Load the existing PDF
    const pdfBuffer = await fs.promises.readFile('src/yay.pdf');
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get a specific page (e.g., page 1)
    const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

    const user = await User.findOne({
        username: req.user.username,
        email: req.user.email
    }).select('testResults');

    let userTestResults = user?.testResults;

    const Test = userTestResults?.find(result => result.testType === testType);
    const testSubcategories = Test?.subcategories;

    const names = testSubcategories?.map(result => result.name);

    const scores = testSubcategories?.map(result => result.score);

    Chart.register(...registerables);
    Chart.register(ChartDataLabels);

    const canvas = createCanvas(380, 340);
    const ctx = canvas.getContext('2d', { alpha: false });

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Your chart data and configuration
    const data = {
        labels: names, //names?.map((label) => label?.replace(/\s+/g, '\n'))
        datasets: [
            {
                label: testType,
                data: scores,
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color
                borderColor: 'rgb(75, 192, 192)', // Border color
                borderWidth: 1, // Border wid
            },
        ],
    };

    const barChart = new Chart(ctx as any, {
        type: 'bar', // Make sure the type is 'bar' for a bar chart
        data: data,
        options: {
            scales: {
                x: {
                    display: true,
                    // ticks: {
                    //     font: {
                    //         size: 14, // Set the font size for x-axis labels
                    //         family: 'Verdana', // Set the font family for x-axis labels
                    //     },
                    //     autoSkip: false, // Disable automatic skipping of labels
                    //     maxRotation: 0, // Prevent label rotation
                    //     padding: 10, // Add padding between labels and chart
                    // },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: (value) => value, // Add '%' to the tick labels
                    },
                },
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            let label = context.dataset.label || '';
                            if (context.parsed.y !== null) {
                                label += `\nValue: ${context.parsed.y}`;
                            }
                            return label;
                        },
                    },
                },
                // datalabels: {
                //     anchor: 'end',
                //     align: 'end',
                //     formatter: function (value) {
                //         // Customize label formatting here
                //         const label = value.toString();
                //         if (label.includes(' ')) {
                //             // If the label contains a space, split it into lines
                //             const lines = label.split(' ');
                //             if (lines.length > 1) {
                //                 // If there are more than one word, join all but the last word with line breaks
                //                 const firstPart = lines.slice(0, -1).join('\n');
                //                 const lastWord = lines[lines.length - 1];
                //                 return `${firstPart}\n${lastWord}`;
                //             }
                //         }
                //         // If no space or only one word, return the label as is
                //         return label;
                //     },
                //     font: {
                //         family: 'Arial',
                //         size: 12, // Adjust the font size as needed
                //     },
                //     color: 'black', // Label color
                // },
            }
        },
    });

    const chartImageBase64 = barChart.toBase64Image();
    if (!chartImageBase64.startsWith('data:image/png;base64,')) {
        console.log('Image data is not in PNG format.');
        return;
        // Proceed with embedding the image into the PDF
    }
    const base64WithoutMimeType = chartImageBase64.split(',')[1];
    const pdfImage = await pdfDoc.embedPng(Buffer.from(base64WithoutMimeType, 'base64'));


    // Save the chart as an image
    // const buffer = canvas.toBuffer('image/png', {
    //     compressionLevel: 0,
    //     resolution: 2000,
    // });
    // fs.writeFileSync('src/barGraph2.png', buffer);


    page.drawImage(pdfImage, {
        x: 50,
        y: 120,
        width: 440,
        height: 313,
    });

    // // Save the modified PDF to a new file
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile('src/yay.pdf', modifiedPdfBytes);
}

export async function makeFeedbackPdf(req: Request, res: Response, testType: string, subCategory: string, pageNumber: number, Fontsize: number,maxWords:number, Xd: number, Yd: number): Promise<void> {
    //get score from user
    const user = await User.findOne({
        username: req.user.username,
        email: req.user.email
    }).select('testResults');

    let userTestResults = user?.testResults;

    const testResult = userTestResults?.find(result => result.testType === testType);
    const subCategori = testResult?.subcategories.find(sub => sub.name === subCategory);
    const score = subCategori?.score;

    // Load the existing PDF
    const pdfBuffer = await fs.promises.readFile('src/yay.pdf');
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get a specific page (e.g., page 1)
    const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

    // Getting feedback from function and converting into a list of lines
    const { feedback, percentage } = getFeedback(testType, subCategory, score as number);

    const words = feedback?.split(' ');
    let lines = [];

    // if (words) {
    //     for (let i = 0; i < words.length; i += 13) {
    //         const line = words.slice(i, i + 13).join(' ');
    //         lines.push(line);
    //     }
    // } else {
    //     console.log('No feedback');
    // }

    if (words) {
        const maxLineWidth = maxWords;

        let currentLine = words[0]; // Start with the first word
        let currentCharCount = words[0].length;

        for (let i = 1; i < words.length; i++) {
            const testLine = currentLine + ' ' + words[i]; // Test adding the next word
            currentCharCount += words[i].length + 1;

            // Check if the text width exceeds the maximum line width
            if (currentCharCount <= maxLineWidth) {
                // The line fits within the width, add the next word
                currentLine = testLine;
            } else {
                // The line width exceeds the maximum, start a new line
                lines.push(currentLine);
                currentLine = words[i]; // Start a new line with the next word
                currentCharCount = words[i].length;
            }
        }

        // Add the remaining line
        lines.push(currentLine);
    } else {
        console.log('No feedback');
    }

    // Set the fonts and drawing the text to page
    const fontSize = Fontsize;
    const TimesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    // Set the font, font size, and color for the TextDraw object
    page.setFontSize(fontSize);
    page.setFont(TimesRomanFont);
    page.setFontColor(rgb(0, 0, 0));

    let xd = Xd;
    let yd = Yd;

    for (const line of lines) {
        page.drawText(line,
            {
                x: xd,
                y: yd,
            },)

        // Move to the next line (1.2 times the font size)
        yd -= fontSize * 1.2;
    }

    // Save to yay.pdf again
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile('src/yay.pdf', modifiedPdfBytes);
}