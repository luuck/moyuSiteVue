<template>
  <div :class="$style.header">
    <div :class="$style.headerCon">
      <i></i><span>Lu Blog</span>
      <div :class="$style.nav"><a href="">Skill</a><a href="">Experice</a><a href="">Hobby</a><a href="">Contact</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "",
    data: () => ({})
  }
</script>
<style lang="scss" module>
  @import "../assets/css/layout";

  $h-height: 80px;
  $h-width: 990px;
  $i-height: 36px;
  $i-width: 36px;
  .header {
    border-bottom: 1px solid #e5e5e5;
    height: $h-height;
    line-height: $h-height;
    color: #000;
    .headerCon {
      width: $h-width;
      height: $h-height;
      line-height: $h-height;
      margin: 0 auto;
      background-color: #fff;
      font-size: 16px;
      position: relative;
      font-family: "Adobe Clean", sans-serif;

      display: flex;

      i {
        content: '';
        background: url(../assets/img/favicon.jpg);
        display: inline-block;
        width: $i-width;
        height: $i-height;
        /*position: absolute;*/
        margin-top: $h-height / 2  - $i-height / 2;
        /*left: 0;*/
      }
      span {
        /*float: left;*/
        padding-left: 5px;
      }
      .nav {
        /*float: right;*/
        flex: 1;
        transition: background-color .3s;
        a {
          width: 100px;
          text-decoration: none;
          @include flex(4, '', nowrap, center, center);
          &:hover {
            background-color: rgba(237, 237, 237, .3);
            transition: background-color .3s;
            color: #000;
          }
        }
      }
    }
  }
</style>
