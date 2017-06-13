<template>
  <div id="content">

    <div class="top">

    </div>

    <div class="info">
      <h3 class="uppercase mb40 mb-xs-24">Subscribe your hobby</h3>
      <p class="lead mb0">
        <span style="font-family:nanumgothic;">어린시절 수수깡, 찰흙 하나만으로도 작은 예술가였던 당신,<br>손으로 무언가를 만들면서 느꼈던 즐거움 기억나시나요?<br>우리 모두의 마음 속엔 순수한 열정이 잠들어 있습니다.<br>매달 새로운 취미를 맛보고 나도 몰랐던 내 안의 전문가를<br>만나보세요. 일상 속 설렘이 찾아갑니다!<br><br>오로지 나를 위한 시간, 아날로그 감성 회복프로젝트<br>- 취미정기배송 서비스 '하비인더박스'</span>
      </p>
    </div>

    <div class="box">
      <div class="container">
          <p>앵콜 박스 영역</p>
          <span>인기있는 키트를 판매어쩌구어쩌구</span>
        <div class="row">
          <div class="col-xs-12 col-md-4"><img src="http://hobbyinthebox.co.kr/web/product/medium/201610/26_shop1_689474.jpg"></div>
          <div class="col-xs-12 col-md-4"><img src="http://hobbyinthebox.co.kr/web/product/medium/201703/36_shop1_738337.jpg"></div>
          <div class="col-xs-12 col-md-4"><img src="http://hobbyinthebox.co.kr/web/product/medium/201703/38_shop1_541956.jpg"></div>
        </div>
      </div>
    </div>


    <div class="monthKit">

    </div>

    <div class="instarfeed">
        <div class="text">
          <p>하비인더박스 인스타그램 - 수정필요!</p>
        </div>

        <div id="owl-demo" class="owl-carousel owl-theme">
          <div class="item"></div>
          <div class="item"><h1>2</h1></div>
          <div class="item"><h1>3</h1></div>
          <div class="item"><h1>4</h1></div>
          <div class="item"><h1>5</h1></div>
          <div class="item"><h1>6</h1></div>
          <div class="item"><h1>7</h1></div>
          <div class="item"><h1>8</h1></div>
          <div class="item"><h1>9</h1></div>
          <div class="item"><h1>10</h1></div>
          <div class="item"><h1>12</h1></div>
          <div class="item"><h1>13</h1></div>
          <div class="item"><h1>14</h1></div>
          <div class="item"><h1>15</h1></div>
          <div class="item"><h1>16</h1></div>
          <div class="item"><h1>17</h1></div>
          <div class="item"><h1>18</h1></div>
          <div class="item"><h1>19</h1></div>
          <div class="item"><h1>120</h1></div>
        </div>


    </div>

    <div class="footer">
      <div class="company">
        <p>회사 정보 영역</p>
      </div>
    </div>

  </div>

</template>


<script>

    export default {
        
    }
</script>

<style scoped>

@media screen and (min-width: 1200px) {

  .info {
    width: 100%;
    height: 500px;
    text-align: center;
    margin-top: 150px;
  }


  .instarfeed {
    width:  100%;
    height: 600px;
    background: #e2e2e2;
  }


.instarfeed p{
    color: green;
    font-size: 24px;
    text-align: center;
    margin-right: 50px;
    font-family: "KoPubDotumlLight";
    padding-top: 120px;
  }


  .container {
    height: 1000px;
    text-align: center;
  }

  .top {
    height: 1000px;
    background-image:url(../../assets/img/main.jpg);
    background-repeat:no-repeat;
    background-attachment:scroll;
    background-position:center center;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    background-size:cover;
    -o-background-size:cover;
    text-align:center;
    color:#fff

  }

  #owl-demo .item{

    padding: 30px 0px;
    margin: 10px;

    margin-top: 80px;
    color: #FFF;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    text-align: center;

    height: 200px;

    background-size: cover;
    background-image: url("https://scontent-hkg3-1.cdninstagram.com/t51.2885-15/s640x640/e35/18947615_1860644674257952_8173997048383668224_n.jpg");
  } 


  .monthKit {

    width: 100%;
    height: 650px;
    text-align: center;
    background : url("../../assets/img/main2.jpg");
    background-size: cover;
  }


  .footer {
    margin: 30px;
    width: 100%;
    height: 200px;
    text-align: center;
  }

  .footer .company {

    width: 20%;
    text-align: center;
  }

  .box {

    height: 500px;
    background: #f2f2f2;
  }


  .container p {
    color: black;
    margin-top: 40px;
    font-size: 36px;
    text-align: center;
    margin-right: 50px;
    font-family: "KoPubDotumlMedium";

  }

  .container span {

    color: green;
    margin-top: 20px;
    font-size: 24px;
    text-align: center;
    margin-right: 50px;
    font-family: "KoPubDotumlLight";

  }

  .row .col-md-4 {

    width: 300px;
    height: 250px;
    background: #f2f2f2;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;

  }

  .row .col-md-4 img {

   border-radius: 10px;
    width: 300px;
    height: 250px;
  }
}

@media screen and (min-width: 300px) and (max-width: 999px) {


  .instarfeed {
    width:  100%;
    height: 350px;
    background: #e2e2e2;
  }


.instarfeed p{
    color: green;
    font-size: 24px;
    text-align: center;
    margin-right: 50px;
    font-family: "KoPubDotumlLight";
  }

 .container {
    height: 1000px;
    text-align: center;
  }

  .top {
    height: 1000px;
    background-image:url(../../assets/img/main.jpg);
    background-repeat:no-repeat;
    background-attachment:scroll;
    background-position:center center;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    background-size:cover;
    -o-background-size:cover;
    text-align:center;
    color:#fff

  }

 #owl-demo .item{

    background: #3fbf79;
    padding: 30px 0px;
    margin: 10px;

    margin-top: 30px;
    color: #FFF;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    text-align: center;

    height: 200px;
  } 


  .monthKit {

    width: 100%;
    height: 650px;
    text-align: center;
    background : url("http://hobbyinthebox.co.kr/web/upload/masterskin/main.jpg");
    background-size: cover;
  }

  .footer {
    margin: 30px;
    width: 100%;
    height: 300px;
    text-align: center;
  }

  .footer .company {

    width: 20%;
    text-align: center;
  }

  .box {

    height: 1300px;
    background: #f2f2f2;
  }


  .container p {
    color: black;
    margin-top: 60px;
    font-size: 36px;
    text-align: center;
    margin-right: 50px;
    font-family: "KoPubDotumlMedium";

  }

  .container span {
    color: green;
    margin-top: 20px;
    font-size: 24px;
    text-align: center;
    margin-right: 50px;
    font-family: "KoPubDotumlLight";

  }

  .row .col-md-4 {
    width: 100%;
    height: 250px;
    background: #f2f2f2;
    margin-top: 30px;
    margin-bottom: 60px;
    text-align: center;
  }

  .row .col-md-4 img {

   border-radius: 80px;
    width: 350px;
    height: 300px;
  }


 
}

@media screen and (min-width: 1000px) and (max-width: 1199px) {
    

  .instarfeed {
    width:  100%;
    height: 350px;
    background: #e2e2e2;
  }


.instarfeed p{
    color: green;
    font-size: 24px;
    text-align: center;
    margin-right: 50px;
    font-family: "KoPubDotumlLight";
  }

     .container {
    height: 1000px;
    text-align: center;
  }

   #owl-demo .item{

    background: #3fbf79;
    padding: 30px 0px;
    margin: 10px;

    margin-top: 30px;
    color: #FFF;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    text-align: center;

    height: 200px;
  } 


  .monthKit {

    width: 100%;
    height: 650px;
    text-align: center;
    background : url("http://hobbyinthebox.co.kr/web/upload/masterskin/main.jpg");
    background-size: cover;
  }

  .top {
    height: 1000px;
    background-image:url(../../assets/img/main.jpg);
    background-repeat:no-repeat;
    background-attachment:scroll;
    background-position:center center;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    background-size:cover;
    -o-background-size:cover;
    text-align:center;
    color:#fff

  }

  .footer {
    margin: 30px;
    width: 100%;
    height: 300px;
    text-align: center;
  }

  .footer .company {

    width: 20%;
    text-align: center;
  }

  .box {

    height: 600px;
    background: #f2f2f2;
  }


  .container p {
    color: black;
    margin-top: 60px;
    font-size: 36px;
    text-align: center;
    margin-right: 50px;
    font-family: "KoPubDotumlMedium";

  }

  .container span {
    color: green;
    margin-top: 20px;
    font-size: 24px;
    text-align: center;
    margin-right: 50px;
    font-family: "KoPubDotumlLight";

  }

  .row .col-md-4 {
    width: 300px;
    height: 250px;
    background: #f2f2f2;
    margin-top: 30px;
    margin-right: 10px;
    text-align: center;
  }

  .row .col-md-4 img {

   border-radius: 10px;
    width: 250px;
    height: 200px;
  }
    
}




  
</style>
