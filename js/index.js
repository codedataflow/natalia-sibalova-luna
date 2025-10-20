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

// ------------- Message Form -----------

// Helper function to taggle message section visibility
function toggleMessagesSection() {
    const messageSection = document.getElementById("Messages");
    const messageList = messageSection.querySelector("ul");
    if (messageList.children.length === 0) {
        messageSection.style.display = "none";
    } else {
      messageSection.style.display = "block";  
    }    
}

// Initially hide the message section (we start out with 0 messages)
toggleMessagesSection();

//Select the leave_message form by name
const messageForm = document.querySelector("form[name=leave_message]");

// Add an event listener to handlle "submit"
messageForm.addEventListener("submit", function(event) {
  //Prevent the page refresh
  event.preventDefault();

  //Retrive form field values
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  var usersMessage = event.target.usersMessage.value;

  // Log values to log
  console.log("Name: ", usersName);
  console.log("Email: ", usersEmail);
  console.log("Message: ", usersMessage);

  // Select the #Messages section
  const messageSection = document.getElementById("Messages");

  //Select the <ul> inside the #Messages section
  const messageList = messageSection.querySelector("ul");

  //Create a new list item
  const newMessage = document.createElement("li");
  // Set the inner HTML
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>: <span>${usersMessage}</span>`

  // Create an edit button
  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.className = "edit-btn";
  editButton.type = "button";

  // Create a remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.className = "remove-btn";
  removeButton.type ="button";
  
  // Create a save button
  const saveButton = document.createElement("button");
  saveButton.innerText = "save";
  saveButton.className = "save-btn";
  saveButton.type = "button";

  // Add click event listener to edit the message
  editButton.addEventListener("click", function() {
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>: <span><textarea id="usersMessageEdit" name="usersMessage" required>${usersMessage}</textarea></span>`
    newMessage.appendChild(saveButton);
  });

saveButton.addEventListener("click", function() {
    usersMessage = document.getElementById("usersMessageEdit").value;
    console.log(usersMessage);
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>: <span>${usersMessage}</span>`
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
  });

  // Append the edit button to the new message
  newMessage.appendChild(editButton);

  // Add click event listener to remove the message
  removeButton.addEventListener("click", function() {
    // Find the <li>
    const entry = removeButton.parentNode;
    // Remove it
    entry.remove();
    // Toggle if there is no more messages
    toggleMessagesSection();
  });
    

  // Append the remove button to the new message
    newMessage.appendChild(removeButton);

    //Append the new message to the message list
    messageList.appendChild(newMessage);

    // Taggle if exists a new message
    toggleMessagesSection();


   // Clear form after submission
   messageForm.reset();
  });

  // ------------- Project Section -----------
  // Fetch my GitHub repositories
  fetch("https://api.github.com/users/codedataflow/repos")
    .then((response) => {
       //Error fetch data
       if (!response.ok) {
       //Throw an error 
        throw new Error("Failed to fetch data from GitHub. Please try again later");
       }
      // Retunr the response JSON data
      return response.json(); 
    })
    .then((repositories) => {
      //repositories = JSON.parse(this.repositories);
      console.log("Repositories: ", repositories)
      // Get the Project section
      const projectSection = document.getElementById("Projects");
      // Select the list within the Project section
      const projectList = projectSection.querySelector("ul");
      // Clear the content just in case
      projectList.innerHTML = "";

      // Iterate through all public repositories
      for (let i = 0; i < repositories.length; i++) {
        // Create a new list item
        const project = document.createElement("li");
        // Create a link for the list item
        const link = document.createElement("a");
        // Set the link url
        link.href = repositories[i].html_url;
        // Set the text for the link
        link.textContent = repositories[i].name;
        // Append the link to the list item
        project.appendChild(link);
        // Append the list item to the list of projects
        projectList.appendChild(project);
      }
    })
    .catch((error) => {
    //Log the error
    console.error("Error fetching repositories:", error);
    // Get teh project section
    const projectSection = document.getElementById("Projects");
    // Add an error message on th ui
    const errorMessage = document.createElement("p");
    errorMessage.innerHTML = 'Unable to load projects. Please try again later.';
    projectSection.appendChild(errorMessage);
    })