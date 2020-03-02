aframe-lines
============

A component and primitive to draw a connected series of lines, for [A-Frame](https://aframe.io) [WebXR](https://immersive-web.github.io//).  Similar to the [line](https://aframe.io/docs/1.0.0/components/line.html) primitive, but draws multiple lines.


![sample screenshot](aframe-lines-sample.png)

[live example scene](https://dougreeder.github.io/aframe-lines/example.html)



Usage
-----

Include using 
```html
<script src="https://unpkg.com/aframe-lines/dist/aframe-lines.js"></script>
```

```html
<a-lines points="-10 0 0, 0 10 0, 10 0 0" color="blue"></a-lines>

<a-entity lines="points: -10 0 0, 0 10 0, 10 0 0; color:blue"></a-entity>
```

Parameters
----------

### points

Each point is specified by three floating-point numbers (x, y, z), separated by one or more spaces.  Points are separated by commas.

A line is drawn from the first point to the second, the second to the third, and so on.  No line is drawn from the last point to the first - if you want that, just repeat the first point as the last.

### color
* default: black
