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

I had been reading about the (JAM-stack concepts)[https://medium.com/notonlycss/why-the-jamstack-is-becoming-so-popular-a26133b12a30] last year and was fortunate enough to attend my local Javascript group meetup DublinJS where Chris Manson [twitter](https://twitter.com/real_ate) gave a talk about the stack, video of which is included below.
# 

<div style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/eQULGb10MbQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

# # 

## *Server-less but gives you more*

In a nutshell, JAM stack is about removing the complications of developing a product by affectively "out-sourcing" some of its moving parts away from a dependency on a server. This not only makes the site faster, as you are not reliant on the restraints of your system, but enables you to scale more easily using CDN's. The main upside for myself with this approach was the developer experience. The process of configuring a server, configuring a DB, deploying builds, maintaining security and other maintenance is that takes away from when I really enjoy - writing code. By adopting a more streamlined approach to my development, I ultimately wanted it to allow me to focus more on evolving and reiterating ideas.

Blog Site / Portfolio

|    | Solution |
| -- | ------- |
| DB   | None  |
| CMS   | Static site generator - VuePress |
| Hosting | Zeit |
 
  
\
