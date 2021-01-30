const cvPdf = 'https://nick-ford.com/NickFordDevCV011220.pdf';
module.exports = {
  port: 8585,
  title: 'Nick Ford',
  description: 'Software Developer Blog and Portfolio Site',
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Pacifico&family=Arimo:ital,wght@0,500;0,600;1,600&display=swap'
    }],
    ['script', {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-HWMKXC3B9Q'
    }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-HWMKXC3B9Q');
  `],
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
      }
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
