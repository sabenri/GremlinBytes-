const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotBox = document.getElementById('chatbot-box');
const chatlog = document.getElementById('chatlog');
const optionsContainer = document.getElementById('options');

const botScript = {
    start: {
        message: " Hi! I'm a coding Gremlin! how can I help you?",
        options: [
            { text: "What this site for?", next:"site"},
            { text: "Tell me more abot yourself.", next:"about"},
            { text: "what can you do?", next:"job"},
        ]
    },
    site: {
        message: "This site was made to be a an interactive coding profolio! It features a collection of web applications, interactive mini-games, and visually engaging projects that demonstrate my skills in front-end development and UI/UX design. I focus on building playful, user-centric experiences, combining creative coding with distinctive visual elements.",
        options: []
    },
    text : {
        message: "I'm a certified full-stack web developer and artist! My work focuses on mixing creativity with code, and I love making interactive Projects like mini games and uniquee web experiences. I'm always learning and looking for new ways to bring ideas to life while keeping playful and engaging. Right now, my main foucse is front-end development scince I enjoy it the most—but back-end example coming soon!"
    }
}