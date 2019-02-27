let gameMarker = "mark"

function changeMarkerToX(){
    var gameMarker = "X";
    console.log("The X button was clicked!");

}
function changeMarkerToO(){
    var gameMarker = "O";
    console.log("The O button was clicked!");
 }

function placeMark(div){ 
    console.log("You clicked a square!");
    document.getElementById("upper-left").innerHTML(div) = "gameMarker";
    // document.getElementById("upper-center").innerHTML = "mark"
    // document.getElementById("upper-right").innerHTML = "mark"
    // document.getElementById("center-left").innerHTML = "mark"
    // document.getElementById("center").innerHTML = "mark"
    // document.getElementById("center-right").innerHTML = "mark"
    // document.getElementById("bottom-left").innerHTML = "mark"
    // document.getElementById("bottom-center").innerHTML = "mark"
    // document.getElementById("bottom-right").innerHTML = "mark"
}
