// Get the body element
const body = document.body;

// ------------- Footer -----------

// Create a footer element
let footer = document.createElement("footer");
//Append the footer to the body
body.appendChild(footer);

// Create a new Date object
const today = new Date();
// Get current year
const thisYear = today.getFullYear();
// Get the current footer elemet
footer = document.querySelector("footer");
// Create a new <p> element
const copyright = document.createElement("p");
// Set the inner HTML with copyright symbol, ypur name, and year
// <p>copyright Natalia Sibalova 2025
copyright.innerHTML = `\u00A9 Natalia Sibalova ${thisYear}`;
// Append <p> to the footer
footer.appendChild(copyright);
// Center footer
footer.style.textAlign = "center";

// ------------- Skills -----------
// List your technical skills
const skills = ["Data Analysis: SQL, Excel, Python, Tableau", "Data Management: Annotation, Labeling, Quality Audits, CRM (Microsoft Dynamics), eoStar", "Machine Learning Algorithms: Clustering, Deep Learning, Natural Language Processing (NLP), Prompt-based methods such as few-shot, chain-of-thought", "Web Development / Programming: HTML, CSS, JavaScript, GitHub", "Productivity and Cloud Tools: Office 365, PowerPoint, Microsoft Azure, Computer Vision Annotation Tool"];

//Select the skills section by id
const skillsSection = document.getElementById("Skills");
// Select the empty <ul> inside the skills section
const skillsList = skillsSection.querySelector("ul");

// Loop through the skills array
for (let i = 0; i < skills.length; i++) {
    // Create a new <li> element
    const skill = document.createElement("li");
    // Set the text of each <li> to the current skill
    skill.innerText = skills[i];
    // Append the <li> to the skills list
    skillsList.appendChild(skill);

}




