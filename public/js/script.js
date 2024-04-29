document.addEventListener('DOMContentLoaded', function() {
  const registrationForm = document.getElementById('registrationForm');

  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const courseName = document.getElementById('courseName').value;
    const grade = document.getElementById('grade').value;
    const score = document.getElementById('score').value;
    const link = document.getElementById('link').value;
    const file = document.getElementById('file').files[0];

    const card = document.createElement('div');
    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = studentName;

    const viewMoreButton = document.createElement('button');
    viewMoreButton.classList.add('btn', 'btn-primary', 'view-more-button', 'viewbtn');
    viewMoreButton.textContent = 'View More';

    const details = document.createElement('div');
    details.classList.add('additional-details', 'collapse');

    const detailsContent = document.createElement('div');
    detailsContent.classList.add('card-text', 'displaycard');
    detailsContent.innerHTML = `<strong>Course:</strong> ${courseName}<br><strong>Grade:</strong> ${grade}<br><strong>Score:</strong> ${score}<br><strong>Link:</strong> ${link ? `<a href="${link}" target="_blank">${link}</a>` : 'N/A'}`;

    if (file) {
      const fileURL = URL.createObjectURL(file);
      const fileName = file.name;
      detailsContent.innerHTML += `<br><strong>Attachment:</strong> <a href="${fileURL}" target="_blank">${fileName}</a>`;
    } else {
      detailsContent.innerHTML += '<br><strong>Attachment:</strong> N/A';
    }

    details.appendChild(detailsContent);

    viewMoreButton.addEventListener('click', function() {
      details.classList.toggle('collapse');
    });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(viewMoreButton);
    cardBody.appendChild(details);
    card.appendChild(cardBody);

    const registrationCards = document.getElementById('registrationCards');
    registrationCards.appendChild(card);

    registrationForm.reset();
  });
});
