"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.3.1";
exports.ids = ["vendor-chunks/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useInsertionEffectAlwaysWithSyncFallback: () => (/* binding */ useInsertionEffectAlwaysWithSyncFallback),\n/* harmony export */   useInsertionEffectWithLayoutFallback: () => (/* binding */ useInsertionEffectWithLayoutFallback)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.0_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar isBrowser = typeof document !== 'undefined';\n\nvar syncFallback = function syncFallback(create) {\n  return create();\n};\n\nvar useInsertionEffect = react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] ? react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] : false;\nvar useInsertionEffectAlwaysWithSyncFallback = !isBrowser ? syncFallback : useInsertionEffect || syncFallback;\nvar useInsertionEffectWithLayoutFallback = useInsertionEffect || react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGVtb3Rpb24rdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3NAMS4wLjFfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcy9kaXN0L2Vtb3Rpb24tdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0I7O0FBRS9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsa0NBQUssOEJBQThCLGtDQUFLO0FBQ2pFO0FBQ0EsaUVBQWlFLGtEQUFxQjs7QUFFSSIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGVyaWFsLWtpdC1yZWFjdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AZW1vdGlvbit1c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrc0AxLjAuMV9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VzZS1pbnNlcnRpb24tZWZmZWN0LXdpdGgtZmFsbGJhY2tzL2Rpc3QvZW1vdGlvbi11c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcy5lc20uanM/YmJjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG52YXIgc3luY0ZhbGxiYWNrID0gZnVuY3Rpb24gc3luY0ZhbGxiYWNrKGNyZWF0ZSkge1xuICByZXR1cm4gY3JlYXRlKCk7XG59O1xuXG52YXIgdXNlSW5zZXJ0aW9uRWZmZWN0ID0gUmVhY3RbJ3VzZUluc2VydGlvbicgKyAnRWZmZWN0J10gPyBSZWFjdFsndXNlSW5zZXJ0aW9uJyArICdFZmZlY3QnXSA6IGZhbHNlO1xudmFyIHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2sgPSAhaXNCcm93c2VyID8gc3luY0ZhbGxiYWNrIDogdXNlSW5zZXJ0aW9uRWZmZWN0IHx8IHN5bmNGYWxsYmFjaztcbnZhciB1c2VJbnNlcnRpb25FZmZlY3RXaXRoTGF5b3V0RmFsbGJhY2sgPSB1c2VJbnNlcnRpb25FZmZlY3QgfHwgUmVhY3QudXNlTGF5b3V0RWZmZWN0O1xuXG5leHBvcnQgeyB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrLCB1c2VJbnNlcnRpb25FZmZlY3RXaXRoTGF5b3V0RmFsbGJhY2sgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js\n");

/***/ })

};
;