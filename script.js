function somar() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    document.getElementById("resultado").innerText = Number(n1) + Number(n2);
}

function subtrair() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    document.getElementById("resultado").innerText = Number(n1) - Number(n2);
}

function multiplicar() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    document.getElementById("resultado").innerText = Number(n1) * Number(n2);
}

function dividir() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    document.getElementById("resultado").innerText = Number(n1) / Number(n2);
}
