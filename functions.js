function toggleStyleSheet(){
    const elem = document.getElementById("mainStyleSheet");

    var name = elem.getAttribute("href");

    if (name == "style1.css") {
        name = "style2.css";
    } else {
        name = "style1.css";
    }

    elem.setAttribute("href", name);

    localStorage.setItem("currentSheet", name);
}


window.onload = function(){
    var currStyle = localStorage.getItem("currentSheet");

    if (currStyle) {
        const elem = document.getElementById("mainStyleSheet");

        elem.setAttribute("href", currStyle);    
    }
}


