// 風船画面
var intervalID = null;
var randomNum = 0;
// カウントアップやカウントダウンをするユーザー定義関数
function countUpDown( num , randomNum) {
    
    console.log("num");
    console.log(num);
    console.log("randomNum");
    console.log(randomNum);
    
    var countTime = parseInt($("#countTime").val());
    countTime++;
    $("#countTime").val(countTime);
    console.log("countTime");
    console.log(countTime);
    console.log(countTime < randomNum);
    if (countTime > randomNum) {
        // alert("バン");
        clearInterval( intervalID );
        location.href = "result.html";
    } else {
        resizeImagePercent(countTime * 2);
        
    }
}

// 画像を引数倍する
function resizeImagePercent( resizeRate ) {
    var resizeImg = $("#balloon");
    $("#balloon").animate({ 
        top: 0,
        left: 0,
        width: resizeImg.width() + resizeRate +'px',
        height: height = resizeImg.height() + resizeRate+'px'
    }, 1000 );
}
