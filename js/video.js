
$(document).on('click','.active', function (event) {
    var opcion = $(this);
    var type = opcion.data('type');
    var content = opcion.data('content');

    if(type == 1){
        $("#Trailer").attr("src","videos/losincreibles2.mp4");
        $("#Trailer").attr("poster","imgs/li2.jpg");
    }else{
        if(type == 2){
            $("#Trailer").attr("src","videos/PanteraNegra.mp4");
            $("#Trailer").attr("poster","imgs/bp.jpg");
        }else{
            if(type == 3){
                $("#Trailer").attr("src","videos/LaBodaDeValentina.mp4");
                $("#Trailer").attr("poster","imgs/lbdv.jpg");
            }else{
                $("#Trailer").attr("src",content);
                $("#Trailer").attr("poster","imgs/new.png");
            }
        }
    }
    

    console.log(content);
});
 
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function handleFiles(files) {
    var file = files[0];
 
    console.log(files);
    var reader = new FileReader();

    
    $("#playlist").append("<li role='presentation'>"+
        "<img id='movie4' src='imgs//new.png' draggable='true' ondragstart='drag(event)'>"+
        "<a class='active' data-type='4' data-content='C://ProjectsUAA//videos//MazeRunner.mp4' href='javascript:void(0)' role='menuitem'> &nbsp;&nbsp;"+file.name+
        "</a></li><br>");

}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if(data == "movie1"){
        $("#Trailer").attr("src","videos/losincreibles2.mp4");
        $("#Trailer").attr("poster","imgs/li2.jpg");
    }else{
        if(data == "movie2"){
            $("#Trailer").attr("src","videos/PanteraNegra.mp4");
            $("#Trailer").attr("poster","imgs/bp.jpg");
        }else{
            if(data == "movie3"){
                $("#Trailer").attr("src","videos/LaBodaDeValentina.mp4");
                $("#Trailer").attr("poster","imgs/lbdv.jpg");
            }else{
                $("#Trailer").attr("src","videos/LaBodaDeValentina.mp4");
                $("#Trailer").attr("poster","imgs/new.png");
            }
        }
    }    
    

    console.log("drop.......");
 
    var files = ev.dataTransfer.files;
    var count = files.length;
    
    console.log(ev.dataTransfer);

    if (count > 0)
        handleFiles(files);
}