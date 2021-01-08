 // fetch (); ashiglahgvi sul tal ih 
 require("@babel/polyfill");
 import Search from "./model/Search" ;

 let search  = new Search("pasta");

 search.doSearch().then(r => console.log( "Vr dvn : " + r ));

