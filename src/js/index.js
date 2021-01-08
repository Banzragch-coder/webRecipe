 // fetch (); ashiglahgvi uchir n sul tal ih 
 require("@babel/polyfill");
 import Search from "./model/Search" ;
 import { elements , renderLoader, clearLoader } from "./view/base" ;
 import * as searchView from './view/SearchView';
 import Recipe from './model/Recipe'; 
 
/*
*    WEB APP төрөл 
* - Хайлтын query 
* - Тухайн үзүүлж байгаа жор 
* - Лайкласан жорууд
* - Захиалж байгаа жорын найрлаганууд
*/
const state = {} ;
const controlSearch = async () => {
    // 1) Вэбээс хайлтын түлхүүр үгийг гаргаж авна.
    const query = searchView.getInput(); 
   if(query) {
    // 2) Шинээр хайлтын обьектийг үүсгэж өгнө.
    state.search = new Search(query);
     
    // 3) Хайлт хийхэд зориулж дэлгэцийн UI бэлтгэнэ.
    searchView.clearSearchQuery();
    searchView.clearSearchResult();
    renderLoader(elements.searchResultDiv);


    // 4) Хайлтыг гүйцэтгэнэ.
    await state.search.doSearch();
     
    // 5) Хайлтын үр дүнг дэлгэцэнд үзүүлнэ.
    clearLoader();
    if(state.search.result === undefined) alert("Хайлт илэрцгүй .... ");
    else  searchView.renderRecipes(state.search.result);
    };
};
elements.searchForm.addEventListener("submit", e => {
    e.preventDefault() ;
    controlSearch() ;
});
elements.pageButtons.addEventListener("click", e => {
    const btn = e.target.closest(".btn-inline");
    if(btn) {
        const gotoPageNumber = parseInt(btn.dataset.goto, 10);
        searchView.clearSearchResult();
        searchView.renderRecipes(state.search.result, gotoPageNumber);
    }
    
});