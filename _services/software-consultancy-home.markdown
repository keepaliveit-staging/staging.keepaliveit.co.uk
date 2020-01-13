---
layout: splash
title: "Software Consultancy & Software Development Services for the Home"
permalink: /software-consultancy-home
classes:
  - software-consultancy
excerpt: "Learn how Keep-Alive I.T Services can assist with software recommendations, or develop bespoke platform specific Software solutions for your home."

header:
  overlay_image: /assets/images/software-development-consultancy.jpg
  overlay_filter: 0.74

secondaryMenu:
  - title: "Software Solutions for Businesses"
    url: /software-consultancy
  - title: "Software Solutions for the Home"
    url: /software-consultancy-home
---

{% include breadcrumbs.html %}

## For Consumers
## Discover how our I.T Services can enhance your experience at home

<div class="divider div-transparent div-arrow-down"></div>

<div class="consultancy-row aos-init aos-animate" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true">
    <div class="row">
        <div class="col-xs-4 col-sm-3">
            <img class="lazy" data-src="/assets/images/icons/software-training.png">  
        </div>
        <div class="col-xs-8 col-sm-9">
            <h3>SOFTWARE TRAINING</h3>
            <p>We offer workshop based software training courses for training staff or students on various aspects of I.T</p>    
            <p><a href="/software-consultancy/software-training-services">View more information and discover pricing for Keep-Alive I.T's Software Training Services.</a></p>
        </div>
    </div>
</div>

<div class="divider div-transparent div-arrow-down"></div>

<div class="consultancy-row aos-init aos-animate" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true">
    <div class="row">
        <div class="col-xs-4 col-sm-3">
            <img class="lazy" data-src="/assets/images/icons/software.png">
        </div>
        <div class="col-xs-8 col-sm-9">
            <h3>SOFTWARE PROCUREMENT AND IMPLEMENTATION</h3>
            <p>We offer explained help and planning around all aspects of your I.T needs as experts in the I.T industry. We can help you answer questions similar to the following:</p>      
            <p><a href="/software-consultancy/software-procurement-services">View more information and discover pricing for Keep-Alive I.T's Software Implementation consultancy Services.</a></p>
        </div>
    </div>
</div>

<div class="divider div-transparent div-arrow-down"></div>

<div class="consultancy-row aos-init aos-animate" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true">
    <div class="row">
        <div class="col-xs-4 col-sm-3">
            <img class="lazy" data-src="/assets/images/icons/programmer.png">
        </div>
        <div class="col-xs-8 col-sm-9">
            <h3>SOFTWARE DEVELOPMENT</h3>
            <p>We offer explained help and planning around all aspects of your I.T needs as experts in the I.T industry. We can help you answer questions similar to the following:</p>
            <p><a href="/software-consultancy/software-development-services">View more information and discover pricing for Keep-Alive I.T's Software Development Services.</a></p>
        </div>
    </div>
</div>

<div class="divider div-transparent div-arrow-down"></div>

<div class="consultancy-row aos-init aos-animate" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true">
    <div class="row">
        <div class="col-xs-4 col-sm-3">
            <img class="lazy" data-src="/assets/images/icons/web.png">
        </div>
        <div class="col-xs-8 col-sm-9">
            <h3>WEBSITE DEVELOPMENT</h3>
            <p>Establishing your business’s brand online through a professionally developed website is beneficial :</p>
            <p><a href="/software-consultancy/website-development-services">View more information and discover pricing for Keep-Alive I.T's Website Development Services.</a></p>
        </div>
    </div>
</div>

<div class="divider div-transparent div-arrow-down"></div>

<div class="consultancy-row aos-init aos-animate" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true">
    <div class="row">
        <div class="col-xs-4 col-sm-3">
            <img class="lazy" data-src="/assets/images/icons/team.png">
        </div>
        <div class="col-xs-8 col-sm-9">
            <h3>CODE MENTORING</h3>
            <p>Looking to learn how to code? We can provide quality code mentorship sessions for groups, or individuals.</p>
            <p><a href="/software-consultancy/development-team-formation-and-developer-onboarding-services">View more information and discover pricing for Keep-Alive I.T's Software Development Services.</a></p>
        </div>
    </div>
</div>

<div class="divider div-transparent div-arrow-down"></div>


<div id="consultancy-posts">
    <h2>Recent Software & Software Development Consultancy posts from our Experts</h2>
    <p>We hire I.T experts to write for us</p>
    {% assign items = site.consultation | where: "category","Software-Development" %}
    <ul class="post-list">
    {% for item in items %}
    {% if item.category == 'Cloud' %}
        <li><a href="{{ item.url }}"><span class="cloud-tag"><i class="fas fa-cloud"></i> {{ item.category }}</span> {{item.title}}</a></li>
    {% elsif item.category == 'Cyber-Security' %}
        <li><a href="{{ item.url }}"><span class="cyber-security-tag"><i class="fas fa-shield-alt"></i> {{ item.category }}</span> {{item.title}}</a></li>
    {% elsif item.category == 'Web' %}
        <li><a href="{{ item.url }}"><span class="web-tag"><i class="fas fa-globe"></i> {{ item.category }}</span> {{item.title}}</a></li>
    {% elsif item.category == 'Hardware' %}
        <li><a href="{{ item.url }}"><span class="hardware-tag"><i class="fas fa-microchip"></i> {{ item.category }}</span> {{item.title}}</a></li>
    {% elsif item.category == 'Software-Development' %}
        <li><a href="{{ item.url }}"><span class="software-tag"><i class="fas fa-code"></i> {{ item.category }}</span> {{item.title}}</a></li>
    {% else %}
        <li><a href="{{ item.url }}">[<i class="fas fa-cloud"></i> {{ group.name }}] {{item.title}}</a></li>
    {% endif %}
    {%endfor%}
    </ul>
</div>

{% include industry-consultation.md %}