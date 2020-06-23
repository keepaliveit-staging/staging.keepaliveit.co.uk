---
layout: splash
title: "I.T Solutions"
permalink: /solutions
classes:
  - solutions
excerpt: "I.T Solutions"

header:
  overlay_image: /assets/images/solutions.jpg
  overlay_filter: 0.55
  page_lead_text_colour: "#aa0000"

---


{% include breadcrumbs.html %}

## Solutions

{% for item in site.solutions %}
<a href="{{ item.url }}">{{ item.title }}</a>
{% endfor %}