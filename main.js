let txt = document.getElementById("txt")
let ul = document.getElementById("ul")

function addElement() {
    if (txt.value != "") {
        let list = document.createElement("li")
        list.innerHTML = txt.value + ' <button onclick="rmElement(this)">Remove</button>'
        ul.appendChild(list)
        txt.value = ""
    } else {
        alert("input should not be empty")
    }
};

function rmElement(button) {
    let item = button.parentElement;
    item.remove();
}