<template>
    <div id="home-blog" class="home-blog">
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
          <div v-if="page.frontmatter.category" class="category-chip">
            <router-link :to="'blog/'+ page.frontmatter.category"> {{page.frontmatter.category}}</router-link>
          </div>
        </header>

        <div class="home-blog-hero">
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
  width: 100%
  height 250px
  img 
    width: 100%
    height: 100%

.home-blog
  article
    border: lightgrey solid 1px 
    padding: 10px;
  header
    align-items center

.category-chip
  margin:0 auto;
  padding-bottom 10px
  a
    background #3fb28f
    padding 5px 5px
    border-radius: 12px
    font-size 1rem

.common-layout
  .content-wrapper
    padding-bottom 80px

.ui-post
  padding-bottom 25px
  margin-bottom 25px
  border-bottom 1px solid $borderColor

.ui-post-title
  font-family 'Arimo', sans-serif
  font-size 28px
  border-bottom 0

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
