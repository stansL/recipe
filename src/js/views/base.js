export const elements = {
	searchInput: document.querySelector('.search__field'),
	searchForm: document.querySelector('.search'),
	resultsList: document.querySelector('.results__list'),
	resultsPages: document.querySelector('.results__pages'),
	results: document.querySelector('.results')
};

export const elementStrings = {
	loader : 'loader',
	btnInline: 'btn-inline'

};

export const renderLoader = (parent) => {
	const loader = `
		<div class="${elementStrings.loader}">
			<svg>
				<use href="img/icons.svg#icon-cw"></use>
			</svg>
		</div>
	`;
	parent.insertAdjacentHTML('afterbegin',loader);

}

export const clearLoader = () => {
	const loader = document.querySelector(`.${elementStrings.loader}`);
	// loader.parentNode.removeChild(loader);
	loader.remove();

}