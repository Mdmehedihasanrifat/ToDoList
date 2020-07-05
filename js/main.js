//li underline


$("ul").on("click","li",(function () {
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


}));


// span event add
$("ul").on("click","span", (function (event) {
$(this).parent().fadeOut(500,function () {
  $(this).remove();
});
  event.stopPropagation();

}));
 // input add

$("input[type='text']").keypress(function (event) {
if(event.which===13){

  let todo=$(this).val();
  $(this).val("");
$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todo+"</li>");
}
})

$('.fa-plus').on('click',function () {
  $("input[type='text']").fadeToggle();
})
