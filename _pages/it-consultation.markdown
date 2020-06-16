---
layout: splash
title: I.T Consultation Topics
permalink: /it-consultation

excerpt: "Short Articles giving free I.T Consultation Advice for Businesses I.T."
header:
  overlay_image: /assets/images/documents.jpg
  overlay_filter: 0.54
  page_lead_text_colour: "#ea5114"
---

{% include breadcrumbs.html %}

## <i class="fas fa-leaf page-title-icon" aria-hidden="true"></i> Company Environmental Policy for Keep-Alive I.T Ltd.

<div id="consultancy-posts">
    <h2>Recent I.T Consultancy Posts from our Experts</h2>
    <p>We hire I.T pros to write guides on the top industry trends for us. These guides have been written to help you with determining your I.T requirements and for learning about up and coming technologies.</p>
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