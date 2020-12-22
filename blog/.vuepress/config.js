const cvPdf = 'https://nick-ford.com/NickFordDevCV011220.pdf';
module.exports = {
  port: 8585,
  title: 'Nick Ford',
  description: 'This is a blog example built by VuePress',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@300&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Arimo&display=swap' }],
  ],
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/blog/',
      },
      {
        text: 'CV',
        link: cvPdf,
      }
    ],

    directories: [
      {
        id: 'blog',
        dirname: '_posts',
        path: '/blog/',
        pagination: {
          lengthPerPage: 5,
        },
        layout: 'ListLayout'
      },
      {
        id: 'demo',
        dirname: '_demo_posts',
        path: '/demo_posts/',
        pagination: {
          lengthPerPage: 5,
        },
        layout: 'ListLayout'
      },
    ],

    frontmatters: [
      {
        id: 'tag',
        keys: ['tag', 'tags'],
        path: '/tag/',
      },
      {
        id: 'home',
        keys: ['home_post'],
        path: '/',
        layout: 'HomeBlogLayout'
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/nford88',
        },
        {
          type: 'linkedin',
          link: 'https://linkedin.com/nickford2',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
  },
}
