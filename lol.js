document.getElementById("video-quality").addEventListener("change", function() {
    var quality = this.value;
    var videoPlayer = document.getElementById("my-player_html5_api");
    
    // Получаем все элементы <source> внутри видео
    var sources = videoPlayer.getElementsByTagName("source");
    
    // Применяем изменения: находим нужный источник и ставим его выбранным
    for (var i = 0; i < sources.length; i++) {
        if (sources[i].getAttribute("res") === quality) {
            sources[i].setAttribute("selected", "true");
        } else {
            sources[i].removeAttribute("selected");
        }
    }
    
    // Перезагружаем видео, чтобы применились изменения качества
    videoPlayer.load();
    videoPlayer.play();
});
