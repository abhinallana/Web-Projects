//2
function toYellow1(){
    var symbol = document.getElementById('symbol-wifi');
    symbol.src = "11.png";
}

function toWhite1(){
    var symbol = document.getElementById('symbol-wifi');
    symbol.src = "1.png";
}

function rotate1(){
    var symbol = document.getElementById('symbol-wifi');
    symbol.style.boxShadow = "-10px 4px rgb(14, 187, 193)";
}

function toNormal1(){
    var symbol = document.getElementById('symbol-wifi');
    symbol.style.boxShadow = "0px 0px";
    symbol.style.marginRight = "15px";
    symbol.style.marginLeft = "15px";
}

// 2
function toYellow2(){
    var symbol = document.getElementById('symbol-mobile-data');
    symbol.src = "22.png";
}

function toWhite2(){
    var symbol = document.getElementById('symbol-mobile-data');
    symbol.src = "2.png";
}

function rotate2(){
    var symbol = document.getElementById('symbol-mobile-data');
    symbol.style.boxShadow = "-10px 4px rgb(14, 187, 193)";
}

function toNormal2(){
    var symbol = document.getElementById('symbol-mobile-data');
    symbol.style.boxShadow = "0px 0px";
    symbol.style.marginRight = "15px";
    symbol.style.marginLeft = "15px";
}

// 3
function toYellow3(){
    var symbol = document.getElementById('symbol-bluetooth');
    symbol.src = "33.png";
}

function toWhite3(){
    var symbol = document.getElementById('symbol-bluetooth');
    symbol.src = "3.png";
}

function rotate3(){
    var symbol = document.getElementById('symbol-bluetooth');
    symbol.style.boxShadow = "-10px 4px rgb(14, 187, 193)";
}

function toNormal3(){
    var symbol = document.getElementById('symbol-bluetooth');
    symbol.style.boxShadow = "0px 0px";
    symbol.style.marginRight = "15px";
    symbol.style.marginLeft = "15px";
}

// 4
function toYellow4(){
    var symbol = document.getElementById('symbol-auto-rotate');
    symbol.src = "44.png";
}

function toWhite4(){
    var symbol = document.getElementById('symbol-auto-rotate');
    symbol.src = "4.png";
}

function rotate4(){
    var symbol = document.getElementById('symbol-auto-rotate');
    symbol.style.boxShadow = "-10px 4px rgb(14, 187, 193)";
}

function toNormal4(){
    var symbol = document.getElementById('symbol-auto-rotate');
    symbol.style.boxShadow = "0px 0px";
    symbol.style.marginRight = "15px";
    symbol.style.marginLeft = "15px";
}

// 5
function toYellow5(){
    var symbol = document.getElementById('symbol-aeroplane');
    symbol.src = "55.png";
}

function toWhite5(){
    var symbol = document.getElementById('symbol-aeroplane');
    symbol.src = "5.png";
}

function rotate5(){
    var symbol = document.getElementById('symbol-aeroplane');
    symbol.style.boxShadow = "-10px 4px rgb(14, 187, 193)";
}

function toNormal5(){
    var symbol = document.getElementById('symbol-aeroplane');
    symbol.style.boxShadow = "0px 0px";
    symbol.style.marginRight = "15px";
    symbol.style.marginLeft = "15px";
}

// 6
function toYellow6(){
    var symbol = document.getElementById('symbol-profile');
    symbol.src = "66.png";
}

function toWhite6(){
    var symbol = document.getElementById('symbol-profile');
    symbol.src = "6.png";
}

function rotate6(){
    var symbol = document.getElementById('symbol-profile');
    symbol.style.boxShadow = "-10px 4px rgb(14, 187, 193)";
}

function toNormal6(){
    var symbol = document.getElementById('symbol-profile');
    symbol.style.boxShadow = "0px 0px";
    symbol.style.marginRight = "15px";
    symbol.style.marginLeft = "15px";
}


function changeTheme(){
    //var btn = document.getElementById('symbol-theme');
    var bodyBg = document.querySelector("body");
    var colors = ["red", "blue" , "green" , "brown" , "grey"];
    var number = Math.floor(Math.random()*colors.length);
    bodyBg.style.backgroundColor = colors[number];

}

