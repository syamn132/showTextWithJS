let counterValue = document.getElementById("cnt");
let msg = document.getElementById("msg");

function showHide() {
    let prevMsg = msg.textContent;
    if (prevMsg === " ") {
        msg.textContent = "Hello World";
        document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
        document.getElementById("showHide").textContent = "Hide";
        document.getElementById("showHide").style.backgroundColor = "#e12d39";
        document.getElementById("cnt").style.color = "#e3ca2d";
    } else {
        msg.textContent = " ";
        document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
        document.getElementById("showHide").textContent = "Show";
        document.getElementById("showHide").style.backgroundColor = "#22c55e";
        document.getElementById("cnt").style.color = "grey";
    }
    let prev = counterValue.textContent;
    let upd = parseInt(prev) + 1;
    counterValue.textContent = upd;
}