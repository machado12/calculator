var valor7 = document.getElementById("num-7")
var valor4 = document.getElementById("num-4")
var valor8 = document.getElementById("num-8")
var valor5 = document.getElementById("num-5")
var valor9 = document.getElementById("num-9")
var valor6 = document.getElementById("num-6")
var valorminus = document.getElementById("minus")
var valormulti = document.getElementById("multi")
var valor3 = document.getElementById("num-3")
var valor0 = document.getElementById("num-0")
var valor2 = document.getElementById("num-2")
var valorclear = document.getElementById("clear")
var valor1 = document.getElementById("num-1")
var valorequal = document.getElementById("equal")
var valordive = document.getElementById("dive")
var valorplus = document.getElementById("plus")

valor7.onclick = function() {
    document.getElementById("display").value += 7
}

valor4.onclick = function() {
    document.getElementById("display").value += 4
}

valor8.onclick = function() {
    document.getElementById("display").value += 8
}

valor5.onclick = function() {
    document.getElementById("display").value += 5
}

valor9.onclick = function() {
    document.getElementById("display").value += 9
}

valor6.onclick = function() {
    document.getElementById("display").value += 6
}

valorminus.onclick = function() {
    document.getElementById("display").value += '-'
}

valormulti.onclick = function() {
    document.getElementById("display").value += '*'
}

valor3.onclick = function() {
    document.getElementById("display").value += 3
}

valor0.onclick = function() {
    document.getElementById("display").value += 0
}

valor2.onclick = function() {
    document.getElementById("display").value += 2
}

valorclear.onclick = function() {
    document.getElementById("display").value = ''
}

valor1.onclick = function() {
    document.getElementById("display").value += 1
}

valorequal.onclick = function() {
    document.getElementById("display").value = eval(document.getElementById("display").value)
}

valordive.onclick = function(){
    document.getElementById("display").value += '/'
}
valorplus.onclick = function(){
    document.getElementById("display").value += '+'
}