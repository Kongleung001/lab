---
layout: page
permalink: /people/
title: People
description: 
nav: true
nav_order: 1
display_categories: [PhD Students, Mphil Studentss]
# display_categories: [Principal Investigator, Postdocs, PhD Students, Master's Students, Undergraduates, Visiting Students, Alumni]
---

<!-- pages/people.md -->
<div class="people">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized people -->
  {%- for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {%- assign categorized_people = site.people | where: "category", category -%}
  {%- assign sorted_people = categorized_people | sort: "id" %}
  <!-- Generate cards for each people -->
  <div class="row">
    {%- for people in sorted_people -%}
      {% include people.liquid %}
    {%- endfor %}
  </div>
  {% endfor %}

{%- else -%}
<!-- Display people without categories -->
  {%- assign sorted_people = site.people | sort: "title" -%}
  <!-- Generate cards for each people -->
  <div class="row">
    {%- for people in sorted_people -%}
      {% include people.liquid %}
    {%- endfor %}
  </div>
{%- endif -%}
</div>
