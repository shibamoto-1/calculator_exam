let num_1 = "", num_2 = "", result;
let operator = "";

$(".num").click(function() { 
    let input = $(this).text();

    // 0を連続して入力できないようにする
    if(num_1 == "0" && input == "0") return;
    if(num_2 == "0" && input == "0") return;

    //計算後.や0が入力されたらリセット
    if(num_1 == result && !operator){
        if(input !== "." || num_1 !== "0."){
            num_1 = "";
            $(".display").text("");
        }
    }

    //num_1が0の時数字を入力されたら上書きする。（.を除く）
    if(num_1 == "0" && !operator){
        if(input !== "."){
            num_1 = "";
            $(".display").text("");
        }
    }

    // 計算
    if(!operator){
        if(!num_1 && input === "00") return;
        num_1 += input;
    }else{
        if(!num_2 && input === "00") return;
        num_2 += input;
    }

    $(".display").text(num_1 + operator + num_2);
});

$(".dot").click(function() { 
    if (!operator) {
        if(num_1.includes(".") || num_1 === "") return;
        num_1 += ".";
    } else {
        if(num_2.includes(".") || num_2 === "") return;
        num_2 += ".";
    }
    $(".display").text(num_1 + operator + num_2);
});

$(".operator").click(function() {
    if(!operator && num_1 !== ""){
        operator = $(this).text();
        $(".display").text(num_1 + operator);
    }
});

$(".equal").click(function() {
    switch(operator){
        case "+":
            result = Number(num_1) + Number(num_2);
            break;
        case "-":
            result = Number(num_1) - Number(num_2);
            break;
        case "*":
            result = Number(num_1) * Number(num_2);
            break;
        case "/":
            result = Number(num_1) / Number(num_2);
            break;
        default:
            break;
    }
    $(".display").text(result);
    num_1 = $(".display").text();
    num_2 = operator = "";
});

$(".ac").click(function() {
    num_1 = "", num_2 = "", result = 0, operator = "";
    $(".display").text("");
});

