<template>
    <div class="form"> 
        <div class="container">

            <div class="loginText">
                <h1>로그인</h1>
                <hr/>
            </div>       
            <div class="loginForm">

                <div class="md-form">
                    <i class="fa fa-envelope prefix"  aria-hidden="true"></i>
                    <input type="text" id="form2" class="form-control" placeholder="이메일을 입력하세요">
                    <label for="form2"></label>

                    <i class="fa fa-key prefix" aria-hidden="true"></i>
                    <input type="password" id="form2" class="form-control" placeholder="비밀번호">
                    <label for="form2"></label>
                </div>


               
                <button type="button" class="btn btn-primary">로그인</button>
                 <router-link to = "/signup" class="rightM2">
                    <button type="button" class="btn btn-primary">회원가입</button>
                 </router-link>

                <p>비밀번호 찾기..</p>
                
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
    h1 {
        font-size: 70px;
        font-family: "KoPubDotumBold";
    }

    .loginText hr {
        width:100%;
        height: 2px;
        background: black;
    }

    .form {
        width: 100%;
        height: 1000px;
        background: #ffffff;
    }

    .loginText {
        margin-left: 10%;
        margin-right: 10%;
        text-align: center;
        margin-top: 200px;
        width: auto;
        height: 50px;
    }

    .loginForm {
        margin-left: 300px;
        margin-top: 150px;
        width: 500px;
        height: 500px;
    }

    .loginForm input {
        top: 20px;
        width: 400px;

        border-color: gray;
        background: transparent;
        border-width: 2px;
        padding: 17px 24px;
        height: 1px;
    }

    .loginForm button {
        margin-top: 15px;
        width: 500px;
        height: 40px;
    }
    .loginForm p {
        color: black;
        font-family: "KoPubDotumBold";
        margin-top: 5px;
        float: right;
    }

    .btn-primary {
        border-color: #337ab7;
    }

    .btn-primary:hover, .btn-primary:focus, .btn-primary:active {
        background: #337ab7;
        
    }
</style>
