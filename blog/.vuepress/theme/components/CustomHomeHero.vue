<template>
    <div class="background-hero">
      <div class="hero-image">
      <div class="hero-container">
        <div class="hero-spiel">
          <h3><span>Software developer</span>, front end focussed. <br>I work on wide ranging projects as well write about tech.</h3>
        </div>
        <div class="hero-box hero-left">
          <a href="" class="btn button-white"> <h1>my works</h1></a>
        </div>
        <div class="hero-box hero-right">
          <a href="/#base-list-layout" class="btn button-green"><h1>my words</h1></a>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  
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
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  padding 200px 200px 200px

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
  .btn
    width: 150px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid black;
    h1
      margin-block-start: 0em;
      margin-block-end: 0em;
      color white


.button-white
  background white

.button-green
  background-color green!important


h1, h3, p
  color white

</style>