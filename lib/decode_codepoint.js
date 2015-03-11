var decodeMap = require("../maps/decode");
var decodeCodePoint;
(function (_decodeCodePoint) {
    function decodeCodePoint(codePoint) {
        if ((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF) {
            return "\uFFFD";
        }
        if (codePoint in decodeMap.json) {
            codePoint = decodeMap.json[codePoint];
        }
        var output = "";
        if (codePoint > 0xFFFF) {
            codePoint -= 0x10000;
            output += String.fromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        output += String.fromCharCode(codePoint);
        return output;
    }
    _decodeCodePoint.decodeCodePoint = decodeCodePoint;
})(decodeCodePoint || (decodeCodePoint = {}));
module.exports = decodeCodePoint;
