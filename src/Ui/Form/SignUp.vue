<template>
  <div class="signupForm">
      <div class="container">
        <div class="card">
        <div class="card-block">

            <!--Header-->
            <div class="form-header blue-gradient">
                <h3><i class="fa fa-user"></i> 회원가입</h3>
            </div>

            <!--Body-->
            <div class="md-form">
                <i class="fa fa-user prefix"></i>
                <input type="text" id="form3" class="form-control">
                <label for="form3">아이디</label>
            </div>
            
            <div class="md-form">
                <i class="fa fa-lock prefix"></i>
                <input type="password" id="form4" class="form-control">
                <label for="form4">비밀번호</label>
            </div>

            <div class="md-form">
                <i class="fa fa-envelope prefix"></i>
                <input type="text" id="form2" class="form-control">
                <label for="form2">이메일</label>
            </div>

            <div class="md-form">
                <i class="fa fa-address-card prefix"></i>
                <input type="text" id="form2" class="form-control">
                <label for="form2">이름</label>
            </div>

            <div class="md-form">
                <i class="fa fa-phone-square prefix"></i>
                <input type="text" id="form2" class="form-control">
                <label for="form2">휴대폰 번호</label>
            </div>

            <div class="md-form">
                <i class="fa fa-birthday-cake prefix"></i>
                <input type="text" id="form2" class="form-control">
                <label for="form2">생년월일</label>
            </div>

            <div class="md-form">
                <i class="fa fa-info prefix"></i>
                <input type="text" id="form2" class="form-control">
                <label for="form2">성별</label>
            </div>

            <div class="md-form">
                <i class="fa fa-archive prefix"></i>
                <input type="text" id="form2" class="form-control">
                <label for="form2">취미</label>
            </div>
            
            <div class="text-center">
                <button class="btn btn-indigo">회원 가입</button>
                <hr>
            </div>

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
    .signupForm {
        width: 100%;
        height: 500px;
        margin-top: 300px;
    }

    i {
        text-align: center;
        margin-top: 10px;
    }

    .md-form label {
        padding-left: 10px;
    }
</style>
