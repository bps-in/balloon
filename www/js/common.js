// 風船画面
var intervalID = null;
var randomNum = 0;
// カウントアップやカウントダウンをするユーザー定義関数
function countUpDown( num , randomNum) {
  var sampleOutput = document.getElementById( "sampleOutput" );
  sampleOutput.innerHTML = parseInt( sampleOutput.innerHTML ) + num;
  // if ((parseInt( sampleOutput.innerHTML ) + num) < 10) {
    // alert("バン");
              // clearInterval( intervalID );
  // } else {
  resizeImagePercent(parseFloat( sampleOutput.innerHTML ) + num);
    
  // }
}

// 画像を引数倍する
function resizeImagePercent( resizeRate ) {
  var resizeImg = document.getElementById("sampleA");
  resizeImg.width = resizeImg.naturalWidth * resizeRate;
  resizeImg.height = resizeImg.naturalHeight * resizeRate;
}
