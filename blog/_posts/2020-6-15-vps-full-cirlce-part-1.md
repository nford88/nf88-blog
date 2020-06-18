---
date: 2020-6-15
tag: 
  - vps
  - blog
  - vuepress
  - openvpn
author: Nick  
details: This is a blog consisting of articles on various tech topics

---

# Part 1 - Going full circle on the VPS!

 Over the past few years, I've gone through plenty of different New Years Resolutions in attempt to try new workflows and projects. While many of these are well intentioned and help me learn a new skillet, many of them never see the light of day outside of my localhost address. The upside however of the current Covid situation has given me some time to attempt to assess long overdue tech debt and finally start a revamp of a new portfolio site come blog. Top of the tech debt list was to migrate away from my VPS which has been home for the last 3 years.

 This will be part one of a multi-part series. 

# # 

## *You have so much control*


My very first portfolio website was created during my college degree in 2016, consisted of a shared hosting server with WordPress and MySQL, coming in at roughly about €8 a month. However the problems with shared hosting tend to come down to control, or severe lack of. I'm not going to go through the pitfalls of shared hosting but ultimately just paying to FTP into to a directory or using phpMyAdmin felt I wasn't getting much bang for my buck. As my skills developed, I knew a VPS server would give me greater control of resources for all the side projects I had dreamed of leaving the confines of my hard drive.


![This is alt text](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2382&q=80)


After about a year on shared hosting, I made the move to Linode Nano baseline VPS for $5 a month. This was a great call and ended up being more way more resources than I would ever need. Their panel is a breeze to use and setup my domain. I span up a Ubuntu droplet and in a few minutes the SSH keys to my new vehicle finally arrived. [VestaCP](https://vestacp.com/install/) was chosen for the admin panel, more for convenience as you can customise the panel options before creating the install script.  This handled the creation of web directories, proxying, detailed network logs and a webmail client configured to use the email address connected to my domain. This was a really nice bonus, particularly when I was applying for jobs. 



During the migration to the VPS, I also had time to slim down my Wordpress site by moving it over to a much lighter alternative [CouchCMS](https://www.couchcms.com/). This was great as I could use my already designed PHP templates but insert the new CMS into the pages where needed. It was still connected to a MySQL database but the directory size had reduced from 350mb to 20mb and was significantly faster due to the lack of unecessary plugins. I used to repeatedly swear at how large and bloaty WordPress is, that it never put performance as a priority. This was clearly noticable with some of the sometimes shocking load times (but as I found out later on, it did have some hidden qualities  which I came to miss).  

Fortunately the site ended up looking and functioning exactly as it did before. To top off, OpenVPN was installed to provide me with a VPN for when using public hubspots. Overall, I couldn't have been more happier. It was a multi-use server, with plenty of resources for future projects. Moving over some of my pet projects from Herkou proved difficult to configure with node manager so I left them continue to be hosted there. There was a solid sense of achievement that I had "done something properly" and could use this harbour skills in other areas should they crop up again. 

## *More control generally means more hassle*

All was swimmingly well for several months with the VPS ticking over in the background without an issue. Until one day, an email arrived from Linode notifying my that spam had been reported coming from my IP and that the server was being taken offline until I had resolved it. What?! I only accessed the email server via my phone and had never logged in via the webmail portal. After hours of research and crawling through logs, it looked like a default webmail account had been left in the configuration file and someone had brute forced their way into my account. It couldn't be determined if they had compromised other areas of the server, but the decision was taken to close the server completely and rebuild a new droplet to be sure.  Frustratingly the timing of this coincided with a new job and lots of learning, so I couldn't re-instate the server immediately. 

But eventually I finally had time to read up on Linux security and I made a start on VPS 2.0. All default ports to external facing services were changed along with lengthy complex passwords. [Fail2ban](https://www.fail2ban.org/wiki/index.php/Main_Page) was installed which is a great tool to log IP addresses which attempt to connect to your services and reject them in your firewall. The VPN was probably the easiest to configure as there were several one-stop scripts for configuring the whole install and certificate process. For all WordPress's (and shared hosting) downsides, they do have their upsides - all of this is taken care of on behalf for the user. Wordpress roles out regular updates and hosting providers are constantly monitoring their systems. When you move away from this type of convenience, you forget thatall of these things become the responsibility of the VPS owner and it quickly becomes a chore.  

With all this in hand, more months later had passed and I realised that I still hadn't deployed any new projects to my server. I'm not going to lie, there was a part of me that was burnt with the security issues and the lessons that had come from it. I did want to showcase what I had learnt, but there was no easy way of moving these projects over without issues of either configuration or security. After all, they had different languages and achieved different things. And as with all developers, good old imposter syndrome sank in and so I never did feel my work was "ready". That constantly put me off releasing. Part of me felt that was a contradiction, as with our Agile orientated mantra, nothing is ever "done". It's always going through constant iterations, even after it goes live for all to see.

## *Do more with less*

On average there must be one idea a week I come up with for a new site, feature or application. Some are hugely ambitious and overblown, others low key and probably already exist but hey, at least I'm thinking of them :smile:  I'd also really delved front-end sphere over the last 12 months, particularly Javascript and I felt I really wanted to showcase these skills and other small design idea's that I'd been working on. They might not be "ready" but they certainly could be shared. But before I got to that stage, I had to rethink my workflow, processes and the barriers I faced.

In order to increase the time I spent producing and curating ideas, I had to reduce the barriers to entry. And in this case this meant ultimately moving away from the VPS. The time and effort spent configuring, tweaking, and playing resulted in taking me away from my end goal of creating. Not everything you make will be good, but I couldn't even affectively share my demo's with people to get constructive feedback. 


I concluded that a CI approach was needed to be able to let me code whilst a dedicated hosting platform take care of the rest versioning and deployment. One click and walk away. A move away from databases was took the most thought. My email server could be reduced to email forwarding for my existing business account, thus reducing the complexity and need for a db. With the plethera of serverless db's available and the fact that neither a portfolio or blog really needed a DB in today's day and age allowed me to bring these projects under the CI employment umbrella as well. Another project of mine is creating a home server for some automation projects, so I can encompass a VPN into this and access from my home network when needs be, but for now I can get by with a work VPN I already use.


|    | Solution |
| -- | ------- |
| Portfolio   | Convert and migrate existing site to static site with CI |
| Blog   | Create new static site blog with CI |
| Email | Remove email server and forward mail to existing Gmail account |
| VPN   | Install on a RPi in my home |  
  
\
So that's all my trial and tribulations on my VPS journey. Part 2 of this post will walk through the migration of all the services in a bit more detail over to their new platforms. 