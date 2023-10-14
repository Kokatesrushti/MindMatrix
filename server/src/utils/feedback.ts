interface FeedbackData {
    [testType: string]: {
        [subCategory: string]: {
            [scoreRange: string]: string;
        };
    };
}

export const feedbackData: FeedbackData = {
    "Multiple Intelligence": {
        "Linguistic": {
            "1-10": "Your linguistic intelligence falls within the basic proficiency range. This suggests that you have a foundation in language skills, but there is room for improvement. Consider focusing on expanding your vocabulary, refining your grammar, and practising effective communication. Engaging in more reading, writing, and active participation in discussions can help you enhance your linguistic abilities and become a more effective communicator.",
            "11-20": "Your linguistic intelligence falls within the developing skills range. You have made progress in honing your language abilities, but there is still work to be done. Continue to build your vocabulary, work on sentence structure, and practice expressing your thoughts clearly. Engaging in activities such as writing essays, joining book clubs, and engaging in debates can contribute to further developing your linguistic intelligence and advancing your communication skills.",
            "21-30": "Congratulations, your linguistic intelligence falls within the strong proficiency range. You have a solid command of language and can effectively express yourself. Keep refining your skills by exploring different writing styles, experimenting with complex sentence structures, and engaging in advanced language-related activities. Leveraging your linguistic abilities, you could consider pursuing careers in writing, translation, content creation, or public speaking, where your communication skills will be highly valued.",
            "31-40": "Exceptional! Your linguistic intelligence score places you in the highest category of mastery. Your command of language is outstanding, and you have the potential to excel in various language-intensive fields. Consider exploring professions such as writing, journalism, linguistics, teaching, or even diplomatic roles that require strong communication and language skills. Your ability to convey complex ideas, evoke emotions through words, and connect with others through language is truly remarkable."
        },
        "Logical": {
            "1-10": "Your logical/mathematical intelligence falls within the foundational understanding range. This indicates that you have a basic grasp of logical reasoning and mathematical concepts. To further develop your skills, consider engaging in activities that challenge your problem-solving abilities, such as puzzles, brain teasers, and basic mathematical exercises. Strengthening your logical thinking will not only enhance your cognitive skills but also benefit you in various academic and professional pursuits.",
            "11-20": "Your logical/mathematical intelligence falls within the developing skills range. You have shown progress in honing your logical and mathematical abilities, but there is still room for growth. Continue to explore more complex problem-solving scenarios, engage with mathematical concepts at a deeper level, and practice critical thinking. Activities such as coding, data analysis, and advanced mathematical puzzles can help you further refine your logical/mathematical intelligence.",
            "21-30": "Congratulations, your logical/mathematical intelligence falls within the strong proficiency range. Your ability to analyze patterns, make connections, and solve intricate problems is impressive. Keep challenging yourself by tackling advanced mathematical concepts, exploring formal logic, and delving into fields such as computer science, engineering, or mathematics. Your strong logical/mathematical skills open doors to careers that involve data analysis, research, software development, and strategic planning.",
            "31-40": "Exceptional! Your logical/mathematical intelligence places you in the highest category of mastery. Your aptitude for logical reasoning and mathematical thinking is outstanding. Consider pursuing careers in fields such as mathematics, theoretical physics, computer science, cryptography, or any discipline that requires complex problem-solving and analytical skills. Your ability to dissect intricate systems and formulate innovative solutions is a rare and valuable talent. "
        },
        "Spatial": {
            "1-10": "Your Visual/Spatial intelligence falls within the basic proficiency range. This suggests that you have a foundation in visual and spatial skills, but there is room for improvement. Consider enhancing your ability to visualize and manipulate objects in your mind, as well as improving your spatial awareness. Engaging in activities such as drawing, puzzles, map reading, and design can help you further develop your Visual/Spatial intelligence and set the stage for potential career paths that require strong visualization skills.",
            "11-20": "Your Visual/Spatial intelligence falls within the developing skills range. You have shown progress in honing your visual and spatial abilities, but there is still room to grow. Continue to practice visualizing complex scenarios, recognizing patterns, and understanding spatial relationships. Engaging in creative pursuits such as graphic design, architecture, photography, or video editing could help you further develop your Visual/Spatial intelligence and open up opportunities in visually oriented professions.",
            "21-30": "Congratulations, your Visual/Spatial intelligence falls within the strong proficiency range. You have a solid command of visualizing and understanding spatial information. Your ability to manipulate and analyze visual data is impressive. Consider exploring careers in fields such as graphic arts, interior design, cartography, virtual reality development, or engineering, where your strong visual and spatial skills will be highly valued. Continuing to refine your abilities and seeking opportunities for creativity could lead to a successful and fulfilling career.",
            "31-40": "Exceptional! Your Visual/Spatial intelligence score places you in the highest category of mastery. Your ability to perceive, manipulate, and interpret visual and spatial information is outstanding. You have the potential to excel in fields that demand advanced visual thinking and spatial reasoning, such as architecture, industrial design, fine arts, 3D modelling, or even scientific research involving complex visual data analysis. Your extraordinary talents in this domain provide a strong foundation for pursuing a rewarding and impactful career. "
        },
        "Interpersonal": {
            "1-10": "Your interpersonal intelligence falls within the developing skills range. This suggests that you are beginning to understand and connect with others on a personal level, but there is room for growth. Consider actively seeking opportunities to engage in group activities, collaborate with peers, and practice active listening. Developing strong interpersonal skills can open doors to careers in customer service, team coordination, or entry-level management positions.",
            "11-20": "Your interpersonal intelligence falls within the building competence range. You are making progress in understanding and relating to others effectively. Continue to enhance your empathetic listening, conflict resolution, and teamwork abilities. Strengthening your interpersonal skills can lead to careers in human resources, counselling, sales, or middle management, where your ability to connect and collaborate will be valuable.",
            "21-30": "Congratulations, your interpersonal intelligence is in the strong proficiency range. You have a knack for understanding and interacting with people, which can lead to fulfilling careers. Cultivate your ability to build rapport, mediate conflicts, and lead teams. Consider pursuing roles in leadership, coaching, counselling, or community organizing, where your strong interpersonal skills can have a positive impact on individuals and groups.",
            "31-40": "Exceptional! Your interpersonal intelligence score places you in the highest category of mastery. You have a remarkable talent for connecting, understanding, and influencing others. Your ability to build relationships, inspire teamwork, and navigate complex social dynamics is exceptional. Consider careers in fields such as psychology, coaching, mentoring, diplomacy, or executive leadership, where your exceptional interpersonal skills can drive meaningful change and success."
        },
        "Musical": {
            "1-10": "Your musical intelligence falls within the limited aptitude range. While you may enjoy listening to music, there is an opportunity to develop your musical skills further. Consider exploring different genres of music, learning to play a musical instrument, and paying closer attention to the various elements of music such as rhythm, melody, and harmony. Engaging in music lessons, attending concerts, and practising active listening can help you expand your musical intelligence.",
            "11-20": "Your musical intelligence falls within the developing sensitivity range. You are starting to recognize and appreciate the nuances of music. To enhance your musical abilities, continue exploring different musical styles, practising your listening skills, and experimenting with creating your music. Learning to read musical notation, exploring different instruments, and participating in group musical activities can further develop your musical intelligence.",
            "21-30": "Congratulations, your musical intelligence falls within the strong proficiency range. You have a solid foundation in understanding and creating music. To continue advancing, consider formal music training, learning advanced techniques on your chosen instrument, and exploring composition. Your developed musical intelligence could lead to opportunities in music performance, teaching, music therapy, or even music production, where your ability to understand and convey emotions through music is highly valuable.",
            "31-40": "Exceptional! Your musical intelligence score places you in the highest category of mastery. Your connection with music is profound, and you possess the ability to create, interpret, and appreciate music at an exceptional level. Consider pursuing a career in music composition, orchestration, conducting, performing, or music education. Your advanced musical intelligence enables you to communicate and express emotions through music in a way that resonates deeply with others."
        },
        "Naturalistic": {
            "1-10": "Your naturalistic intelligence falls within the basic awareness range. You have a foundational understanding of the natural world, but there is potential for further exploration and development. Consider spending more time observing and interacting with nature, learning about different species, ecosystems, and environmental concepts. Engaging in gardening, wildlife observation, or conservation efforts can help you enhance your naturalistic intelligence.",
            "11-20": "Your naturalistic intelligence is in the developing connection range. You are making progress in recognizing and understanding the natural world around you. To further enhance your naturalistic intelligence, immerse yourself in nature by exploring different habitats, studying local flora and fauna, and deepening your knowledge of ecological systems. Your growing connection with nature could lead you to careers in fields like environmental science, forestry, or wildlife conservation.",
            "21-30": "Congratulations, your naturalistic intelligence falls within the strong proficiency range. You have a keen ability to connect with and understand the natural world. Your deep appreciation for nature could lead you towards impactful careers such as environmental education, ecological research, or park management. Continue to expand your expertise by delving into more specialized areas of naturalistic study and sharing your knowledge with others.",
            "31-40": "Exceptional! Your naturalistic intelligence score places you in the highest category of mastery. Your profound understanding of the natural world sets you apart. Consider pursuing careers as a botanist, ecologist, wildlife biologist, or environmental consultant, where your expertise can contribute to significant contributions in the fields of conservation and sustainability. Your ability to observe, analyze, and interpret the intricacies of the environment is truly remarkable."
        },
        "Kinesthetic": {
            "1-10": "Your Body/Kinesthetic intelligence falls within the basic proficiency range. This suggests that you have a foundation in physical coordination and movement, but there is potential for improvement. Consider exploring activities that enhance your body awareness, coordination, and physical skills. Engaging in sports, dance, yoga, or other physical disciplines can help you develop and refine your kinesthetic abilities. As you continue to practice and learn, you can gradually build a stronger connection between your mind and body.",
            "11-20": "Your Body/Kinesthetic intelligence is in the developing skills range. You've made progress in honing your physical abilities, but there's still room for growth. Continue to engage in activities that challenge your physical coordination, balance, and agility. Exploring new forms of movement, participating in group activities, and focusing on refining specific skills (e.g., dance techniques, sports techniques) can help you advance further. Consider areas where your physical intelligence can complement other intelligence or career paths, such as performing arts, sports coaching, or physical therapy.",
            "21-30": "Congratulations, your Body/Kinesthetic intelligence is in the strong proficiency range. You have a solid command of physical coordination and movement, allowing you to excel in activities that require hands-on skills. To further enhance your abilities, consider specializing in a particular physical discipline or art form. This could involve pursuing careers in dance, sports, acting, or other performance-related fields. Your strong kinesthetic intelligence can also be valuable in careers such as physical education, fitness training, or even fields that involve hands-on craftsmanship.",
            "31-40": "Exceptional! Your Body/Kinesthetic intelligence dominance places you in the highest category of mastery. Your ability to use your body effectively is extraordinary and can open up numerous opportunities. You might consider pursuing careers in professional sports, dance choreography, physical therapy, or any creative field that requires intricate physical movement. Your expertise in kinesthetic intelligence can lead to innovative approaches to problem-solving, performance, and physical expression."
        },
        "Intrapersonal": {
            "1-10": "Your intrapersonal intelligence indicates a basic level of self-awareness. You are beginning to recognize your emotions and motivations, but there is room for growth. Consider engaging in self-reflection exercises, journaling, and mindfulness practices to deepen your understanding of your inner world. Developing stronger intrapersonal skills can enhance your overall well-being and help you make more informed decisions in various aspects of your life.",
            "11-20": "Your intrapersonal intelligence falls within the developing self-understanding range. You are making progress in understanding your emotions, motivations, and personal strengths. Continue to invest time in introspection and self-analysis. Explore techniques like meditation, and emotional intelligence workshops, and seek feedback from trusted mentors or counsellors to further enhance your intrapersonal skills. These skills can prove valuable in various interpersonal relationships and professional contexts.",
            "21-30": "Congratulations, your intrapersonal intelligence suggests a strong level of self-awareness. You have a solid grasp of your emotions, values, and internal processes. Your ability to navigate your inner world can serve you well in both personal and professional settings. Consider pursuing careers involving coaching, counselling, psychology, or leadership roles where your adept understanding of human behaviour and motivation can significantly impact you.",
            "31-40": "Exceptional! Your intrapersonal intelligence score places you in the highest category of self-mastery. Your deep understanding of your emotions, motivations, and thought patterns is remarkable. Your skill set is well-suited for careers in psychology, therapy, life coaching, leadership, and even artistic endeavours where your ability to tap into your inner world can lead to profound creative insights. Your insights into human nature can empower you to guide and inspire others effectively."
        },
    },
    "Aptitude": {
        "Linguistic": {
            "1-4": "Your commitment to improving your verbal reasoning skills is admirable. While your current score falls in the lower range, remember that progress takes time and effort. Keep practicing and learning, and you'll undoubtedly see growth in your abilities.",
            "5-8": "Your dedication to enhancing your verbal reasoning skills is evident in your improved score. You're moving in the right direction, and with continued effort, you can further enhance your abilities.",
            "9-12": "Your verbal reasoning skills are solid and above average. Your ability to understand and analyze information is commendable, and you have a good foundation to build upon.",
            "13-16": "Your strong verbal reasoning skills demonstrate your commitment to improvement and learning. Your ability to grasp complex ideas and articulate them clearly is impressive.",
            "17-20": "Congratulations on achieving an exceptional score in verbal reasoning! Your mastery of language and comprehension sets you apart and reflects your dedication to excellence."
        },
        "Numerical": {
            "1-4": "Your dedication to improving your numerical reasoning skills is evident. While your current score reflects a starting point, remember that progress takes time and effort. Continue practicing and learning to see significant improvements.",
            "5-8": "Your efforts to enhance your numerical reasoning skills are paying off, and your progress is noticeable. With continued practice and learning, you can further strengthen your abilities.",
            "9-12": "Your numerical reasoning skills are solid and demonstrate your commitment to improvement. Your ability to work with numbers is commendable, and you have a good foundation to build upon.",
            "13-16": "Your strong numerical reasoning skills are impressive and reflect your dedication to learning. Your ability to handle complex calculations and data is commendable.",
            "17-20": "Congratulations on achieving an exceptional score in numerical reasoning! Your mastery of numerical concepts sets you apart and reflects your commitment to excellence."
        },
        "Mechanical": {
            "1-4": "Your interest in mechanical reasoning is evident, and while your current score reflects a starting point, remember that learning takes time. Keep exploring mechanical concepts and practicing to enhance your understanding.",
            "5-8": "Your efforts to improve your mechanical reasoning skills are noticeable, and your progress is commendable. Continue engaging with mechanical concepts and practicing problem-solving to build a stronger foundation.",
            "9-12": "Your mechanical reasoning skills are developing well, and your grasp of fundamental concepts is commendable. Your ability to solve mechanical problems is a valuable asset.",
            "13-16": "Your strong mechanical reasoning skills are evident, and your ability to analyze and solve mechanical problems is impressive. Your understanding of mechanical concepts sets you apart.",
            "17-20": "Congratulations on achieving an exceptional score in mechanical reasoning! Your mastery of mechanical concepts and problem-solving skills demonstrate your dedication to excellence."
        },
        "Abstract": {
            "1-4": "Your dedication to improving your abstract reasoning skills is evident. While your current score is in the lower range, remember that growth takes time and effort. Your commitment to learning will undoubtedly lead to progress.",
            "5-8": "Your efforts to enhance your abstract reasoning skills are showing results. While there is room for improvement, your progress is notable. Keep up the good work and continue challenging yourself.",
            "9-12": "Your abstract reasoning skills are above average, reflecting your dedication to learning and growth. You're becoming adept at recognizing patterns and making connections between different elements.",
            "13-16": "Your strong abstract reasoning skills set you apart and indicate your commitment to continuous improvement. Your capability to decipher complex patterns and relationships is commendable and opens doors to diverse career opportunities.",
            "17-20": "Congratulations on achieving an exceptional score in abstract reasoning! Your mastery of recognizing patterns and making connections is truly impressive and reflects your dedication to intellectual growth."
        },
        "Spatial": {
            "1-4": "Your interest in developing your spatial reasoning skills is evident. While your current score reflects a starting point, remember that improvement takes practice and effort. Continue working on enhancing your spatial awareness and visualization abilities.",
            "5-8": "Your efforts to improve your spatial reasoning skills are noticeable. Keep practising and honing your abilities to enhance your spatial awareness and visualization capabilities further.",
            "9-12": "Your spatial reasoning skills are solid, and your progress reflects your dedication to improvement. Your ability to work with spatial concepts is commendable, and you have a good foundation to build upon.",
            "13-16": "Your strong spatial reasoning skills are impressive and demonstrate your commitment to learning. Your ability to understand and manipulate spatial relationships is commendable.",
            "17-20": "Congratulations on achieving an exceptional score in spatial reasoning! Your mastery of spatial concepts sets you apart and reflects your commitment to excellence."
        },
        "Logical": {
            "1-4": "Your willingness to engage with logical reasoning is evident, even though your current score is in the lower range. Remember that logical reasoning skills can be developed over time with practice and learning. Keep exploring and honing your skills.",
            "5-8": "You've made progress in your logical reasoning skills, showing improvement since the last category. Keep practising and engaging with logical problems, as consistency is key to further enhancement.",
            "9-12": "Your logical reasoning skills are solid, indicating a capacity for understanding and analyzing patterns and problems. Your growth is evident, and with continued effort, you'll be able to tackle more complex challenges.",
            "13-16": "Your logical reasoning skills are impressive and reflect your dedication to learning and improvement. Your capacity to identify patterns and solve problems is commendable and positions you well for various opportunities.",
            "17-20": "Congratulations on achieving an exceptional score in logical reasoning! Your mastery of logical thinking is impressive and reflects your dedication to excellence."
        }
    },
    "Study Skills Profile Assessment": {
        "Time Management and Procrastination": {
            "1-8": "Your current time management and procrastination strategies may benefit from significant improvement. Consider exploring effective techniques and resources to enhance your productivity and overcome procrastination tendencies.",
            "9-16": "You are making progress in your journey to conquer procrastination and manage your time effectively. Keep refining your skills and adopting valuable strategies to elevate your productivity and focus further.",
            "17-24": "Your efforts in time management and combating procrastination are commendable. Continue to fine-tune your approach and leverage proven methods to optimize your productivity and minimize procrastination challenges.",
            "25-32": "Your mastery of time management and triumph over procrastination are remarkable. Your disciplined approach and effective strategies are yielding impressive results. Keep up the exceptional work as you enjoy heightened productivity and focus in your endeavours."
        },
        "Concentration and Memory": {
            "1-8": "Your current score suggests there is ample room for improvement in terms of concentration and memory. Focusing on dedicated techniques and strategies can help you enhance these cognitive skills and boost your overall learning experience.",
            "9-16": "You are demonstrating effort in cultivating better concentration and memory skills. By exploring targeted methods and consistent practice, you can further elevate your abilities and elevate your capacity to retain and recall information.",
            "17-24": "Your concentration and memory skills are in a commendable range, indicating a solid foundation. Building upon this foundation with advanced techniques and continued practice will empower you to reach even higher levels of cognitive efficiency.",
            "25-32": "Congratulations, your exceptional score reflects a strong command over concentration and memory. Your diligent efforts have paid off, enabling you to excel in absorbing and retaining information. Continue fine-tuning your skills to maximize your cognitive potential and achieve remarkable academic and personal growth."
        },
        "Study Aids and Note-Taking": {
            "1-8": "Your score indicates room for improvement in terms of effective study aids and note-taking strategies. Exploring various techniques and incorporating them into your routine can significantly enhance your learning process.",
            "9-16": "You are making efforts to implement study aids and note-taking practices. By refining these skills and consistently utilizing them, you can enhance your ability to absorb and retain information more efficiently.",
            "17-24": "Your score suggests a solid foundation in study aids and note-taking. Continue to develop and fine-tune these strategies to further streamline your learning process and increase your understanding of the material.",
            "25-32": "Congratulations on your impressive score, which reflects your adeptness in utilizing study aids and note-taking effectively. Your dedicated efforts are paying off, enabling you to excel in comprehending and retaining information. Keep refining your techniques to reach new heights of academic success."
        },
        "Test Strategies and Test Anxiety": {
            "1-8": "Opportunities exist for developing effective test strategies and managing test anxiety. Embrace targeted techniques and resources to build your confidence and refine your approach to exams.",
            "9-16": "You're making strides in improving your test strategies and coping with test anxiety. Further exploration and practice will help solidify your skills, enabling you to approach exams with increased assurance.",
            "17-24": "Your commitment to mastering test strategies and managing test anxiety is evident. Continue to refine your techniques through consistent effort and utilize resources to achieve optimal results in exams.",
            "25-32": "Impressive proficiency in test strategies and adeptly handling test anxiety are evident in your performance. Your dedicated preparation and effective techniques are positioning you for excellence in exams. Stay the course for continued success."
        },
        "Organizing and Processing Information": {
            "1-8": "Opportunities for improvement lie ahead in your organizational and information-processing abilities. Consider adopting effective techniques and strategies to streamline your approach.",
            "9-16": "You're actively engaged in developing your organizational and information-processing skills. Embrace further refinement through structured methods and watch your efficiency grow.",
            "17-24": "Your organizational and information processing capabilities are solid, showcasing your commitment to effective learning. Continue to explore advanced strategies to enhance your skills even further.",
            "25-32": "Impressive mastery of organizational and information-processing skills is evident in your approach. Your ability to efficiently handle and process information is a valuable asset that contributes significantly to your academic and personal success."
        },
        "Motivation and Attitude": {
            "1-8": "Your motivation and attitude towards your goals could benefit from some nurturing. Seek ways to ignite your passion and maintain a positive mindset to drive your success.",
            "9-16": "You are making strides in cultivating a motivated and positive attitude. Continue to fuel your aspirations and embrace challenges with a proactive mindset.",
            "17-24": "Your motivation and attitude are commendable, reflecting your dedication to achieving your objectives. Sustain this positive outlook as you navigate through challenges and seize opportunities.",
            "25-32": "Your exceptional motivation and unwavering positive attitude are truly inspiring. Your proactive approach and enthusiasm set a strong foundation for continuous growth and remarkable accomplishments."
        },
        "Reading and Selecting the Main Idea": {
            "1-8": "Your current performance indicates potential areas for improvement in reading comprehension and identifying main ideas. Consider focusing on dedicated practice and skill-building exercises to enhance your abilities in this crucial aspect of comprehension.",
            "9-16": "You're making progress in the realm of reading and main idea selection. Keep honing your skills through consistent practice and engagement with various texts. By investing time and effort, you can further enhance your ability to discern and extract main ideas effectively.",
            "17-24": "Your proficiency in reading and selecting the main idea is commendable. Continue engaging with a variety of texts to reinforce your skillset. Fine-tune your analytical prowess and main idea identification through continuous practice, leading to a deeper understanding of textual content.",
            "25-32": "Your adeptness at reading and identifying the main idea is truly impressive. Your consistent efforts have yielded remarkable results. As you further immerse yourself in diverse texts, your ability to swiftly discern and comprehend main ideas will only continue to flourish, allowing for advanced comprehension and critical analysis."
        },
        "Writing": {
            "1-8": "Your writing skills show potential for growth. Focusing on fundamental aspects such as grammar, sentence structure, and organization can significantly improve your overall writing effectiveness.",
            "9-16": "You are demonstrating a foundation in writing, but there is room for refinement. Paying attention to clarity, and coherence, and incorporating more varied vocabulary will contribute to stronger and more engaging compositions.",
            "17-24": "Your writing abilities are solid and promising. Continue honing your skills by refining your style, enhancing the flow of your ideas, and employing advanced techniques to captivate your readers.",
            "25-32": "Congratulations on your exceptional writing prowess! Your command of language, effective communication, and captivating storytelling set you apart. Maintain your dedication to excellence, experimenting with different genres and techniques to further elevate your writing to new heights."
        },
    },
    "Emotional Intelligence": {
        "Self-Awareness": {
            "0-19": "You’re taking steps towards self-awareness! While your score indicates that there’s room for growth, your recognition of the importance of self-awareness is a positive starting point. Consider setting aside time for introspection and exploration of your emotions, thoughts, and behaviours. As you make a conscious effort to understand yourself better, you’ll open doors to improved decision-making and more fulfilling relationships.",
            "20-29": "Keep up the effort! You’re making progress in building your self-awareness. While there’s room for improvement, your willingness to reflect on your thoughts and feelings is commendable. By delving deeper into understanding the connections between your emotions and actions, you’ll enhance your ability to adapt and respond constructively to different situations. Your dedication to self-improvement is a positive sign.",
            "30-39": "You’re on the right track! Your self-awareness is developing nicely. You are attuned to your emotions and can often decipher their impact on your decisions. As you continue to explore your thought patterns and motivations, you’ll find more growth opportunities. By deepening your understanding of your own experiences, you’re positioning yourself to navigate challenges with greater insight and resilience.",
            "40-44": "Well done! Your self-awareness is strong, and you have a solid grasp of your emotions and reactions. You are mindful of your strengths and areas for improvement, which allows you to adapt and learn effectively. Your commitment to self-reflection is evident, and it positively impacts your interactions with others. Continue honing your self-awareness—it’s a valuable asset that will serve you well in various aspects of life.",
            "45-50": "Congratulations! Your self-awareness is exceptional. You have a deep understanding of your thoughts, emotions, and behaviours. This level of self-awareness empowers you to make mindful choices and foster healthy relationships. Your ability to reflect on your experiences and motivations is truly commendable. Keep nurturing this skill as it contributes to your personal growth and overall well-being."
        },
        "Managing Emotions": {
            "0-19": "Your emotional management skills could benefit from significant improvement. It’s important to work on building better strategies for handling your emotions and responses to various situations. Begin by developing a greater awareness of your emotional triggers and seeking out healthy coping mechanisms. As you progress, you’ll find that you’re better equipped to handle challenges and contribute positively to your emotional well-being.",
            "20-29": "There’s an opportunity to focus on improving your emotional management skills. While you’re making efforts to handle your emotions, there’s room for growth in effectively regulating your responses in different situations. Consider exploring techniques such as mindfulness, deep breathing, and problem-solving to better manage stress and emotional challenges. With dedication and practice, you can enhance your ability to navigate emotions constructively.",
            "30-39": "You’re on the right track in managing your emotions, and there’s room for growth. You’re displaying a moderate level of emotional control, but there’s potential to enhance your strategies for coping with stress and handling strong emotions. By further developing your emotional management techniques, you’ll be better equipped to navigate situations with greater ease and contribute positively to your personal and professional interactions.",
            "40-44": "You’re doing a great job in managing your emotions effectively. Your ability to handle various emotions and situations is noteworthy. Your capacity to regulate your feelings and respond thoughtfully contributes to healthier relationships and improved decision-making. Continue honing your emotional management skills, and you’ll find that you’re better equipped to navigate challenges and foster positive connections with others.",
            "45-50": "Outstanding job! Your ability to manage emotions is exceptional. You’ve demonstrated a high level of emotional regulation and control. Your skill in handling challenging situations and maintaining a balanced emotional state is truly commendable. Your proficiency in managing emotions positively influences your interactions, decision-making, and overall well-being. Keep up the impressive work in maintaining emotional resilience and equilibrium."
        },
        "Motivating oneself": {
            "0-19": "Your self-motivation appears to be limited at the moment. It’s important to focus on building a stronger foundation of self-discipline, resilience, and goal-setting. While challenges may feel daunting, remember that developing the ability to motivate yourself is a gradual process. Begin by identifying what drives you and exploring strategies to maintain enthusiasm and determination. With persistence, you can make significant strides towards becoming more self-motivated.",
            "20-29": "You are in the process of developing your self-motivation skills. You demonstrate an understanding of the importance of motivation, but there’s room for improvement in consistently applying it to your goals. Recognize the significance of maintaining a positive mindset and finding sources of inspiration, even when facing challenges. With effort and dedication, you can strengthen your self-motivation and see positive changes in your accomplishments.",
            "30-39": "Your self-motivation is solid, and you display a commendable level of determination. While you may face occasional challenges, you approach them with resilience and work towards finding solutions. There is room for growth in terms of consistently maintaining your motivation, especially during tougher times. By identifying strategies that help you stay inspired and engaged, you can enhance your ability to maintain momentum towards your goals.",
            "40-44": "You possess a very strong ability to motivate yourself. Your determination and commitment to your goals are evident, and you consistently demonstrate a proactive attitude towards challenges. Your ability to stay focused and maintain a positive mindset greatly contributes to your achievements. Continue harnessing your inner drive and using it to overcome obstacles, as it is a key factor in your continued success.",
            "45-50": "Congratulations! Your ability to motivate yourself is exceptional. You exhibit a high level of self-discipline, resilience, and a strong sense of purpose. Your proactive approach to setting and achieving goals is truly inspiring. Your intrinsic motivation serves as a powerful driving force, enabling you to overcome challenges and consistently achieve excellent results. Keep up the remarkable work, as your self-motivation positively influences both your personal and professional life."
        },
        "Empathy": {
            "0-19": "Your empathy skills are currently limited, but there’s room for growth. Becoming more attuned to the emotions of others can greatly enhance your relationships and overall emotional intelligence. Practice active listening, ask open-ended questions, and focus on understanding the perspectives and feelings of those around you. By working on your empathy, you can create more meaningful connections and contribute positively to the people in your life.",
            "20-29": "You are on the path of developing your empathy skills. While you may sometimes struggle to fully grasp the emotions of others, you’re making efforts to improve. Engage in active listening and take time to put yourself in others’ shoes to gain a better understanding of their feelings. With consistent practice, your empathy can grow and positively impact your interactions with colleagues, friends, and family.",
            "30-39": "You possess a moderate level of empathy, indicating that you are attuned to the emotions of others to some extent. As you continue to develop this skill, you can further enhance your ability to connect with people on an emotional level. By actively listening and demonstrating understanding, you’ll strengthen your relationships and contribute to a more harmonious and empathetic environment.",
            "40-44": "Your empathy skills are strong and admirable. You can tune into the emotions of others and demonstrate understanding and consideration for their feelings. Your capacity to show empathy enhances your relationships and makes you a valued team member. Continue nurturing this skill, as it can lead to even deeper connections and more effective communication with those around you.",
            "45-50": "Congratulations! Your level of empathy is truly exceptional. You have a remarkable ability to understand and share the feelings of others. Your compassion and genuine interest in others’ emotions contribute to creating strong connections and fostering a supportive environment. Your high empathy can positively impact your relationships, teamwork, and overall emotional intelligence. Keep up the incredible work in making others feel understood and valued."
        },
        "Social Skill": {
            "0-19": "Your social skills appear to be at a lower level. It’s important to invest time and effort into improving your ability to connect with others. Focus on building active listening skills, understanding nonverbal cues, and showing empathy in your interactions. By progressively working on your social skills, you can create more harmonious relationships and contribute positively to various social contexts.",
            "20-29": "Your social skills could benefit from some improvement. While you may have some basic interpersonal skills, there’s room for growth in terms of understanding others’ emotions and expressing yourself clearly. Work on enhancing your communication style, empathy, and adaptability in social situations. With dedication and practice, you can develop stronger social connections and foster more positive interactions.",
            "30-39": "Your social skills are at a satisfactory level, and you demonstrate an ability to engage with others in various situations. As you continue to refine your social skills, focus on active listening and empathy to better understand others’ perspectives. By consistently working on your communication and interpersonal abilities, you can create more fulfilling connections and navigate social dynamics more effectively.",
            "40-44": "Your social skills are well-developed, and you exhibit a high degree of effectiveness in your interactions with others. You are adept at understanding and responding to people’s emotions, which enables you to build rapport and connect on a deeper level. Continue honing your social skills, and you’ll likely find that your positive and empathetic approach enhances both your personal and professional relationships.",
            "45-50": "Your social skills are truly exceptional! You excel in building and maintaining relationships, displaying empathy, active listening, and effective communication. Your ability to connect with others is outstanding, and it’s evident that you create positive and meaningful interactions. Your strong social skills contribute to harmonious relationships, successful collaborations, and a supportive network. Keep up the exceptional work!"
        }
    },
    "Personality": {
        "Openness": {
            "1-10": "Your score suggests a preference for familiar and traditional ways of thinking. You tend to feel more comfortable with established routines and may be less inclined to embrace novel or unconventional ideas.",
            "11-20": "You exhibit a balanced approach to new experiences, appreciating both routine and the occasional departure from the familiar. You can adapt to change while maintaining a degree of traditionalism.",
            "21-30": "Your personality reflects an openness to novel ideas and experiences, alongside an appreciation for established practices. You strike a balance between creativity and practicality.",
            "31-40": "Your open-mindedness and curiosity are evident, as you actively seek out new experiences and ideas. You thrive in dynamic environments and enjoy exploring uncharted territory.",
            "41-50": "Your high openness underscores a profound appreciation for creativity, intellectual pursuits, and unconventional thinking. You find inspiration in a wide array of experiences and are drawn to pushing boundaries."
        },
        "Conscientiousness": {
            "1-10": "Your score suggests that you have a more relaxed attitude toward organization and planning. You might prefer flexibility and spontaneity over strict routines, and you may find it challenging to stick to long-term goals.",
            "11-20": "You display some relaxed tendencies, yet you can also demonstrate a degree of organization and responsibility when necessary. You strike a balance between structure and adaptability.",
            "21-30": "You maintain a balanced approach to organization and responsibility, effectively managing your tasks and goals. You can shift between focused, goal-oriented work and more flexible activities.",
            "31-40": "Your conscientious tendencies are noticeable, and you value structure, planning, and goal attainment. You tend to be reliable, detail-oriented, and committed to your tasks.",
            "41-50": "Your conscientiousness is a dominant trait, and you excel in planning, organization, and goal achievement. You take your responsibilities seriously and are known for your reliability."
        },
        "Extroversion": {
            "1-10": "Your score indicates that you tend to be more introverted, preferring solitary activities and introspection. You might find social interactions draining and may feel more comfortable in quieter, less stimulating environments.",
            "11-20": "You display some introverted tendencies, but you are also open to social interactions and may engage in them occasionally. You strike a balance between solitary pursuits and group activities.",
            "21-30": "You possess a healthy balance between introversion and extroversion, comfortably engaging in both solitary tasks and social interactions. You enjoy spending time with others but also value your personal space.",
            "31-40": "Your extroverted tendencies are noticeable, and you thrive in social settings. You are energized by interactions with others and enjoy being part of groups.",
            "41-50": "Your extroversion is a dominant trait, and you are naturally drawn to social interactions. You derive energy and excitement from engaging with others, often taking on leadership roles."
        },
        "Agreeableness": {
            "1-10": "Your score indicates that you prioritize individual goals and assertiveness over conforming to others' expectations. You may prefer direct communication and may not be as concerned with maintaining harmony in social interactions.",
            "11-20": "You display a balanced mix of assertiveness and cooperation. While you value your own needs, you are also considerate of others' perspectives and can adapt your communication style accordingly.",
            "21-30": "Your personality showcases a harmonious blend of assertiveness and empathy. You tend to seek compromise and find satisfaction in both individual accomplishments and collaborative efforts.",
            "31-40": "Your agreeable nature is evident in your interactions, and you excel at maintaining positive relationships. You value cooperation and may prioritize group cohesion over individual achievements.",
            "41-50": "Your high agreeableness is a standout trait, highlighting your commitment to harmony and cooperation. You excel at fostering positive environments and nurturing connections with others."
        },
        "Neuroticism": {
            "1-10": "Your score suggests that you have a strong emotional resilience and are adept at managing stress and negative emotions. You tend to stay calm under pressure and approach challenges with a composed demeanor. research, or law enforcement.",
            "11-20": "You exhibit a balanced approach to emotions, demonstrating an ability to handle stress while acknowledging emotional responses. You are capable of adapting to different situations with a steady outlook.nancial analysis could align well with your abilities.",
            "21-30": "Your emotional responses are generally balanced, with occasional fluctuations in response to stressors. You exhibit a healthy range of emotional expression and are capable of managing moderate stress. professions may resonate with your abilities.",
            "31-40": "You may experience heightened emotional responses in certain situations, indicating a sensitivity to stressors. However, you are also likely to possess effective coping mechanisms and can recover from setbacks.r roles in the helping professions could be avenues to explore.",
            "41-50": "Your emotional experiences tend to be intense, and you may face challenges in managing stress and negative emotions. However, your depth of emotional awareness can also lead to profound self-discovery and empathy for others. the performing arts could provide outlets for your emotional depth."
        }
    },
    "Learning Style": {
        "Visual": {
            "1-7": "You tend to learn more effectively through methods other than visual aids. You may find that auditory explanations, discussions, and hands-on experiences resonate better with you. Incorporating diverse learning strategies can enhance your overall learning experience.",
            "8-15": "While you have a mild preference for visual learning, you also benefit from various learning modes. Combining visual aids with verbal explanations and interactive activities can help you grasp and retain information more effectively.",
            "16-23": "You have a balanced approach to learning, valuing both visual aids and other methods. Visual materials like diagrams, charts, and videos complement your learning style well and enhance your understanding of concepts.",
            "24-30": "Visual learning is a powerful tool for you, and you thrive when presented with visual materials. Diagrams, graphs, and visual representations significantly contribute to your understanding and memory retention. Leveraging visual aids in your learning process can lead to exceptional results."
        },
        "Auditory": {
            "1-7": "If you have a low preference for auditory learning, it might be challenging to absorb information primarily through listening. You may find that visual aids, written materials, or hands-on experiences are more effective for your understanding. To improve your learning experience, consider engaging in discussions and asking questions during lectures to reinforce your comprehension. This way, you can supplement your auditory learning with other methods that resonate better with you.",
            "8-15": "With a mild preference for auditory learning, you have the flexibility to benefit from various learning modes. Your ability to actively participate in discussions and listen to explanations aligns well with your learning style. To optimize your learning, continue to engage in discussions and actively listen to lectures. Additionally, don’t hesitate to combine auditory learning with visual aids or interactive activities when necessary to enhance your overall comprehension and retention of information.",
            "16-23": "If you have a moderate preference for auditory learning, you maintain a balanced approach to learning by appreciating both auditory explanations and other methods. Your capacity to engage in productive discussions and actively listen to lectures is an asset. To further enhance your learning experience, utilize visual aids when appropriate to complement your auditory learning style and reinforce your understanding of complex concepts.",
            "24-30": "For those with a strong preference for auditory learning, spoken words and discussions are powerful tools for comprehension. You excel when information is presented through auditory means. To capitalize on this strength, continue participating in discussions, attending lectures, and seeking out audiobooks or podcasts for your studies. While auditory learning is your forte, it’s still beneficial to occasionally incorporate visual aids and hands-on experiences into your learning process to maintain a well-rounded and comprehensive approach to education."
        },
        "Kinesthetic": {
            "1-7": "You tend to learn more effectively through methods other than hands-on experiences. Visual aids, auditory explanations, and discussions may resonate better with you. Exploring a mix of learning approaches can enhance your overall learning journey.",
            "8-15": "While you have a mild preference for kinesthetic learning, you also benefit from diverse learning modes. Incorporating interactive activities, movement, and practical applications alongside visual and auditory elements can enhance your understanding.",
            "16-23": "You have a balanced approach to learning, valuing both hands-on experiences and other methods. Practical applications, experiments, and physical engagement support your learning style. Integrating kinesthetic methods with visual and auditory aids can lead to comprehensive understanding.",
            "24-30": "Kinesthetic learning is a dominant style for you, and you thrive when actively engaging with materials. Hands-on activities, role-playing, and real-life scenarios significantly contribute to your understanding and memory retention. Utilizing kinesthetic strategies can result in exceptional learning outcomes."
        }
    },
    "Leadership skills": {
        "Leadership": {
            "0-29": "Your leadership skills require substantial improvement. Your score indicates challenges in various fundamental areas of leadership, including communication, decision-making, and team dynamics. It’s crucial to seek opportunities for leadership development, receive guidance, and actively work on strengthening your abilities to effectively lead and inspire your team.",
            "30-49": "Your leadership skills are in the early stages of development. While you show potential, there’s a need for significant improvement in various aspects of leadership, such as communication, conflict resolution, and strategic thinking. Invest time in training, learning from experienced leaders, and practising your skills to progress to a more effective leadership level.",
            "50-69": "You’re on the right track, but there’s room for improvement in your leadership skills. While you display some effective leadership traits, some areas need attention, such as communication consistency and decision-making. Focus on developing your skills further, seeking mentorship and feedback to help you enhance your leadership abilities.",
            "70-84": "Well done! Your leadership skills are solid and reliable. You exhibit a good balance between guiding your team and fostering collaboration. There’s room for growth, but your communication and management abilities are effective in achieving team goals. Keep refining your leadership techniques to elevate your impact and ensure continued growth.",
            "85-100": "Congratulations! Your exceptional leadership skills are evident in your score. You consistently demonstrate strong communication, decision-making, and team-building abilities. Your approach inspires and motivates others to excel, creating a positive and productive work environment. Keep up the remarkable work and continue to be a role model for effective leadership."
        }
    },
    "Students Wheel of Life": {
        "Academic Competency": {
            "1-3": "Academic Competency: Struggling with understanding concepts.",
            "4-6": "Academic Competency: Average understanding, room to improve.",
            "7-8": "Academic Competency: Proficient understanding, active learning.",
            "9-10": "Academic Competency: Exceptional understanding, excelling."
        },
        "Health & Fitness": {
            "1-3": "Health & Fitness: Poor physical health, lack of exercise.",
            "4-6": "Health & Fitness: Inconsistent health habits, need better routine.",
            "7-8": "Health & Fitness: Healthy habits, balanced approach.",
            "9-10": "Health & Fitness: Optimal well-being, committed exercise."
        },
        "Social Friends": {
            "1-3": "Social Friends: Limited social interactions, few connections.",
            "4-6": "Social Friends: Some connections, expand social circle.",
            "7-8": "Social Friends: Active social interactions, and positive relationships.",
            "9-10": "Social Friends: Strong social network, meaningful connections."
        },
        "Discipline": {
            "1-3": "Discipline: Lack of self-control and organization.",
            "4-6": "Discipline: Moderate self-control, some organization.",
            "7-8": "Discipline: Good self-control, and effective organization.",
            "9-10": "Discipline: Excellent self-control, well-organized."
        },
        "Good Manners": {
            "1-3": "Good Manners: Frequent lapses in etiquette and politeness.",
            "4-6": "Good Manners: Mixed display of etiquette and politeness.",
            "7-8": "Good Manners: Consistently polite and well-mannered.",
            "9-10": "Good Manners: Exemplary etiquette and politeness."
        },
        "Spirituality": {
            "1-3": "Spirituality: Minimal engagement, lack of personal connection.",
            "4-6": "Spirituality: Some engagement, room for deeper connection.",
            "7-8": "Spirituality: Engaged in spiritual practices, finding meaning.",
            "9-10": "Spirituality: Deeply connected, meaningful engagement."
        },
        "Goal Orientation": {
            "1-3": "Goal Orientation: Undefined goals, lack of direction.",
            "4-6": "Goal Orientation: Some goals set, need clearer focus.",
            "7-8": "Goal Orientation: Clear goals, making progress.",
            "9-10": "Goal Orientation: Significant growth, clear and ambitious goals."
        },
        "Confidence": {
            "1-3": "Confidence: Low self-esteem, self-doubt.",
            "4-6": "Confidence: Some self-assurance, occasional doubts.",
            "7-8": "Confidence: Strong self-assurance, minimal self-doubt.",
            "9-10": "Confidence: High self-esteem, strong self-belief."
        },
        "Responsible": {
            "1-3": "Responsible: Inconsistent commitment to responsibilities.",
            "4-6": "Responsible: Meeting some commitments, improvement needed.",
            "7-8": "Responsible: Fulfilling responsibilities effectively.",
            "9-10": "Responsible: Highly accountable, proactive responsibility."
        },
        "Hobbies & Extracurriculars": {
            "1-3": "Hobbies & Extracurriculars: Limited engagement, lack of interests.",
            "4-6": "Hobbies & Extracurriculars: Engaging occasionally, explore more.",
            "7-8": "Hobbies & Extracurriculars: Active engagement in interests.",
            "9-10": "Hobbies & Extracurriculars: Fully engaged, pursuing passions."
        }
    },
    "Cyber Dependency": {
        "Cyber": {
            "0-20": "Your cyber dependency score is in the low range, indicating a strong ability to function independently of digital tools. You are self-reliant and can navigate various tasks without heavy reliance on technology. This suggests that you are well-prepared to handle situations with limited access to digital resources and can adapt easily to disruptions.",
            "21-40": "Your cyber dependency score is in the moderate-low range. While you are comfortable using digital technologies, you also have a reasonable level of self-sufficiency in non-digital tasks. This balanced approach allows you to adapt well to minor disruptions and maintain productivity even in situations where technology is not readily available.",
            "41-60": "Your cyber dependency score falls within the moderate range. You have a reasonable reliance on digital tools, which is beneficial in many aspects of modern life. Balancing this with offline skills can further enhance your ability to manage disruptions. Consider honing your proficiency in both digital and non-digital solutions for a well-rounded approach.",
            "61-80": "Your cyber dependency score is in the moderate-high range, indicating a significant dependence on digital resources. While this reliance has advantages, it’s important to diversify your skill set to include offline methods. This will help you maintain productivity during digital downtimes and minimize the impact of potential disruptions.",
            "81-100": "Your cyber dependency score is high, suggesting a heavy reliance on digital technologies for various tasks. While this is common in today’s interconnected world, it also exposes you to vulnerabilities in case of technological failures or cyber incidents. To enhance your resilience, focus on reducing your dependency, developing offline capabilities, and having contingency plans for digital disruptions."
        }
    },
    "Leadership Style": {
        "Authoritative": {
            "1-10": "Your ability to exhibit an authoritative leadership style within this range shows a foundation for growth. You might be in the early stages of developing this style, which can be advantageous when leading in situations that require clear direction and decisions. Continue honing your skills by further understanding the balance between assertiveness and collaboration, which are essential components of this leadership approach.",
            "11-20": "Your score in this range suggests that you’re making progress in adopting an authoritative leadership style. You demonstrate the potential to provide clear vision and direction to your team, fostering a sense of purpose and alignment. Keep refining your skills by actively engaging with your team, encouraging open communication, and remaining receptive to their input while still maintaining your position as a decision-maker.",
            "21-30": "With a score in this range, you exhibit a solid grasp of the authoritative leadership style. Your ability to set a clear direction, inspire your team, and make well-informed decisions is commendable. You likely foster an environment of respect and accountability, enabling your team members to thrive under your guidance. As you continue to refine your skills, focus on continuously fostering open dialogue while staying true to your role as a decisive leader.",
            "31-40": "Congratulations! Your high score within this range indicates a mastery of the authoritative leadership style. You excel at providing a clear vision, making confident decisions, and motivating your team to achieve exceptional results. Your balanced approach between being directive and open to feedback creates an atmosphere of trust and empowerment. Continue to serve as a role model for other leaders by consistently leading with purpose, empathy, and a strong sense of direction."
        },
        "Democratic": {
            "1-10": "You exhibit a foundational understanding of the principles of democratic leadership. Your willingness to involve team members in decision-making and value their input is commendable. By fostering an environment where ideas are freely exchanged, you set the stage for collaborative problem-solving and open communication.",
            "11-20": "Your score reflects an increasing level of proficiency in practising democratic leadership. You seem to grasp the significance of empowering your team by allowing them to participate in shaping decisions. This approach can lead to enhanced engagement and a sense of ownership among team members. Your efforts to consider various viewpoints and incorporate diverse perspectives are a testament to your commitment to inclusivity.",
            "21-30": "Your score in this range suggests a strong dedication to democratic leadership principles. Your ability to foster an environment of trust and mutual respect greatly benefits your team’s dynamics. By valuing team members’ expertise and involving them in decision-making, you create a sense of shared purpose. This can lead to increased creativity, better problem-solving, and a more cohesive team overall.",
            "31-40": "Congratulations on achieving the highest score range for the Democratic leadership style! Your commitment to empowering your team through democratic practices is exceptional. Your approach of actively seeking input, encouraging collaboration, and allowing team members to take ownership of their work demonstrates your strong leadership skills. This creates an atmosphere where everyone feels valued and motivated to contribute their best efforts, ultimately leading to higher productivity and job satisfaction."
        },
        "Facilitative": {
            "1-10": "Your score in this range indicates an opportunity for growth in the facilitative leadership style. You might be in the early stages of understanding the value of collaboration and empowerment. Embrace this as a chance to develop your skills in fostering open communication and involving team members in decision-making. By embracing a more inclusive approach, you can create a supportive and innovative work environment.",
            "11-20": "Within this range, you’re demonstrating progress in adopting a facilitative leadership style. Your ability to involve your team in decision-making and value their input is commendable. As you continue to develop, focus on refining your active listening skills and creating an environment where all voices are heard. By fostering an atmosphere of trust and inclusivity, you can inspire your team to collaborate effectively and contribute their best.",
            "21-30": "Your score within this range reflects a solid grasp of the facilitative leadership style. You’re effective at encouraging team participation, leveraging diverse perspectives, and making decisions collaboratively. This approach helps create a culture of ownership and engagement among your team members. Keep honing your skills by ensuring that discussions remain constructive and that everyone’s contributions are acknowledged and respected.",
            "31-40": "Congratulations! Your high score in this range signifies mastery of the facilitative leadership style. Your adeptness at facilitating group dynamics, fostering open dialogue, and collectively arriving at well-informed decisions is truly commendable. Your team likely experiences a high level of trust, and your leadership approach empowers them to take ownership of their work. Continue being an exemplar of facilitative leadership by consistently promoting collaboration, empathy, and mutual understanding."
        },
        "Situational": {
            "1-10": "Your score in this range presents an opportunity to explore and develop your understanding of the situational leadership style. This style involves adapting your leadership approach based on the specific needs of your team members and the situation at hand. As you further explore this style, focus on assessing your team members’ capabilities and adjusting your guidance accordingly. This approach will help you provide the right level of support and direction as they grow.",
            "11-20": "Within this range, you are demonstrating progress in embracing the situational leadership style. You recognize that different team members require different levels of guidance and support depending on their skills and experience. Continue refining your ability to assess the readiness of your team members and adapt your leadership approach accordingly. By doing so, you’ll empower each individual to reach their full potential and contribute effectively to the team’s success.",
            "21-30": "Your score in this range showcases a solid understanding of the situational leadership style. You’re skilled at gauging your team members’ readiness levels and adjusting your leadership behaviours to match. Your adaptive approach likely contributes to a productive and harmonious work environment. Keep honing your skills by maintaining open communication with your team members and regularly assessing their development needs to ensure their continuous growth.",
            "31-40": "Congratulations! Your high score within this range indicates mastery of the situational leadership style. Your ability to flexibly adapt your leadership behaviours based on individual and situational factors is commendable. You likely create an environment in which each team member feels supported and empowered to succeed. Continue to lead by example, fostering a culture of continuous learning and adaptation as you guide your team toward excellence."
        }
    },
    "Competitive State Anxiety Inventory": {
        "Cognitive Anxiety": {
            "0-9": "Congratulations! Your cognitive anxiety score falls within the low range, indicating that you generally have a strong ability to manage your worries and concerns. You likely approach challenges with a clear and focused mindset, allowing you to think more objectively and make sound decisions.",
            "10-18": "You’re in the mild cognitive anxiety range, which suggests that you sometimes experience mild worries and concerns that might temporarily affect your thought processes. This is a common experience, and it’s important to acknowledge that occasional anxious thoughts are a normal part of life. By recognizing these thoughts and practicing relaxation techniques, you can continue to build your resilience and maintain a balanced perspective.",
            "19-27": "Your cognitive anxiety score falls within the moderate range, indicating that you might experience a noticeable level of anxious thoughts and concerns. It’s important to remember that anxiety is a common emotion, and many individuals face similar challenges. Consider exploring mindfulness techniques, deep breathing exercises, and cognitive-behavioral strategies to manage and redirect your anxious thoughts, allowing you to regain a greater sense of control over your thinking patterns.",
            "28-36": "Your cognitive anxiety score is in the high range, which suggests that you might frequently experience intense anxious thoughts and worries. It’s important to recognize that seeking support is a sign of strength, and there are various resources available to help you manage your anxiety. Consider reaching out to a mental health professional, practicing relaxation techniques, and engaging in activities that bring you joy and a sense of accomplishment. With proper strategies and support, you can learn to navigate your anxious thoughts more effectively."
        },
        "Somatic Anxiety": {
            "0-9": "Your score falls within the low range for somatic anxiety. This suggests that you experience minimal physical symptoms associated with anxiety. You likely have a good handle on managing stress, which is great for your overall well-being. Your ability to keep your body relaxed in stressful situations indicates a strong level of emotional resilience.",
            "10-18": "Your score indicates mild somatic anxiety. While you might experience some physical symptoms in response to stress or anxiety, your ability to cope and manage these sensations is admirable. Remember that these bodily sensations are natural reactions, and your capacity to navigate them suggests that you possess valuable skills for maintaining a balanced approach to stress.",
            "19-27": "Your score falls within the moderate range for somatic anxiety. This suggests that you might experience noticeable physical symptoms when facing stressors or anxiety-provoking situations. While these sensations can be uncomfortable, they are signals from your body. Your awareness of these symptoms is a crucial step toward effectively managing your anxiety. Consider exploring relaxation techniques or stress-reduction strategies to further enhance your well-being.",
            "28-36": "Your score indicates high somatic anxiety. You may experience significant physical symptoms when confronted with stress or anxiety. While this can be challenging, it’s important to recognize that you are taking the first step toward understanding and addressing these symptoms. Seeking support from friends, family, or professionals can provide you with strategies to manage and alleviate these sensations. Your commitment to your well-being is commendable."
        },
        "Self-Confidence": {
            "0-9": "Very Low Self-Confidence: You have the potential to build greater self-confidence. Remember, every step you take towards believing in yourself will lead to personal growth and increased resilience. Start acknowledging your achievements, no matter how small, and watch your confidence grow.",
            "10-18": "Low Self-Confidence: You’re already taking steps towards building your self-confidence. Embrace your strengths and achievements, and work on challenging negative self-talk. Each step you take towards believing in yourself is a step towards a more confident and empowered you.",
            "19-27": "Moderate Self-Confidence: You’re well on your way to building strong self-confidence. You have a good understanding of your abilities and areas you can grow in. Keep nurturing your strengths, setting achievable goals, and celebrating your successes. Your self-assured attitude will continue to serve you well.",
            "28-36": "High Self-Confidence: Congratulations on your high self-confidence! Your self-assured attitude and belief in yourself are powerful assets. Continue to tackle challenges with your optimistic outlook and embrace new opportunities. Remember, your confidence not only influences your actions but also inspires those around you."
        }
    },
    "Left Brain Dominance": {
        "Analytical Thinking": {
            "1-3": "Analytical Thinking: Minimal logical problem-solving ability.",
            "4-6": "Analytical Thinking: Some logical problem-solving skills.",
            "7-8": "Analytical Thinking: Strong logical problem-solving abilities.",
            "9-10": "Analytical Thinking: Exceptional logical problem-solving skills."
        },
        "Language Skills": {
            "1-3": "Language Skills: Difficulty with verbal communication and grammar.",
            "4-6": "Language Skills: Adequate verbal communication and grammar.",
            "7-8": "Language Skills: Proficient verbal communication and grammar.",
            "9-10": "Language Skills: Advanced verbal communication and grammar."
        },
        "Math and Logic": {
            "1-3": "Math and Logic: Struggles with numbers and reasoning.",
            "4-6": "Math and Logic: Basic comfort with numbers and reasoning.",
            "7-8": "Math and Logic: Comfortable with numbers and reasoning.",
            "9-10": "Math and Logic: Highly skilled with numbers and reasoning."
        },
        "Structured Planning": {
            "1-3": "Structured Planning: Challenges in organizing tasks and goals.",
            "4-6": "Structured Planning: Can organize tasks and set goals.",
            "7-8": "Structured Planning: Effectively organizes tasks and goals.",
            "9-10": "Structured Planning: Expertly organizes tasks and goals."
        },
        "Sequential Processing": {
            "1-3": "Sequential Processing: Difficulty following linear sequences.",
            "4-6": "Sequential Processing: Follows linear sequences with effort.",
            "7-8": "Sequential Processing: Easily follows linear sequences.",
            "9-10": "Sequential Processing: Seamlessly follows linear sequences."
        }
    },
    "Right Brain Dominance": {
        "Creativity": {
            "1-3": "Creativity: Minimal capacity for imaginative thinking.",
            "4-6": "Creativity: Some ability for imaginative and original thinking.",
            "7-8": "Creativity: Strong capacity for imaginative and original thinking.",
            "9-10": "Creativity: Exceptional ability for imaginative and original thinking."
        },
        "Visual Perception": {
            "1-3": "Visual Perception: Difficulty noticing shapes and colors.",
            "4-6": "Visual Perception: Adequate sensitivity to shapes and colors.",
            "7-8": "Visual Perception: Proficient in noticing shapes and colors.",
            "9-10": "Visual Perception: Highly skilled in noticing shapes and colors."
        },
        "Intuition": {
            "1-3": "Intuition: Struggles to rely on instincts or gut feelings.",
            "4-6": "Intuition: Beginning to rely on instincts and hunches.",
            "7-8": "Intuition: Comfortable relying on instincts and gut feelings.",
            "9-10": "Intuition: Highly intuitive, relies on instincts effectively."
        },
        "Holistic Thinking": {
            "1-3": "Holistic Thinking: Trouble seeing the big picture and making connections.",
            "4-6": "Holistic Thinking: Can grasp the bigger picture and make connections.",
            "7-8": "Holistic Thinking: Easily sees the big picture and makes connections.",
            "9-10": "Holistic Thinking: Masters the bigger picture and makes intricate connections."
        },
        "Artistic Abilities": {
            "1-3": "Artistic Abilities: Challenges in artistic expression.",
            "4-6": "Artistic Abilities: Basic skills in artistic expression.",
            "7-8": "Artistic Abilities: Proficient artistic expression.",
            "9-10": "Artistic Abilities: Exceptional skills in artistic expression."
        }
    }
} as const;


export const carreerSuggestions: FeedbackData = {
    "Personality": {
        "Openness": {
            "1-10": "Roles that involve structured tasks, attention to detail, and established procedures such as accounting, administration, data analysis, or quality control.",
            "11-20": "Consider roles that require a mix of analytical thinking and creativity. Project management, technical writing, research analysis, or financial planning could align well with your abilities.",
            "21-30": "Look for roles that encourage problem-solving, innovation, and diverse perspectives. Marketing, design, education, or roles in technology could be avenues for your talents.",
            "31-40": "Pursue roles that emphasize creativity, exploration, and the generation of new ideas. Entrepreneurship, research, creative arts, or roles in emerging technologies may resonate with your disposition.",
            "41-50": "Seek roles that encourage innovation, abstract thinking, and interdisciplinary collaboration. Writing, artistic endeavors, academia, or roles in cutting-edge fields could provide avenues for your passions."
        },
        "Conscientiousness": {
            "1-10": "Roles that allow for creative expression, flexible schedules, and minimal routine could be appealing. Consider careers in the arts, entrepreneurship, entertainment, or freelancing.",
            "11-20": "You might excel in roles that require a mix of creativity and reliability. Look into careers such as marketing, project management, consulting, or event planning.",
            "21-30": "Consider roles that involve a mix of planning, execution, and adaptability. Project management, administrative roles, data analysis, or research positions could be suitable.",
            "31-40": "Pursue roles that require precision, organization, and meticulousness. Accounting, quality control, data management, or executive assistance could be well-aligned with your personality.",
            "41-50": "Seek roles that demand meticulous attention to detail, project management skills, and consistent follow-through. Consider careers in finance, operations management, research, or regulatory compliance."
        },
        "Extroversion": {
            "1-10": "Roles that require deep analysis, creativity, and independent work such as writing, research, programming, graphic design, or artistry.",
            "11-20": "A wide range of options is available to you, including roles that involve both independent work and occasional collaboration. Examples include teaching, accounting, project management, or technical support.",
            "21-30": "Your versatility opens doors to various career paths. Consider roles that involve teamwork, client interaction, and balanced work environments. Sales, marketing, human resources, or event planning could be suitable options.",
            "31-40": "Pursue roles that involve frequent interaction with people, leadership, and dynamic environments. Public relations, customer service, teaching, or counseling may align well with your personality.",
            "41-50": "Seek roles that require extensive networking, public speaking, and leading groups. Sales management, event coordination, public speaking, or entrepreneurship could be highly fulfilling paths for you."
        },
        "Agreeableness": {
            "1-10": "Roles that require decisive decision-making, negotiation, and analytical thinking, such as entrepreneurship, law, research, or engineering.",
            "11-20": "Consider roles that involve problem-solving, project management, and coordination where you can utilize your ability to navigate different viewpoints. Consulting, project management, logistics, or data analysis could be suitable paths.",
            "21-30": "Look for roles that involve teamwork, customer service, and relationship-building. Social work, human resources, teaching, or client-facing positions align well with your strengths.",
            "31-40": "Pursue roles that involve mentoring, coaching, or community engagement. Nonprofit work, counseling, healthcare, or teaching may be fulfilling avenues for you.",
            "41-50": "Seek roles where interpersonal skills are paramount. Humanitarian work, social services, counseling, or leadership positions that require team building and conflict resolution could be well-suited to your personality."
        },
        "Neuroticism": {
            "1-10": "Roles that require composure, crisis management, and analytical thinking such as emergency services, project management, scientific research, or law enforcement.",
            "11-20": "Consider roles that involve problem-solving, conflict resolution, and adaptability. Consulting, marketing, information technology, or financial analysis could align well with your abilities.",
            "21-30": "Look for roles that value emotional intelligence, teamwork, and interpersonal dynamics. Human resources, counseling, teaching, or creative professions may resonate with your abilities.",
            "31-40": "Pursue roles that encourage personal growth, creative expression, and communication. Writing, artistic pursuits, counseling, or roles in the helping professions could be avenues to explore.",
            "41-50": "Seek roles that center around emotional support, creativity, and individual growth. Therapy, art therapy, social work, or roles in the performing arts could provide outlets for your emotional depth."
        }
    },
    "Aptitude": {
        "Linguistic": {
            "1-4": "Consider roles that involve basic communication skills, such as data entry, administrative support, or entry-level customer service. These roles can provide a foundation for further skill development and growth.",
            "5-8": "Explore roles that require clear communication and organizational skills, such as office management, content coordination, or junior marketing positions. These roles can help you build on your current strengths and develop your communication skills.",
            "9-12": "Consider careers in fields that involve written communication, research, or analysis. Roles in marketing, content creation, research assistance, or technical writing could be a great fit, as they require effective communication and critical thinking.",
            "13-16": "Pursue roles that involve advanced communication and critical thinking. Careers in public relations, copywriting, journalism, or research analysis could be a natural fit for your skills and interests.",
            "17-20": "Your exceptional verbal reasoning skills position you for roles that require high-level communication, strategic thinking, and leadership. Consider careers in law, academia, content strategy, or public speaking, where your ability to convey complex ideas is highly valuable."
        },
        "Numerical": {
            "1-4": "Consider roles that require basic numeracy skills, such as data entry, administrative support, or entry-level positions in customer service. These roles can provide a foundation for further skill development and growth.",
            "5-8": "Explore roles that involve managing basic numerical data and calculations, such as inventory control, administrative roles, or positions in retail. Enhancing your numeracy skills will support your success in these roles.",
            "9-12": "Consider roles that involve financial analysis, data entry, or junior positions in accounting. Pursue opportunities in administrative or office management roles where your numerical skills are valuable.",
            "13-16": "Pursue careers in fields that require analytical thinking and problem-solving, such as financial analysis, market research, or junior roles in engineering or science. Your skills can also be beneficial in roles that involve data analysis.",
            "17-20": "Your exceptional numerical reasoning skills position you for roles that involve advanced data analysis, financial modeling, and statistical analysis. Consider careers in finance, data science, engineering, or research where your numerical skills will be highly valued."
        },
        "Mechanical": {
            "1-4": "Consider roles that involve basic mechanical tasks, such as assembly line work, equipment operation, or assistant positions in maintenance. These roles can provide hands-on experience and opportunities for skill development.",
            "5-8": "Explore roles that require mechanical aptitude, such as machine operator, technician assistant, or entry-level positions in manufacturing or maintenance. These roles can help you further develop your skills.",
            "9-12": "Consider careers that involve technical tasks and problem-solving, such as mechanical technician, quality control inspector, or junior positions in engineering. These roles will allow you to apply and enhance your mechanical skills.",
            "13-16": "Pursue roles that require higher-level mechanical thinking, such as machine maintenance technician, engineering technician, or roles in the automotive industry. Your skills can be valuable in industries that require technical expertise.",
            "17-20": "Your exceptional mechanical reasoning skills open doors to careers in engineering, technical design, robotics, or advanced positions in maintenance and manufacturing. Consider roles that require in-depth understanding and application of mechanical principles."
        },
        "Abstract": {
            "1-4": "Focus on enhancing your visual thinking, pattern recognition, and problem-solving abilities. Engaging in activities like puzzles, spatial reasoning games, and creative arts can help you gradually develop your abstract reasoning skills. Entry-level positions in fields like data entry, administrative support, or basic technical roles could be a starting point.",
            "5-8": "Consider roles that require attention to detail and some analytical thinking, such as quality control, data analysis, or technical support. These roles demand the ability to identify patterns and make informed decisions based on available information.",
            "9-12": "With your improved abstract reasoning skills, you might excel in roles that involve problem-solving, data analysis, and creativity. Consider careers in graphic design, market research, data visualization, or entry-level programming, where your ability to think critically and creatively is valuable.",
            "13-16": "Leverage your well-developed abstract reasoning skills in roles that require strategic thinking and creative problem-solving. Consider pursuing careers in fields like architecture, engineering, user experience design, or data analysis, where your ability to analyze patterns and devise innovative solutions is highly valued.",
            "17-20": "Your exceptional abstract reasoning skills position you well for roles that involve advanced problem-solving, strategic planning, and innovation. Consider careers in research and development, advanced engineering, mathematics, or positions that require high-level analytical thinking and creativity."
        },
        "Spatial": {
            "1-4": "Consider roles that require basic spatial skills, such as assembly line work, basic drafting, or introductory positions in fields like architecture and design. These roles can provide a foundation for further skill development.",
            "5-8": "Explore opportunities in areas that involve basic spatial understanding, such as construction, interior design, or roles in fields like landscaping and event planning. Your improved skills will be valuable in these roles.",
            "9-12": "Consider roles that involve more advanced spatial thinking, such as mechanical drafting, technical illustration, or junior positions in engineering. Pursue opportunities in design-related fields where your spatial skills will be highly useful.",
            "13-16": "Pursue careers that require strong spatial abilities, such as architectural design, 3D modeling, or junior roles in fields like aerospace engineering. Explore opportunities in industries where visualizing and designing in three dimensions is crucial.",
            "17-20": "Your outstanding spatial reasoning skills make you a strong candidate for roles that involve advanced 3D modeling, computer-aided design (CAD), architecture, and virtual reality design. Consider careers in creative industries where spatial visualization is key."
        },
        "Logical": {
            "1-4": "Start by focusing on roles that require basic problem-solving skills, such as administrative or entry-level positions in various industries. Building a strong foundation in logical thinking will serve as a stepping stone for future growth.",
            "5-8": "Consider roles that involve routine decision-making and problem-solving, such as data entry, customer service, or junior positions in fields like sales or operations. Continue developing your logical reasoning abilities to move forward.",
            "9-12": "Explore roles that require critical thinking and problem-solving skills, such as research assistants, quality control analysts, or junior analysts in finance or marketing. Your ability to analyze information will be valuable in these roles.",
            "13-16": "Consider roles that involve data analysis, programming, or quality assurance. Careers in fields like computer programming, systems analysis, or scientific research could be a good fit, as they require strong logical thinking and analytical skills.",
            "17-20": "Pursue careers that involve complex problem-solving, strategic planning, and decision-making. Fields like data science, software engineering, management consulting, or legal analysis could greatly benefit from your exceptional logical reasoning skills."
        }
    },
    "Multiple Intelligence": {
        "Linguistic": {
            "1-10": "• Content Creator: Start a blog, YouTube channel, or social media account where you can gradually improve your language skills by creating content. \n • Editorial Assistant: Work as an entry-level editorial assistant to gain practical experience in proofreading and basic editing. \n • Copywriter: Explore entry-level copywriting positions that involve crafting short, persuasive texts.",
            "11-20": "• Content Writer: Consider working as a content writer, where you can continue to refine your writing skills while producing informative articles and blog posts. \n • Social Media Manager: Manage social media accounts for businesses to practice concise and effective communication. \n • Freelance Writer: Begin freelancing as a writer to gain exposure to various writing styles and topics.",
            "21-30": "• Journalist: Pursue a career in journalism, reporting on various topics and using your strong language skills to convey information accurately. \n • Public Relations Specialist: Work in PR, where effective communication is essential for building and maintaining a positive image for clients. \n • Author: Consider writing novels, non-fiction books, or essays, leveraging your strong proficiency in language to engage readers.",
            "31-40": "• Linguist: Explore a career in linguistics, where your exceptional language mastery can be applied to study, analyze, and document languages. \n • Professor/Teacher: Consider becoming a professor or teacher in language-related subjects, sharing your knowledge and expertise with others. \n • Diplomat/Translator: Pursue diplomatic roles or become a professional translator, using your exceptional language skills to bridge communication gaps between cultures and languages. \n • Novelist/Poet: Write novels, poetry, or literary works at the highest level of creativity and sophistication, showcasing your mastery of language.• Speechwriter: Work as a speechwriter for politicians, executives, or public figures, crafting compelling speeches that resonate with audiences."
        },
        "Logical": {
            "1-10": "• Data Entry Specialist: Begin with a role that requires basic data analysis and entry, where you can build your foundational skills in handling numerical information. \n • Accounting Clerk: This role involves basic mathematics and bookkeeping, helping you improve your mathematical proficiency over time. \n • Administrative Assistant: Handling schedules, appointments, and basic problem-solving can be a suitable starting point to enhance your logical abilities.",
            "11-20": "• Junior Data Analyst: Start working with data sets, learning data analysis tools, and strengthening your logical thinking through data interpretation. \n • IT Support Specialist: Troubleshooting computer issues and understanding system logic can further develop your logical and problem-solving skills. \n • Quality Assurance Tester: Testing software for bugs and inconsistencies requires attention to detail and logical thinking.",
            "21-30": "• Data Scientist: Dive into complex data analysis, predictive modeling, and machine learning to leverage your strong analytical skills. \n • Software Developer: Create innovative software solutions by applying your logical abilities to design and code complex algorithms. \n • Financial Analyst: Analyze financial data, forecast trends, and provide strategic insights based on your strong mathematical proficiency. \n • Operations Research Analyst: Optimize processes, make data-driven decisions, and solve complex logistical problems in various industries.",
            "31-40": "• Mathematician: Conduct advanced mathematical research, develop mathematical theories, and contribute to solving complex real-world problems. \n • Theoretical Physicist: Explore the fundamental laws of the universe, formulate new theories, and conduct groundbreaking research. \n • Cryptographer: Work on securing data and communications systems, utilizing your mastery of mathematical algorithms and encryption techniques. \n • Quantum Computing Scientist: Push the boundaries of computing by working on quantum algorithms and applications in a rapidly evolving field. \n • Artificial Intelligence Researcher: Lead in the development of AI systems, machine learning algorithms, and deep learning models, using your exceptional logical and mathematical intelligence."
        },
        "Spatial": {
            "1-10": "• Architectural Drafter: Entry-level positions that involve creating technical drawings and plans for buildings and structures. \n • Graphic Design Assistant: Assist graphic designers with basic design tasks, such as layout and image editing. \n • Cartographic Technician: Work on basic map creation and GIS data entry tasks.",
            "11-20": "• Graphic Designer: Further develop your graphic design skills to create visual content for various media. \n • Interior Designer: Begin working on interior design projects, focusing on spatial layouts and aesthetics. \n • Photographer: Hone your photography skills, capturing and editing images with a strong visual sense. \n • Video Editor: Explore video editing to enhance your ability to manipulate visual content. \n • Landscape Designer: Work on landscape design projects, utilizing your spatial awareness for outdoor spaces.",
            "21-30": "• Architect: Pursue a career in architecture, where you can design buildings and spaces. \n • Industrial Designer: Use your strong visual and spatial skills to create innovative product designs. \n • Virtual Reality Developer: Enter the world of VR development, creating immersive digital environments. \n • Cartographer: Become a professional mapmaker, specializing in spatial representation. \n • Civil Engineer: Apply your spatial intelligence to design and analyze infrastructure projects.",
            "31-40": "• Architectural Visualization Specialist: Focus on creating highly detailed architectural renderings and visualizations. \n • Industrial Design Manager: Lead teams in designing complex products, leveraging your exceptional skills. \n • Fine Artist: Pursue a career as a professional artist, creating visually stunning works of art. \n • 3D Modeler/Animator: Work on advanced 3D modeling and animation projects for films or games. \n • Scientific Visualization Specialist: Apply your skills to visualize complex scientific data for research and communication."
        },
        "Musical": {
            "1-10": "• Music Appreciation Educator: Share your love for music with others by teaching the basics of music appreciation. \n • Music Blogger/Reviewer: Write about your experiences and insights on music, helping others discover new artists and genres. \n • Music Event Organizer: Organize small-scale music events, gatherings, or open mic nights in your community.",
            "11-20": "• Music Teacher (Beginner Levels): Teach beginners to play musical instruments or provide introductory music theory lessons. \n • Session Musician: Collaborate with local musicians or bands, contributing your growing musical skills to live performances or recordings. \n • Music Therapist Assistant: Support certified music therapists in using music to help individuals with various needs, such as emotional expression or rehabilitation.",
            "21-30": "• Professional Musician: Pursue a career as a solo artist or join a band as a musician or vocalist. \n • Music Teacher (Intermediate/Advanced Levels): Teach more advanced music techniques to students in your chosen instrument or vocal training. \n • Music Producer: Learn the ropes of music production and studio recording, working with artists to create and refine their music.",
            "31-40": "• Composer/Arranger: Create original compositions or arrange music for orchestras, ensembles, or films. \n • Music Conductor: Lead orchestras or choirs, interpreting and directing complex musical compositions. \n • Professional Musician (Solo Artist or Orchestra Member): Pursue a solo career as a renowned musician or join prestigious orchestras."
        },
        "Naturalistic": {
            "1-10": "• Nature Photographer: Develop your photography skills while immersing yourself in nature, capturing its beauty, and raising awareness about environmental issues. \n • Park Ranger Assistant: Work in a national or state park, assisting park rangers with tasks related to wildlife protection and visitor education. \n • Botanical Garden Intern: Gain hands-on experience by working in a botanical garden, learning about various plant species and their care.",
            "11-20": "• Environmental Educator: Teach others about the importance of nature and conservation through educational programs and workshops. \n • Wildlife Technician: Assist in research projects focused on studying and preserving wildlife in their natural habitats. \n • Park Naturalist: Work in parks and nature reserves, leading guided tours and educating visitors about local ecosystems and wildlife.",
            "21-30": "• Ecologist: Conduct research on ecosystems, species interactions, and environmental changes to contribute to conservation efforts. \n • Environmental Educator: Lead workshops, design educational materials, and inspire others to take action for the environment. \n • Park Manager: Oversee the management and conservation of natural areas, ensuring their sustainability and educational value.",
            "31-40": "• Botanist: Study plants and their ecosystems in detail, contributing to plant conservation and biodiversity efforts. \n • Wildlife Biologist: Research and protect wildlife species, habitats, and ecosystems, often working with government agencies or conservation organizations. \n • Environmental Consultant: Offer expertise in environmental impact assessments, helping businesses and organizations make sustainable choices. \ \n • Ecological Researcher: Conduct in-depth research on complex ecological systems, making critical contributions to our understanding of the natural world."
        },
        "Kinesthetic": {
            "1-10": "• Fitness Trainer/Instructor: Start a career as a fitness trainer or instructor to help others improve their physical abilities and coordination. \n • Yoga Instructor: Become a yoga instructor and guide individuals in enhancing their body awareness and flexibility. \n • Recreational Sports Coach: Coach recreational sports teams to nurture basic physical skills in participants. \n • Dance Enthusiast: Explore dance classes or clubs to develop your dance skills and share your passion with others.",
            "11-20": "• Physical Therapist Assistant: Consider becoming a physical therapist assistant to assist in rehabilitating patients and improving their physical capabilities. \n • Martial Arts Instructor: Develop expertise in martial arts and instruct others in self-defense and discipline. \n • Circus Arts Performer: Explore circus arts like acrobatics or aerial skills as a unique way to further develop your physical abilities. \n • Parkour Instructor: If you enjoy urban movement and agility, become a parkour instructor to teach others the art of efficient movement.",
            "21-30": "• Professional Athlete: Pursue a career in professional sports, where your strong kinesthetic intelligence can excel in a competitive environment. \n • Professional Dancer: Consider becoming a professional dancer, specializing in a specific dance style like ballet, hip-hop, or contemporary. \n • Physical Education Teacher: Use your skills to educate and inspire students as a physical education teacher in schools. \n • Choreographer: Develop intricate dance routines or movement sequences as a choreographer in the entertainment industry.",
            "31-40": "• Olympic Athlete: With your exceptional mastery, aim for Olympic-leve \n competition in sports where your skills shine. \n • Cirque du Soleil Performer: Audition for Cirque du Soleil or similar high-level performance troupes that demand extraordinary physical prowess. \n • Physical Therapy Specialist: Become a specialist in a specific area of physical therapy, working with elite athletes or patients with complex needs. \n • Stunt Performer: Explore a career as a stunt performer in the film and television industry, executing daring physical feats."
        },
        "Intrapersonal": {
            "1-10": "• Self-Help Writer: Share your journey of self-discovery and personal growth to inspire others. \n • Administrative Assistant: Use organizational skills to support others while continuing to develop your self-awareness. \n • Receptionist: Enhance your communication skills and interact with various people daily, promoting self-awareness through social interaction.",
            "11-20": "• Human Resources Specialist: Apply your growing self-awareness to help others in their professional development and conflict resolution. \n • Life Coach: Use your improving self-understanding to guide individuals in achieving their personal and career goals. \n • Career Counselor: Assist others in discovering their strengths and interests based on your evolving self-awareness.",
            "21-30": "• Psychologist: Utilize your strong self-awareness to provide therapy and counseling to individuals seeking personal growth and healing. \n • Leadership Coach: Help leaders enhance their effectiveness by drawing on your understanding of human behavior and motivation. \n • Motivational Speaker: Share your journey and insights to inspire and motivate others in various aspects of life.",
            "31-40": "• Psychotherapist: Offer in-depth therapy and support to individuals dealing with complex emotional issues. \n • Creative Director: Use your exceptional self-mastery to lead and inspire creative teams in fields like advertising, design, or filmmaking. \n • Spiritual Guide: Guide individuals in their spiritual and personal development journeys, drawing on your profound self-awareness."
        },
        "Interpersonal": {
            "1-10": "• Customer Service Representative: You can enhance your skills by interacting with customers and addressing their needs effectively. \n • Team Coordinator: Start by taking on roles where you facilitate group projects and help team members collaborate more efficiently. \n • Entry-Level Management: Begin building your leadership skills by overseeing small teams or projects.",
            "11-20": "• Human Resources Specialist: Your ability to understand and relate to employees can make you an asset in HR roles. \n • Counselor or Therapist: Develop your empathy and active listening skills further to support individuals in their personal challenges. \n • Sales Representative: Building rapport is crucial in sales, and your competence in interpersonal skills can help you succeed. \n • Middle Management: Continue to grow your skills to become an effective middle manager who fosters teamwork and collaboration within a department.",
            "21-30": "• Leadership Positions: Your strong interpersonal skills make you an ideal candidate for roles such as team leader, supervisor, or department manager. \n • Coach or Mentor: Help individuals and teams reach their full potential by offering guidance and support. \n • Counselor or Therapist: Consider specializing in areas such as marriage and family therapy, addiction counseling, or career counseling. \n • Community Organizer: Your ability to connect with people can be valuable in bringing communities together for a common cause.",
            "31-40": "• Psychologist: Utilize your exceptional interpersonal skills to help individuals and groups address mental and emotional challenges. \n • Executive Leadership: As a top-level executive, you can lead organizations to success by fostering a positive and collaborative work environment. \n • Diplomat: Represent your country's interests and build international relationships as a diplomat. \n • Leadership Coach: Help executives and leaders improve their interpersonal and leadership skills. \n • Mentorship Programs: Establish mentorship programs within organizations or communities to empower others with your expertise."
        }
    }
}

export const personalityType: FeedbackData = {
    "Personality": {
        "Openness": {
          "1-10": "Possible Personality Type: Conventional, Practical, Routine-Oriented",
          "11-20": "Possible Personality Type: Balanced, Adaptable, Practical Visionary",
          "21-30": "Possible Personality Type: Inquisitive, Versatile, Adaptive",
          "31-40": "Possible Personality Type: Curious, Imaginative, Innovative",
          "41-50": "Possible Personality Type: Creative, Visionary, Intellectual Explorer"
        },
        "Conscientiousness": {
          "1-10": "Possible Personality Type: Unstructured, Free-Spirited, Creative",
          "11-20": "Possible Personality Type: Flexible, Adaptable, Laid-Back Achiever",
          "21-30": "Possible Personality Type: Balanced, Diligent, Methodical",
          "31-40": "Possible Personality Type: Dependable, Detail-Focused, Goal-Driven",
          "41-50": "Possible Personality Type: Methodical, Disciplined, Achievement-Oriented"
        },
        "Extroversion": {
          "1-10": "Possible Personality Type: Introverted, Reflective, Thoughtful",
          "11-20": "Possible Personality Type: Balanced, Adaptable, Reserved-Extrovert",
          "21-30": "Possible Personality Type: Ambivert, Socially Versatile, Team Player",
          "31-40": "Possible Personality Type: Outgoing, Sociable, Energetic",
          "41-50": "Possible Personality Type: Extroverted, Enthusiastic, Charismatic"
        },
        "Agreeableness": {
          "1-10": "Possible Personality Type: Independent, Assertive, Objective",
          "11-20": "Possible Personality Type: Pragmatic, Diplomatic, Balanced",
          "21-30": "Possible Personality Type: Empathetic, Flexible, Collaborative",
          "31-40": "Possible Personality Type: Cooperative, Supportive, Amiable",
          "41-50": "Possible Personality Type: Compassionate, Empathic, Harmonious"
        },
        "Neuroticism": {
          "1-10": "Possible Personality Type: Resilient, Calm, Emotionally Stable",
          "11-20": "Possible Personality Type: Balanced, Adaptable, Realistic",
          "21-30": "Possible Personality Type: Stable, Flexible, Self-Aware",
          "31-40": "Possible Personality Type: Sensitive, Reflective, Resilient Learner",
          "41-50": "Possible Personality Type: Emotional, Empathetic, Introspective"
        }
    }
}
