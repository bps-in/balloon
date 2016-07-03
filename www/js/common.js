// 風船画面
var intervalID = null;
var randomNum = 0;
// カウントアップやカウントダウンをするユーザー定義関数
function countUpDown( num , randomNum) {
    
    console.log("num");
    console.log(num);
    console.log("randomNum");
    console.log(randomNum);
    
    var countTime = $(".countTime").val();
    var sampleOutput = document.getElementById( "sampleOutput" );
    sampleOutput.innerHTML = parseInt( sampleOutput.innerHTML ) + num;
    // if ((parseInt( sampleOutput.innerHTML ) + num) < 10) {
        // alert("バン");
                            // clearInterval( intervalID );
    // } else {
    resizeImagePercent(countTime);
        
    // }
}

// 画像を引数倍する
function resizeImagePercent( resizeRate ) {
    var resizeImg = document.getElementById("balloon");
    resizeImg.width = resizeImg.naturalWidth * resizeRate;
    resizeImg.height = resizeImg.naturalHeight * resizeRate;
}
