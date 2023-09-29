interface FeedbackData {
    [testType: string]: {
        [subCategory: string]: {
            [scoreRange: string]: string;
        };
    };
}

export const feedbackData: FeedbackData = {
    "MULTIPLE INTELLIGENCE": {
        "LINGUISTIC": {
            "1-10": "Your linguistic intelligence falls within the basic proficiency range. This suggests that you have a foundation in language skills, but there is room for improvement. Consider focusing on expanding your vocabulary, refining your grammar, and practising effective communication. Engaging in more reading, writing, and active participation in discussions can help you enhance your linguistic abilities and become a more effective communicator.",
            "11-20": "Your linguistic intelligence falls within the developing skills range. You have made progress in honing your language abilities, but there is still work to be done. Continue to build your vocabulary, work on sentence structure, and practice expressing your thoughts clearly. Engaging in activities such as writing essays, joining book clubs, and engaging in debates can contribute to further developing your linguistic intelligence and advancing your communication skills.",
            "21-30": "Congratulations, your linguistic intelligence falls within the strong proficiency range. You have a solid command of language and can effectively express yourself. Keep refining your skills by exploring different writing styles, experimenting with complex sentence structures, and engaging in advanced language-related activities. Leveraging your linguistic abilities, you could consider pursuing careers in writing, translation, content creation, or public speaking, where your communication skills will be highly valued.",
            "31-40": "Exceptional! Your linguistic intelligence score places you in the highest category of mastery. Your command of language is outstanding, and you have the potential to excel in various language-intensive fields. Consider exploring professions such as writing, journalism, linguistics, teaching, or even diplomatic roles that require strong communication and language skills. Your ability to convey complex ideas, evoke emotions through words, and connect with others through language is truly remarkable."
        },
        "LOGICAL": {
            "1-10": "Your logical/mathematical intelligence falls within the foundational understanding range. This indicates that you have a basic grasp of logical reasoning and mathematical concepts. To further develop your skills, consider engaging in activities that challenge your problem-solving abilities, such as puzzles, brain teasers, and basic mathematical exercises. Strengthening your logical thinking will not only enhance your cognitive skills but also benefit you in various academic and professional pursuits.",
            "11-20": "Your logical/mathematical intelligence falls within the developing skills range. You have shown progress in honing your logical and mathematical abilities, but there is still room for growth. Continue to explore more complex problem-solving scenarios, engage with mathematical concepts at a deeper level, and practice critical thinking. Activities such as coding, data analysis, and advanced mathematical puzzles can help you further refine your logical/mathematical intelligence.",
            "21-30": "Congratulations, your logical/mathematical intelligence falls within the strong proficiency range. Your ability to analyze patterns, make connections, and solve intricate problems is impressive. Keep challenging yourself by tackling advanced mathematical concepts, exploring formal logic, and delving into fields such as computer science, engineering, or mathematics. Your strong logical/mathematical skills open doors to careers that involve data analysis, research, software development, and strategic planning.",
            "31-40": "Exceptional! Your logical/mathematical intelligence places you in the highest category of mastery. Your aptitude for logical reasoning and mathematical thinking is outstanding. Consider pursuing careers in fields such as mathematics, theoretical physics, computer science, cryptography, or any discipline that requires complex problem-solving and analytical skills. Your ability to dissect intricate systems and formulate innovative solutions is a rare and valuable talent. "
        }
    },
    "Test2": {
    },
    "Test3": {
    }
} as const;