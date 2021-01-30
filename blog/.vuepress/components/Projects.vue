<template>
    <div id="home-blog" class="home-blog home-page-main-class">
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
          <div v-if="page.frontmatter.tech" class="category-chip">
            <span v-for="tech in page.frontmatter.tech">
              {{tech}}
              </span>
          </div>
          <img v-if="page.frontmatter.image" :src="page.frontmatter.image"  />
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
      const projects = this.$site.pages.filter(i => {
        return i.frontmatter.hasOwnProperty("projects")
      })
      return projects.sort((a, b) => 
        new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      )
    },
  },
}
</script>

<style lang="stylus">

.home-blog-hero
  max-width: 100%
  position: relative;
  text-align: center;
  background: #f2f2f2;
  img 
    height: 300px;
    object-fit: cover;
    width: 100%

.home-blog
  article
    border: lightgrey solid 1px 
    box-sizing: border-box;  
    margin: 5px 5px  
  header
    align-items center
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
    background: black;
    text-align: center;
    padding: 2px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    a
      cursor pointer
      color white
      transition all 0.2s
      text-decoration none
      max-width: 50%;

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
    margin-bottom: 25px
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

.category-chip
  margin:0 auto;
  display: flex;
  padding: 5px 2px;
  position absolute;
  span 
    background #3fb28f
    padding-bottom 10px
    padding 5px 7px
    border-radius: 12px
    font-size 0.8rem
    margin-right: 5px;

.common-layout
  .content-wrapper
    padding-bottom 80px

.ui-post
  margin-bottom 25px
  padding-bottom: 0px;
  border-bottom 1px solid $borderColor
  
</style>
