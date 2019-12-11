<div id="industry-consultation">
    <h3>Tailored I.T Consultancy by Industry or Business Type</h3>
    <p>Looking for I.T consultancy services tailored towards your business industry? Browse for your industry or business type to get tailored I.T consultancy specific to your business:</p>
    <nav aria-label="Page navigation example">
      <ul class="pagination-az" id="industry-pagination">
        {% assign topics_by_letter = site.industry | group_by_exp: "industry", "industry.industry_name | upcase | slice: 0, 1" %}
        {% for letter in topics_by_letter %}
             <li class="page-item"><a class="page-link {% if forloop.first == true %}current{% endif %}" href="#">{{ letter.name }}</a></li>
        {% endfor %}
      </ul>
    </nav>

    <div id="industry-filter">
        {% assign topics_by_letter = site.industry | group_by_exp: "industry", "industry.industry_name | upcase | slice: 0, 1" %}
        {% for letter in topics_by_letter %}
            <div class="industry-filter-{{ letter.name }} {% if forloop.first == false %}hidden{% endif %}">
                <ul class="industry-list">
                    {% for item in letter.items %}
                        <li><a href="{{ item.url }}">{{ item.title }}</a></li>
                    {% endfor %}
                </ul>
            </div>
        {% endfor %}
    </div>
</div>