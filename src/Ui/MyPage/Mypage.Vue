<template>
  <div class="mypage">
     
    <div class="mysubscribe">

      <div class="subscribe">

        <h1>현재 구독(결제) 상태 - 영역</h1>

        <h2>구독전 or 1회 즐기는중 or 매월 구독중 or 3개월 구독중</h2>
        
      </div>
    

      <div class="delivery"> 

        <h1>현재 배송 상태!</h1>
        <h2>키트 기획중 -> 키트 준비중 -> 키트 포장중 -> 키트 배송중</h2>
        <h1>이런느낌</h1>

      </div>


      <div class="member"> 

        <h1>회원 정보 영역</h1>
        <h1>오른쪽 상단에 수정버튼 넣기</h1>
        <h1>비밀번호 번경 버튼도 가능하면 넣기</h1>

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
    .mysubscribe {
      width: 100%;
      height: 1500px;
      text-align: center;
    }

    .subscribe {
      width: 1200px;
      height: 400px;
      border: 1px solid black;
      
      margin: 0 auto;

      margin-top: 150px;
    }

    h1 {
      font-family: "KoPubDotumMedium";
    }

    .delivery {

      width: 1200px;
      height: 400px;
      border: 1px solid black;
      
      margin: 0 auto;

      margin-top: 50px;
    }

    .member {


      width: 1200px;
      height: 400px;
      border: 1px solid black;
      
      margin: 0 auto;

      margin-top: 50px;
    }

</style>
