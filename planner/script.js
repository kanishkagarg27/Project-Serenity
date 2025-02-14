const activities = [
    "Go for a walk in nature 🌿",
    "Try a new hobby 🎨",
    "Listen to uplifting music 🎶",
    "Write down 3 things you're grateful for ✍️",
    "Meditate for 10 minutes 🧘",
    "Call or text a loved one ❤️",
    "Read a book or poetry 📖",
    "Cook or bake something new 🍲",
    "Watch a funny movie or show 🎭",
    "Do a small act of kindness 🤝",
    "Practice deep breathing for relaxation 😌",
    "Stretch or do light yoga 🧘‍♀️",
    "Declutter a small space 🏡",
    "Spend time with a pet 🐶🐱",
    "Try journaling your thoughts 📝",
    "Dance to your favorite song 💃"
];

function shuffleActivities() {
    document.querySelectorAll(".day p").forEach(day => {
        let randomActivity = activities[Math.floor(Math.random() * activities.length)];
        day.innerHTML = randomActivity;
    });
}

// Load random activities on page load
window.onload = shuffleActivities;
