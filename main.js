let a = "", b = "", ans = 0;
let operator = "";

$(".num").click(function() { 
    let value = $(this).text();
    
    if(!operator){   
        a += value;
        $(".display").append(value);
    } else {
        b += value;
        $(".display").append(value);
    }
});

$(".operator").click(function() {
    if(!operator && a !== ""){
        operator = $(this).text();
        $(".display").append(operator);
    }
});

$(".equal").click(function() {
    console.log(a, b, operator);
    switch(operator){
        case "+":
            ans = Number(a) + Number(b);
            break;
        case "-":
            ans = Number(a) - Number(b);
            break;
        case "*":
            ans = Number(a) * Number(b);
            break;
        case "/":
            ans = Number(a) / Number(b);
            break;
        default:
            break;
    }
    $(".display").text(ans);
    a = ans;
    b = operator = "";

});

$(".ac").click(function() {
    a = "", b = "", ans = 0, operator = "";
    $(".display").text("");
});

