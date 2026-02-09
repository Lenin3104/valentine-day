function moveNo(){
    const noBtn =document.querySelector(".No");
    let x = Math.random()*200 - 100;
    let y = Math.random()*100 - 50;

    No.style.transform =`translate(${x}px, ${y}px)`;
}
function yesClick(){
    document.getElementById("message").innerHTML = "YAAY!!!!! Best Decision Ever";
}