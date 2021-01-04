<template>
    <div id="home-blog" class="home-blog home-page-main-class">
    <h1>Blog highlights</h1>
    <p>Some recent blog highlights. To view more 
      <router-link to='blog/'> click here </router-link>
    </p>
    <div class="ui-posts" itemscope itemtype="http://schema.org/Blog">
      <article
        v-for="page in pages"
        :key="page.key"
        class="ui-post"
        itemprop="blogPost"
        itemscope
        itemtype="https://schema.org/BlogPosting"
      >
        <meta itemprop="mainEntityOfPage" :content="page.path" />
        
        
        <header class="ui-post-title" itemprop="name headline">
          <NavLink :link="page.path">{{ page.title }}</NavLink>
        </header>

        <div class="home-blog-hero">
          <img v-if="page.frontmatter.image" :src="page.frontmatter.image"  />
        </div>
        <div v-if="page.frontmatter.category" class="category-chip">
            <span>{{page.frontmatter.category}}</span>
          </div>
      </article>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import dayjs from 'dayjs'
import { NavigationIcon, ClockIcon, TagIcon } from 'vue-feather-icons'


export default {
  components: { 
    ClockIcon, 
    TagIcon,
    NavigationIcon
  },
  data() {
    return {
    }
  },
  computed: {
    pages() {
      const homeFilter = this.$site.pages.filter(i => {
        return i.frontmatter.hasOwnProperty("home_post")
      })
      return homeFilter.sort((a, b) => 
        new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      )
    },
  },

  created() {
  },

  methods: {

    resolvePostDate(date) {
      return dayjs(date).format(
        this.$themeConfig.dateFormat || 'ddd MMM DD YYYY'
      )
    },

    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },
  },
}
</script>

<style lang="stylus">

.home-blog-hero
  max-width: 100%
  height: 160px;
  position: relative;
  img 
    width: 100%;
    max-height: 160px;

.home-blog
  article
    border: lightgrey solid 1px 
    box-sizing: border-box;  
    margin: 5px 5px  
  header
    align-items center

.category-chip
  margin:0 auto;
  display: flex;
  padding: 5px 2px;
  justify-content: center;
  span 
    background #3fb28f
    padding-bottom 10px
    padding 5px 5px
    border-radius: 12px
    font-size 0.8rem

.common-layout
  .content-wrapper
    padding-bottom 80px

.ui-post
  margin-bottom 25px
  border-bottom 1px solid $borderColor


.home-blog
  .ui-posts
    display: flex;
    flex-wrap: wrap;
    article 
      flex: 0 48%;
      @media (max-width: $MQMobile)
        flex: 0 100%;


  .ui-post-title
    font-family 'Arimo', sans-serif
    font-size: 1.2em;
    min-height: 2.4em;
    border-bottom 0
    font-style: normal;
    font-weight: 600;
    background: #d3d3d34a;
    text-align: center;
    padding: 2px 2px;
    a
      cursor pointer
      color $darkTextColor
      transition all 0.2s
      text-decoration none

      &:hover
        text-decoration underline

  .ui-post-summary
    font-size 14px
    color rgba($darkTextColor, 0.54)
    font-weight 200

  .ui-post-meta
    display inline-flex
    align-items center
    font-size 12px
    line-height 12px

    &:not(:last-child)
      margin-bottom 3px
      margin-right 20px

    svg
      margin-right 5px
      width 14px
      height 14px

    @media (max-width: $MQMobile)
      display flex

      &:not(:last-child)
        margin-bottom 10px

  .ui-post-author
    color rgba($darkTextColor, 0.84)
    font-weight 400

  .ui-post-date
    color rgba($darkTextColor, 0.54)
    font-weight 200

  .ui-post
    :last-child
      padding-bottom: 2px 

  .ui-post-tag
    color rgba($darkTextColor, 0.54)
    font-weight 200

    a
      color inherit
      font-weight 200
      text-decoration none
      margin-right 5px

      &:hover
        color $accentColor
</style>
