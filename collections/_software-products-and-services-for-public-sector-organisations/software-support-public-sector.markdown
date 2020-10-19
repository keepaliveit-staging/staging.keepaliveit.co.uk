---
layout: splash
title: "I.T Software Support for Public Sector Organisations"
permalink: /software-products-and-services-for-public-sector-organisations/it-software-support

assetEntryPoints:
    - it-software-support-public-sector
    
excerpt: "Slow I.T bringing you down? Keep-Alive I.T can help your business with a range of 1st, 2nd, and 3rd line technical support services."
header:
  overlay_image: /assets/images/it-support.jpg
  overlay_filter: 0.5 
  page_lead_text_colour: "#6a2900"
  more_text_colour: "#00416a"
  min_height: "700px"

---

{% include breadcrumbs.html %}

IT Strategy
IT Projects
IT Audits

- Network Support
- Microsoft Support
- Apple Mac Support
- Mobile Device Support

- Reactive & Pro-active I.T maintenance

- IT Support
- 24x7 Service Desk Support
- 24x7 Network Monitoring
- Proactive IT Support
- Remote IT Support
- Onsite IT Support
- Out of Hours IT Support
- Dedicated Service Desk

- Keyboards
- Mice
- Monitors

- Devices
    - Android Devices
    - iOS Devices

We also offer <a href="/">software procurement</a> services


1st Line Support – Generally Helpdesk – Job titles such as Helpdesk Operator, First Line Support, IT Call Desk

- This role is generally phone or sometimes internet support based. Onsite requests are usually passed to the 2nd Line Support personnel.

2nd Line Support – The first line of actual onsite contact – Job titles such as Desktop Support, IT Technician, PC Engineer, Desktop Support Analyst

Actual onsite support from the 2nd line is not always the case. Sometimes it is still a remote team with more specific knowledge then the Support Desk (1st line). This as I say is the first set of onsite personnel (normally), usually dealing with (not always) minor issues such as workstation problems, printer, scanner and peripheral issues that were not able to be resolved by the 1st Line Support.

3rd Line Support – Most of the time a more specialised individual or team for onsite contact – Job titles such as Network Specialist, Server Specialist/Engineer and many more specialised job roles.

When these personnel appear you know you’ve got a problem These are usually more qualified individuals, such as Microsoft Certified in the case of MS Windows Server issues.


Other I.T Software Products and Services for Public Sector Organisations
{% assign items = site.software-products-and-services-for-public-sector-organisations %}
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