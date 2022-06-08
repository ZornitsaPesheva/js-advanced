const { expect } = require('chai');
const { rgbToHexColor } = require('./rgb');

describe('RGBtoHexColor', () => {
    it ('converts black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it ('converts white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it ('converts SoftUni blue to #234465', () => {
        expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
    });

    it ('return undefined for missing params', () => {
        expect(rgbToHexColor(30, 0)).to.be.undefined;
        expect(rgbToHexColor(30, 0)).to.be.undefined;
        expect(rgbToHexColor(30, 0)).to.be.undefined;
    });

});