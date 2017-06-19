<template>
  <div class="About">
    <img src="http://hobbyinthebox.co.kr/web/upload/about_page.jpg"></img>
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
    .About {
        width: 100%;
        height: 6200px;
        text-align: center;
        background: #f7f7f7;
    }

    .About img {
        margin-top: 50px;
    }

    
</style>

