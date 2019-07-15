//加载主页面
function loadpage(url) {
    ajax("get",url,"","Text").then(function (html) {
        document.getElementById("main").innerHTML=html;
    });
}
function loadranking() {
    ajax("get","ranking/ranking.json","","JSON").then(function (html) {
        console.log(html);
        var str='';
        for(var i=0;i<html.length;i++){
            str+=`姓名：${html[i].name} 时间：${html[i].time}</br>`
        }
        document.getElementById("ranking").innerHTML=str;
    });
}