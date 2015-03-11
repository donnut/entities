var enc = require("./lib/encode");
var dec = require("./lib/decode");
exports.decode = function (data, level) {
    return (!level || level <= 0 ? dec.XML : dec.HTML)(data);
};
exports.decodeStrict = function (data, level) {
    return (!level || level <= 0 ? dec.XML : dec.HTMLStrict)(data);
};
exports.encode = function (data, level) {
    return (!level || level <= 0 ? enc.XML : enc.HTML)(data);
};
exports.encodeXML = enc.XML;
exports.encodeHTML4 = enc.HTML;
exports.encodeHTML5 = enc.HTML;
exports.encodeHTML = enc.HTML;
exports.decodeXML = dec.XML;
exports.decodeXMLStrict = dec.XML;
exports.decodeHTML4 = dec.HTML;
exports.decodeHTML5 = dec.HTML;
exports.decodeHTML = dec.HTML;
exports.decodeHTML4Strict = dec.HTMLStrict;
exports.decodeHTML5Strict = dec.HTMLStrict;
exports.decodeHTMLStrict = dec.HTMLStrict;
exports.escape = enc.escapeXML;
