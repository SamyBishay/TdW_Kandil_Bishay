function addition(){
    const input1 = document.getElementById("nb1").value;
    const input2= document.getElementById("nb2").value;
    let res = parseInt(input1) + parseInt(input2);
    console.log(res);
    return res;
}

const button = document.getElementById("btn_ok");
button.addEventListener("click", addition());