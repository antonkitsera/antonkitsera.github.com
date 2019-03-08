function set(op) {
    document.getElementById("display").value += op;
}

function sqrRoot() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sqrt(tempStore).toFixed(5));
}

function powRoot() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.pow(tempStore, 2));
}

function answer() {
    var Exp = document.getElementById("display");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    Exp.value = result;
}

function ac() {
    var elem = document.getElementById("display").value;
    var length = elem.length;
    length--;
    var a = elem.substr(100, length);
    document.getElementById("display").value = a;
}