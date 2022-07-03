function mouseOv(divId) {
    divId.style="color: black; background-color: orange; "
}
function mouseOt(divId) {
    divId.style="color: white; background-color: black; "
}
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Valid email address!");
    }
    else {

        alert("Invalid email address!");
    }
}

var i = 1;

        function add() {
            i++;
            var div = document.createElement('div');
            var id = i;
            div.innerHTML = 'dish' + id + ': <input type="text" name="dish"/>' + 'Quantity: <input type="number" name="quantity"/>'+ ' <input type="button" id="add_button" onclick="add()" value="add" />' + ' <input type="button" id="remove_button" onclick="remove(this)" value="remove" />';
            document.getElementById('dish').appendChild(div);
        }

        function remove(div) {
            document.getElementById('dish').removeChild(div.parentNode);
            i--;
        }
    