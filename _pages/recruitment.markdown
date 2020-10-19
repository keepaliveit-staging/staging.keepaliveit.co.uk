---
layout: splash
title: Recruitment"
permalink: /recruitment/
excerpt: "I.T Solutions"

assetEntryPoints:
    - recruitment
    
header:
  overlay_image: /assets/images/solutions.jpg
  overlay_filter: 0.55
  page_lead_text_colour: "#aa0000"

---


{% include breadcrumbs.html %}

## Recruitment

{% for item in site.solutions %}
<a href="{{ item.url }}">{{ item.title }}</a>
{% endfor %}