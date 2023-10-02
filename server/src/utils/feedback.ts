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
    "Study Skills Set Profile": {
        "Time Management and Procrastination": {
            "1-10": "Your current time management and procrastination strategies may benefit from significant improvement. Consider exploring effective techniques and resources to enhance your productivity and overcome procrastination tendencies.",
            "11-20": "You are making progress in your journey to conquer procrastination and manage your time effectively. Keep refining your skills and adopting valuable strategies to elevate your productivity and focus further.",
            "21-30": "Your efforts in time management and combating procrastination are commendable. Continue to fine-tune your approach and leverage proven methods to optimize your productivity and minimize procrastination challenges.",
            "31-40": "Your mastery of time management and triumph over procrastination are remarkable. Your disciplined approach and effective strategies are yielding impressive results. Keep up the exceptional work as you enjoy heightened productivity and focus in your endeavours."
        },
        "Concentration and Memory": {
            "1-10": "Your current score suggests there is ample room for improvement in terms of concentration and memory. Focusing on dedicated techniques and strategies can help you enhance these cognitive skills and boost your overall learning experience.",
            "11-20": "You are demonstrating effort in cultivating better concentration and memory skills. By exploring targeted methods and consistent practice, you can further elevate your abilities and elevate your capacity to retain and recall information.",
            "21-30": "Your concentration and memory skills are in a commendable range, indicating a solid foundation. Building upon this foundation with advanced techniques and continued practice will empower you to reach even higher levels of cognitive efficiency.",
            "31-40": "Congratulations, your exceptional score reflects a strong command over concentration and memory. Your diligent efforts have paid off, enabling you to excel in absorbing and retaining information. Continue fine-tuning your skills to maximize your cognitive potential and achieve remarkable academic and personal growth."
        },
        "Study Aids and Note-Taking": {
            "1-10": "Your score indicates room for improvement in terms of effective study aids and note-taking strategies. Exploring various techniques and incorporating them into your routine can significantly enhance your learning process.",
            "11-20": "You are making efforts to implement study aids and note-taking practices. By refining these skills and consistently utilizing them, you can enhance your ability to absorb and retain information more efficiently.",
            "21-30": "Your score suggests a solid foundation in study aids and note-taking. Continue to develop and fine-tune these strategies to further streamline your learning process and increase your understanding of the material.",
            "31-40": "Congratulations on your impressive score, which reflects your adeptness in utilizing study aids and note-taking effectively. Your dedicated efforts are paying off, enabling you to excel in comprehending and retaining information. Keep refining your techniques to reach new heights of academic success."
        },
        "Test Strategies and Test Anxiety": {
            "1-10": "Opportunities exist for developing effective test strategies and managing test anxiety. Embrace targeted techniques and resources to build your confidence and refine your approach to exams.",
            "11-20": "You're making strides in improving your test strategies and coping with test anxiety. Further exploration and practice will help solidify your skills, enabling you to approach exams with increased assurance.",
            "21-30": "Your commitment to mastering test strategies and managing test anxiety is evident. Continue to refine your techniques through consistent effort and utilize resources to achieve optimal results in exams.",
            "31-40": "Impressive proficiency in test strategies and adeptly handling test anxiety are evident in your performance. Your dedicated preparation and effective techniques are positioning you for excellence in exams. Stay the course for continued success."
        },
        "Organizing and Processing Information": {
            "1-10": "Opportunities for improvement lie ahead in your organizational and information-processing abilities. Consider adopting effective techniques and strategies to streamline your approach.",
            "11-20": "You're actively engaged in developing your organizational and information-processing skills. Embrace further refinement through structured methods and watch your efficiency grow.",
            "21-30": "Your organizational and information processing capabilities are solid, showcasing your commitment to effective learning. Continue to explore advanced strategies to enhance your skills even further.",
            "31-40": "Impressive mastery of organizational and information-processing skills is evident in your approach. Your ability to efficiently handle and process information is a valuable asset that contributes significantly to your academic and personal success."
        },
        "Motivation and Attitude": {
            "1-10": "Your motivation and attitude towards your goals could benefit from some nurturing. Seek ways to ignite your passion and maintain a positive mindset to drive your success.",
            "11-20": "You are making strides in cultivating a motivated and positive attitude. Continue to fuel your aspirations and embrace challenges with a proactive mindset.",
            "21-30": "Your motivation and attitude are commendable, reflecting your dedication to achieving your objectives. Sustain this positive outlook as you navigate through challenges and seize opportunities.",
            "31-40": "Your exceptional motivation and unwavering positive attitude are truly inspiring. Your proactive approach and enthusiasm set a strong foundation for continuous growth and remarkable accomplishments."
        },
        "Reading and Selecting the Main Idea": {
            "1-10": "Your current performance indicates potential areas for improvement in reading comprehension and identifying main ideas. Consider focusing on dedicated practice and skill-building exercises to enhance your abilities in this crucial aspect of comprehension.",
            "11-20": "You're making progress in the realm of reading and main idea selection. Keep honing your skills through consistent practice and engagement with various texts. By investing time and effort, you can further enhance your ability to discern and extract main ideas effectively.",
            "21-30": "Your proficiency in reading and selecting the main idea is commendable. Continue engaging with a variety of texts to reinforce your skillset. Fine-tune your analytical prowess and main idea identification through continuous practice, leading to a deeper understanding of textual content.",
            "31-40": "Your adeptness at reading and identifying the main idea is truly impressive. Your consistent efforts have yielded remarkable results. As you further immerse yourself in diverse texts, your ability to swiftly discern and comprehend main ideas will only continue to flourish, allowing for advanced comprehension and critical analysis."
        },
        "Writing": {
            "1-10": "Your writing skills show potential for growth. Focusing on fundamental aspects such as grammar, sentence structure, and organization can significantly improve your overall writing effectiveness.",
            "11-20": "You are demonstrating a foundation in writing, but there is room for refinement. Paying attention to clarity, and coherence, and incorporating more varied vocabulary will contribute to stronger and more engaging compositions.",
            "21-30": "Your writing abilities are solid and promising. Continue honing your skills by refining your style, enhancing the flow of your ideas, and employing advanced techniques to captivate your readers.",
            "31-40": "Congratulations on your exceptional writing prowess! Your command of language, effective communication, and captivating storytelling set you apart. Maintain your dedication to excellence, experimenting with different genres and techniques to further elevate your writing to new heights."
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
            "1-10": "Your score suggests a preference for familiar and traditional ways of thinking. You tend to feel more comfortable with established routines and may be less inclined to embrace novel or unconventional ideas.\nPossible Personality Type: Conventional, Practical, Routine-Oriented\nCareer Options: Roles that involve structured tasks, attention to detail, and established procedures such as accounting, administration, data analysis, or quality control.",
            "11-20": "You exhibit a balanced approach to new experiences, appreciating both routine and the occasional departure from the familiar. You can adapt to change while maintaining a degree of traditionalism.\nPossible Personality Type: Balanced, Adaptable, Practical Visionary\nCareer Options: Consider roles that require a mix of analytical thinking and creativity. Project management, technical writing, research analysis, or financial planning could align well with your abilities.",
            "21-30": "Your personality reflects an openness to novel ideas and experiences, alongside an appreciation for established practices. You strike a balance between creativity and practicality.\nPossible Personality Type: Inquisitive, Versatile, Adaptive\nCareer Options: Look for roles that encourage problem-solving, innovation, and diverse perspectives. Marketing, design, education, or roles in technology could be avenues for your talents.",
            "31-40": "Your open-mindedness and curiosity are evident, as you actively seek out new experiences and ideas. You thrive in dynamic environments and enjoy exploring uncharted territory.\nPossible Personality Type: Curious, Imaginative, Innovative\nCareer Options: Pursue roles that emphasize creativity, exploration, and the generation of new ideas. Entrepreneurship, research, creative arts, or roles in emerging technologies may resonate with your disposition.",
            "41-50": "Your high openness underscores a profound appreciation for creativity, intellectual pursuits, and unconventional thinking. You find inspiration in a wide array of experiences and are drawn to pushing boundaries.\nPossible Personality Type: Creative, Visionary, Intellectual Explorer\nCareer Options: Seek roles that encourage innovation, abstract thinking, and interdisciplinary collaboration. Writing, artistic endeavors, academia, or roles in cutting-edge fields could provide avenues for your passions."
        },
        "Conscientiousness": {
            "1-10": "Your score suggests that you have a more relaxed attitude toward organization and planning. You might prefer flexibility and spontaneity over strict routines, and you may find it challenging to stick to long-term goals.\nPossible Personality Type: Unstructured, Free-Spirited, Creative\nCareer Options: Roles that allow for creative expression, flexible schedules, and minimal routine could be appealing. Consider careers in the arts, entrepreneurship, entertainment, or freelancing.",
            "11-20": "You display some relaxed tendencies, yet you can also demonstrate a degree of organization and responsibility when necessary. You strike a balance between structure and adaptability.\nPossible Personality Type: Flexible, Adaptable, Laid-Back Achiever\nCareer Options: You might excel in roles that require a mix of creativity and reliability. Look into careers such as marketing, project management, consulting, or event planning.",
            "21-30": "You maintain a balanced approach to organization and responsibility, effectively managing your tasks and goals. You can shift between focused, goal-oriented work and more flexible activities.\nPossible Personality Type: Balanced, Diligent, Methodical\nCareer Options: Consider roles that involve a mix of planning, execution, and adaptability. Project management, administrative roles, data analysis, or research positions could be suitable.",
            "31-40": "Your conscientious tendencies are noticeable, and you value structure, planning, and goal attainment. You tend to be reliable, detail-oriented, and committed to your tasks.\nPossible Personality Type: Dependable, Detail-Focused, Goal-Driven\nCareer Options: Pursue roles that require precision, organization, and meticulousness. Accounting, quality control, data management, or executive assistance could be well-aligned with your personality.",
            "41-50": "Your conscientiousness is a dominant trait, and you excel in planning, organization, and goal achievement. You take your responsibilities seriously and are known for your reliability.\nPossible Personality Type: Methodical, Disciplined, Achievement-Oriented\nCareer Options: Seek roles that demand meticulous attention to detail, project management skills, and consistent follow-through. Consider careers in finance, operations management, research, or regulatory compliance."
        },
        "Extroversion": {
            "1-10": "Your score indicates that you tend to be more introverted, preferring solitary activities and introspection. You might find social interactions draining and may feel more comfortable in quieter, less stimulating environments.\nPossible Personality Type: Introverted, Reflective, Thoughtful\nCareer Options: Roles that require deep analysis, creativity, and independent work such as writing, research, programming, graphic design, or artistry.",
            "11-20": "You display some introverted tendencies, but you are also open to social interactions and may engage in them occasionally. You strike a balance between solitary pursuits and group activities.\nPossible Personality Type: Balanced, Adaptable, Reserved-Extrovert\nCareer Options: A wide range of options is available to you, including roles that involve both independent work and occasional collaboration. Examples include teaching, accounting, project management, or technical support.",
            "21-30": "You possess a healthy balance between introversion and extroversion, comfortably engaging in both solitary tasks and social interactions. You enjoy spending time with others but also value your personal space.\nPossible Personality Type: Ambivert, Socially Versatile, Team Player\nCareer Options: Your versatility opens doors to various career paths. Consider roles that involve teamwork, client interaction, and balanced work environments. Sales, marketing, human resources, or event planning could be suitable options.",
            "31-40": "Your extroverted tendencies are noticeable, and you thrive in social settings. You are energized by interactions with others and enjoy being part of groups.\nPossible Personality Type: Outgoing, Sociable, Energetic\nCareer Options: Pursue roles that involve frequent interaction with people, leadership, and dynamic environments. Public relations, customer service, teaching, or counseling may align well with your personality.",
            "41-50": "Your extroversion is a dominant trait, and you are naturally drawn to social interactions. You derive energy and excitement from engaging with others, often taking on leadership roles.\nPossible Personality Type: Extroverted, Enthusiastic, Charismatic\nCareer Options: Seek roles that require extensive networking, public speaking, and leading groups. Sales management, event coordination, public speaking, or entrepreneurship could be highly fulfilling paths for you."
        },
        "Agreeableness": {
            "1-10": "Your score indicates that you prioritize individual goals and assertiveness over conforming to others' expectations. You may prefer direct communication and may not be as concerned with maintaining harmony in social interactions.\nPossible Personality Type: Independent, Assertive, Objective\nCareer Options: Roles that require decisive decision-making, negotiation, and analytical thinking, such as entrepreneurship, law, research, or engineering.",
            "11-20": "You display a balanced mix of assertiveness and cooperation. While you value your own needs, you are also considerate of others' perspectives and can adapt your communication style accordingly.\nPossible Personality Type: Pragmatic, Diplomatic, Balanced\nCareer Options: Consider roles that involve problem-solving, project management, and coordination where you can utilize your ability to navigate different viewpoints. Consulting, project management, logistics, or data analysis could be suitable paths.",
            "21-30": "Your personality showcases a harmonious blend of assertiveness and empathy. You tend to seek compromise and find satisfaction in both individual accomplishments and collaborative efforts.\nPossible Personality Type: Empathetic, Flexible, Collaborative\nCareer Options: Look for roles that involve teamwork, customer service, and relationship-building. Social work, human resources, teaching, or client-facing positions align well with your strengths.",
            "31-40": "Your agreeable nature is evident in your interactions, and you excel at maintaining positive relationships. You value cooperation and may prioritize group cohesion over individual achievements.\nPossible Personality Type: Cooperative, Supportive, Amiable\nCareer Options: Pursue roles that involve mentoring, coaching, or community engagement. Nonprofit work, counseling, healthcare, or teaching may be fulfilling avenues for you.",
            "41-50": "Your high agreeableness is a standout trait, highlighting your commitment to harmony and cooperation. You excel at fostering positive environments and nurturing connections with others.\nPossible Personality Type: Compassionate, Empathic, Harmonious\nCareer Options: Seek roles where interpersonal skills are paramount. Humanitarian work, social services, counseling, or leadership positions that require team building and conflict resolution could be well-suited to your personality."
        },
        "Neuroticism": {
            "1-10": "Your score suggests that you have a strong emotional resilience and are adept at managing stress and negative emotions. You tend to stay calm under pressure and approach challenges with a composed demeanor.\nPossible Personality Type: Resilient, Calm, Emotionally Stable\nCareer Options: Roles that require composure, crisis management, and analytical thinking such as emergency services, project management, scientific research, or law enforcement.",
            "11-20": "You exhibit a balanced approach to emotions, demonstrating an ability to handle stress while acknowledging emotional responses. You are capable of adapting to different situations with a steady outlook.\nPossible Personality Type: Balanced, Adaptable, Realistic\nCareer Options: Consider roles that involve problem-solving, conflict resolution, and adaptability. Consulting, marketing, information technology, or financial analysis could align well with your abilities.",
            "21-30": "Your emotional responses are generally balanced, with occasional fluctuations in response to stressors. You exhibit a healthy range of emotional expression and are capable of managing moderate stress.\nPossible Personality Type: Stable, Flexible, Self-Aware\nCareer Options: Look for roles that value emotional intelligence, teamwork, and interpersonal dynamics. Human resources, counseling, teaching, or creative professions may resonate with your abilities.",
            "31-40": "You may experience heightened emotional responses in certain situations, indicating a sensitivity to stressors. However, you are also likely to possess effective coping mechanisms and can recover from setbacks.\nPossible Personality Type: Sensitive, Reflective, Resilient Learner\nCareer Options: Pursue roles that encourage personal growth, creative expression, and communication. Writing, artistic pursuits, counseling, or roles in the helping professions could be avenues to explore.",
            "41-50": "Your emotional experiences tend to be intense, and you may face challenges in managing stress and negative emotions. However, your depth of emotional awareness can also lead to profound self-discovery and empathy for others.\nPossible Personality Type: Emotional, Empathetic, Introspective\nCareer Options: Seek roles that center around emotional support, creativity, and individual growth. Therapy, art therapy, social work, or roles in the performing arts could provide outlets for your emotional depth."
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
            "1-3": "Minimal logical problem-solving ability.",
            "4-6": "Some logical problem-solving skills.",
            "7-8": "Strong logical problem-solving abilities.",
            "9-10": "Exceptional logical problem-solving skills."
        },
        "Language Skills": {
            "1-3": "Difficulty with verbal communication and grammar.",
            "4-6": "Adequate verbal communication and grammar.",
            "7-8": "Proficient verbal communication and grammar.",
            "9-10": "Advanced verbal communication and grammar."
        },
        "Math and Logic": {
            "1-3": "Struggles with numbers and reasoning.",
            "4-6": "Basic comfort with numbers and reasoning.",
            "7-8": "Comfortable with numbers and reasoning.",
            "9-10": "Highly skilled with numbers and reasoning."
        },
        "Structured Planning": {
            "1-3": "Challenges in organizing tasks and goals.",
            "4-6": "Can organize tasks and set goals.",
            "7-8": "Effectively organizes tasks and goals.",
            "9-10": "Expertly organizes tasks and goals."
        },
        "Sequential Processing": {
            "1-3": "Difficulty following linear sequences.",
            "4-6": "Follows linear sequences with effort.",
            "7-8": "Easily follows linear sequences.",
            "9-10": "Seamlessly follows linear sequences."
        }
    },
    "Right Brain Dominance": {
        "Creativity": {
            "1-3": "Minimal capacity for imaginative thinking.",
            "4-6": "Some ability for imaginative and original thinking.",
            "7-8": "Strong capacity for imaginative and original thinking.",
            "9-10": "Exceptional ability for imaginative and original thinking."
        },
        "Visual Perception": {
            "1-3": "Difficulty noticing shapes and colors.",
            "4-6": "Adequate sensitivity to shapes and colors.",
            "7-8": "Proficient in noticing shapes and colors.",
            "9-10": "Highly skilled in noticing shapes and colors."
        },
        "Intuition": {
            "1-3": "Struggles to rely on instincts or gut feelings.",
            "4-6": "Beginning to rely on instincts and hunches.",
            "7-8": "Comfortable relying on instincts and gut feelings.",
            "9-10": "Highly intuitive, relies on instincts effectively."
        },
        "Holistic Thinking": {
            "1-3": "Trouble seeing the big picture and making connections.",
            "4-6": "Can grasp the bigger picture and make connections.",
            "7-8": "Easily sees the big picture and makes connections.",
            "9-10": "Masters the bigger picture and makes intricate connections."
        },
        "Artistic Abilities": {
            "1-3": "Challenges in artistic expression.",
            "4-6": "Basic skills in artistic expression.",
            "7-8": "Proficient artistic expression.",
            "9-10": "Exceptional skills in artistic expression."
        }
    }
} as const;
