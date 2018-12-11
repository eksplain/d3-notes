---
title: "Scalable Vector Graphics"
date: 2018-12-09T12:41:58+01:00
draft: true
---

SVG or Scalable Vector Graphics is an XML based vector image format for 2D graphics. Read the entire specification  [here](https://www.w3.org/TR/SVG2/) if you are feeling brave.

Traditionally, graphics used the raster graphics or bitmap format, where each pixel in the image is assigned a color. The glaring problem with this format is that they are resolution dependent. They cannot scale up to an arbitrary resolution without loss in quality, a phenomenon popularly known as pixelation.

Vector graphics on the other hand, are not defined by the pixel, but in terms of 2D points, connected by lines and curves to form polygons and other shapes. The flash player primarily used vector graphics(not SVG) for drawing and animation, making the graphics seem rich and scalable.

SVG is a format that allows three types of graphic objects: vector graphic shapes (e.g., paths consisting of straight lines and curves), images and text.  The graphics are defined in XML syntax and it allows the objects to be grouped, transformed and animated. All the [modern browsers support](https://caniuse.com/#search=svg) displaying SVG format.

Let's define some simple shapes in SVG.

### Line

```
<svg>
  <line x1=20 y1=20 x2=400 y2=120 style="stroke:red"/>
  <line x1=400 y1=20 x2=20 y2=120 style="stroke:green;stroke-width:8"/>
</svg>
```

Here's the above line rendered by YOUR browser. Note that it is not an image. Feel free to inspect the element using developer tools.

<svg>
  <line x1=20 y1=20 x2=400 y2=120 style="stroke:red"/>
  <line x1=400 y1=20 x2=20 y2=120 style="stroke:green;stroke-width:8"/>
</svg>

Notice that the format is xml and every attribute in the `<line>` element contributes to the drawing. The names of the attributes are defined in the spec and cannot be changed.

### Rectangle

```xml
<svg>
  <rect x=20 y=20
        width=200 height=100
        style="fill:lightgreen; stroke:gray">
</svg>
```

Here's the above rectangle rendered by your browser. Note that it is not an image. Feel free to inspect the element using developer tools.

<svg>
  <rect x=20 y=20 width=200 height=100 style="fill:lightgreen; stroke:gray">
</svg>

Notice that the format is xml and the dimensions of the rectangle and its position are defined as attributes to the `<rect>` element.

The co-ordinate system for SVG has its origin at the top left corner with X and Y axes running positive towards right and down respectively.

### Circle

```xml
<svg>
  <circle cx=80 cy=80 r=40 style="fill:lightblue;stroke:gray"/>
</svg>
```

<svg>
  <circle cx=80 cy=80 r=40 style="fill:lightblue;stroke:gray"/>
</svg>

Notice that the attribute names for centre co-ordinates are `cx` and `cy`.

### Paths/Curves

> Unfinished

## D3 js

D3.js is a Javascript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. We can use D3 to create, change and animate SVG effectively.

D3 is a library aimed at tying data with documents from the DOM. DOM could contain the visual elements from HTML or SVG or any other standard that a browser shall support in it's DOM. Hence, data driven documents.
