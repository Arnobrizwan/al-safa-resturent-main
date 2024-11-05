"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/_components/BusinessList.jsx":
/*!******************************************!*\
  !*** ./app/_components/BusinessList.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_utils/GlobalApi */ \"(app-pages-browser)/./app/_utils/GlobalApi.js\");\n/* harmony import */ var _BusinessItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BusinessItem */ \"(app-pages-browser)/./app/_components/BusinessItem.jsx\");\n/* harmony import */ var _BusinessItemSkelton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BusinessItemSkelton */ \"(app-pages-browser)/./app/_components/BusinessItemSkelton.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction BusinessList() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"all\");\n    const [businessList, setBusinessList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        params && setCategory(params.get(\"category\") ? params.get(\"category\") : \"all\");\n        params && getBusinessList(params.get(\"category\") ? params.get(\"category\") : \"all\");\n    }, [\n        params\n    ]);\n    const getBusinessList = (category_)=>{\n        setLoading(true);\n        _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_3__[\"default\"].GetBusiness(category_).then((resp)=>{\n            setBusinessList(resp === null || resp === void 0 ? void 0 : resp.restaurants);\n            setLoading(false);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-2xl\",\n                children: [\n                    category,\n                    \" Menu\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Arnob\\\\Desktop\\\\al-safa-resturent-main\\\\app\\\\_components\\\\BusinessList.jsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-primary\",\n                children: [\n                    businessList === null || businessList === void 0 ? void 0 : businessList.length,\n                    \" Results\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Arnob\\\\Desktop\\\\al-safa-resturent-main\\\\app\\\\_components\\\\BusinessList.jsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3 \",\n                children: !loading ? businessList.map((restaurants, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BusinessItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        business: restaurants\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Arnob\\\\Desktop\\\\al-safa-resturent-main\\\\app\\\\_components\\\\BusinessList.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this)) : [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5,\n                    6,\n                    7,\n                    8\n                ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BusinessItemSkelton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Arnob\\\\Desktop\\\\al-safa-resturent-main\\\\app\\\\_components\\\\BusinessList.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Arnob\\\\Desktop\\\\al-safa-resturent-main\\\\app\\\\_components\\\\BusinessList.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Arnob\\\\Desktop\\\\al-safa-resturent-main\\\\app\\\\_components\\\\BusinessList.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(BusinessList, \"zqyuo8ZUNJkv+33ZPEeFTkj6/fU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = BusinessList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BusinessList);\nvar _c;\n$RefreshReg$(_c, \"BusinessList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9CdXNpbmVzc0xpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUQ7QUFDQztBQUNOO0FBQ0Y7QUFDYztBQUV4RCxTQUFTTzs7SUFDTCxNQUFNQyxTQUFPUixnRUFBZUE7SUFDNUIsTUFBTSxDQUFDUyxVQUFTQyxZQUFZLEdBQUNQLCtDQUFRQSxDQUFDO0lBQ3RDLE1BQU0sQ0FBQ1EsY0FBYUMsZ0JBQWdCLEdBQUNULCtDQUFRQSxDQUFDLEVBQUU7SUFDaEQsTUFBTSxDQUFDVSxTQUFRQyxXQUFXLEdBQUNYLCtDQUFRQSxDQUFDO0lBQ3BDRCxnREFBU0EsQ0FBQztRQUNOTSxVQUFRRSxZQUFZRixPQUFPTyxHQUFHLENBQUMsY0FBWVAsT0FBT08sR0FBRyxDQUFDLGNBQVk7UUFDbEVQLFVBQVFRLGdCQUFnQlIsT0FBT08sR0FBRyxDQUFDLGNBQVlQLE9BQU9PLEdBQUcsQ0FBQyxjQUFZO0lBQzFFLEdBQUU7UUFBQ1A7S0FBTztJQUVWLE1BQU1RLGtCQUFnQixDQUFDQztRQUNuQkgsV0FBVztRQUNYVix3REFBU0EsQ0FBQ2MsV0FBVyxDQUFDRCxXQUFXRSxJQUFJLENBQUNDLENBQUFBO1lBQ2xDUixnQkFBZ0JRLGlCQUFBQSwyQkFBQUEsS0FBTUMsV0FBVztZQUNqQ1AsV0FBVztRQUNmO0lBQ0o7SUFFRixxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVOztvQkFBc0JkO29CQUFTOzs7Ozs7OzBCQUM3Qyw4REFBQ2U7Z0JBQUdELFdBQVU7O29CQUEwQloseUJBQUFBLG1DQUFBQSxhQUFjYyxNQUFNO29CQUFDOzs7Ozs7OzBCQUU3RCw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBTVYsQ0FBQ1YsVUFBU0YsYUFBYWUsR0FBRyxDQUFDLENBQUNMLGFBQVlNLHNCQUNyQyw4REFBQ3RCLHFEQUFZQTt3QkFDYnVCLFVBQVVQO3VCQURTTTs7OztnQ0FJdkI7b0JBQUM7b0JBQUU7b0JBQUU7b0JBQUU7b0JBQUU7b0JBQUU7b0JBQUU7b0JBQUU7aUJBQUUsQ0FBQ0QsR0FBRyxDQUFDLENBQUNHLE1BQUtGLHNCQUN4Qiw4REFBQ3JCLDREQUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEM7R0F6Q1NDOztRQUNRUCw0REFBZUE7OztLQUR2Qk87QUEyQ1QsK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL19jb21wb25lbnRzL0J1c2luZXNzTGlzdC5qc3g/NzM5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBHbG9iYWxBcGkgZnJvbSAnLi4vX3V0aWxzL0dsb2JhbEFwaSc7XG5pbXBvcnQgQnVzaW5lc3NJdGVtIGZyb20gJy4vQnVzaW5lc3NJdGVtJztcbmltcG9ydCBCdXNpbmVzc0l0ZW1Ta2VsdG9uIGZyb20gJy4vQnVzaW5lc3NJdGVtU2tlbHRvbic7XG5cbmZ1bmN0aW9uIEJ1c2luZXNzTGlzdCgpIHtcbiAgICBjb25zdCBwYXJhbXM9dXNlU2VhcmNoUGFyYW1zKCk7XG4gICAgY29uc3QgW2NhdGVnb3J5LHNldENhdGVnb3J5XT11c2VTdGF0ZSgnYWxsJyk7XG4gICAgY29uc3QgW2J1c2luZXNzTGlzdCxzZXRCdXNpbmVzc0xpc3RdPXVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXT11c2VTdGF0ZShmYWxzZSlcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgcGFyYW1zJiZzZXRDYXRlZ29yeShwYXJhbXMuZ2V0KCdjYXRlZ29yeScpP3BhcmFtcy5nZXQoJ2NhdGVnb3J5Jyk6J2FsbCcpXG4gICAgICAgIHBhcmFtcyYmZ2V0QnVzaW5lc3NMaXN0KHBhcmFtcy5nZXQoJ2NhdGVnb3J5Jyk/cGFyYW1zLmdldCgnY2F0ZWdvcnknKTonYWxsJylcbiAgICB9LFtwYXJhbXNdKTtcblxuICAgIGNvbnN0IGdldEJ1c2luZXNzTGlzdD0oY2F0ZWdvcnlfKT0+e1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBHbG9iYWxBcGkuR2V0QnVzaW5lc3MoY2F0ZWdvcnlfKS50aGVuKHJlc3A9PntcbiAgICAgICAgICAgIHNldEJ1c2luZXNzTGlzdChyZXNwPy5yZXN0YXVyYW50cylcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KVxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtdC01Jz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtMnhsJz57Y2F0ZWdvcnl9IE1lbnU8L2gyPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1wcmltYXJ5Jz57YnVzaW5lc3NMaXN0Py5sZW5ndGh9IFJlc3VsdHM8L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xXG4gICAgICAgIHNtOmdyaWQtY29scy0yXG4gICAgICAgIG1kOmdyaWQtY29scy0zXG4gICAgICAgIGxnOmdyaWQtY29scy00XG4gICAgICAgIGdhcC03IG10LTNcbiAgICAgICAgJz5cbiAgICAgICAgICAgIHshbG9hZGluZz8gYnVzaW5lc3NMaXN0Lm1hcCgocmVzdGF1cmFudHMsaW5kZXgpPT4oXG4gICAgICAgICAgICAgICAgPEJ1c2luZXNzSXRlbSBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGJ1c2luZXNzPXtyZXN0YXVyYW50c31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSk6XG4gICAgICAgICAgICBbMSwyLDMsNCw1LDYsNyw4XS5tYXAoKGl0ZW0saW5kZXgpPT4oXG4gICAgICAgICAgICAgICAgPEJ1c2luZXNzSXRlbVNrZWx0b24vPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVzaW5lc3NMaXN0Il0sIm5hbWVzIjpbInVzZVNlYXJjaFBhcmFtcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHbG9iYWxBcGkiLCJCdXNpbmVzc0l0ZW0iLCJCdXNpbmVzc0l0ZW1Ta2VsdG9uIiwiQnVzaW5lc3NMaXN0IiwicGFyYW1zIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsImJ1c2luZXNzTGlzdCIsInNldEJ1c2luZXNzTGlzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0IiwiZ2V0QnVzaW5lc3NMaXN0IiwiY2F0ZWdvcnlfIiwiR2V0QnVzaW5lc3MiLCJ0aGVuIiwicmVzcCIsInJlc3RhdXJhbnRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsImJ1c2luZXNzIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/BusinessList.jsx\n"));

/***/ })

});