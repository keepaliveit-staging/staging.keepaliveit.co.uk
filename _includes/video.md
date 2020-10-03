{% capture video_id %}{{ include.id }}{% endcapture %}
{% capture video_provider %}{{ include.provider }}{% endcapture %}
{% capture video_poster %}{{ include.video_poster }}{% endcapture %}
{% capture video_url_mp4 %}{{ include.video_url_mp4 }}{% endcapture %}
{% capture video_url_webm %}{{ include.video_url_webm }}{% endcapture %}
{% capture video_url_ogg %}{{ include.video_url_ogg }}{% endcapture %}
{% capture header_text %}{{ include.header_text }}{% endcapture %}
{% capture header_body %}{{ include.header_body }}{% endcapture %}

{% if video_provider == "vimeo" %}
<!-- Courtesy of embedresponsively.com //-->
<div class="responsive-video-container">
  <iframe src="https://player.vimeo.com/video/{{ video_id }}?dnt=true" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
{% elsif video_provider == "youtube" %}
<!-- Courtesy of embedresponsively.com //-->
<div class="responsive-video-container">
  <iframe src="https://www.youtube-nocookie.com/embed/{{ video_id }}" frameborder="0" allowfullscreen></iframe>
</div>
{% elsif video_provider == "google-drive" %}
<!-- Courtesy of embedresponsively.com //-->
<div class="responsive-video-container">
  <iframe src="https://drive.google.com/file/d/{{ video_id }}/preview" frameborder="0" allowfullscreen></iframe>
</div>
{% elsif video_provider == "hosted" %}
<div class="element-with-video-bg jquery-background-video-wrapper" style="height:600px;">
    <video class="my-background-video jquery-background-video" loop autoplay muted playsinline poster="{{ video_poster }}" data-bgvideo="true">
        <source src="{{ video_url_mp4 }}" type="video/mp4">
        <source src="{{ video_url_webm }}" type="video/webm">
        <source src="{{ video_url_ogg }}" type="video/ogg">
    </video>
    <div>
        <div data-aos="fade-down" data-aos-once="true" class="bubble1">
            {{ header_text }}
        </div>
                
        <div class="bubble2"> 
            <div style="text-decoration:underline;font-size: 18px;font-weight: bold;">We help people <span style="color:#FFDE59;">//</span> organisations:</div>
            <div class="rotateText"> 
                <div>• Understand the capibilities of technology.</div> 
                <div>• Build Websites.</div> 
                <div>• Build Mobile Applications.</div> 
                <div>• Build Platform Specific Applications.</div> 
                <div>• Manage I.T infrastructure.</div> 
                <div>• Diagnose and repair Software issues.</div> 
                <div>• Diagnose and repair Hardware issues.</div> 
            </div>              
        </div>

        <div class="bubble3">
          <div style="flex-basis: 80px;">
              <div class="bounce-7 scroll-down1">
                  <a href="#main">
                      <i class="fas fa-chevron-down" aria-hidden="true"></i>
                  </a>
              </div>
          </div>
          <div style="flex-grow: 1;align-self: center;">
            <a href="#main" style="color: white; text-decoration:none; text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);color:white;text-align:center;font-weight:300;font-size: 0.77em;">Learn more about Keep-Alive I.T</a>
          </div>
          <div style="flex-basis: 80px;">
              <div class="bounce-7 scroll-down2">
                  <a href="#main">
                      <i class="fas fa-chevron-down" aria-hidden="true"></i>
                  </a>
              </div>
          </div>
        </div>
    </div>
</div>
{% endif %}


