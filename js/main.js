//li underline


$("li").click(function () {
  $(this).toggleClass('complete');

//
// if($(this).css("color") ==="rgb(128, 128, 128)"){
//
//   $(this).css({
//     textDecoration:"none",
//     color: "black"
//   });
//
// }
// else {
//   $(this).css({
//     textDecoration: "line-through",
//     color: "grey"
//   });
// }


});


// span event add
$("span").click(function (event) {
$(this).parent().fadeOut(500,function () {
  $(this).remove();
});
  event.stopPropagation();

})
