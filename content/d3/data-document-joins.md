---
title: "Data Document joins using d3.js"
date: 2018-12-09T18:28:01+01:00
draft: true
---

<script type="text/javascript" src="/js/d3/data-document-joins.js"></script>


D3.js allows us to tie data and documents together neatly and manipulate the DOM as the data changes.

Consider the following data in JSON format

```json
var data = [
  {
    "currency": "ZEC",
    "value": 62  
  },
  {
    "currency": "BCH",
    "value": 108  
  },
  {
    "currency": "ETC",
    "value": 94  
  },
  {
    "currency": "DASH",
    "value": 76  
  }
]
```

<script>
  var data = [
    {
      "currency": "ZEC",
      "value": 62  
    },
    {
      "currency": "BCH",
      "value": 108  
    },
    {
      "currency": "ETC",
      "value": 94  
    },
    {
      "currency": "DASH",
      "value": 76  
    }
  ]
</script>

Let's say we want to display the data as a bar chart. We can display it using HTML and CSS as

```html
<style>
.bar-chart div {
  background-color: slategray;
  margin: 1px;
  padding: 3px;
  text-align: right;
  color: white;
  font: 18px sans-serif;
}
</style>

<div class="bar-chart">
  <div style="height: 62px;">ZEC</div>
  <div style="height: 108px;">BCH</div>
  <div style="height: 94px;">ETH</div>
  <div style="height: 76px;">DASH</div>
</div>
```

and it would display as

<style>
.bar-chart div {
  background-color: slategray;
  margin: 1px;
  width: 20px;
  padding: 8px;
  text-align: right;
  color: white;
  font: 8px sans-serif;
  display: inline-block;
  vertical-align: text-bottom;
}
</style>

<div class="bar-chart">
  <div style="height: 62px;">ZEC</div>
  <div style="height: 108px;">BCH</div>
  <div style="height: 94px;">ETH</div>
  <div style="height: 76px;">DASH</div>
</div>

Quite simple, right?

Now, let's consider three use cases:

1. Change the values of the currencies.
2. Add a new currency
3. Remove an existing currency

All 3 of them are valid use cases. Achieving them is quite simple too. For

1. Change the values of heights.
2. Add a new `div` element
3. Remove the corresponding `div` element.

We can do all these operations by manipulating the DOM using javascript. Apart from manipulating DOM directly using the `document` object, there a lot of frameworks that offer syntactic sugar to modify the DOM. Where D3 shines is that allows the document objects to be driven by data and respond to the changes in data.

# Draw the bar chart

First, let us draw the bar chart from the initial data.

Let us define an empty `div` to hold the bar chart and apply the `class` bar-chart to it

```html
<div id="d3chart" class="bar-chart"/>
```

Let's add some script to

```html
<script>
var chart = d3.select("#d3chart")
              .selectAll("div")
              .data(data);

chart.enter()
     .append("div")
     .style("height", d => d.value + "px")
     .text(d => d.currency);
</script>
```

Renders as

<div id="d3chart" class="bar-chart"></div>
<script>

</script>
<br/>
