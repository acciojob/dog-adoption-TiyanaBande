//your code here
const dogBreeds = [
	{
		name: "Golden Retriver",
		imgSrc: "Golden_Retriver_img_link.jpg",
		wikLink: "https://en.wikipedia.org/wiki/Golden_Retriver"
	},
	{
		name: "Poodle",
		imgSrc: "poodle_img_link.jpg",
		wikiLink: "https://en.wikipedia.org/wiki/poodle"
	}
];
const dogBreedsList = document.getElement('dog-breeds-list');

dogbreeds.forEach(breed =>{
	const listItem = document.createElement('li');
	const anchor = document.createElement('a');
	const image = document.createElement('img');

	anchor.href = breed.wikiLink;
	anchor.target = "_blank";
	image.src = breed.imgSrc;
	image.alt = breed.name;

	anchor.appendChild(image);
	listitem.appendChild(anchor);
	dogBreedsList.appendChild(listItem);
});
