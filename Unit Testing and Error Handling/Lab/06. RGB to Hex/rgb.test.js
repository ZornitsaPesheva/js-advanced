const { expect } = require('chai');
const { rgbToHexColor } = require('./rgb');

describe('RGBtoHexColor', () => {
    if ('converts black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    if ('converts white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    if ('converts SoftUni blue to #234465', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
});