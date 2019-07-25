$(".tile").mousedown(function () {
    $(this).addClass("selecionado");
});

$(".tile").mouseup(function () {
    $(this).removeClass("selecionado");
});
$(".tile").mouseleave(function () {
    $(this).removeClass("selecionado");
});