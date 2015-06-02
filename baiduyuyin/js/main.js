(function() {
    function initPage() {
        document.addEventListener('touchmove',function(event){
        event.preventDefault(); },false);
        $('.shade').addClass('shadeAni');
        $('.page_0').css('visibility','visible');
        document.getElementById("page_1_1").addEventListener("webkitAnimationEnd", function() {
            $(".page_1_2_word").show();
            $(".word_con img").each(function(index){
                $(this).animate({
                    opacity:1
                },500,'ease-out',function(){},index*500
                );
            });
            $(".page_1_1").css('-webkit-transform','translateX(0)').addClass("page_1_1_hind_play");
        }, false);

        $('.page_0').on('swipeUp',function(){
            var currentPage = $(this);
            var nextPage = $('.page_1');

            currentPage.addClass('pt-page-moveToTop');
            nextPage.css('visibility','visible');
            nextPage.addClass('pt-page-moveFromBottom');
            nextPage.on('webkitAnimationEnd',function(){
                $('.page_1_1').addClass('page_1_1_animation');
            });
        });
        $('.microphone').on('click',function(){
			if($.os.ios){
				window.location.href="baiduboxapp://voicesearch?opennewwindow=&caller=$string&minver=3.8.0.0";
			}else{
				window.location.href = "intent:#Intent;action=com.baidu.searchbox.action.VOICESEARCH;category=android.intent.category.DEFAULT;S.search_source=api_mbaiducom_voice;end";
			}
        });
    }

    function getPosition(){
        var height = $('.page_1_pic').height();
        return parseInt(height*0.65);
    }
    window.initPage = initPage;
})();