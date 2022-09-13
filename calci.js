function add() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    let sum ;
    sum= n1+n2;
    if (n1=="" && n2=="") {
        alert("pls enter the numbers");
    } 
    else {
        alert("Sum:"+(sum));
    }

}

function sub() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    if (n1=="" && n2=="") {
        alert("pls enter the numbers");
    } 
    else {
        alert("difference:"+(n1-n2));
    }

}

function mul() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    if (n1=="" && n2=="") {
        alert("pls enter the numbers");
    } 
    else {
        alert("product:"+(n1*n2));
    }

}

function div() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    if (n1=="" && n2=="") {
        alert("pls enter the numbers");
    } 
    else if(n2==0) {
        alert("Division by zero error!");
    }
    else {
        alert("Quotient:"+(n1/n2));
    }

}
