"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/pvtsutils";
exports.ids = ["vendor-chunks/pvtsutils"];
exports.modules = {

/***/ "(rsc)/./node_modules/pvtsutils/build/index.es.js":
/*!**************************************************!*\
  !*** ./node_modules/pvtsutils/build/index.es.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BufferSourceConverter: () => (/* binding */ BufferSourceConverter),\n/* harmony export */   Convert: () => (/* binding */ Convert),\n/* harmony export */   assign: () => (/* binding */ assign),\n/* harmony export */   combine: () => (/* binding */ combine),\n/* harmony export */   isEqual: () => (/* binding */ isEqual)\n/* harmony export */ });\n/*!\n * MIT License\n * \n * Copyright (c) 2017-2022 Peculiar Ventures, LLC\n * \n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n * \n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n * \n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n * \n */\n\nconst ARRAY_BUFFER_NAME = \"[object ArrayBuffer]\";\nclass BufferSourceConverter {\n    static isArrayBuffer(data) {\n        return Object.prototype.toString.call(data) === ARRAY_BUFFER_NAME;\n    }\n    static toArrayBuffer(data) {\n        if (this.isArrayBuffer(data)) {\n            return data;\n        }\n        if (data.byteLength === data.buffer.byteLength) {\n            return data.buffer;\n        }\n        if (data.byteOffset === 0 && data.byteLength === data.buffer.byteLength) {\n            return data.buffer;\n        }\n        return this.toUint8Array(data.buffer)\n            .slice(data.byteOffset, data.byteOffset + data.byteLength)\n            .buffer;\n    }\n    static toUint8Array(data) {\n        return this.toView(data, Uint8Array);\n    }\n    static toView(data, type) {\n        if (data.constructor === type) {\n            return data;\n        }\n        if (this.isArrayBuffer(data)) {\n            return new type(data);\n        }\n        if (this.isArrayBufferView(data)) {\n            return new type(data.buffer, data.byteOffset, data.byteLength);\n        }\n        throw new TypeError(\"The provided value is not of type '(ArrayBuffer or ArrayBufferView)'\");\n    }\n    static isBufferSource(data) {\n        return this.isArrayBufferView(data)\n            || this.isArrayBuffer(data);\n    }\n    static isArrayBufferView(data) {\n        return ArrayBuffer.isView(data)\n            || (data && this.isArrayBuffer(data.buffer));\n    }\n    static isEqual(a, b) {\n        const aView = BufferSourceConverter.toUint8Array(a);\n        const bView = BufferSourceConverter.toUint8Array(b);\n        if (aView.length !== bView.byteLength) {\n            return false;\n        }\n        for (let i = 0; i < aView.length; i++) {\n            if (aView[i] !== bView[i]) {\n                return false;\n            }\n        }\n        return true;\n    }\n    static concat(...args) {\n        let buffers;\n        if (Array.isArray(args[0]) && !(args[1] instanceof Function)) {\n            buffers = args[0];\n        }\n        else if (Array.isArray(args[0]) && args[1] instanceof Function) {\n            buffers = args[0];\n        }\n        else {\n            if (args[args.length - 1] instanceof Function) {\n                buffers = args.slice(0, args.length - 1);\n            }\n            else {\n                buffers = args;\n            }\n        }\n        let size = 0;\n        for (const buffer of buffers) {\n            size += buffer.byteLength;\n        }\n        const res = new Uint8Array(size);\n        let offset = 0;\n        for (const buffer of buffers) {\n            const view = this.toUint8Array(buffer);\n            res.set(view, offset);\n            offset += view.length;\n        }\n        if (args[args.length - 1] instanceof Function) {\n            return this.toView(res, args[args.length - 1]);\n        }\n        return res.buffer;\n    }\n}\n\nconst STRING_TYPE = \"string\";\nconst HEX_REGEX = /^[0-9a-f]+$/i;\nconst BASE64_REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;\nconst BASE64URL_REGEX = /^[a-zA-Z0-9-_]+$/;\nclass Utf8Converter {\n    static fromString(text) {\n        const s = unescape(encodeURIComponent(text));\n        const uintArray = new Uint8Array(s.length);\n        for (let i = 0; i < s.length; i++) {\n            uintArray[i] = s.charCodeAt(i);\n        }\n        return uintArray.buffer;\n    }\n    static toString(buffer) {\n        const buf = BufferSourceConverter.toUint8Array(buffer);\n        let encodedString = \"\";\n        for (let i = 0; i < buf.length; i++) {\n            encodedString += String.fromCharCode(buf[i]);\n        }\n        const decodedString = decodeURIComponent(escape(encodedString));\n        return decodedString;\n    }\n}\nclass Utf16Converter {\n    static toString(buffer, littleEndian = false) {\n        const arrayBuffer = BufferSourceConverter.toArrayBuffer(buffer);\n        const dataView = new DataView(arrayBuffer);\n        let res = \"\";\n        for (let i = 0; i < arrayBuffer.byteLength; i += 2) {\n            const code = dataView.getUint16(i, littleEndian);\n            res += String.fromCharCode(code);\n        }\n        return res;\n    }\n    static fromString(text, littleEndian = false) {\n        const res = new ArrayBuffer(text.length * 2);\n        const dataView = new DataView(res);\n        for (let i = 0; i < text.length; i++) {\n            dataView.setUint16(i * 2, text.charCodeAt(i), littleEndian);\n        }\n        return res;\n    }\n}\nclass Convert {\n    static isHex(data) {\n        return typeof data === STRING_TYPE\n            && HEX_REGEX.test(data);\n    }\n    static isBase64(data) {\n        return typeof data === STRING_TYPE\n            && BASE64_REGEX.test(data);\n    }\n    static isBase64Url(data) {\n        return typeof data === STRING_TYPE\n            && BASE64URL_REGEX.test(data);\n    }\n    static ToString(buffer, enc = \"utf8\") {\n        const buf = BufferSourceConverter.toUint8Array(buffer);\n        switch (enc.toLowerCase()) {\n            case \"utf8\":\n                return this.ToUtf8String(buf);\n            case \"binary\":\n                return this.ToBinary(buf);\n            case \"hex\":\n                return this.ToHex(buf);\n            case \"base64\":\n                return this.ToBase64(buf);\n            case \"base64url\":\n                return this.ToBase64Url(buf);\n            case \"utf16le\":\n                return Utf16Converter.toString(buf, true);\n            case \"utf16\":\n            case \"utf16be\":\n                return Utf16Converter.toString(buf);\n            default:\n                throw new Error(`Unknown type of encoding '${enc}'`);\n        }\n    }\n    static FromString(str, enc = \"utf8\") {\n        if (!str) {\n            return new ArrayBuffer(0);\n        }\n        switch (enc.toLowerCase()) {\n            case \"utf8\":\n                return this.FromUtf8String(str);\n            case \"binary\":\n                return this.FromBinary(str);\n            case \"hex\":\n                return this.FromHex(str);\n            case \"base64\":\n                return this.FromBase64(str);\n            case \"base64url\":\n                return this.FromBase64Url(str);\n            case \"utf16le\":\n                return Utf16Converter.fromString(str, true);\n            case \"utf16\":\n            case \"utf16be\":\n                return Utf16Converter.fromString(str);\n            default:\n                throw new Error(`Unknown type of encoding '${enc}'`);\n        }\n    }\n    static ToBase64(buffer) {\n        const buf = BufferSourceConverter.toUint8Array(buffer);\n        if (typeof btoa !== \"undefined\") {\n            const binary = this.ToString(buf, \"binary\");\n            return btoa(binary);\n        }\n        else {\n            return Buffer.from(buf).toString(\"base64\");\n        }\n    }\n    static FromBase64(base64) {\n        const formatted = this.formatString(base64);\n        if (!formatted) {\n            return new ArrayBuffer(0);\n        }\n        if (!Convert.isBase64(formatted)) {\n            throw new TypeError(\"Argument 'base64Text' is not Base64 encoded\");\n        }\n        if (typeof atob !== \"undefined\") {\n            return this.FromBinary(atob(formatted));\n        }\n        else {\n            return new Uint8Array(Buffer.from(formatted, \"base64\")).buffer;\n        }\n    }\n    static FromBase64Url(base64url) {\n        const formatted = this.formatString(base64url);\n        if (!formatted) {\n            return new ArrayBuffer(0);\n        }\n        if (!Convert.isBase64Url(formatted)) {\n            throw new TypeError(\"Argument 'base64url' is not Base64Url encoded\");\n        }\n        return this.FromBase64(this.Base64Padding(formatted.replace(/\\-/g, \"+\").replace(/\\_/g, \"/\")));\n    }\n    static ToBase64Url(data) {\n        return this.ToBase64(data).replace(/\\+/g, \"-\").replace(/\\//g, \"_\").replace(/\\=/g, \"\");\n    }\n    static FromUtf8String(text, encoding = Convert.DEFAULT_UTF8_ENCODING) {\n        switch (encoding) {\n            case \"ascii\":\n                return this.FromBinary(text);\n            case \"utf8\":\n                return Utf8Converter.fromString(text);\n            case \"utf16\":\n            case \"utf16be\":\n                return Utf16Converter.fromString(text);\n            case \"utf16le\":\n            case \"usc2\":\n                return Utf16Converter.fromString(text, true);\n            default:\n                throw new Error(`Unknown type of encoding '${encoding}'`);\n        }\n    }\n    static ToUtf8String(buffer, encoding = Convert.DEFAULT_UTF8_ENCODING) {\n        switch (encoding) {\n            case \"ascii\":\n                return this.ToBinary(buffer);\n            case \"utf8\":\n                return Utf8Converter.toString(buffer);\n            case \"utf16\":\n            case \"utf16be\":\n                return Utf16Converter.toString(buffer);\n            case \"utf16le\":\n            case \"usc2\":\n                return Utf16Converter.toString(buffer, true);\n            default:\n                throw new Error(`Unknown type of encoding '${encoding}'`);\n        }\n    }\n    static FromBinary(text) {\n        const stringLength = text.length;\n        const resultView = new Uint8Array(stringLength);\n        for (let i = 0; i < stringLength; i++) {\n            resultView[i] = text.charCodeAt(i);\n        }\n        return resultView.buffer;\n    }\n    static ToBinary(buffer) {\n        const buf = BufferSourceConverter.toUint8Array(buffer);\n        let res = \"\";\n        for (let i = 0; i < buf.length; i++) {\n            res += String.fromCharCode(buf[i]);\n        }\n        return res;\n    }\n    static ToHex(buffer) {\n        const buf = BufferSourceConverter.toUint8Array(buffer);\n        let result = \"\";\n        const len = buf.length;\n        for (let i = 0; i < len; i++) {\n            const byte = buf[i];\n            if (byte < 16) {\n                result += \"0\";\n            }\n            result += byte.toString(16);\n        }\n        return result;\n    }\n    static FromHex(hexString) {\n        let formatted = this.formatString(hexString);\n        if (!formatted) {\n            return new ArrayBuffer(0);\n        }\n        if (!Convert.isHex(formatted)) {\n            throw new TypeError(\"Argument 'hexString' is not HEX encoded\");\n        }\n        if (formatted.length % 2) {\n            formatted = `0${formatted}`;\n        }\n        const res = new Uint8Array(formatted.length / 2);\n        for (let i = 0; i < formatted.length; i = i + 2) {\n            const c = formatted.slice(i, i + 2);\n            res[i / 2] = parseInt(c, 16);\n        }\n        return res.buffer;\n    }\n    static ToUtf16String(buffer, littleEndian = false) {\n        return Utf16Converter.toString(buffer, littleEndian);\n    }\n    static FromUtf16String(text, littleEndian = false) {\n        return Utf16Converter.fromString(text, littleEndian);\n    }\n    static Base64Padding(base64) {\n        const padCount = 4 - (base64.length % 4);\n        if (padCount < 4) {\n            for (let i = 0; i < padCount; i++) {\n                base64 += \"=\";\n            }\n        }\n        return base64;\n    }\n    static formatString(data) {\n        return (data === null || data === void 0 ? void 0 : data.replace(/[\\n\\r\\t ]/g, \"\")) || \"\";\n    }\n}\nConvert.DEFAULT_UTF8_ENCODING = \"utf8\";\n\nfunction assign(target, ...sources) {\n    const res = arguments[0];\n    for (let i = 1; i < arguments.length; i++) {\n        const obj = arguments[i];\n        for (const prop in obj) {\n            res[prop] = obj[prop];\n        }\n    }\n    return res;\n}\nfunction combine(...buf) {\n    const totalByteLength = buf.map((item) => item.byteLength).reduce((prev, cur) => prev + cur);\n    const res = new Uint8Array(totalByteLength);\n    let currentPos = 0;\n    buf.map((item) => new Uint8Array(item)).forEach((arr) => {\n        for (const item2 of arr) {\n            res[currentPos++] = item2;\n        }\n    });\n    return res.buffer;\n}\nfunction isEqual(bytes1, bytes2) {\n    if (!(bytes1 && bytes2)) {\n        return false;\n    }\n    if (bytes1.byteLength !== bytes2.byteLength) {\n        return false;\n    }\n    const b1 = new Uint8Array(bytes1);\n    const b2 = new Uint8Array(bytes2);\n    for (let i = 0; i < bytes1.byteLength; i++) {\n        if (b1[i] !== b2[i]) {\n            return false;\n        }\n    }\n    return true;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcHZ0c3V0aWxzL2J1aWxkL2luZGV4LmVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELElBQUk7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxJQUFJO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsU0FBUztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsU0FBUztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTtBQUN0QztBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kaWUtY2FydC8uL25vZGVfbW9kdWxlcy9wdnRzdXRpbHMvYnVpbGQvaW5kZXguZXMuanM/N2FlOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIE1JVCBMaWNlbnNlXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNy0yMDIyIFBlY3VsaWFyIFZlbnR1cmVzLCBMTENcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICogXG4gKi9cblxuY29uc3QgQVJSQVlfQlVGRkVSX05BTUUgPSBcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI7XG5jbGFzcyBCdWZmZXJTb3VyY2VDb252ZXJ0ZXIge1xuICAgIHN0YXRpYyBpc0FycmF5QnVmZmVyKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKSA9PT0gQVJSQVlfQlVGRkVSX05BTUU7XG4gICAgfVxuICAgIHN0YXRpYyB0b0FycmF5QnVmZmVyKGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBcnJheUJ1ZmZlcihkYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuYnl0ZUxlbmd0aCA9PT0gZGF0YS5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmJ5dGVPZmZzZXQgPT09IDAgJiYgZGF0YS5ieXRlTGVuZ3RoID09PSBkYXRhLmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9VaW50OEFycmF5KGRhdGEuYnVmZmVyKVxuICAgICAgICAgICAgLnNsaWNlKGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlT2Zmc2V0ICsgZGF0YS5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgLmJ1ZmZlcjtcbiAgICB9XG4gICAgc3RhdGljIHRvVWludDhBcnJheShkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvVmlldyhkYXRhLCBVaW50OEFycmF5KTtcbiAgICB9XG4gICAgc3RhdGljIHRvVmlldyhkYXRhLCB0eXBlKSB7XG4gICAgICAgIGlmIChkYXRhLmNvbnN0cnVjdG9yID09PSB0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0FycmF5QnVmZmVyKGRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHR5cGUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgdHlwZShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgcHJvdmlkZWQgdmFsdWUgaXMgbm90IG9mIHR5cGUgJyhBcnJheUJ1ZmZlciBvciBBcnJheUJ1ZmZlclZpZXcpJ1wiKTtcbiAgICB9XG4gICAgc3RhdGljIGlzQnVmZmVyU291cmNlKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSlcbiAgICAgICAgICAgIHx8IHRoaXMuaXNBcnJheUJ1ZmZlcihkYXRhKTtcbiAgICB9XG4gICAgc3RhdGljIGlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKVxuICAgICAgICAgICAgfHwgKGRhdGEgJiYgdGhpcy5pc0FycmF5QnVmZmVyKGRhdGEuYnVmZmVyKSk7XG4gICAgfVxuICAgIHN0YXRpYyBpc0VxdWFsKGEsIGIpIHtcbiAgICAgICAgY29uc3QgYVZpZXcgPSBCdWZmZXJTb3VyY2VDb252ZXJ0ZXIudG9VaW50OEFycmF5KGEpO1xuICAgICAgICBjb25zdCBiVmlldyA9IEJ1ZmZlclNvdXJjZUNvbnZlcnRlci50b1VpbnQ4QXJyYXkoYik7XG4gICAgICAgIGlmIChhVmlldy5sZW5ndGggIT09IGJWaWV3LmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFWaWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYVZpZXdbaV0gIT09IGJWaWV3W2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgY29uY2F0KC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IGJ1ZmZlcnM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3NbMF0pICYmICEoYXJnc1sxXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkge1xuICAgICAgICAgICAgYnVmZmVycyA9IGFyZ3NbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmdzWzBdKSAmJiBhcmdzWzFdIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGJ1ZmZlcnMgPSBhcmdzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFyZ3NbYXJncy5sZW5ndGggLSAxXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVycyA9IGFyZ3Muc2xpY2UoMCwgYXJncy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1ZmZlcnMgPSBhcmdzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBzaXplID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBidWZmZXIgb2YgYnVmZmVycykge1xuICAgICAgICAgICAgc2l6ZSArPSBidWZmZXIuYnl0ZUxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXMgPSBuZXcgVWludDhBcnJheShzaXplKTtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgYnVmZmVyIG9mIGJ1ZmZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnRvVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICAgICAgcmVzLnNldCh2aWV3LCBvZmZzZXQpO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IHZpZXcubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9WaWV3KHJlcywgYXJnc1thcmdzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmJ1ZmZlcjtcbiAgICB9XG59XG5cbmNvbnN0IFNUUklOR19UWVBFID0gXCJzdHJpbmdcIjtcbmNvbnN0IEhFWF9SRUdFWCA9IC9eWzAtOWEtZl0rJC9pO1xuY29uc3QgQkFTRTY0X1JFR0VYID0gL14oPzpbQS1aYS16MC05Ky9dezR9KSooPzpbQS1aYS16MC05Ky9dezJ9PT18W0EtWmEtejAtOSsvXXszfT0pPyQvO1xuY29uc3QgQkFTRTY0VVJMX1JFR0VYID0gL15bYS16QS1aMC05LV9dKyQvO1xuY2xhc3MgVXRmOENvbnZlcnRlciB7XG4gICAgc3RhdGljIGZyb21TdHJpbmcodGV4dCkge1xuICAgICAgICBjb25zdCBzID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgICAgICAgY29uc3QgdWludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkocy5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHVpbnRBcnJheVtpXSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdWludEFycmF5LmJ1ZmZlcjtcbiAgICB9XG4gICAgc3RhdGljIHRvU3RyaW5nKGJ1ZmZlcikge1xuICAgICAgICBjb25zdCBidWYgPSBCdWZmZXJTb3VyY2VDb252ZXJ0ZXIudG9VaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGxldCBlbmNvZGVkU3RyaW5nID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGVuY29kZWRTdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZWRTdHJpbmcgPSBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGVuY29kZWRTdHJpbmcpKTtcbiAgICAgICAgcmV0dXJuIGRlY29kZWRTdHJpbmc7XG4gICAgfVxufVxuY2xhc3MgVXRmMTZDb252ZXJ0ZXIge1xuICAgIHN0YXRpYyB0b1N0cmluZyhidWZmZXIsIGxpdHRsZUVuZGlhbiA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gQnVmZmVyU291cmNlQ29udmVydGVyLnRvQXJyYXlCdWZmZXIoYnVmZmVyKTtcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIpO1xuICAgICAgICBsZXQgcmVzID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBkYXRhVmlldy5nZXRVaW50MTYoaSwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tU3RyaW5nKHRleHQsIGxpdHRsZUVuZGlhbiA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IG5ldyBBcnJheUJ1ZmZlcih0ZXh0Lmxlbmd0aCAqIDIpO1xuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhyZXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNihpICogMiwgdGV4dC5jaGFyQ29kZUF0KGkpLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxufVxuY2xhc3MgQ29udmVydCB7XG4gICAgc3RhdGljIGlzSGV4KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBkYXRhID09PSBTVFJJTkdfVFlQRVxuICAgICAgICAgICAgJiYgSEVYX1JFR0VYLnRlc3QoZGF0YSk7XG4gICAgfVxuICAgIHN0YXRpYyBpc0Jhc2U2NChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZGF0YSA9PT0gU1RSSU5HX1RZUEVcbiAgICAgICAgICAgICYmIEJBU0U2NF9SRUdFWC50ZXN0KGRhdGEpO1xuICAgIH1cbiAgICBzdGF0aWMgaXNCYXNlNjRVcmwoZGF0YSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGRhdGEgPT09IFNUUklOR19UWVBFXG4gICAgICAgICAgICAmJiBCQVNFNjRVUkxfUkVHRVgudGVzdChkYXRhKTtcbiAgICB9XG4gICAgc3RhdGljIFRvU3RyaW5nKGJ1ZmZlciwgZW5jID0gXCJ1dGY4XCIpIHtcbiAgICAgICAgY29uc3QgYnVmID0gQnVmZmVyU291cmNlQ29udmVydGVyLnRvVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICBzd2l0Y2ggKGVuYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlIFwidXRmOFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlRvVXRmOFN0cmluZyhidWYpO1xuICAgICAgICAgICAgY2FzZSBcImJpbmFyeVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlRvQmluYXJ5KGJ1Zik7XG4gICAgICAgICAgICBjYXNlIFwiaGV4XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVG9IZXgoYnVmKTtcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlNjRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0Jhc2U2NChidWYpO1xuICAgICAgICAgICAgY2FzZSBcImJhc2U2NHVybFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlRvQmFzZTY0VXJsKGJ1Zik7XG4gICAgICAgICAgICBjYXNlIFwidXRmMTZsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBVdGYxNkNvbnZlcnRlci50b1N0cmluZyhidWYsIHRydWUpO1xuICAgICAgICAgICAgY2FzZSBcInV0ZjE2XCI6XG4gICAgICAgICAgICBjYXNlIFwidXRmMTZiZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBVdGYxNkNvbnZlcnRlci50b1N0cmluZyhidWYpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdHlwZSBvZiBlbmNvZGluZyAnJHtlbmN9J2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBGcm9tU3RyaW5nKHN0ciwgZW5jID0gXCJ1dGY4XCIpIHtcbiAgICAgICAgaWYgKCFzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChlbmMudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSBcInV0ZjhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Gcm9tVXRmOFN0cmluZyhzdHIpO1xuICAgICAgICAgICAgY2FzZSBcImJpbmFyeVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkZyb21CaW5hcnkoc3RyKTtcbiAgICAgICAgICAgIGNhc2UgXCJoZXhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Gcm9tSGV4KHN0cik7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZTY0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRnJvbUJhc2U2NChzdHIpO1xuICAgICAgICAgICAgY2FzZSBcImJhc2U2NHVybFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkZyb21CYXNlNjRVcmwoc3RyKTtcbiAgICAgICAgICAgIGNhc2UgXCJ1dGYxNmxlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0ZjE2Q29udmVydGVyLmZyb21TdHJpbmcoc3RyLCB0cnVlKTtcbiAgICAgICAgICAgIGNhc2UgXCJ1dGYxNlwiOlxuICAgICAgICAgICAgY2FzZSBcInV0ZjE2YmVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRmMTZDb252ZXJ0ZXIuZnJvbVN0cmluZyhzdHIpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdHlwZSBvZiBlbmNvZGluZyAnJHtlbmN9J2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBUb0Jhc2U2NChidWZmZXIpIHtcbiAgICAgICAgY29uc3QgYnVmID0gQnVmZmVyU291cmNlQ29udmVydGVyLnRvVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICBpZiAodHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGJpbmFyeSA9IHRoaXMuVG9TdHJpbmcoYnVmLCBcImJpbmFyeVwiKTtcbiAgICAgICAgICAgIHJldHVybiBidG9hKGJpbmFyeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oYnVmKS50b1N0cmluZyhcImJhc2U2NFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgRnJvbUJhc2U2NChiYXNlNjQpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gdGhpcy5mb3JtYXRTdHJpbmcoYmFzZTY0KTtcbiAgICAgICAgaWYgKCFmb3JtYXR0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFDb252ZXJ0LmlzQmFzZTY0KGZvcm1hdHRlZCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBcmd1bWVudCAnYmFzZTY0VGV4dCcgaXMgbm90IEJhc2U2NCBlbmNvZGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYXRvYiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRnJvbUJpbmFyeShhdG9iKGZvcm1hdHRlZCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KEJ1ZmZlci5mcm9tKGZvcm1hdHRlZCwgXCJiYXNlNjRcIikpLmJ1ZmZlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgRnJvbUJhc2U2NFVybChiYXNlNjR1cmwpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gdGhpcy5mb3JtYXRTdHJpbmcoYmFzZTY0dXJsKTtcbiAgICAgICAgaWYgKCFmb3JtYXR0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFDb252ZXJ0LmlzQmFzZTY0VXJsKGZvcm1hdHRlZCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBcmd1bWVudCAnYmFzZTY0dXJsJyBpcyBub3QgQmFzZTY0VXJsIGVuY29kZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuRnJvbUJhc2U2NCh0aGlzLkJhc2U2NFBhZGRpbmcoZm9ybWF0dGVkLnJlcGxhY2UoL1xcLS9nLCBcIitcIikucmVwbGFjZSgvXFxfL2csIFwiL1wiKSkpO1xuICAgIH1cbiAgICBzdGF0aWMgVG9CYXNlNjRVcmwoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5Ub0Jhc2U2NChkYXRhKS5yZXBsYWNlKC9cXCsvZywgXCItXCIpLnJlcGxhY2UoL1xcLy9nLCBcIl9cIikucmVwbGFjZSgvXFw9L2csIFwiXCIpO1xuICAgIH1cbiAgICBzdGF0aWMgRnJvbVV0ZjhTdHJpbmcodGV4dCwgZW5jb2RpbmcgPSBDb252ZXJ0LkRFRkFVTFRfVVRGOF9FTkNPRElORykge1xuICAgICAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICAgICAgICBjYXNlIFwiYXNjaWlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Gcm9tQmluYXJ5KHRleHQpO1xuICAgICAgICAgICAgY2FzZSBcInV0ZjhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRmOENvbnZlcnRlci5mcm9tU3RyaW5nKHRleHQpO1xuICAgICAgICAgICAgY2FzZSBcInV0ZjE2XCI6XG4gICAgICAgICAgICBjYXNlIFwidXRmMTZiZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBVdGYxNkNvbnZlcnRlci5mcm9tU3RyaW5nKHRleHQpO1xuICAgICAgICAgICAgY2FzZSBcInV0ZjE2bGVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJ1c2MyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0ZjE2Q29udmVydGVyLmZyb21TdHJpbmcodGV4dCwgdHJ1ZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB0eXBlIG9mIGVuY29kaW5nICcke2VuY29kaW5nfSdgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgVG9VdGY4U3RyaW5nKGJ1ZmZlciwgZW5jb2RpbmcgPSBDb252ZXJ0LkRFRkFVTFRfVVRGOF9FTkNPRElORykge1xuICAgICAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICAgICAgICBjYXNlIFwiYXNjaWlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0JpbmFyeShidWZmZXIpO1xuICAgICAgICAgICAgY2FzZSBcInV0ZjhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRmOENvbnZlcnRlci50b1N0cmluZyhidWZmZXIpO1xuICAgICAgICAgICAgY2FzZSBcInV0ZjE2XCI6XG4gICAgICAgICAgICBjYXNlIFwidXRmMTZiZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBVdGYxNkNvbnZlcnRlci50b1N0cmluZyhidWZmZXIpO1xuICAgICAgICAgICAgY2FzZSBcInV0ZjE2bGVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJ1c2MyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0ZjE2Q29udmVydGVyLnRvU3RyaW5nKGJ1ZmZlciwgdHJ1ZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB0eXBlIG9mIGVuY29kaW5nICcke2VuY29kaW5nfSdgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgRnJvbUJpbmFyeSh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ0xlbmd0aCA9IHRleHQubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXN1bHRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoc3RyaW5nTGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0Vmlld1tpXSA9IHRleHQuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0Vmlldy5idWZmZXI7XG4gICAgfVxuICAgIHN0YXRpYyBUb0JpbmFyeShidWZmZXIpIHtcbiAgICAgICAgY29uc3QgYnVmID0gQnVmZmVyU291cmNlQ29udmVydGVyLnRvVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICBsZXQgcmVzID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgc3RhdGljIFRvSGV4KGJ1ZmZlcikge1xuICAgICAgICBjb25zdCBidWYgPSBCdWZmZXJTb3VyY2VDb252ZXJ0ZXIudG9VaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICBjb25zdCBsZW4gPSBidWYubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBieXRlID0gYnVmW2ldO1xuICAgICAgICAgICAgaWYgKGJ5dGUgPCAxNikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIjBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCArPSBieXRlLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBzdGF0aWMgRnJvbUhleChoZXhTdHJpbmcpIHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZCA9IHRoaXMuZm9ybWF0U3RyaW5nKGhleFN0cmluZyk7XG4gICAgICAgIGlmICghZm9ybWF0dGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQ29udmVydC5pc0hleChmb3JtYXR0ZWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgJ2hleFN0cmluZycgaXMgbm90IEhFWCBlbmNvZGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXR0ZWQubGVuZ3RoICUgMikge1xuICAgICAgICAgICAgZm9ybWF0dGVkID0gYDAke2Zvcm1hdHRlZH1gO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcyA9IG5ldyBVaW50OEFycmF5KGZvcm1hdHRlZC5sZW5ndGggLyAyKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXR0ZWQubGVuZ3RoOyBpID0gaSArIDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGMgPSBmb3JtYXR0ZWQuc2xpY2UoaSwgaSArIDIpO1xuICAgICAgICAgICAgcmVzW2kgLyAyXSA9IHBhcnNlSW50KGMsIDE2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmJ1ZmZlcjtcbiAgICB9XG4gICAgc3RhdGljIFRvVXRmMTZTdHJpbmcoYnVmZmVyLCBsaXR0bGVFbmRpYW4gPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gVXRmMTZDb252ZXJ0ZXIudG9TdHJpbmcoYnVmZmVyLCBsaXR0bGVFbmRpYW4pO1xuICAgIH1cbiAgICBzdGF0aWMgRnJvbVV0ZjE2U3RyaW5nKHRleHQsIGxpdHRsZUVuZGlhbiA9IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBVdGYxNkNvbnZlcnRlci5mcm9tU3RyaW5nKHRleHQsIGxpdHRsZUVuZGlhbik7XG4gICAgfVxuICAgIHN0YXRpYyBCYXNlNjRQYWRkaW5nKGJhc2U2NCkge1xuICAgICAgICBjb25zdCBwYWRDb3VudCA9IDQgLSAoYmFzZTY0Lmxlbmd0aCAlIDQpO1xuICAgICAgICBpZiAocGFkQ291bnQgPCA0KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZENvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBiYXNlNjQgKz0gXCI9XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2U2NDtcbiAgICB9XG4gICAgc3RhdGljIGZvcm1hdFN0cmluZyhkYXRhKSB7XG4gICAgICAgIHJldHVybiAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLnJlcGxhY2UoL1tcXG5cXHJcXHQgXS9nLCBcIlwiKSkgfHwgXCJcIjtcbiAgICB9XG59XG5Db252ZXJ0LkRFRkFVTFRfVVRGOF9FTkNPRElORyA9IFwidXRmOFwiO1xuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgY29uc3QgcmVzID0gYXJndW1lbnRzWzBdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgcmVzW3Byb3BdID0gb2JqW3Byb3BdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBjb21iaW5lKC4uLmJ1Zikge1xuICAgIGNvbnN0IHRvdGFsQnl0ZUxlbmd0aCA9IGJ1Zi5tYXAoKGl0ZW0pID0+IGl0ZW0uYnl0ZUxlbmd0aCkucmVkdWNlKChwcmV2LCBjdXIpID0+IHByZXYgKyBjdXIpO1xuICAgIGNvbnN0IHJlcyA9IG5ldyBVaW50OEFycmF5KHRvdGFsQnl0ZUxlbmd0aCk7XG4gICAgbGV0IGN1cnJlbnRQb3MgPSAwO1xuICAgIGJ1Zi5tYXAoKGl0ZW0pID0+IG5ldyBVaW50OEFycmF5KGl0ZW0pKS5mb3JFYWNoKChhcnIpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtMiBvZiBhcnIpIHtcbiAgICAgICAgICAgIHJlc1tjdXJyZW50UG9zKytdID0gaXRlbTI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzLmJ1ZmZlcjtcbn1cbmZ1bmN0aW9uIGlzRXF1YWwoYnl0ZXMxLCBieXRlczIpIHtcbiAgICBpZiAoIShieXRlczEgJiYgYnl0ZXMyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChieXRlczEuYnl0ZUxlbmd0aCAhPT0gYnl0ZXMyLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBiMSA9IG5ldyBVaW50OEFycmF5KGJ5dGVzMSk7XG4gICAgY29uc3QgYjIgPSBuZXcgVWludDhBcnJheShieXRlczIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMxLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYjFbaV0gIT09IGIyW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7IEJ1ZmZlclNvdXJjZUNvbnZlcnRlciwgQ29udmVydCwgYXNzaWduLCBjb21iaW5lLCBpc0VxdWFsIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/pvtsutils/build/index.es.js\n");

/***/ })

};
;