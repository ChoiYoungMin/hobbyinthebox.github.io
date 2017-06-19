<template>
    <nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <div class="row">
                        <div  class="col-xs-4">
                            <ul class="nav navbar-nav">
                                <li class="hidden">
                                    <a href="#page-top"></a>
                                </li>
                                <li>
                                    <router-link to = "/about"> About</router-link>
                                </li>
                                <li>
                                    <a href="#portfolio">이벤트</a>
                                </li>
                                <li>
                                    <a href="#about">문의하기</a>
                                </li>
                            </ul>
                        </div>

                        <div  class="col-xs-4 logo"> 
                            <router-link to = "/">
                                <ul class="nav navbar-nav">
                                    <li>  
                                            <img src="http://hobbyinthebox.co.kr/web/upload/masterskin/hib_logo.svg"/>
                                    </li>
                                </ul>
                            </router-link>
                        </div>

                        <div  class="col-xs-4 right">
                            <ul class="nav navbar-nav">
                                <li>
                                    <router-link to = "/hobbystart" class="rightM"><span>취미 시작하기</span></router-link>
                                    
                                </li>

                                <li>
                                    <router-link to = "/login" class="rightM2"><span>로그인</span></router-link>
                                </li>

                                <li>

                                    <router-link to = "/mypage" class="rightM2"><span>마이페이지</span></router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>

            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

</template>

<script>
    
</script>

<style scoped>

    .rightM {
        border: 1px solid yellowgreen;
        border-radius: 30px;
    }

    .rightM2 span {

        font-family: "KoPubDotumBold";
        color: blue;
    }


    .rightM span {
        font-family: "KoPubDotumMedium";
        color: black;
    }


    img {

        width : 100%;
        height : 50px;
        margin: 0 auto;
    }


    .rightM {
        margin-left: 50px;
    }



    .col-xs-4.right {
        margin: 0 auto;
        text-align:  center;
    }

    @media screen and (max-width: 800px) {
        .col-xs-4 {
            display:none;
        }

        .col-xs-4.logo {
            display: inherit;
            margin-left: 10%;
        }
    }

</style>
