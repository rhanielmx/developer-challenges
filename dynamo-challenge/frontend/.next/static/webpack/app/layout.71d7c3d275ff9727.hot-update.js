"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/lib/auth/client.ts":
/*!********************************!*\
  !*** ./src/lib/auth/client.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authClient: function() { return /* binding */ authClient; }\n/* harmony export */ });\n/* __next_internal_client_entry_do_not_use__ authClient auto */ function generateToken() {\n    const arr = new Uint8Array(12);\n    window.crypto.getRandomValues(arr);\n    return Array.from(arr, (v)=>v.toString(16).padStart(2, \"0\")).join(\"\");\n}\nconst user = {\n    id: \"USR-000\",\n    avatar: \"/assets/avatar.png\",\n    firstName: \"Sofia\",\n    lastName: \"Rivers\",\n    email: \"sofia@devias.io\"\n};\nclass AuthClient {\n    async signUp(_) {\n        // Make API request\n        // We do not handle the API, so we'll just generate a token and store it in localStorage.\n        const token = generateToken();\n        localStorage.setItem(\"custom-auth-token\", token);\n        return {};\n    }\n    async signInWithOAuth(_) {\n        return {\n            error: \"Social authentication not implemented\"\n        };\n    }\n    async signInWithPassword(params) {\n        const { email, password } = params;\n        // Make API request\n        const response = await fetch(\"/api/dashboard\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email,\n                password\n            })\n        });\n        const data = await response.json();\n        console.log(\"accessToken\", data.accessToken);\n        // We do not handle the API, so we'll check if the credentials match with the hardcoded ones.\n        localStorage.setItem(\"custom-auth-token\", accessToken);\n        return {};\n    }\n    async resetPassword(_) {\n        return {\n            error: \"Password reset not implemented\"\n        };\n    }\n    async updatePassword(_) {\n        return {\n            error: \"Update reset not implemented\"\n        };\n    }\n    async getUser() {\n        // Make API request\n        // We do not handle the API, so just check if we have a token in localStorage.\n        const token = localStorage.getItem(\"custom-auth-token\");\n        if (!token) {\n            return {\n                data: null\n            };\n        }\n        return {\n            data: user\n        };\n    }\n    async signOut() {\n        localStorage.removeItem(\"custom-auth-token\");\n        return {};\n    }\n}\nconst authClient = new AuthClient();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvYXV0aC9jbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7OztnRUFJQSxTQUFTQTtJQUNQLE1BQU1DLE1BQU0sSUFBSUMsV0FBVztJQUMzQkMsT0FBT0MsTUFBTSxDQUFDQyxlQUFlLENBQUNKO0lBQzlCLE9BQU9LLE1BQU1DLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxJQUFNQSxFQUFFQyxRQUFRLENBQUMsSUFBSUMsUUFBUSxDQUFDLEdBQUcsTUFBTUMsSUFBSSxDQUFDO0FBQ3RFO0FBRUEsTUFBTUMsT0FBTztJQUNYQyxJQUFJO0lBQ0pDLFFBQVE7SUFDUkMsV0FBVztJQUNYQyxVQUFVO0lBQ1ZDLE9BQU87QUFDVDtBQXNCQSxNQUFNQztJQUNKLE1BQU1DLE9BQU9DLENBQWUsRUFBK0I7UUFDekQsbUJBQW1CO1FBRW5CLHlGQUF5RjtRQUN6RixNQUFNQyxRQUFRckI7UUFDZHNCLGFBQWFDLE9BQU8sQ0FBQyxxQkFBcUJGO1FBRTFDLE9BQU8sQ0FBQztJQUNWO0lBRUEsTUFBTUcsZ0JBQWdCSixDQUF3QixFQUErQjtRQUMzRSxPQUFPO1lBQUVLLE9BQU87UUFBd0M7SUFDMUQ7SUFFQSxNQUFNQyxtQkFBbUJDLE1BQWdDLEVBQStCO1FBQ3RGLE1BQU0sRUFBRVYsS0FBSyxFQUFFVyxRQUFRLEVBQUUsR0FBR0Q7UUFFNUIsbUJBQW1CO1FBRW5CLE1BQU1FLFdBQVcsTUFBTUMsTUFBTSxrQkFBa0I7WUFDM0NDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQmxCO2dCQUNBVztZQUNGO1FBQ0o7UUFFQSxNQUFNUSxPQUFlLE1BQU1QLFNBQVNRLElBQUk7UUFDeENDLFFBQVFDLEdBQUcsQ0FBQyxlQUFlSCxLQUFLSSxXQUFXO1FBRTNDLDZGQUE2RjtRQUU3RmxCLGFBQWFDLE9BQU8sQ0FBQyxxQkFBcUJpQjtRQUUxQyxPQUFPLENBQUM7SUFDVjtJQUVBLE1BQU1DLGNBQWNyQixDQUFzQixFQUErQjtRQUN2RSxPQUFPO1lBQUVLLE9BQU87UUFBaUM7SUFDbkQ7SUFFQSxNQUFNaUIsZUFBZXRCLENBQXNCLEVBQStCO1FBQ3hFLE9BQU87WUFBRUssT0FBTztRQUErQjtJQUNqRDtJQUVBLE1BQU1rQixVQUEyRDtRQUMvRCxtQkFBbUI7UUFFbkIsOEVBQThFO1FBQzlFLE1BQU10QixRQUFRQyxhQUFhc0IsT0FBTyxDQUFDO1FBRW5DLElBQUksQ0FBQ3ZCLE9BQU87WUFDVixPQUFPO2dCQUFFZSxNQUFNO1lBQUs7UUFDdEI7UUFFQSxPQUFPO1lBQUVBLE1BQU14QjtRQUFLO0lBQ3RCO0lBRUEsTUFBTWlDLFVBQXVDO1FBQzNDdkIsYUFBYXdCLFVBQVUsQ0FBQztRQUV4QixPQUFPLENBQUM7SUFDVjtBQUNGO0FBRU8sTUFBTUMsYUFBYSxJQUFJN0IsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL2F1dGgvY2xpZW50LnRzP2NkMzEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tICdAL3R5cGVzL3VzZXInO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRva2VuKCk6IHN0cmluZyB7XG4gIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KDEyKTtcbiAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyKTtcbiAgcmV0dXJuIEFycmF5LmZyb20oYXJyLCAodikgPT4gdi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSkuam9pbignJyk7XG59XG5cbmNvbnN0IHVzZXIgPSB7XG4gIGlkOiAnVVNSLTAwMCcsXG4gIGF2YXRhcjogJy9hc3NldHMvYXZhdGFyLnBuZycsXG4gIGZpcnN0TmFtZTogJ1NvZmlhJyxcbiAgbGFzdE5hbWU6ICdSaXZlcnMnLFxuICBlbWFpbDogJ3NvZmlhQGRldmlhcy5pbycsXG59IHNhdGlzZmllcyBVc2VyO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25VcFBhcmFtcyB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25JbldpdGhPQXV0aFBhcmFtcyB7XG4gIHByb3ZpZGVyOiAnZ29vZ2xlJyB8ICdkaXNjb3JkJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaWduSW5XaXRoUGFzc3dvcmRQYXJhbXMge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc2V0UGFzc3dvcmRQYXJhbXMge1xuICBlbWFpbDogc3RyaW5nO1xufVxuXG5jbGFzcyBBdXRoQ2xpZW50IHtcbiAgYXN5bmMgc2lnblVwKF86IFNpZ25VcFBhcmFtcyk6IFByb21pc2U8eyBlcnJvcj86IHN0cmluZyB9PiB7XG4gICAgLy8gTWFrZSBBUEkgcmVxdWVzdFxuXG4gICAgLy8gV2UgZG8gbm90IGhhbmRsZSB0aGUgQVBJLCBzbyB3ZSdsbCBqdXN0IGdlbmVyYXRlIGEgdG9rZW4gYW5kIHN0b3JlIGl0IGluIGxvY2FsU3RvcmFnZS5cbiAgICBjb25zdCB0b2tlbiA9IGdlbmVyYXRlVG9rZW4oKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VzdG9tLWF1dGgtdG9rZW4nLCB0b2tlbik7XG5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICBhc3luYyBzaWduSW5XaXRoT0F1dGgoXzogU2lnbkluV2l0aE9BdXRoUGFyYW1zKTogUHJvbWlzZTx7IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgICByZXR1cm4geyBlcnJvcjogJ1NvY2lhbCBhdXRoZW50aWNhdGlvbiBub3QgaW1wbGVtZW50ZWQnIH07XG4gIH1cblxuICBhc3luYyBzaWduSW5XaXRoUGFzc3dvcmQocGFyYW1zOiBTaWduSW5XaXRoUGFzc3dvcmRQYXJhbXMpOiBQcm9taXNlPHsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBwYXJhbXM7XG5cbiAgICAvLyBNYWtlIEFQSSByZXF1ZXN0XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2Rhc2hib2FyZCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGE6IHN0cmluZyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKCdhY2Nlc3NUb2tlbicsIGRhdGEuYWNjZXNzVG9rZW4pXG5cbiAgICAvLyBXZSBkbyBub3QgaGFuZGxlIHRoZSBBUEksIHNvIHdlJ2xsIGNoZWNrIGlmIHRoZSBjcmVkZW50aWFscyBtYXRjaCB3aXRoIHRoZSBoYXJkY29kZWQgb25lcy5cbiAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1c3RvbS1hdXRoLXRva2VuJywgYWNjZXNzVG9rZW4pO1xuXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgYXN5bmMgcmVzZXRQYXNzd29yZChfOiBSZXNldFBhc3N3b3JkUGFyYW1zKTogUHJvbWlzZTx7IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgICByZXR1cm4geyBlcnJvcjogJ1Bhc3N3b3JkIHJlc2V0IG5vdCBpbXBsZW1lbnRlZCcgfTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVBhc3N3b3JkKF86IFJlc2V0UGFzc3dvcmRQYXJhbXMpOiBQcm9taXNlPHsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICAgIHJldHVybiB7IGVycm9yOiAnVXBkYXRlIHJlc2V0IG5vdCBpbXBsZW1lbnRlZCcgfTtcbiAgfVxuXG4gIGFzeW5jIGdldFVzZXIoKTogUHJvbWlzZTx7IGRhdGE/OiBVc2VyIHwgbnVsbDsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICAgIC8vIE1ha2UgQVBJIHJlcXVlc3RcblxuICAgIC8vIFdlIGRvIG5vdCBoYW5kbGUgdGhlIEFQSSwgc28ganVzdCBjaGVjayBpZiB3ZSBoYXZlIGEgdG9rZW4gaW4gbG9jYWxTdG9yYWdlLlxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1c3RvbS1hdXRoLXRva2VuJyk7XG5cbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICByZXR1cm4geyBkYXRhOiBudWxsIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZGF0YTogdXNlciB9O1xuICB9XG5cbiAgYXN5bmMgc2lnbk91dCgpOiBQcm9taXNlPHsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXN0b20tYXV0aC10b2tlbicpO1xuXG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhdXRoQ2xpZW50ID0gbmV3IEF1dGhDbGllbnQoKTtcbiJdLCJuYW1lcyI6WyJnZW5lcmF0ZVRva2VuIiwiYXJyIiwiVWludDhBcnJheSIsIndpbmRvdyIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIkFycmF5IiwiZnJvbSIsInYiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsInVzZXIiLCJpZCIsImF2YXRhciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJBdXRoQ2xpZW50Iiwic2lnblVwIiwiXyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNpZ25JbldpdGhPQXV0aCIsImVycm9yIiwic2lnbkluV2l0aFBhc3N3b3JkIiwicGFyYW1zIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiYWNjZXNzVG9rZW4iLCJyZXNldFBhc3N3b3JkIiwidXBkYXRlUGFzc3dvcmQiLCJnZXRVc2VyIiwiZ2V0SXRlbSIsInNpZ25PdXQiLCJyZW1vdmVJdGVtIiwiYXV0aENsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/auth/client.ts\n"));

/***/ })

});