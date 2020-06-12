---
date: 2020-6-15
details: This is a blog consisting of articles on various tech topics
tag: 
  - vps
  - blog
  - vuepress
  - openvpn
author: Nick  
---

# Goodbye VPS, Hello static site!

 I've been working professionally in web and software development for over 3 years now. Along the way, I've gone through plenty of different New Years Resolutions in attempt to revamp my portfolio site into a portfolio tech blog. But being time rich given the current Covid situation has allowed my to get round to fixing some of my tech debt. And finally moving away from my my VPS to a static site generator, notably VuePress.

## *More control generally means more hassle*

My very first portfolio site was created during my college degree in 2016, consisted of a shared hosting server with WordPress, a moderately neat customised theme alongside a MySQL database. It was moderate enough cost for my needs, roughly about €8 a month. But the problems with shared hosting tend to come down to control, or severe lack of. I'm not going to go through the pitfalls of shared hosting but paying to just FTP into to a directory with phpMyAdmin just felt I wasn't getting much bang for my buck. As my skills developing in other areas of software development, I believed a VPS server would give me great control or resources for all the side complex projects I had dreamed to making.

## *More control generally means more hassle*

I managed to bag a great deal with Linode for $5 a month for their nano baseline VPS, which was way more resources than I would ever need. Their panel is a breeze to use and setup my domain. I span up a Ubuntu droplet and in a few minutes the SSH keys to my new vehicle finally arrived. 

I settled on [VestaCP](https://vestacp.com/install/) for an admin panel, and it was a breeze to install as you can customise the panel options before creating the script. 
It created web directories for your sites as well, shows network logs and is highly recommended Up next was setting up my very own email address to my domain using Roundcube client. This was a really nice feature, particularly when I was applying for jobs. 

![This is alt text](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2382&q=80)

During the migration to the VPS, I also had time to slim down my Wordpress site by moving it over to a much lighter alternative [CouchCMS](https://www.couchcms.com/). This was great as I could use some of my already designed PHP templates but insert the new CMS into the pages where needed. It was still connected to a MySQL db, but the directory size had reduced from 350mb to 20mb, was significantly faster due to the lack of unecessary plugins whilst looking and functioning exactly as it did before. To top off, I installed OpenVPN to provide me with a VPN for when using public hubspots. I couldn't have been more happier. It was a multi-use server, with plenty of resources for future projects. Moving over some of my pet projects from Herkou proved difficult to configure with node manager so I left them continue to be hosted there. 

Draft TBC....