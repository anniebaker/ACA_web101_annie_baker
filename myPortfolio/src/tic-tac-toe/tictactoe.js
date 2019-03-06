let gameMarker = "X"

function changeMarkerToX(){
    gameMarker = 'X';
    console.log("The X button was clicked!");

}
function changeMarkerToO(){
    gameMarker = 'O';
    console.log("The O button was clicked!");
 }

function placeMark(myDiv){ 
    console.log("You clicked a square!");
    document.getElementById(myDiv).innerHTML= gameMarker;
}
