var count = 0;

function fun() {
    var num1 = document.getElementById("num").value;
    var colour = document.getElementById("color").value;
    num1 = Number(num1);
    for (let i = 0; i < num1; i++) {
        count++;
        var btn = document.createElement("button");
        btn.id = "btn1";
        btn.innerHTML = "new button" + count;
        btn.style = "background-color:" + (colour) + ";"
        document.body.appendChild(btn);
    }

}