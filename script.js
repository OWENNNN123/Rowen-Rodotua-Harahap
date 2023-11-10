const getElement = (identifier = "") => document.querySelector(identifier);

getElement("#send").addEventListener("click", verifySubmission);

function verifySubmission(event) {
  event.preventDefault(); 

  let subjectElement = getElement("#Subject").value;
  let messageElement = getElement("#messageInput").value;
  let nameElement = getElement("#Name").value;

  if (subjectElement && messageElement && nameElement) {
    let body = encodeURIComponent("From: " + nameElement + "\n" + messageElement);
    let mailtoLink = "mailto:rowen.rh@outlook.com?subject=" + subjectElement + "&body=" + body;
    
    window.location.href = mailtoLink;
    
    window.open(mailtoLink);
  } else {
    alert("Please fill in all required fields.");
  }
}




