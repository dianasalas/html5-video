var video;
var playlist;
var videos;
var actual;

init();
function init(){
    actual = 0;
    video = $('video');
    playlist = $('#playlist');
    videos = playlist.find('li img  a');
    len = videos.length - 1;
    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        actual = link.parent().index();
        run(link, video[0]);
    });
    video[0].addEventListener('ended',function(e){
        actual++;
        if(actual == len){
            actual = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[actual];    
        }
        run($(link),video[0]);
    });
}
function run(link, player){
        player.src = link.attr('href');
        par = link.parent();
        par.addClass('active').siblings().removeClass('active');
        video[0].load();
        video[0].play();
}