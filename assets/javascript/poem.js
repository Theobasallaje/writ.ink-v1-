//onjects 
var poem = {

}
//arrays
var poemArray = [
    "My Poem, My Website My poem, my website My story, my birthright It’s murder under moonlight He put up a good fight It’s over, call CareFlight My alibi’s airtight My victim could be right But he’s dead, so I’m right. My Poem, My Website My poem, my website My story, my birthright It’s murder under moonlight He put up a good fight It’s over, call CareFlight My alibi’s airtight My victim could be right But he’s dead, so I’m right. My Poem, My Website My poem, my website My story, my birthright It’s murder under moonlight He put up a good fight It’s over, call CareFlight My alibi’s airtight My victim could be right But he’s dead, so I’m right. My Poem, My Website My poem, my website My story, my birthright It’s murder under moonlight He put up a good fight It’s over, call CareFlight My alibi’s airtight My victim could be right But he’s dead, so I’m right. My Poem, My Website My poem, my website My story, my birthright It’s murder under moonlight He put up a good fight It’s over, call CareFlight My alibi’s airtight My victim could be right But he’s dead, so I’m right. My Poem, My Website My poem, my website My story, my birthright It’s murder under moonlight He put up a good fight It’s over, call CareFlight My alibi’s airtight My victim could be right But he’s dead, so I’m right"
];

//global variables
var poemText = document.querySelectorAll(".poemText");
var title = document.querySelectorAll(".title");
var poemCard = $(".poem");
var poemView = $("#poemView");
// var back = $("#back");

//function calls
displayPoems();

//functions 
function displayPoems(){
    for (i = 0; i < $(".poemText").length; i++) {
        $(".title")[i].textContent = "Title " + parseInt(i+1);
        $(".poemText")[i].textContent = poemArray[0];
    }
}

$(document).ready(function() {
    poemCard.click(function(){
        poemView.html(`<br><div class="poem">
                       <i id="back" class="fas fa-chevron-left"></i>
                       <h1 class="title">Title</h1>
                       <div class="poemText">${poemArray[0]}</div>
                       </div>`);
    });

    // $("#back").click(function(){
    //     // location.reload();
    //     alert("back clicked");
    // });

    $(document).on('click', '#back', function() { 
        // alert("hello");
        location.reload();
    });
});





