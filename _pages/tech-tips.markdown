---
layout: splash
title: Tech Tips for Consumers
permalink: /tech-tips

excerpt: "Tech Tips for 'Non-Tech Warriors' who want to learn how to complete common computing tasks."

header:
  overlay_image: /assets/images/tips.jpg
  overlay_filter: 0.74
  
pagination:
  collection: techtip
  enabled: true
  sort_reverse: true
  sort_field: 'date'
  per_page: 4
  trail:
    before: 1
    after: 1
---

<h2>Tech Tips for Consumers</h2>
<p>We understand not everyone is a 'tech wizzard' when it comes to dealing with I.T, so this is why we've written guides on how to perform common computing tasks. We hope our guides are a valuable learning resource and can help you take the 'DIY approach' to maintaining your I.T.</p>
<p>If you have a request for a tech tip article, please get in touch and we will see what we can do for you.</p>

<div class="container">
    <div class="row">    
        {% for item in paginator.posts %}            
            <div class="col-xs-12 col-sm-6 techtip-container">
                <div class="techtip-item">
                    <a href="{{ item.url }}">
                        <img class="lazy" data-src="{{ item.thumbnail }}" />
                    </a>
                    <div class="item-title">
                        <a href="{{ item.url }}">{{ item.title }}</a>
                    </div>
                    <div class="item-description">
                        <p>{{ item.excerpt }}</p>
                    </div>
                </div>
            </div>
        {% endfor %}
    </div>
</div>

{% include pagination.html %}