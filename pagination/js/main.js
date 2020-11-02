const listItems = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11",
	"12",
	"13",
	"14",
	"15",
	"16",
	"17",
	"18",
	"19",
	"20",
	"21",
	"22",
	"23",
	"24",
	"25"
];

const listElement = document.querySelector('.items');
const paginationElement = document.querySelector('#pagination');

let currentPage = 1;
let itemsPerPage = 5;

function renderList(items, wrapper, itemsPerPage, page) {
	wrapper.innerHTML = "";
	page--;

	let loopStart = itemsPerPage * page;
	let loopEnd = loopStart + itemsPerPage;
	let paginatedItems = items.slice(loopStart, loopEnd);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let itemElement = document.createElement('div');
		itemElement.classList.add('item');
		itemElement.innerText = item;

		wrapper.appendChild(itemElement);
	}
}

function setupPagination(items, wrapper, itemsPerPage) {
	wrapper.innerHTML = "";

	let pageCount = Math.ceil(items.length / itemsPerPage);

	for (let i = 1; i < pageCount + 1; i++) {
		let btn = paginationButton(i, items);

		wrapper.appendChild(btn);
	}
}

function paginationButton(pageNumber, items) {
	let button = document.createElement('li');
	button.innerHTML = pageNumber;

	if (currentPage == pageNumber) {
		button.classList.add('active');
	}

	button.addEventListener('click', function() {
		currentPage = pageNumber;

		renderList(items, listElement, itemsPerPage, currentPage);

		let currentBtn = document.querySelector('#pagination .active');

		currentBtn.classList.remove('active');

		this.classList.add('active');
	});

	return button;
}

renderList(listItems, listElement, itemsPerPage, currentPage);
setupPagination(listItems, paginationElement, itemsPerPage);
