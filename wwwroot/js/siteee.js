/* MAIN PAGE */
$(function () {
    $(".card-image-js").animate({ opacity: 0.8 });
    $(".btn-style").animate({ opacity: 0.8 });
});
$(".pic1").on("mouseover", function () {
    $(this).animate({ opacity: 1 });
});

$(".pic1").mouseleave(function () {
    $(".pic1").animate({ opacity: 0.7 });

});
$(".signin,.add-new").click(function () {

    $("#modelId").modal('show');
});
$(".card-image-js,.btn-style,.userPic").on("mouseover", function () {
    $(this).animate({ opacity: 1 });
});

$(".card-image-js,.btn-style,.userPic").mouseleave(function () {
    $(this).animate({ opacity: 0.8 });
});

$(".top-items").mouseover(function () {
    $(this).css("background-color", "#dba84f;");
});

$(".top-items").mouseleave(function () {
    $(this).css("background-color", "white");
});

