
let myLocation = document.getElementById("my-coordinates")

function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else {
   myLocation.innerHTML = "We can't find you!"
  }
}

function displayPosition(position) {
  myLocation.innerHTML = "Long etude: " + position.coords.longitude + " Last etude: " + position.coords.latitude
}

$(function () {
    let $list = $('ul');
    let $newItemForm = $('#newItemForm');

    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        let text = $('input[type="text"]').val();
            $list.prepend(`<li>${text}</li>`);
            $('input[type="text"]').val('');
    });

    $list.on('click', 'li', function() {
        let $this = $(this);
        $this.remove();
    });
});