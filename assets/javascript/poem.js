//onjects 
var poem = {
    
}
//arrays
var poemArray = [
    "My Poem, My Website My poem, my website My story, my birthright It’s murder under moonlight He put up a good fight It’s over, call CareFlight My alibi’s airtight My victim could be right But he’s dead, so I’m right"
];

//global variables
var poemText = document.querySelectorAll(".poemText");
var title = document.querySelectorAll(".title");
var poemCard = $(".poem");
var poemView = $("#poemView");

//function calls
displayPoems();

//functions 
function displayPoems(){
    for (i = 0; i < poemText.length; i++) {
        title[i].textContent = "Title";
        poemText[i].textContent = poemArray[0];
    }
}

poemCard.click(function(){
    poemView.html(`<div class="poem">
                   <h1 class="title"></h1>
                   <div class="poemText"></div>
                   </div>`);
});



