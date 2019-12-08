---
layout: splash
permalink: /
classes:
  - landing
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/software-development.JPG
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  actions:
    - label: "<i class='fas fa-infinity'></i> Discover how our I.T Services could help your business"
      url: "/services"
excerpt: >
  Modern I.T Development & Operations Consultancy Solutions for Commercial Businesses, Consumers, and Non-Profit Organisations.<br />
  <small><a href="#" class="vat-toggle">Show Prices Excluding V.A.T</a></small>

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

## A little bit about Keep-Alive I.T's Services

### What does Keep-Alive I.T do?
We're a one-stop-shop business with over a decade of experience who specialises in I.T Consultation, Hardware installation, Agile Software Development, and everything that lies in-between to keep I.T systems operational.
Whether you're a small business who needs help designing & setting up a small Local Area Network (LAN), a medium sized company who wants to start selling a new range of products online, or a FTSE 100 company who requires expertise advice with a Cloud 
migration strategy; We plan, consult, and implement I.T solutions for organisations of all size - no matter their technical literacy or employee count. 

Keeping I.T Alive is what we do and we're pretty good at it. We're here to take your I.T Development & Operations frustrations away and keep your I.T Operational for the times you depend on it the most - at home or in the office.


### Where is Keep-Alive I.T based?
We're a UK company based in central Cardiff, Wales. Cardiff has excellent transport links to major Road and Rail services, and also 2 local airports - allowing us to easily reach England, Ireland, Scotland, or other parts of the World if required. We are able to travel to our clients, or work remotely - depending on the nature of the work that needs completing. 

### How much does Keep-Alive I.T charge for I.T services?
We believe being transparent and open about our prices to our potential and current customers is the best way to establish a good working relationship and solid trust right from the beginning of a project. This means you can easily get a good ballpark figure of our service costs ahead of time, avoiding you any nasty surprises at the end of our time working together. Each page of our website will give you an approximate cost for the service on offer. Some services will require further analysis into your requirements before we are able to agree on a price. This is the nature of consultancy services and what you should expect from us if you decide to work with us.

### What does the process of working with Keep Alive I.T involve?
This depends on the type of work you need completed. As a general rule, there are 7 steps involved in working with us:

1. You contact us and supply us with a description of the work that you need completed. This can be a one page document explaining what our deliverables should be from your project, or if you want us to work on a relatively new project, you should supply us with a detailed Brief or Design Document for your new idea.

2. We do some research and a brief technical review of the work you’ve supplied us with and let you know within a few days if it’s feasible and a piece of work we’re capable of taking on. At this stage, we’ll schedule a meeting with you to get to know your needs and requirements.

3. Once we’ve had a meeting with you, we’ll produce a contract for your work. This contract will contain a list of deliverables by us, as well as some legal terms that you’ll need to agree to and generally keeps both parties happy throughout the duration of the project.

4. We’ll send you the contract that’s been produced and once you’ve read through it, you’ll need to sign it electronically so work can begin. You’ll also need to send us any resources which can help us complete your work before any work can begin on your project (for example, if we’re making you a website you’ll need to send us appropriate branding materials).

5. This is where you can relax and our hard work begins. We’ll plan, design, develop, and test your work and contact you if we need any additional information or resources from you. Depending on the duration of the project, you might need to play the waiting game for some time. We’ll let you know how we’re getting on with the work at different stages of the project by SMS, email, or phone.

6. We’ll send you samples of the work we have produced so you can test it and give us feedback on the work. We’re able to make minor changes during this stage if there’s anything you’re not completely happy with.

7. This marks the end of our time working together. We’ll send you over the finished works, and hopefully we can work together at some point in the future.

You can find more specific details of how the flow works for each service we offer in the Client Forms section of the Keep Alive I.T website.

<div>
    <h2>Free I.T Consultancy Resources</h2>
    {% include feature_row %}
</div>

<div id="consultancy-posts">
    <h2>Recent I.T Consultancy Posts from our Experts</h2>
    <p>We hire I.T experts to write for us</p>
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

### Plan a video consultation with us for just £99 an hour (including VAT)
We'd love to get to know more about your requirements. Please send us a briefing document stating your requirements and we will plan a completely FREE 15-minute video consultation with you. Subsequent discussion will be billed pro rata at £99 per hour (including VAT).


<!--
<div class="row multi-answers ptop30 ptop10@xs"><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-graph"></i><p class="text-blue"><strong>Analytics &amp; Reporting</strong></p><p class="text-dark-grey small hide show@mobile"><em>Provide you information and stats on users and their activity</em></p><div class="overlay"><p class="text-white">Provide you information and stats on users and their activity</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-store"></i><p class="text-blue"><strong>eCommerce Shop</strong></p><p class="text-dark-grey small hide show@mobile"><em>A shop to purchase your products</em></p><div class="overlay"><p class="text-white">A shop to purchase your products</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-cash-pound"></i><p class="text-blue"><strong>Accept Payments</strong></p><p class="text-dark-grey small hide show@mobile"><em>A payment system for users</em></p><div class="overlay"><p class="text-white">A payment system for users</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-users"></i><p class="text-blue"><strong>User Accounts</strong></p><p class="text-dark-grey small hide show@mobile"><em>A login area for users</em></p><div class="overlay"><p class="text-white">A login area for users</p></div></div><p class="lead"><i class="icon-check text-green checked"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-papers"></i><p class="text-blue"><strong>CMS</strong></p><p class="text-dark-grey small hide show@mobile"><em>A system for you to add, remove and edit content yourself</em></p><div class="overlay"><p class="text-white">A system for you to add, remove and edit content yourself</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-landscape"></i><p class="text-blue"><strong>Multilingual</strong></p><p class="text-dark-grey small hide show@mobile"><em>Multiple languages</em></p><div class="overlay"><p class="text-white">Multiple languages</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-bookmark"></i><p class="text-blue"><strong>Bookings System</strong></p><p class="text-dark-grey small hide show@mobile"><em>A booking system</em></p><div class="overlay"><p class="text-white">A booking system</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-bubble-quote"></i><p class="text-blue"><strong>Internal Communication</strong></p><p class="text-dark-grey small hide show@mobile"><em>Communication between users, like comments or chat</em></p><div class="overlay"><p class="text-white">Communication between users, like comments or chat</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-smartphone-notification"></i><p class="text-blue"><strong>Notifications</strong></p><p class="text-dark-grey small hide show@mobile"><em>Device or email notifications and alerts</em></p><div class="overlay"><p class="text-white">Device or email notifications and alerts</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-camera2"></i><p class="text-blue"><strong>Capture Photos/Videos</strong></p><p class="text-dark-grey small hide show@mobile"><em>Capture images through the device camera</em></p><div class="overlay"><p class="text-white">Capture images through the device camera</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-speed-slow"></i><p class="text-blue"><strong>Device's Accelerometer</strong></p><p class="text-dark-grey small hide show@mobile"><em>Capture the force of gravity and movement, or just a phone tilt</em></p><div class="overlay"><p class="text-white">Capture the force of gravity and movement, or just a phone tilt</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-mic"></i><p class="text-blue"><strong>Record Audio</strong></p><p class="text-dark-grey small hide show@mobile"><em>Capture recordings through the microphone</em></p><div class="overlay"><p class="text-white">Capture recordings through the microphone</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-satellite"></i><p class="text-blue"><strong>Geolocation</strong></p><p class="text-dark-grey small hide show@mobile"><em>Make use of the GPS function of a device, providing location information</em></p><div class="overlay"><p class="text-white">Make use of the GPS function of a device, providing location information</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-profile"></i><p class="text-blue"><strong>User Dashboards</strong></p><p class="text-dark-grey small hide show@mobile"><em>Information delivered through user dashboards</em></p><div class="overlay"><p class="text-white">Information delivered through user dashboards</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-folder-upload"></i><p class="text-blue"><strong>File Management</strong></p><p class="text-dark-grey small hide show@mobile"><em>Provide users with the ability to upload files, images and more</em></p><div class="overlay"><p class="text-white">Provide users with the ability to upload files, images and more</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-user-plus"></i><p class="text-blue"><strong>User Onboarding</strong></p><p class="text-dark-grey small hide show@mobile"><em>Walk users through features</em></p><div class="overlay"><p class="text-white">Walk users through features</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-medal-empty"></i><p class="text-blue"><strong>Gamification</strong></p><p class="text-dark-grey small hide show@mobile"><em>Reward users based on achievements</em></p><div class="overlay"><p class="text-white">Reward users based on achievements</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-star-half"></i><p class="text-blue"><strong>Ratings/Reviews</strong></p><p class="text-dark-grey small hide show@mobile"><em>Allow users to provide ratings, feedback and reviews</em></p><div class="overlay"><p class="text-white">Allow users to provide ratings, feedback and reviews</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-users-plus"></i><p class="text-blue"><strong>Referral System</strong></p><p class="text-dark-grey small hide show@mobile"><em>Allow users to recommend a friend or colleague</em></p><div class="overlay"><p class="text-white">Allow users to recommend a friend or colleague</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-graduation-hat"></i><p class="text-blue"><strong>User Training or Lessons</strong></p><p class="text-dark-grey small hide show@mobile"><em>Provide tuition and learning through written, audio and video content</em></p><div class="overlay"><p class="text-white">Provide tuition and learning through written, audio and video content</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-eye-plus"></i><p class="text-blue"><strong>Augmented Reality</strong></p><p class="text-dark-grey small hide show@mobile"><em>Use the camera to provideo virtual elements in real environments</em></p><div class="overlay"><p class="text-white">Use the camera to provideo virtual elements in real environments</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-glasses2"></i><p class="text-blue"><strong>Virtual Reality</strong></p><p class="text-dark-grey small hide show@mobile"><em>A virtual world within your app</em></p><div class="overlay"><p class="text-white">A virtual world within your app</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-share"></i><p class="text-blue"><strong>Export Data</strong></p><p class="text-dark-grey small hide show@mobile"><em>Export data</em></p><div class="overlay"><p class="text-white">Export data</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div></div>
-->