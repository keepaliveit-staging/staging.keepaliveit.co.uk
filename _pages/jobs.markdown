---
layout: splash
title: "Jobs at Keep-Alive I.T"
permalink: /jobs
classes:
  - about
excerpt: "Looking for a career in I.T? We have job positions that you may be interested in."

header:
  overlay_image: /assets/images/job.jpg
  overlay_filter: 0.74
---


{% include breadcrumbs.html %}

## Jobs at Keep-Alive I.T
Here at Keep-Alive I.T, our team must be equipped with the right skills to get the job done. It’s okay for a team member to be an expert at a particular task, but we try to get our entire team equipped with the skills needed to thrive in their jobs. This means all members of our team have at least some knowledge of working with digital technologies.


<h3>Frequently asked questions (FAQs)</h3>


<ul id="my-accordion" class="accordionjs">
    <li>
        <div>When will I hear back about my job application?</div>
        <div>
            When you send us your CV, we do our best to get back to you within 72 hours. But because of the number of applications we get, if you're not invited to an interview, we're afraid we can't offer feedback at this stage.
            If you've made it through to have a phone call or on-site interview, congratulations! We'll aim to get back to you within 72 hours.

        </div>
    </li>

    <li>
        <div>What should I wear to an interview?</div>
        <div>Don't feel like you have to dress up. We have a casual dress code in the office, so just wear whatever makes you feel comfortable.</div>
    </li>

    <li>
        <div>Can I apply for a role that doesn't exist?</div>
        <div>We're always looking for new and innovative talent. If you believe you can make a change to the way our company works then we'd love to hear from you!</div>
    </li>
    <li>
        <div>Does Keep-Alive I.T work with recruiters?</div>
        <div>Yes. Please get in touch if you are a recruiter that's looking to fulfill one of our job opportunities.</div>
    </li>
</ul>


{% for item in site.jobs %}
[{{ item.name }} {{item.title}}]({{ item.url }})
{% endfor %}