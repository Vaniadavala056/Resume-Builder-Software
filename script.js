document.getElementById('generate').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
  
    const preview = `
      <h3>${name}</h3>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <h4>Education</h4>
      <p>${education}</p>
      <h4>Skills</h4>
      <p>${skills}</p>
      <h4>Experience</h4>
      <p>${experience}</p>
    `;
  
    document.getElementById('resume-preview').innerHTML = preview;
  });
  
  document.getElementById('download').addEventListener('click', function () {
    const element = document.getElementById('resume-preview'); // The section to convert to PDF
    const options = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Convert the element to a PDF and download
    html2pdf().set(options).from(element).save();
});