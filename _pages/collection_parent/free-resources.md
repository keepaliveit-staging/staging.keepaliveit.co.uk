---
layout: splash 
author_profile: false 
title: "Free I.T Resources"
permalink: /resources/

toc: true
toc_sticky: true

excerpt: "Free I.T resources to give you a helping hand with your next I.T project."
header:
  overlay_image: /assets/images/help.jpg
  overlay_filter: 0.5 
  page_lead_text_colour: "#aa0000"
  more_text: "Discover Free I.T Resources"

  
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

{% include breadcrumbs.html %}

## Free I.T Resources
As a way of saying thank you to our customers for supporting us as a business, we'll be releasing free I.T resources occasionally. The resources we share on this page are recommendations of software, or elements we think deserve a free promotion.

<div class="divider div-transparent div-arrow-down"></div>

{% comment %}
<div>
    <h3>Free I.T Consultancy Resources</h3>
    {% include feature_row %}
</div>
{% endcomment %}


Other I.T Software Products and Services for Consumers
{% assign items = site.resources %}
<section>
    <div class="row">
        {% for item in items %}
            {% if page.url != item.url %}
                <div class="col-xs-12 col-sm-6 col-md-4 reason-container">
                    <div class="reason-item">  
                            <div class="item-title">
                                <a href="{{ item.url }}">{{ item.title }}</a>
                            </div>              
                    </div>
                </div>
            {% endif %}
        {% endfor %}
    </div>
</section>

Unfortunately, there are currently no Free I.T Resources to display. Please check back soon!

<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-ug.pdf" target="_blank">Amazon Compute Cloud (EC2) User Guide for Linux Instances</a>


Oracle Cloud Infrastructure User Guide
https://docs.cloud.oracle.com/en-us/iaas/pdf/ug/OCI_User_Guide.pdf


Did you know? 
Our team of I.T consultants write expert written articles about various technologies. This is free, practical advice published to our website.
