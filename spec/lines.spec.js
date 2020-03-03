// unit tests for pure JavaScript parts of lines.js
const {AFRAME, componentParam, THREE} = require('./aframe-stub');
const lines = require('../lines');

describe("lines component", function () {
  it("should parse non-number coordinates as 0", function () {
    const points = componentParam['lines'].parse(["1.1 foo ."]);
    expect(points[0].x).toEqual(1.1);
    expect(points[0].y).toEqual(0);
    expect(points[0].z).toEqual(0);
  });
  it("should parse missing coordinates as 0", function () {
    const points = componentParam['lines'].parse(["1.1 2.2 3.3", "3.14159 2.71828", "1.4", ""]);
    expect(points[0].x).toEqual(1.1);
    expect(points[0].y).toEqual(2.2);
    expect(points[0].z).toEqual(3.3);

    expect(points[1].x).toEqual(3.14159);
    expect(points[1].y).toEqual(2.71828);
    expect(points[1].z).toEqual(0);

    expect(points[2].x).toEqual(1.4);
    expect(points[2].y).toEqual(0);
    expect(points[2].z).toEqual(0);

    expect(points[3].x).toEqual(0);
    expect(points[3].y).toEqual(0);
    expect(points[3].z).toEqual(0);
  });
  it("should ignore extra junk in coordinates", function () {
    const points = componentParam['lines'].parse(["1.1 2.2q9 3.3"]);
    expect(points[0].x).toEqual(1.1);
    expect(points[0].y).toEqual(2.2);
    expect(points[0].z).toEqual(3.3);
  });
  it("should ignore extra coordinates", function () {
    const points = componentParam['lines'].parse(["1.1 2.2 3.3 4.4"]);
    expect(points[0].x).toEqual(1.1);
    expect(points[0].y).toEqual(2.2);
    expect(points[0].z).toEqual(3.3);
  });
});
