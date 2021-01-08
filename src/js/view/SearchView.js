// searchView deer delgetstei holbootoi ymnud bichne
import { elements } from "./base";
// Private function 
const renderRecipe = recipe => {
    console.log(recipe.title);
    const markup = ` 
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
// ul рүүгээ нэмнэ
elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};
export const clearSearchQuery = () => {
  elements.searchInput.value = ""; 
  elements.pageButtons.innerHTML = ""; 
};

export const clearSearchResult = () => {
  elements.searchResultList.innerHTML = "";
};
export const getInput = () => elements.searchInput.value;

export const renderRecipes = (recipes, currentPage = 1, resPerPage = 10) => {
// Хайлтын үр дүнг хуудаслаж үзүүлэх
    const start = (currentPage-1) * resPerPage;
    const end = currentPage * resPerPage;

  recipes.slice(start,end).forEach(renderRecipe);
//   Хуудаслалтын товчуудыг гаргаж ирэх
  const totalPages = Math.cell(recipe.length / resPerPage);
 renderButtons (currentPage , totalPage);
};
const createButton = (
    pege,
    type,
    direction
) => `
<button class="btn-inline results__btn--${type}" data-goto=${psge}>
<span>Хуудас ${page}</span> 
<svg class="search__icon">
    <use href="img/icons.svg#icon-triangle-${direction}"></use>
</svg>

</button>
`;

const renderButtons = (currentPage, totalPage) => {
    let button;
    if(currentPage === 1 && totalPage > 1) {
     button = createButton(2, "next" , 'right');
    } else if (currentPage < totalPages) {
        button = createButton(currentPage-1, "prev", " left");
        button += createButton(currentPage+1, "next", "right");
    } else if (currentPage === totalPage) {
     button = createButton(currentPage-1, "prev", "left");
    }

    elements.pageButtons.insertAdjacentHTML('afterbegin ', button);
    
};
