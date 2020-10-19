---
layout: splash
title: "I.T Hardware Products and Services for Small Businesses and Enterprises"
permalink: /it-hardware-products-and-services/

assetEntryPoints:
    - it-hardware-products-and-services

excerpt: "Learn how Keep-Alive I.T Services can help purchase I.T equipment that's appropriate for your business with our I.T hardware procurement service."
header:
  overlay_image: /assets/images/hardware-procurement.jpg
  overlay_filter: 0.5 
  page_lead_text_colour: "#ea5114"
  min_height: "600px"
  more_text: "Discover our Hardware Products & Services"
  more_text_colour: "#215e51"

---

{% include breadcrumbs.html %}

## <i class="fas fa-microchip page-title-icon" aria-hidden="true"></i> I.T Hardware Products and Services

### Cost of our Hardware procurement service
The cost of hiring us to complete I.T Hardware related services depends on the type of individual, or organisation that you are. To see pricing for individual services, please see the following pages:

For consumers
{% for item in site.it-hardware-products-and-services-for-consumers %}
[{{ item.name }} {{item.title}}]({{ item.url }})
{% endfor %}

For Non-Profit Organisations
{% for item in site.it-hardware-products-and-services-for-non-profit-organisations %}
[{{ item.name }} {{item.title}}]({{ item.url }})
{% endfor %}

For Public Sector Organisations
{% for item in site.it-hardware-products-and-services-for-public-sector-organisations %}
[{{ item.name }} {{item.title}}]({{ item.url }})
{% endfor %}

For SME's
{% for item in site.it-hardware-products-and-services-for-smes %}
[{{ item.name }} {{item.title}}]({{ item.url }})
{% endfor %}

For Startups
{% for item in site.it-hardware-products-and-services-for-startups %}
[{{ item.name }} {{item.title}}]({{ item.url }})
{% endfor %}
