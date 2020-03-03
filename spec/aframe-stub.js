// aframe-stub.js - allows testing app code that uses A-Frame
// Copyright © 2017-2020 P. Douglas Reeder; Licensed under the GNU GPL-3.0

var elementParam = {};   // keyed by name

var componentParam = {};   // keyed by name

var geometryParam = {};   // keyed by name

var primitiveParam = {};   // keyed by name

var shaderParam = {};   // keyed by name

var stateParam = null;

AFRAME = {
    scenes: [{
        is: () => false,
        emit: () => false
    }],

    registerElement: function (name, param) {
        elementParam[name] = param;
    },

    registerComponent: function (name, param) {
        componentParam[name] = param;
    },

    registerGeometry: function (name, param) {
        geometryParam[name] = param;
    },

    registerPrimitive: function (name, param) {
        primitiveParam[name] = param;
    },

    registerShader: function (name, param) {
        shaderParam[name] = param;
    },

    registerState: function(param) {
        stateParam = param;
    },

    utils: {
        device: {
            isMobile: function () {return false;},
            isMobileVR: function () {return false;},
            isGearVR: function () {return false;},
            checkHeadsetConnected: function () {return false;}
        }
    }
};

THREE = {
    Color: function () {},
    Vector3: function (x, y, z) {this.x = x; this.y = y; this.z = z;},
    CanvasTexture: function () {},
    PlaneBufferGeometry: function () {
        this.attributes = {position: {array: []}};
    },
    MeshBasicMaterial: function () {},
    Mesh: function () {}
};
THREE.Vector3.prototype.normalize = function () {};
THREE.Vector3.prototype.dot = function (other) {return this;};
THREE.PlaneBufferGeometry.prototype.rotateX = function () {};

class MockElement {
    constructor(attributes) {
        if (attributes instanceof Object) {
            this._attributes = attributes;
        } else {
            this._attributes = {};
        }
    }

    setAttribute(name, value) {
        this._attributes[name] = value;
    }

    getAttribute(name) {
        return this._attributes[name];
    }

    setObject3D() {
    }
}

module.exports = {
    elementParam: elementParam,
    componentParam: componentParam,
    geometryParam: geometryParam,
    primitiveParam: primitiveParam,
    shaderParam: shaderParam,
    stateParam: stateParam,
    AFRAME: AFRAME,
    THREE: THREE,
    MockElement: MockElement
};
