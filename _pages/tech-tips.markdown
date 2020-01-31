---
layout: splash
title: Tech Tips for Consumers
permalink: /tech-tips

excerpt: "Tech Tips for Non-Tech Warriors."

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

<h2>Tech Tips</h2>
<p>We understand not everyone is a wizzard with technology, that's why we've launched tutorials on common computing topics which can be performed by individuals by following these guides.</p>

<div class="container">
    <div class="row">    
        {% for item in paginator.posts %}            
            <div class="col-xs-12 col-sm-6 reason-container">
                <div class="reason-item">
                    <img class="lazy" data-src="{{ item.thumbnail }}"/>
                    <div class="item-title">
                        <a href="{{ item.url }}">{{ item.title }}</a>
                    </div>
                    <div class="item-description">
                        <p>Text</p>
                    </div>
                </div>
            </div>
        {% endfor %}
    </div>
</div>

{% include pagination.html %}