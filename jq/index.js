// nav-bar
$('li.liText').click(function(){
	$(this).find('.ulTextMenu').toggleClass('ulTextMenu-collapsed');
	$('.ulTextMenu-collapsed').parents("li.liText").not(this).find('.ulTextMenu-collapsed').removeClass('ulTextMenu-collapsed');
});

// 平板以下漢堡下拉選單
$('.drop').click(function(){
	$('.dropMenu').toggleClass('dropMenu-collapsed');
});
$('.dropMenu a').click(function(){
	$('.dropMenu').removeClass('dropMenu-collapsed')
});

// slider
$("#slideshow > figure:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > figure:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);


	// 文化資產搜尋欄
	// 全選
$('#all').click(function(){
	$('#all').toggleClass('selected');
	$('#all ~ .option').removeClass('selected'); 
	$('#all.selected ~ .option').addClass('selected'); 
}); 

   // 複選
$('.option').click(function(){
	$(this).toggleClass('selected');
	// $('.option.selected').removeClass('selected');
});

	// show box
	// 步驟一
	// 按右邊箭頭後，右邊箭頭要消失(toggleClass)，原本的show1被推到左邊，
	// show2從左邊-100%變成0(滑到中間)，
	// 左邊按鈕要出現，就要toggleClass hiddenMe
$('.right-button').click(function(){
	$(this).toggleClass('hiddenMe');
	$('.show1').css({'left':'-100%'});
	$('.show2').css({'left':'0%'});
	$('.left-button button').toggleClass('hiddenMe');

});

	// 步驟二
	// 按左邊箭頭按鈕，左邊箭頭消失，
	// 原本的show1被推回來，
	// show2被往右推（left 100%）
	// 右邊箭頭又出現。

$('.left-button').click(function(){
	$('.left-button button').toggleClass('hiddenMe');
	$('.show1').css({'left':'0%'});
	$('.show2').css({'left':'100%'});
	$('.right-button').toggleClass('hiddenMe');

});
