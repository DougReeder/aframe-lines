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

    const points = [];
    data.points.forEach(point => {
      // console.log("point:“", point, "”");
      const coordStr = point.split(/\s+/, 3);
      // console.log("coordStr:“", coordStr[0], coordStr[1], coordStr[2], "”");
      const coord = coordStr.map(c => parseFloat(c));
      if (this.data.log) {
        console.log("coord:“", coord[0], coord[1], coord[2], "”");
      }
      points.push(new THREE.Vector3(coord[0], coord[1], coord[2]));
    });

    const geometry = new THREE.BufferGeometry().setFromPoints( points );

    const line = new THREE.Line( geometry, material );

    el.setObject3D('lines', line);
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
