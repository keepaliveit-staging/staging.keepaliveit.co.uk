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
    - label: "Discover how our I.T Services can help keep your Business Operational & Compliant"
      url: "/services"
excerpt: >
  Agile I.T Developments & Operations (DevOps) Consultancy Solutions for Businesses, Consumers, and Non-Profit Organisations.

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

## Save money on your I.T costs & make your assets more reliable with the help of Keep-Alive I.T
I.T is the backbone of many busineses in the modern technology focused era that we live in. In the past decade, manual paper processes have become electronic and gone are the days of pen and paper. 

> Tech is expanding 2.6x times faster than the rest of the UK economy, according to Tech Nation’s 2018 report. The digital tech sector is worth nearly £184 billion to UK economy, up from £170 billion in 2016.



Achieving 100% uptime shouldn't be your ultimate goal
The truth is, I.T requires proper processes 

IT Support
24x7 Service Desk Support
24x7 Network Monitoring
Proactive IT Support
Remote IT Support
Onsite IT Support
Out of Hours IT Support
Dedicated Service Desk
Network Support
Microsoft Support
Apple Mac Support
IT Consultancy
IT Strategy
IT Projects
IT Audits
Software Licensing
IT Infrastructure
IT Procurement
IT Supplier Management
IT Security
IT Networks and Cabling
Cloud Readiness
Virtualisation
Backup and Continuity
Managed IT
Managed Networks
Managed Hosting
Managed Backups
Business Continuity
Managed Cloud
Private Cloud
Hybrid Cloud
Public Cloud
Cyber Security
Cyber Security Audit
Cyber Essentials Support
GDPR Compliance Support
Network Penetration Testing
Managed Cyber Security
PCI Compliance Support
ISO 27001 Certification Support

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

<div class="container">
    <div class="grid-row">
        <div class="grid-item">
            <div class="grid-item-wrapper">
                <div class="grid-item-container">
                    <img src="assets/images/benefits/contact.png" />
                    <div class="item-title">Direct contact</div>
                    <div class="item-description">One of our agents will be your dedicated contact throughout the duration of our time working together, which means no jumping between multiple contacts and more of a personal relationship with your agent.</div>
                </div>
            </div>
        </div>
        <div class="grid-item">
            <div class="grid-item-wrapper">
                <div class="grid-item-container">
                    <img src="assets/images/benefits/feedback.png" />
                    <div class="item-title">Customer focused</div>
                    <div class="item-description">We listen to our customers feedback and are always trying to improve what we do.</div>
                </div>
            </div>
        </div>
        <div class="grid-item">
            <div class="grid-item-wrapper">
                <div class="grid-item-container">
                    <img src="assets/images/benefits/payment-day.png" />
                    <div class="item-title">Monthly payments</div>
                    <div class="item-description">We offer monthly payments for retainer contracts and for clients who have worked with us before.</div>
                </div>
            </div>
        </div>
        <div class="grid-item">
            <div class="grid-item-wrapper">
                <div class="grid-item-container">
                    <img src="assets/images/benefits/running.png" />
                    <div class="item-title">Agile</div>
                    <div class="item-description">This is a description.</div>
                </div>
            </div>
        </div>
        <div class="grid-item">
            <div class="grid-item-wrapper">
                <div class="grid-item-container">
                    <img src="assets/images/benefits/locked.png" />
                    <div class="item-title">Secure</div>
                    <div class="item-description">We respect your privacy and we're more than happy to sign any Non-Disclosure Agreements that our clients may have.</div>
                </div>
            </div>
        </div>
        <div class="grid-item">
            <div class="grid-item-wrapper">
                <div class="grid-item-container">
                    <img src="assets/images/benefits/sprout.png" />
                    <div class="item-title">Passionate About Technology</div>
                    <div class="item-description">We hire only the best consultants and engineers who are passionate about technology. Their work is also their passion, meaning they're always kept up to date with the industry.</div>
                </div>
            </div>
        </div>
        <div class="grid-item">
            <div class="grid-item-wrapper">
                <div class="grid-item-container">
                    <img src="assets/images/benefits/clock.png" />
                    <div class="item-title">Around the clock operation</div>    
                    <div class="item-description">Just like any other company, we have office hours. However, I.T is a 24 operation so we've built our business around incident response, so a staff member can be on hand 24 hours a day.</div>
                </div>
            </div>
        </div>
        <div class="grid-item">
            <div class="grid-item-wrapper">
                <div class="grid-item-container">
                    <img src="assets/images/benefits/toolbox.png" />
                    <div class="item-title">Unbiased technical advice</div>
                    <div class="item-description">We specialise in many different technologies, across many different aspects of I.T. We're not biased towards any particular technology and will always propose multiple ideas towards an I.T problem.</div>    
                </div>
            </div>
        </div>
        <div class="grid-item">
            <div class="grid-item-wrapper">
                <div class="grid-item-container">
                    <img src="assets/images/benefits/pound.png" />
                    <div class="item-title">Early payment bonus</div>
                    <div class="item-description">Pay your invoices early and we'll reduce your costs by 5%. This is just our way of saying thank you for being a loyal customer.</div>    
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.container {
  max-width: 1335px;
  margin: 0 auto;
}

.grid-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}

.grid-item {
  flex: 1;
  flex-basis: 20%;
  -ms-flex: auto;
  width: 250px;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
}

.grid-row a {
  text-decoration: none;
}

.grid-item-wrapper {
  -webkit-box-sizing: initial;
  -moz-box-sizing: initial;
  box-sizing: initial;
  border: 3px solid #f2f3f3;
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  -webkit-transition: padding 0.15s cubic-bezier(0.4,0,0.2,1), margin 0.15s cubic-bezier(0.4,0,0.2,1), box-shadow 0.15s cubic-bezier(0.4,0,0.2,1);
  transition: padding 0.15s cubic-bezier(0.4,0,0.2,1), margin 0.15s cubic-bezier(0.4,0,0.2,1), box-shadow 0.15s cubic-bezier(0.4,0,0.2,1);
  position: relative;
}

.grid-item-container {
  height: 100%;
  width: 100%;
  position: relative;
  padding: 1em;
}

.grid-item-container img{
    height: auto;
    max-width: 40%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-bottom: 1em;
}

.grid-image-top {
  height: 45%;
  width: 120%;
  background-size: cover;
  position: relative;
  background-position: 50% 50%;
  left: -10.5%;
  top: -4.5%;
  display: none;
}

.grid-image-top .centered {
  text-align: center;
  transform: translate(-50%, -50%);
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 54.5%;
  left: 50%;
  width: 60%;
  height: 60%;
  background-position: center;
}

.grid-item-content {
  padding: 0 20px 20px 20px;
}

.item-title {
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 0.5em;
  display: block;
  text-transform: capitalize;
}

.item-description {
  display: block;
  margin-bottom: 20px;
  font-size: 14px;
}

.item-excerpt {
  margin-bottom: 20px;
  display: block;
  font-size: 14px;
}

.more-info {
  position: absolute;
  bottom: 0;
  margin-bottom: 25px;
  padding-left: 0;
  transition-duration: .5s;
  font-size: 12px;
  display: flex;
}

.more-info i {
  padding-left: 5px;
  transition-duration: .5s;
}

.grid-item:hover .more-info i {
  padding-left: 20px;
  transition-duration: .5s;
}

.more-info i::before {
  font-size: 16px;
}

.grid-item:hover .grid-item-wrapper {
  padding: 2% 2%;
  margin: -2% -2%;
}

@media(max-width: 1333px) {
  .grid-item {
    flex-basis: 33.33%;
  }
}

@media(max-width: 1073px) {
   .grid-item {
    flex-basis: 33.33%;
  }
}

@media(max-width: 815px) {
  .grid-item {
    flex-basis: 50%;
  }
}

@media(max-width: 620px) {
  .col {
    clear: both;
    float: none;
    margin-left: auto;
    margin-right: auto;
    width: auto !important;
  }
}

@media(max-width: 555px) {
  .grid-item {
    flex-basis: 100%;
  }
}


</style>

<h3>Why Keep-Alive I.T?</h3>

<div>
    <h3>Plan a video consultation with us for just £99 an hour (including VAT)</h3>
    <p>We'd love to get to know more about your requirements. Please send us a briefing document stating your requirements and we will plan a completely FREE 15-minute video consultation with you. Subsequent discussion will be billed pro rata at £99 per hour (including VAT).</p>
</div>

<!--
<div class="row multi-answers ptop30 ptop10@xs"><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-graph"></i><p class="text-blue"><strong>Analytics &amp; Reporting</strong></p><p class="text-dark-grey small hide show@mobile"><em>Provide you information and stats on users and their activity</em></p><div class="overlay"><p class="text-white">Provide you information and stats on users and their activity</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-store"></i><p class="text-blue"><strong>eCommerce Shop</strong></p><p class="text-dark-grey small hide show@mobile"><em>A shop to purchase your products</em></p><div class="overlay"><p class="text-white">A shop to purchase your products</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-cash-pound"></i><p class="text-blue"><strong>Accept Payments</strong></p><p class="text-dark-grey small hide show@mobile"><em>A payment system for users</em></p><div class="overlay"><p class="text-white">A payment system for users</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-users"></i><p class="text-blue"><strong>User Accounts</strong></p><p class="text-dark-grey small hide show@mobile"><em>A login area for users</em></p><div class="overlay"><p class="text-white">A login area for users</p></div></div><p class="lead"><i class="icon-check text-green checked"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-papers"></i><p class="text-blue"><strong>CMS</strong></p><p class="text-dark-grey small hide show@mobile"><em>A system for you to add, remove and edit content yourself</em></p><div class="overlay"><p class="text-white">A system for you to add, remove and edit content yourself</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-landscape"></i><p class="text-blue"><strong>Multilingual</strong></p><p class="text-dark-grey small hide show@mobile"><em>Multiple languages</em></p><div class="overlay"><p class="text-white">Multiple languages</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-bookmark"></i><p class="text-blue"><strong>Bookings System</strong></p><p class="text-dark-grey small hide show@mobile"><em>A booking system</em></p><div class="overlay"><p class="text-white">A booking system</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-bubble-quote"></i><p class="text-blue"><strong>Internal Communication</strong></p><p class="text-dark-grey small hide show@mobile"><em>Communication between users, like comments or chat</em></p><div class="overlay"><p class="text-white">Communication between users, like comments or chat</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-smartphone-notification"></i><p class="text-blue"><strong>Notifications</strong></p><p class="text-dark-grey small hide show@mobile"><em>Device or email notifications and alerts</em></p><div class="overlay"><p class="text-white">Device or email notifications and alerts</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-camera2"></i><p class="text-blue"><strong>Capture Photos/Videos</strong></p><p class="text-dark-grey small hide show@mobile"><em>Capture images through the device camera</em></p><div class="overlay"><p class="text-white">Capture images through the device camera</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-speed-slow"></i><p class="text-blue"><strong>Device's Accelerometer</strong></p><p class="text-dark-grey small hide show@mobile"><em>Capture the force of gravity and movement, or just a phone tilt</em></p><div class="overlay"><p class="text-white">Capture the force of gravity and movement, or just a phone tilt</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-mic"></i><p class="text-blue"><strong>Record Audio</strong></p><p class="text-dark-grey small hide show@mobile"><em>Capture recordings through the microphone</em></p><div class="overlay"><p class="text-white">Capture recordings through the microphone</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-satellite"></i><p class="text-blue"><strong>Geolocation</strong></p><p class="text-dark-grey small hide show@mobile"><em>Make use of the GPS function of a device, providing location information</em></p><div class="overlay"><p class="text-white">Make use of the GPS function of a device, providing location information</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-profile"></i><p class="text-blue"><strong>User Dashboards</strong></p><p class="text-dark-grey small hide show@mobile"><em>Information delivered through user dashboards</em></p><div class="overlay"><p class="text-white">Information delivered through user dashboards</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-folder-upload"></i><p class="text-blue"><strong>File Management</strong></p><p class="text-dark-grey small hide show@mobile"><em>Provide users with the ability to upload files, images and more</em></p><div class="overlay"><p class="text-white">Provide users with the ability to upload files, images and more</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-user-plus"></i><p class="text-blue"><strong>User Onboarding</strong></p><p class="text-dark-grey small hide show@mobile"><em>Walk users through features</em></p><div class="overlay"><p class="text-white">Walk users through features</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-medal-empty"></i><p class="text-blue"><strong>Gamification</strong></p><p class="text-dark-grey small hide show@mobile"><em>Reward users based on achievements</em></p><div class="overlay"><p class="text-white">Reward users based on achievements</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-star-half"></i><p class="text-blue"><strong>Ratings/Reviews</strong></p><p class="text-dark-grey small hide show@mobile"><em>Allow users to provide ratings, feedback and reviews</em></p><div class="overlay"><p class="text-white">Allow users to provide ratings, feedback and reviews</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-users-plus"></i><p class="text-blue"><strong>Referral System</strong></p><p class="text-dark-grey small hide show@mobile"><em>Allow users to recommend a friend or colleague</em></p><div class="overlay"><p class="text-white">Allow users to recommend a friend or colleague</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-graduation-hat"></i><p class="text-blue"><strong>User Training or Lessons</strong></p><p class="text-dark-grey small hide show@mobile"><em>Provide tuition and learning through written, audio and video content</em></p><div class="overlay"><p class="text-white">Provide tuition and learning through written, audio and video content</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-eye-plus"></i><p class="text-blue"><strong>Augmented Reality</strong></p><p class="text-dark-grey small hide show@mobile"><em>Use the camera to provideo virtual elements in real environments</em></p><div class="overlay"><p class="text-white">Use the camera to provideo virtual elements in real environments</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-glasses2"></i><p class="text-blue"><strong>Virtual Reality</strong></p><p class="text-dark-grey small hide show@mobile"><em>A virtual world within your app</em></p><div class="overlay"><p class="text-white">A virtual world within your app</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div><div class="multi-icon-selector gr-2 gr-3@tablet gr-4@mobile gr-6@xs"><div class="inner-box"><i class="icon-share"></i><p class="text-blue"><strong>Export Data</strong></p><p class="text-dark-grey small hide show@mobile"><em>Export data</em></p><div class="overlay"><p class="text-white">Export data</p></div></div><p class="lead"><i class="icon-check text-transparent"></i></p></div></div>
-->
