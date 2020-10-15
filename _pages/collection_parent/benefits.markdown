---
layout: splash
title: What are the Benefits of Effective I.T?
permalink: /benefits-of-effective-it/

excerpt: "Effective I.T brings a range of benefits to the table for Homes and Workplaces. Explore the benefits that our services encourage."
header:
  overlay_image: /assets/images/benefit/overview.jpg
  overlay_filter: 0.5 
  page_lead_text_colour: "#aa0000"
  more_text: "Discover the benefits of effective I.T systems and processes"
  min_height: "600px"
---

{% include breadcrumbs.html %}

## What are the Benefits of Effective I.T?
Being ahead of the game with I.T can inherit many benefits for Homes and Workplaces:

{% assign items = site.benefit %}

<div class="wrapper">
    <div class="row">    
        {% for item in items %}            
            <div class="col-xs-12 col-sm-6 col-md-4 reason-container">
                <div class="reason-item">
                    <img class="lazy" data-src="{{ item.icon }}"/>
                    <div class="item-title">
                        <a href="{{ item.url }}">{{ item.title }}</a>
                    </div>
                    <div class="item-description">
                        <p>An overview of benefits:</p>
                        <ul>
                             {% for benefit in item.benefits %}
                                <li>{{ benefit }}</li>
                             {% endfor %}
                        </ul>
                    </div>
                </div>
            </div>
        {% endfor %}
    </div>
</div>