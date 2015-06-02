function is_weixn() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}
var FristImg = ['images/loadding_bg.png', 'images/loadding_proc.png'];
var loader = new PxLoader();
for (var i = 0; i < FristImg.length; i++) {
    loader.addImage(base_url + FristImg[i]);
}
loader.start();
loader.addCompletionListener(function() {
    loader = null;
    loader = new PxLoader();
    var LoadArr = [];
    LoadArr.push("images/arrow.png");
    LoadArr.push("images/cha.png");
    LoadArr.push("images/gao.png");
    LoadArr.push("images/kao.png");
    LoadArr.push("images/wo.png");
    LoadArr.push("images/yao.png");
    LoadArr.push("images/form_icons2.png");
    LoadArr.push("images/loadding_bg.png");
    LoadArr.push("images/loadding_proc.png");
    LoadArr.push("images/page_1_1.jpg");
    LoadArr.push("images/page_1_1_hand.png");
    LoadArr.push("images/page_1_2.jpg");
    LoadArr.push("images/page_1_2_word.png");
    LoadArr.push("images/page1.jpg");
    for (i = 0; i < LoadArr.length; i++) {
        loader.addImage(base_url + LoadArr[i]);
        //loader.addImage(LoadArr[i]);
    }
    loader.start();
    loader.addProgressListener(function(e) {
        var NUM = Math.ceil(e.completedCount / e.totalCount * 100);
        var N1 = 0,
            N2 = 0;
        NUM = Math.min(99, NUM);
        if (NUM < 10) {
            N1 = 0;
            N2 = NUM;
        } else {
            N1 = NUM.toString().charAt(0);
            N2 = NUM.toString().charAt(1);
        }
        document.getElementById('loadingnum').innerHTML = N1 + N2 + "%";
        $('.loadbar2').width(NUM / 100 * 380);
    });
    loader.addCompletionListener(function() {
        $('#newloading').hide();
        initPage();
    });
});