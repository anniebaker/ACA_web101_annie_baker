$(document).ready(function() {
let classes = 0; //Declares that number of classes begins at zero

//Creates a function that increases the number of classes displayed, connected to the onclick function
$(.takeClass).click(function()){
    classes++;

}

}
function classClicker(number){
    classes = classes + number;
    document.getElementById("classes").innerHTML = classes;
};

//Declares that the number of degrees begins at zero
let degrees = 0;

//Creates a function that establishes how much a degree costs, and what happens when a degree is bought
function getDegree(){
    let degreeCost = 2   
    if(classes >= degreeCost){         
        degrees = degrees + 1;                          
    	classes = classes - degreeCost;                         
        document.getElementById('degrees').innerHTML = degrees;  
        document.getElementById('classes').innerHTML = classes;
    };
};
}