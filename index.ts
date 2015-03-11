import enc = require("./lib/encode");
import dec = require("./lib/decode");

export var decode = function(data, level){
	return (!level || level <= 0 ? dec.XML : dec.HTML)(data);
};

export var decodeStrict = function(data, level){
	return (!level || level <= 0 ? dec.XML : dec.HTMLStrict)(data);
};

export var encode = function(data, level){
	return (!level || level <= 0 ? enc.XML : enc.HTML)(data);
};

export var encodeXML = enc.XML;

export var encodeHTML4 = enc.HTML;
export var encodeHTML5 = enc.HTML;
export var encodeHTML  = enc.HTML;

export var decodeXML = dec.XML;
export var decodeXMLStrict = dec.XML;

export var decodeHTML4 = dec.HTML;
export var decodeHTML5 = dec.HTML;
export var decodeHTML = dec.HTML;

export var decodeHTML4Strict = dec.HTMLStrict;
export var decodeHTML5Strict = dec.HTMLStrict;
export var decodeHTMLStrict = dec.HTMLStrict;

export var escape = enc.escapeXML;
