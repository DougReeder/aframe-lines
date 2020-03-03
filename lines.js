// aframe-lines.js -A component and primitive to draw a series of lines, for A-Frame WebXR.
// Similar to the line primitive, but draws multiple connected lines.
// Copyright © 2020 by P. Douglas Reeder under the MIT License

AFRAME.registerComponent('lines', {
  schema: {
    points: {type: 'array'},
    color: {type: 'color', default: 'rgb(0, 0, 0)'},
    log: {type: 'boolean', default: false}
  },

  /** Called once when component is attached. Generally for initial setup. */
  init: function () {
  },

  /** Called when properties are changed, incl. right after init */
  update: function () {
    if (this.data.log) {
      console.log("lines update", this.data, this.el);
    }

    const data = this.data;
    const el = this.el;

    const material = new THREE.LineBasicMaterial( { color: data.color } );

    const points = this.parse(data.points);
    if (this.data.log) {
      console.log(`${points.length} points`);
    }

    const geometry = new THREE.BufferGeometry().setFromPoints( points );

    const line = new THREE.Line( geometry, material );

    el.setObject3D('lines', line);
  },

  parse: function (dataPoints) {
    const points = [];
    dataPoints.forEach(point => {
      const coordStr = point.split(/\s+/, 3);
      const coord = coordStr.map(cStr => {
        const c = parseFloat(cStr);
        return Number.isFinite(c) ? c : 0;
      });
      switch (coord.length) {
        case 0:
          coord[0] = 0;
          // falls through
        case 1:
          coord[1] = 0;
          // falls through
        case 2:
          coord[2] = 0;
      }
      points.push(new THREE.Vector3(coord[0], coord[1], coord[2]));
    });
    return points;
  },

  /** Called when a component is removed (e.g., via removeAttribute). */
  remove: function () {
    this.el.removeObject3D('lines');
  }

});


AFRAME.registerPrimitive('a-lines', {
  defaultComponents: {
    lines: {}
  },

  mappings: {
    'points': 'lines.points',
    'color': 'lines.color',
    'log': 'lines.log'
  }
});
