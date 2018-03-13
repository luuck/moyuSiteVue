<template lang="html">
      <div :class="$style.bg" id="bg">
        <div :class="$style.bgCon">
          <h3>Welcome to here!</h3>
          <i v-on:click="go"></i>
         </div>
      </div>
</template>

<script>

export default {
  mounted : function(){
    window.addEventListener('load', function(){
      $('#bg').css('opacity','1');
    });

  },
  methods:{
    go:function(){
      $('html,body').animate({scrollTop:790}, 800);
    }
  }
}
</script>

<style lang="scss" module>
  .bg{
    width: 100%;
    background: url(../../static/img/banner-bg.png) #F6C8AE  no-repeat center top;
    opacity: 0;
    transition: opacity .5s;
    height: 578px;
    text-align: left;
    .bgCon{
      width: 1020px;
      margin: 0 auto;
      color: #fff;
      height: 100%;
      text-align: center;
      h3{
        font-family: source-code-pro,sans-serif;
        font-size: 58px;
        font-weight: 800;
        padding-top: 10px;
      }
      i{
        cursor: pointer;
        display: inline-block;
        background: url("../../static/img/arrow.png");
        width: 48px;
        height: 48px;
        animation:gogogo 2s infinite ease-in-out;
      }

      @keyframes gogogo{
        0%,100%{
          transform:scale(1.0);
          -moz-transform:scale(1.0);
          -o-transform:scale(1.0);
          -webkit-transform:scale(1.0);
          -ms-transform:scale(1.0);
          opacity:.5
        }
        50%{
          transform:scale(1.5);
          -moz-transform:scale(1.5);
          -o-transform:scale(1.5);
          -webkit-transform:scale(1.5);
          -ms-transform:scale(1.5);
          opacity:1
        }

      }

    }
  }
</style>
