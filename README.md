Mamdouh Mustafa Helmy - Full Stack Developer
<div align="center"> <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&duration=3000&pause=1000&color=38BDF8&center=true&vCenter=true&width=800&height=80&lines=Hello%2C+I'm+Mamdouh+Mustafa+Helmy;Full+Stack+Developer;MERN+Stack+Specialist;UI%2FUX+Enthusiast" alt="Typing SVG" /> </div>
🛠️ Tech Stack
<div align="center">
Frontend
https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white

Backend
https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black

Others
https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white
https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white
https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white

</div>
🚀 Featured Projects
<div align="center">
Project	Description	Technologies	Live Demo
Ozzy Kitchen	Food delivery platform with admin dashboard	React, Node.js, MongoDB	View
Store Management	Inventory system with analytics	React, Express, MongoDB	View
Mental Health	Doctor-patient portal with real-time chat	React, Node.js, WebSockets	View
ServiceX	On-demand service platform (Flutter)	Flutter, Firebase	View
</div>
📊 GitHub Stats
<div align="center">
https://github-readme-stats.vercel.app/api?username=Mamdouh-Helmy&show_icons=true&theme=radical

https://github-readme-stats.vercel.app/api/top-langs/?username=Mamdouh-Helmy&layout=compact&theme=radical

</div>
📜 Certifications
<div align="center" style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
https://img.shields.io/badge/ITI-MERN_Stack-007ACC?style=for-the-badge&logo=javascript&logoColor=white
https://img.shields.io/badge/Mindset-ReactJS-61DAFB?style=for-the-badge&logo=react&logoColor=black
https://img.shields.io/badge/Node.js-Certified-339933?style=for-the-badge&logo=nodedotjs&logoColor=white

</div>
🌐 Connect With Me
<div align="center" style="margin-top: 20px;">
https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white
https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white

</div>
🎧 Quranic Inspiration
<div align="center">
https://img.shields.io/badge/Spotify-Quran-1DB954?style=for-the-badge&logo=spotify&logoColor=white

</div>
javascript
// Passion for clean code
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
.then(() => console.log('Database connected!'))
.catch(err => console.log(err));

// API Endpoint
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
<div align="center" style="margin-top: 40px;">
https://komarev.com/ghpvc/?username=Mamdouh-Helmy&color=blueviolet&style=flat-square

</div>
⭐ From Mamdouh Helmy with ❤️
