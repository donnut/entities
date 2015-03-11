#Entities
En- & decoder for XML/HTML entities.
TypeScript version

###…install `entities`

    npm i entities

###…use `entities`

```javascript
var entities = require("entities");
//encoding
entities.encodeXML("&#38;");  // "&amp;#38;"
entities.encodeHTML("&#38;"); // "&amp;&num;38&semi;"
//decoding
entities.decodeXML("asdf &amp; &#xFF; &#xFC; &apos;");  // "asdf & ÿ ü '"
entities.decodeHTML("asdf &amp; &yuml; &uuml; &apos;"); // "asdf & ÿ ü '"
```

<!-- TODO extend API -->

---

License: BSD-like
