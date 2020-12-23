<template>
  <div class="wide">
    <div id="home-about" class="inner content-wrapper" >
      <div class="hero-container">
        <h1>About Me</h1>
      </div>
      <div class="home-about--info">
        <p>I'm Nick, a long time hobby coder before going back to college to become full time developer at 29.</p>
        <p>Predominantly JavaScript based, but enjoy getting stuck into IoT and UX projects.</p>
        <p>Motivated to design and build solutions</p>
        <p>A keen cook who loves beer, I've also built a pico-brewery</p>
      </div>  
    </div>
  </div>
</template>

<script>


export default {
  
  data() {
    return {
    }
  },
  computed: {
    pages(){
      return this.$pages
    },
  },

  created() {
  },

  methods: {

    
  },
}
</script>

<style lang="stylus">

#home-about.content-wrapper
  min-height:unset

</style>
