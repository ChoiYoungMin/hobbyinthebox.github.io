<template>
    <nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <div class="row">
                    <div class="large-12 columns">
                        <div  class="col-md-4">
                            <ul class="nav navbar-nav">
                                <li class="hidden">
                                    <a href="#page-top"></a>
                                </li>
                                <li>
                                    <a href="#services">About</a>
                                </li>
                                <li>
                                    <a href="#portfolio">여기는 뭐하지?</a>
                                </li>
                                <li>
                                    <a href="#about">문의하기</a>
                                </li>
                            </ul>
                        </div>

                        <div  class="col-md-4 logo"> 
                            <ul class="nav navbar-nav">
                                <li>
                                    <img src="http://hobbyinthebox.co.kr/web/upload/masterskin/hib_logo.svg" width="250px" height="50px"/>
                                </li>
                            </ul>
                        </div>

                        <div  class="col-md-4">
                            <ul class="nav navbar-nav">
                                <li>
                                    <a class="rightM" href="#services"><span>취미 시작하기</span></a>
                                </li>
                                <li>
                                    <a class="rightM2"  href="#services"><span>로그인</span></a>
                                </li>
                            </ul>
                        </div>
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


@media screen and (max-width: 400px) {
  .rightM {
        border: 1px solid yellowgreen;
        border-radius: 30px;
        margin-left: 20px;

        margin-right: 20px;
    }

    .rightM2 span {

        font-family: "KoPubDotumBold";
        color: blue;
    }


    .rightM span {
        font-family: "KoPubDotumMedium";
        color: black;
    }
 
}

@media screen and (min-width: 401px) and (max-width: 500px) {
    
    
}

@media screen and (min-width: 801px) {

    .rightM {
        border: 1px solid yellowgreen;
        border-radius: 30px;
        margin-left: 20px;

        margin-right: 20px;
    }

    .rightM2 span {

        font-family: "KoPubDotumBold";
        color: blue;
    }


    .rightM span {
        font-family: "KoPubDotumMedium";
        color: black;
    }

}

</style>
