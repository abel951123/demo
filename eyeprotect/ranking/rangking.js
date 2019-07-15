function load() {
    ajax("get","ranking/ranking.json","","").then(function (html) {
        document.getElementById("ranking").innerHTML=html;
    });
}
