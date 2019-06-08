
$(document).ready(function () {
    abrirMenu();
    AlteraImagemNoHover(".primeiro_card","../img/SVG/SESSOES/S1.svg");
    AlteraImagemNoHover(".segundo_card","../img/SVG/SESSOES/S2.svg");
    AlteraImagemNoHover(".terceiro_card","../img/SVG/SESSOES/S3.svg");
});


function AlteraImagemNoHover(originClass,newImage) {  
    $(originClass).hover(function() {
    $('#imagem_bia').attr("src",newImage);
    }, function(){
    });
}


function abrirMenu(){
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#sidebarCollapse').toggleClass('active');
    });
}



