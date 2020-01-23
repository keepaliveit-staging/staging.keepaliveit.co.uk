---
layout: splash
title: "Consumer Software & Software Development Consultancy Services for the Home"
permalink: /software-consultancy-home
classes:
  - software-consultancy
excerpt: "Learn how Keep-Alive I.T's Services can assist with consumer software recommendations for individuals, or develop bespoke platform specific Software solutions for your home."

header:
  overlay_image: /assets/images/home.jpg
  overlay_filter: 0.54

secondaryMenu:
  - title: "Software Solutions for Businesses"
    url: /software-consultancy
  - title: "Software Solutions for the Home"
    url: /software-consultancy-home
---

{% include breadcrumbs.html %}

## Discover how our I.T Services for Consumers can enhance your experience at home and improve your day-to-day life.

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

<h2>Frequently Asked Questions (FAQs):</h2>
<ul id="my-accordion" class="accordionjs">
    <li>
        <div>How much do your Software & Software Development Consultancy Services cost?</div>
        <div>
            Our prices start at £300 per day
        </div>
    </li>

    <li>
        <div>How much time do your Software & Software Development Consultancy Services take to complete?</div>
        <div>
           It is impossible to give a precise time-frame for I.T related work but we will aim to give a time estimate
        </div>
    </li>

    <li>
        <div>Do you offer retainer contracts for software maintanence that could be required in future?</div>
        <div>
           Of course! We understand all software requires patching to ensure security is 
        </div>
    </li>

</ul>

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