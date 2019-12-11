---
layout: splash
permalink: /
classes:
  - landing
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/software-development.JPG
  overlay_filter: 0.5 
  actions:
    - label: "Discover how our I.T Services can help your business"
      url: "/services"
excerpt: >
  Modern I.T Development & Operations Consultancy Solutions for Commercial Businesses, Consumers, and Non-Profit Organisations.

feature_row:
  - image_path: /assets/images/website-consultation.png
    alt: "customizable"
    title: "Website Development Planning Checklist"
    excerpt: "Getting a website online can be a challenging task as it involves so many different stages. Let us break down the planning stages for you in this Website Development Planning Process Checklist."
    url: "/resources/website-development-checklist"
    btn_class: "btn--red"
    btn_label: "Access Resource"
  - image_path: /assets/images/api-consultation.png
    alt: "fully responsive"
    title: "API Development Planning Checklist"
    excerpt: "Building a fully functional API involves many security and design considerations. Let us break down the planning stages for you in this API Development Planning Checklist."
    url: "/resources/api-development-checklist"
    btn_class: "btn--red"
    btn_label: "Access Resource"
  - image_path: /assets/images/cloud-consultation.png
    alt: "100% free"
    title: "Cloud Migration Planning Checklist"
    excerpt: "Migrating Monolithic Architectures to Cloud Architectures involves a significant amount of thought and planning. Let us break down the planning stages for you in this Cloud Migration Planning Checklist."
    url: "/resources/cloud-migration-checklist"
    btn_class: "btn--red"
    btn_label: "Access Resource"      
---

> IT servicing appears to be a necessary asset. 44 percent of businesses estimate that an hour of downtime causes a loss of $10,000 or more. Additionally, around 4,000 ransomware attacks happened each day in 2016.

<div id="consultancy-posts">
    <h3>Recent I.T Consultancy Posts from our Experts</h3>
    <p>We hire I.T pros to write for us</p>
    {% assign groups = site.consultation | group_by: "category" | sort: "name" %}
    <ul class="post-list">
    {% for group in groups %}
    {% for item in group.items %}
    {% if item.category == 'Cloud' %}
        <li><a href="{{ item.url }}"><span class="cloud-tag"><i class="fas fa-cloud"></i> {{ group.name }}</span> {{item.title}}</a></li>
    {% elsif item.category == 'Cyber-Security' %}
        <li><a href="{{ item.url }}"><span class="cyber-security-tag"><i class="fas fa-shield-alt"></i> {{ group.name }}</span> {{item.title}}</a></li>
    {% elsif item.category == 'Web' %}
        <li><a href="{{ item.url }}"><span class="web-tag"><i class="fas fa-globe"></i> {{ group.name }}</span> {{item.title}}</a></li>
    {% elsif item.category == 'Hardware' %}
        <li><a href="{{ item.url }}"><span class="hardware-tag"><i class="fas fa-microchip"></i> {{ group.name }}</span> {{item.title}}</a></li>
    {% elsif item.category == 'Software-Development' %}
        <li><a href="{{ item.url }}"><span class="software-tag"><i class="fas fa-code"></i> {{ group.name }}</span> {{item.title}}</a></li>
    {% else %}
        <li><a href="{{ item.url }}">[<i class="fas fa-cloud"></i> {{ group.name }}] {{item.title}}</a></li>
    {% endif %}
    {%endfor%}
    {%endfor%}
    </ul>
</div>

{% include industry-consultation.md %}

{% comment %}
{% for item in site.industry %}
[{{ item.name }} {{item.title}}]({{ item.url }})
{% endfor %}
{% endcomment %}

<div>
    <h3>Free I.T Consultancy Resources</h3>
    {% include feature_row %}
    <p>Looking for more Free I.T consultancy resources? Please check out our Free I.T Resources page</p>
</div>

<style>
.container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
}

.div-block {
  display: block;
  margin-right: 4em;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
</style>

<h3>Why Keep-Alive I.T?</h3>
<div class="container w-container">
    <div class="div-block">
        <div>Direct contact</div>
        <div>One of our agents will be your dedicated contact throughout the duration of our time working together, which means no jumping between multiple contacts.</div>
    </div>
    <div class="div-block">
        <div>Customer focused.</div>
        <div>We listen to our customers feedback and are always trying to improve what we do.</div>
    </div>
    <div class="div-block">
        <div>Unbiased technical advice.</div>
        <div>We specialise in many different technologies, across many different aspects of I.T. We're not biased towards any particular technology and will always propose multiple ideas towards an I.T problem.</div>
    </div>
</div>
<div class="container w-container">
    <div class="div-block">
        <div>Passionate About Technology</div>
        <div>We hire only the best consultants and engineers who are passionate about technology. Their work is also their passion, meaning they're always kept up to date with the industry.</div>
    </div>
    <div class="div-block">
        <div>Agile</div>
    </div>
    <div class="div-block">
        <div>Around the clock operation</div>    
        <div>Just like any other company, we have office hours. However, I.T is a 24 operation so we've built our business around incident response, so a staff member can be on hand 24 hours a day.</div>
    </div>
</div>

<div>
    <h3>Plan a video consultation with us for just £99 an hour (including VAT)</h3>
    <p>We'd love to get to know more about your requirements. Please send us a briefing document stating your requirements and we will plan a completely FREE 15-minute video consultation with you. Subsequent discussion will be billed pro rata at £99 per hour (including VAT).</p>
</div>

<!--
<div class="row multi-answers ptop30 ptop10@xs"><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-graph"></i><p class="text-blue"><strong>Analytics &amp; Reporting</strong></p><p class="text-dark-grey small hide show@mobile"><em>Provide you information and stats on users and their activity</em></p><div class="overlay"><p class="text-white">Provide you information and stats on users and their activity</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-store"></i><p class="text-blue"><strong>eCommerce Shop</strong></p><p class="text-dark-grey small hide show@mobile"><em>A shop to purchase your products</em></p><div class="overlay"><p class="text-white">A shop to purchase your products</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-cash-pound"></i><p class="text-blue"><strong>Accept Payments</strong></p><p class="text-dark-grey small hide show@mobile"><em>A payment system for users</em></p><div class="overlay"><p class="text-white">A payment system for users</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-users"></i><p class="text-blue"><strong>User Accounts</strong></p><p class="text-dark-grey small hide show@mobile"><em>A login area for users</em></p><div class="overlay"><p class="text-white">A login area for users</p></div></div><p class="lead"><i class="icon-check text-green checked"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-papers"></i><p class="text-blue"><strong>CMS</strong></p><p class="text-dark-grey small hide show@mobile"><em>A system for you to add, remove and edit content yourself</em></p><div class="overlay"><p class="text-white">A system for you to add, remove and edit content yourself</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-landscape"></i><p class="text-blue"><strong>Multilingual</strong></p><p class="text-dark-grey small hide show@mobile"><em>Multiple languages</em></p><div class="overlay"><p class="text-white">Multiple languages</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-bookmark"></i><p class="text-blue"><strong>Bookings System</strong></p><p class="text-dark-grey small hide show@mobile"><em>A booking system</em></p><div class="overlay"><p class="text-white">A booking system</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-bubble-quote"></i><p class="text-blue"><strong>Internal Communication</strong></p><p class="text-dark-grey small hide show@mobile"><em>Communication between users, like comments or chat</em></p><div class="overlay"><p class="text-white">Communication between users, like comments or chat</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-smartphone-notification"></i><p class="text-blue"><strong>Notifications</strong></p><p class="text-dark-grey small hide show@mobile"><em>Device or email notifications and alerts</em></p><div class="overlay"><p class="text-white">Device or email notifications and alerts</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-camera2"></i><p class="text-blue"><strong>Capture Photos/Videos</strong></p><p class="text-dark-grey small hide show@mobile"><em>Capture images through the device camera</em></p><div class="overlay"><p class="text-white">Capture images through the device camera</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-speed-slow"></i><p class="text-blue"><strong>Device's Accelerometer</strong></p><p class="text-dark-grey small hide show@mobile"><em>Capture the force of gravity and movement, or just a phone tilt</em></p><div class="overlay"><p class="text-white">Capture the force of gravity and movement, or just a phone tilt</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-mic"></i><p class="text-blue"><strong>Record Audio</strong></p><p class="text-dark-grey small hide show@mobile"><em>Capture recordings through the microphone</em></p><div class="overlay"><p class="text-white">Capture recordings through the microphone</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-satellite"></i><p class="text-blue"><strong>Geolocation</strong></p><p class="text-dark-grey small hide show@mobile"><em>Make use of the GPS function of a device, providing location information</em></p><div class="overlay"><p class="text-white">Make use of the GPS function of a device, providing location information</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-profile"></i><p class="text-blue"><strong>User Dashboards</strong></p><p class="text-dark-grey small hide show@mobile"><em>Information delivered through user dashboards</em></p><div class="overlay"><p class="text-white">Information delivered through user dashboards</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-folder-upload"></i><p class="text-blue"><strong>File Management</strong></p><p class="text-dark-grey small hide show@mobile"><em>Provide users with the ability to upload files, images and more</em></p><div class="overlay"><p class="text-white">Provide users with the ability to upload files, images and more</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-user-plus"></i><p class="text-blue"><strong>User Onboarding</strong></p><p class="text-dark-grey small hide show@mobile"><em>Walk users through features</em></p><div class="overlay"><p class="text-white">Walk users through features</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-medal-empty"></i><p class="text-blue"><strong>Gamification</strong></p><p class="text-dark-grey small hide show@mobile"><em>Reward users based on achievements</em></p><div class="overlay"><p class="text-white">Reward users based on achievements</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-star-half"></i><p class="text-blue"><strong>Ratings/Reviews</strong></p><p class="text-dark-grey small hide show@mobile"><em>Allow users to provide ratings, feedback and reviews</em></p><div class="overlay"><p class="text-white">Allow users to provide ratings, feedback and reviews</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-users-plus"></i><p class="text-blue"><strong>Referral System</strong></p><p class="text-dark-grey small hide show@mobile"><em>Allow users to recommend a friend or colleague</em></p><div class="overlay"><p class="text-white">Allow users to recommend a friend or colleague</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-graduation-hat"></i><p class="text-blue"><strong>User Training or Lessons</strong></p><p class="text-dark-grey small hide show@mobile"><em>Provide tuition and learning through written, audio and video content</em></p><div class="overlay"><p class="text-white">Provide tuition and learning through written, audio and video content</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-eye-plus"></i><p class="text-blue"><strong>Augmented Reality</strong></p><p class="text-dark-grey small hide show@mobile"><em>Use the camera to provideo virtual elements in real environments</em></p><div class="overlay"><p class="text-white">Use the camera to provideo virtual elements in real environments</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-glasses2"></i><p class="text-blue"><strong>Virtual Reality</strong></p><p class="text-dark-grey small hide show@mobile"><em>A virtual world within your app</em></p><div class="overlay"><p class="text-white">A virtual world within your app</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-share"></i><p class="text-blue"><strong>Export Data</strong></p><p class="text-dark-grey small hide show@mobile"><em>Export data</em></p><div class="overlay"><p class="text-white">Export data</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div></div>
-->
