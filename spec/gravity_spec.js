var fallingTime = require('../index');

// describe("gravity", function() {
//   it("is a fundamental law, so tautologies had better work", function() {
//     expect(true).toBe(true);
//     expect(false).toBeFalsy();
//     expect(0).toBeLessThan(1);
//     expect(1).not.toBeLessThan(0);
//   });
// });


describe("gravity", function() {
  it("should give valid time for distance fallen", function() {
    expect(fallingTime(10)).toBeCloseTo(1.43, 2);
    expect(fallingTime(4*4.9)).toEqual(2);
    expect(fallingTime(9*4.9)).toEqual(3);
    expect(fallingTime(64*4.9)).toEqual(8);
    expect(fallingTime(-1)).toEqual(NaN);
  });
});