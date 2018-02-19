
$(document).on('click','.active', function (event) {
    var opcion = $(this);
    var type = opcion.data('type');

    if(type == 1){
        $("#Trailer").attr("src","videos/losincreibles.mp4");
        $("#Trailer").attr("poster","imgs/li2.jpg");
    }
    if(type == 2){
        $("#Trailer").attr("src","videos/pn.mp4");
        $("#Trailer").attr("poster","imgs/bp.jpg");
    }
    if(type == 3){
        $("#Trailer").attr("src","videos/LaBodaDeValentina.mp4");
        $("#Trailer").attr("poster","imgs/lbdv.jpg");
    }
});
