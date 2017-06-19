<template>
  <div class="HobbyStartInfo">

      <div class="Info">

        <div class="InfoText">

            <div class="container">
                <h1>취미 정기배송 플랜 선택</h1>
                <hr/>
            </div>
        </div>

        <div class="InfoBox">
            <div class="container">
                <div class="row">

                    <div class="col-xs-3">
                        <img src="https://www.baconbox.co/wp-content/uploads/2016/12/size-01.png"></img>
                        <div class="BoxInfoText">
                            <h3>한번만 즐겨보기!</h3>
                            <h5>33000 원</h5>
                        </div>
                    </div>

                    <div class="col-xs-3">
                        <img src="https://www.baconbox.co/wp-content/uploads/2016/12/size-02.png"></img>
                        <div class="BoxInfoText">
                            <h3>매월 정기배송</h3>
                            <h5 style="text-decoration:line-through; color:red;"> 33,000 원 </h5> 
                            <h5 style="color:blue;">29,900 원 ( 15% )</h5>
                            <h5>( 매월 15일 결제 )</h5>
                        </div>
                    </div>

                    <div class="col-xs-3">
                        <img src="http://hobbyinthebox.co.kr/web/product/medium/201610/16_shop1_543672.jpg"></img>
                        <div class="BoxInfoText">
                            <h3>3개월 정기배송</h3>
                            <h5 style="text-decoration:line-through; color:red;"> 119,700 원 </h5> 
                            <h5 style="color:blue;">85,200 원 ( 15% )</h5>
                            <h5>( 3개월마다 결제 )</h5>
                        </div>
                    </div>

                    <div class="col-xs-3">
                        <img src="http://hobbyinthebox.co.kr/web/product/medium/201610/23_shop1_834780.jpg"></img>
                        <div class="BoxInfoText">
                            <h3>6개월 정기배송</h3>
                            <h5 style="text-decoration:line-through; color:red;"> 239,400 원 </h5> 
                            <h5 style="color:blue;">161,500 원 ( 15% )</h5>
                            <h5>( 6개월마다 결제 )</h5>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="InfoDetail">
            
            <div class="container">
                <hr class="hrc"/>
                <h1>샬라샬라 아무말 대잔치</h1>

                <h2>점심은 콩나물국밥</h2>

                <h3>저녁은 떡순이</h3>


                <h1>하비인더 박스는 사랑입니다~_~</h1>
            </div>
        </div>


      </div>
  </div>
</template>


<script>
    export default {
        
        created() {
            //Scrolls to top when view is displayed
            window.scrollTo(0, 0);
        }
    }
</script>

<style scoped>

    .hrc {
        height: 0.5px;
        margin-top: 50px;
        margin-left: 30%;
        margin-right: 30%;
        background: black;
    }

    .InfoDetail {
        width: 100%;
        height: 300px;
        position: absolute;
        
        margin-top: 800px;
        text-align: center;

    }

    .InfoBox {

        position:absolute;
        width: 100%;
        height: 300px;
        margin-top: 350px;
        text-align: center;
        


    }


    .InfoBox .row .col-xs-3 {
        width: 25%;
        height: 250px;
        text-align: center;
        border-radius: 10px;
    }

    .InfoBox .row .col-xs-3 img{
        width: 90%;
        height: 90%;
    }



    .HobbyStartInfo {
        position: relative;
        width: 100%;
        height: 1200px;
        text-align: center;
        background: #f7f7f7;
        margin: 0 auto;
        overflow-x : auto;
    }

    .info {
        width: 1200px;
        height: 100%;
        margin: 0 auto;

    }

    .InfoText{
        width: 100%;
        height: 300px;
        position: absolute;
        margin-top: 170px;
        text-align: center; 

    }

    hr {
        height: 0.5px;
        margin-top: 50px;
        margin-left: 20%;
        margin-right: 20%;
        background: black;
    }
    
</style>

