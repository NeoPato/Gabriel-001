function soma(){
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var res = num1 + num2;

    console.log(res);
    document.getElementById("resSoma").textContent = res.toFixed(2);
}
function subtracao(){
    var num1 = document.getElementById("num3").valueAsNumber;
    var num2 = document.getElementById("num4").valueAsNumber;
    var res = num1 - num2;
    
    console.log(res);
    document.getElementById("resSub").textContent = res.toFixed(2);
}
function dividir(){
    var num1 = document.getElementById("num5").valueAsNumber;
    var num2 = document.getElementById("num6").valueAsNumber;
    var res = num1 / num2;
    
    console.log(res);
    document.getElementById("resDivi").textContent = res.toFixed(2);
}
function multi(){
    var num1 = document.getElementById("num7").valueAsNumber;
    var num2 = document.getElementById("num8").valueAsNumber;
    var res = num1 * num2;
    
    console.log(res);
    document.getElementById("resMult").textContent = res.toFixed(2);
}
function media(){
    var num1 = document.getElementById("num9").valueAsNumber;
    var num2 = document.getElementById("num10").valueAsNumber;
    var num3 = document.getElementById("num11").valueAsNumber;
    var res = (num1+num2+num3)/3;
    var x = document.getElementById("resMedia");
    var aprovado = document.getElementById("condicional");
    var reprovado = document.getElementById("condicionalNegado");

    if(res < 7){
        x.style.color = "red";
        reprovado.style.display = "black";
        reprovado.style.color = "red";
        reprovado.style.display = "flex";
        aprovado.style.display = "none";
    }
    if(res >= 7){
        x.style.color = "green";
        aprovado.style.display = "black";
        aprovado.style.color = "green";
        aprovado.style.display = "flex";
        reprovado.style.display = "none";

    }
    console.log(res);
    document.getElementById("resMedia").textContent = res.toFixed(2);
}
