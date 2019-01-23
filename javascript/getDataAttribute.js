var foo = document.getElementById('foo');

// write a method that returns the value "quux"
function returnCustomAttr() {
    return foo.getAttribute(("data-bar"))
}

// write another method that returns the value "quux"
function returnCustomAttr2() {
    return foo.dataset.bar
}

// write yet another method that retuns the value "quux"
function returnCustomAttr3() {

}

document.body.innerHTML = returnCustomAttr() + ' <br/>' + returnCustomAttr2() + ' <br/>' + returnCustomAttr3()
