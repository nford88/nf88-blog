<template>
    <div class="background-hero">
      <div class="hero-image">
      <div class="hero-container">
        <div class="hero-spiel">
          <h3><span>Software developer</span>, front end focussed. <br>I work on wide ranging projects as well write about tech.</h3>
        </div>
        <div class="hero-box hero-left">
            <div @click="scrollTo('home-about')" class="btn button-green">
              <h1>About</h1>
          </div>
        </div>
        <div class="hero-box hero-right">
          <div  @click="scrollTo('home-blog')"class="btn button-white">
            <h1>Blog</h1>
          </div>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    scrollTo(id){
        const ele = document.getElementById(id);
        // ele.getBoundingClientRect()
        const top = ele.closest('.content-wrapper');
        console.log(top);
        top.scrollIntoView();
        console.log(window);
      },
  },
}
</script>


<style lang="stylus" scoped>
.background-hero
  width 100%
  height 100vh
  background black

.hero-spiel
  width 100%
  text-align center


.hero-container
  display flex
  flex-wrap wrap
  justify-content center
  position relative
  padding 200px 200px 200px
  @media screen and (max-width: 787px)
    padding: 100px 15px  15px
    padding-top calc((100vh / 2) - 200px)
 
.hero-image
    background-image: 
       linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
       url("../../public/images/backgroundcomp.jpg")
    height: 50%;
    max-width:100%;
    height:100vh;
    vertical-align: middle;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

.hero-box
  width 200px
  height 200px
  justify-content center
  text-align center
  display: flex; 
  justify-content: center; 
  width: 47%;
  @media screen and (max-width:500px)
    height 100px
  .btn
    max-width 150px
    min-width 150px
    border-radius: 10px;
    border: 1px solid black;
    margin: auto;
    @media screen and (max-width:500px)
      min-width 100px
    h1
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
      color black
      font-size: 1.8rem;
      @media screen and (max-width:500px)
        font-size:1.2rem;

.hero-box:first-of-type
  padding-right 15px

.button-white
  background white

.button-green
  background-color $greenAccent!important


h1, h3, p
  color white

</style>