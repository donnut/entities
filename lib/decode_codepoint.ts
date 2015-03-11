import decodeMap = require("../maps/decode");

module decodeCodePoint {

	// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
	export function decodeCodePoint(codePoint): string{

		if((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF){
			return "\uFFFD";
		}

		if(codePoint in decodeMap.decode){
			codePoint = decodeMap.decode[codePoint];
		}

		var output = "";

		if(codePoint > 0xFFFF){
			codePoint -= 0x10000;
			output += String.fromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
			codePoint = 0xDC00 | codePoint & 0x3FF;
		}

		output += String.fromCharCode(codePoint);
		return output;
	}
}
export = decodeCodePoint;
