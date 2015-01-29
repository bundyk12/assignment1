var header = getElementsByTagName('header');
header.classList.add('headerContainer');

var imgHeader = document.createElement('img');
imgHeader.setAttribute('src', 'images/t24d_logo.jpg')
header.appendChild(imgHeader);

var pHeader = document.createElement('p');
pHeader.classList.add('name');
pHeader.textContent = "Twelve 24 Design";
header.appendChild(pHeader);

var sectionHeader = document.createElement('section');
sectionHeader.setAttribute('id', 'quote');
header.appendChild(sectionHeader);

var pSectionHeader = document.createElement('p');
pSectionHeader.classList.add('quote');
pSectionHeader.textContent = "Good advertising penetrates the public mind with desires and beliefs. –Leo Burnett";
sectionHeader.appendChild(pSectionHeader);

var footer = getElementsByTagName('footer');
footer.textContent = "Copyright ©2015 Twelve 24 Design • All rights reserved. • 757.343.9145 • 1972 S. Macon Way • Aurora, CO • 80014 • E-mail Us • Terms of Use";