 // fetch (); ashiglahgvi uchir n sul tal ih 
 require("@babel/polyfill");
 import Search from "./model/Search" ;
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
    const query = 'pizza ';
   if(query) {
    // 2) Шинээр хайлтын обьектийг үүсгэж өгнө.
    state.search = new Search(query);
     
    // 3) Хайлт хийхэд зориулж дэлгэцийн UI бэлтгэнэ.
    // 4) Хайлтыг гүйцэтгэнэ.
    await state.search.doSearch();
    // 5) Хайлтын үр дүнг дэлгэцэнд үзүүлнэ.
    console.log(state.search.result);
    };

};

document.querySelector(".search").addEventListener("submit", e => {
    e.preventDefault() ;
    controlSearch() ;
});
