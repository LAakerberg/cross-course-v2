const contentOne = document.querySelector(".one");
const contentTwo = document.querySelector(".two");
const contentThree = document.querySelector(".three");

contentOne.innerHTML += `
<div><img class="jackets__image" src="images/andreas-wagner-8H5kNkYmJYQ-unsplash-width1000.jpg"/></div>
<div><img class="adventure__image" src="images/nina-luong-dy4QG5c5xWQ-unsplash-width1000.jpg" /></div>`;
contentTwo.innerHTML += `
<div>Popular products</div>
<div>Adventure video</div>`;
contentThree.innerHTML += `<div class="mmorpggames">Become a member</div>`;
