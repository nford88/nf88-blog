---
date: 2020-9-23
tag: 
  - vps
  - blog
  - vuepress
  - zeit
  - serverless
  - jam
  - jamstack
author: Nick  
details: This is a blog consisting of articles on various tech topics
permalink: /migration-2-embrace-the-jam

---

# Migration Part 2 - Embrace the Jam!

![This is alt text](/images/jamstack.png)

This is second part of my article on migration. Part one is [here](/migration-1-vps-full-circle) 

In part one, I covered my pros and cons of having a VPS setup for personal projects. Whilst offering a near endless amount of control, the effort involved to maintain the upkeep of a VPS was time consuming but ultimately not great for my workflow. I was consistently worried about publishing projects that "weren't ready", which resulted in me not publishing projects at all. 

I had been reading about the [JAM-stack concepts](https://medium.com/notonlycss/why-the-jamstack-is-becoming-so-popular-a26133b12a30) last year and was fortunate enough to attend my local Javascript group meetup DublinJS where Chris Manson [twitter](https://twitter.com/real_ate) gave a talk about the stack, video of which is included below.
# 

<div style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/eQULGb10MbQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

# # 

## *Server-less but gives you more*

In a nutshell, JAM stack is about removing the complications of developing a product by affectively "out-sourcing" some of its moving parts away from a dependency on a server. This not only makes the site faster, as you are not reliant on the restraints of your system, but enables you to scale more easily using CDN's. The main upside for myself with this approach was the developer experience. The process of configuring a server, configuring a DB, deploying builds, maintaining security and other maintenance is that takes away from when I really enjoy - writing code. By adopting a more streamlined approach to my development, I ultimately wanted it to allow me to focus more on evolving and reiterating ideas.

## The setup

So the beauty of a JAM stack is that it fits in with so many PaaS and SaaS products (platforms/software as a service) currently on offer you really can customise how you want your application to be handled. It could be a site serving static content, a markdown static site generator or a full blown Next.js full stack application. Heroko, Netlify, GitHub pages are Google Cloud are to name a few, but I settled with [Vercel](https://vercel.com/) (formally Zeit). Reason for this was I it handled to many languages but namely it didn't "sleep" your products like Heroku does, its interface is very developer friendly, it offers free SSL and its free at the hobbyist tier. 

Portfolio Site

|    | Solution |
| -- | ------- |
| DB   | None  |
| CMS   | None |
| Content   | Serving Static HTML and Assets |

Blog Site

|    | Solution |
| -- | ------- |
| DB   | None  |
| CMS   | Static site generator - VuePress |
| Content | Markdown |
 
 I didn't have the capacity to rework a brand new site, portfolio and blog all in one go, so I set about my approach my sites in two stages. Firstly, I was going to export my current, albeit slightly dated CMS site from 2016 and serve this as it was. Secondly, I would create a new blog site to host content and articles from, whilst allowing me to work on a new portfolio feature for release later this year which would then become the primary feature and I could archive my existing portfolio.
 
 By going for this approach it allowed me to still be creating some new tech content on the blog without worrying too much about the design as markdown content could always be used with any system. My domain and portfolio remained the same and I still has a visible presence. The last thing I wanted was for potential clients to see my website as not accessible or "coming soon". When the new site was ready for launch I would merge the feature branch to master, swap the domains over and have a seemless transition.

 There was very little to plan for with the existing site. As written previously, it had a PHP CMS but I had no intention of using this. Instead I did a simple wget command and saved all the assets and html pages in a directory (make sure your address is not a redirect but the hosted URL, otherwise you may only end up with a solitary index.html)  

> $ wget -p -k -e robots=off https://nick-ford.com/

I then spun a brand new project and used Express as a server. It was very easy, 4 line index.js file serving the files, with routes in another Vercel specific file so the server knew how to handle the html and assets. I connected the repo to my account in Vercel, selected the branch, added the domain and voila, my site was up and running with very little effort. With GitHooks, the site automatically rebuilds whenever I push new changes to master branch. Also helpful is that it creates a build for every commit I push to a development branch with a unique URL without affecting the production branch, so I can demonstrate my work in progress to peers before making it live. 

![vercel site configuration](/images/vercel-nick-site.png)

