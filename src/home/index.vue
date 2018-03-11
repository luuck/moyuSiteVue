<template lang="html">
  <div>
    <heador/>
    <Top/>
    <Banner/>
    <Article/>
    <Footor/>
    <Siderbor/>
  </div>
</template>

<script>
  import Heador from '../public/header.vue';
  import Top from './htop.vue';
  import Banner from './hbanner.vue';
  import Article from './harticle1.vue';
  import Footor from '../public/footer.vue';
  import Siderbor from './hsiderbar.vue';
  export default{
      components:{
        Heador,
        Top,
        Banner,
        Article,
        Footor,
        Siderbor
      }
  }
</script>

<style lang="css">

div{
}
</style>
