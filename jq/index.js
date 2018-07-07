// nav-bar
$('li.liText').click(function(){
	$(this).find('.ulTextMenu').toggleClass('ulTextMenu-collapsed');
	$('.ulTextMenu-collapsed').parents("li.liText").not(this).find('.ulTextMenu-collapsed').removeClass('ulTextMenu-collapsed');
});

// back to top button
$(".back_btn img").on({
 "mouseover" : function() {
    this.src = 'img/btt3.png';
  },
  "mouseout" : function() {
    this.src='img/btt2.png';
  }
});

// 偵測 nav
var scrollLast = 0;
        $(window).scroll(function(){
            var scrollTop = $(this).scrollTop();
            console.log(scrollTop);
            // 上一次滑動（scrollLast）的數值比較大時
            if (scrollTop < scrollLast) {
                $("#nav").removeClass('hide_nav');
            } else {
                $("#nav").addClass('hide_nav');
            }
            scrollLast = scrollTop;
        });

        // 偵測 back to top 按鈕何時出現
        if ($('.back_btn').length) {
                var scrollTrigger = 1000, // px
                    backToTop = function () {
                        var scrollTop = $(window).scrollTop();
                        if (scrollTop > scrollTrigger) {
                            $('.back_btn').addClass('show');
                        } else {
                            $('.back_btn').removeClass('show');
                        }
                    };
                backToTop();
                $(window).on('scroll', function () {
                    backToTop();
                });
                $('.back_btn').on('click', function (e) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: 0
                    }, 500);
                });
            }
// 平板以下漢堡下拉選單，點按選單旁邊，選單要自行收合
function closeMenu(){
	$('.dropMenu').removeClass('dropMenu-collapsed');
}

$('body').click(function(e){
	closeMenu();
});
$('.drop').click(function(e){
	e.stopPropagation();
	$('.dropMenu').toggleClass('dropMenu-collapsed');
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
