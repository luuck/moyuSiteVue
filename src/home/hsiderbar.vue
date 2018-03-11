<template lang="html">
  <div>
    <div type="button" class="back-top small" @click="backTop()" v-show="backTopShow">返回顶部</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        backTopShow:false
      }
    },
    components: {},
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      backTop() {
        $('html,body').animate({scrollTop:10}, 800);
      },
      handleScroll(){
        if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
          this.backTopShow=true;
        }
        else {
          this.backTopShow=false;
        }
      }
    }
  }
</script>

<style lang="css" >
  .back-top {
    position: fixed;
    right: 50px;
    bottom: 50px;
    display: inline-block;
    background-color: #F04752;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 30px;
    padding: 5px;
    box-shadow: 0 4px 8px 0 rgba(223,84,87,0.5);
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    font-size: 12px;
  }
</style>
