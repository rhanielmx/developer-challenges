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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authClient: function() { return /* binding */ authClient; }\n/* harmony export */ });\n/* __next_internal_client_entry_do_not_use__ authClient auto */ function generateToken() {\n    const arr = new Uint8Array(12);\n    window.crypto.getRandomValues(arr);\n    return Array.from(arr, (v)=>v.toString(16).padStart(2, \"0\")).join(\"\");\n}\nconst user = {\n    id: \"USR-000\",\n    avatar: \"/assets/avatar.png\",\n    firstName: \"Sofia\",\n    lastName: \"Rivers\",\n    email: \"sofia@devias.io\"\n};\nasync function fetchWithType(url, options) {\n    const response = await fetch(url, options);\n    if (!response.ok) {\n        throw new Error(\"HTTP error! Status: \".concat(response.status));\n    }\n    return response.json(); // Assert the type here\n}\nclass AuthClient {\n    async signUp(_) {\n        // Make API request\n        // We do not handle the API, so we'll just generate a token and store it in localStorage.\n        const token = generateToken();\n        localStorage.setItem(\"dynamo-token\", token);\n        return {};\n    }\n    async signInWithOAuth(_) {\n        return {\n            error: \"Social authentication not implemented\"\n        };\n    }\n    async signInWithPassword(params) {\n        const { email, password } = params;\n        const response = await fetchWithType(\"/api/authenticate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email,\n                password\n            })\n        });\n        const { access_token } = await response.json();\n        // We do not handle the API, so we'll check if the credentials match with the hardcoded ones.\n        localStorage.setItem(\"dynamo-token\", access_token);\n        return {};\n    }\n    async resetPassword(_) {\n        return {\n            error: \"Password reset not implemented\"\n        };\n    }\n    async updatePassword(_) {\n        return {\n            error: \"Update reset not implemented\"\n        };\n    }\n    async getUser() {\n        const token = localStorage.getItem(\"dynamo-token\");\n        // Make API request\n        if (!token) {\n            return {\n                data: null\n            };\n        }\n        return {\n            data: user\n        };\n    }\n    async signOut() {\n        localStorage.removeItem(\"dynamo-token\");\n        return {};\n    }\n}\nconst authClient = new AuthClient();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvYXV0aC9jbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7OztnRUFJQSxTQUFTQTtJQUNQLE1BQU1DLE1BQU0sSUFBSUMsV0FBVztJQUMzQkMsT0FBT0MsTUFBTSxDQUFDQyxlQUFlLENBQUNKO0lBQzlCLE9BQU9LLE1BQU1DLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxJQUFNQSxFQUFFQyxRQUFRLENBQUMsSUFBSUMsUUFBUSxDQUFDLEdBQUcsTUFBTUMsSUFBSSxDQUFDO0FBQ3RFO0FBRUEsTUFBTUMsT0FBTztJQUNYQyxJQUFJO0lBQ0pDLFFBQVE7SUFDUkMsV0FBVztJQUNYQyxVQUFVO0lBQ1ZDLE9BQU87QUFDVDtBQXNCQSxlQUFlQyxjQUFpQkMsR0FBVyxFQUFFQyxPQUFxQjtJQUM5RCxNQUFNQyxXQUFXLE1BQU1DLE1BQU1ILEtBQUtDO0lBRWxDLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFO1FBQ2QsTUFBTSxJQUFJQyxNQUFNLHVCQUF1QyxPQUFoQkgsU0FBU0ksTUFBTTtJQUMxRDtJQUVBLE9BQU9KLFNBQVNLLElBQUksSUFBa0IsdUJBQXVCO0FBQ2pFO0FBQ0EsTUFBTUM7SUFDSixNQUFNQyxPQUFPQyxDQUFlLEVBQStCO1FBQ3pELG1CQUFtQjtRQUVuQix5RkFBeUY7UUFDekYsTUFBTUMsUUFBUTlCO1FBQ2QrQixhQUFhQyxPQUFPLENBQUMsZ0JBQWdCRjtRQUVyQyxPQUFPLENBQUM7SUFDVjtJQUVBLE1BQU1HLGdCQUFnQkosQ0FBd0IsRUFBK0I7UUFDM0UsT0FBTztZQUFFSyxPQUFPO1FBQXdDO0lBQzFEO0lBSUEsTUFBTUMsbUJBQW1CQyxNQUFnQyxFQUErQjtRQUN0RixNQUFNLEVBQUVuQixLQUFLLEVBQUVvQixRQUFRLEVBQUUsR0FBR0Q7UUFLNUIsTUFBTWYsV0FBVyxNQUFNSCxjQUFxQixxQkFBcUI7WUFDN0RvQixRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJ6QjtnQkFDQW9CO1lBQ0Y7UUFDSjtRQUNBLE1BQU0sRUFBRU0sWUFBWSxFQUFFLEdBQVUsTUFBTXRCLFNBQVNLLElBQUk7UUFFbkQsNkZBQTZGO1FBRTdGSyxhQUFhQyxPQUFPLENBQUMsZ0JBQWdCVztRQUVyQyxPQUFPLENBQUM7SUFDVjtJQUVBLE1BQU1DLGNBQWNmLENBQXNCLEVBQStCO1FBQ3ZFLE9BQU87WUFBRUssT0FBTztRQUFpQztJQUNuRDtJQUVBLE1BQU1XLGVBQWVoQixDQUFzQixFQUErQjtRQUN4RSxPQUFPO1lBQUVLLE9BQU87UUFBK0I7SUFDakQ7SUFFQSxNQUFNWSxVQUEyRDtRQUMvRCxNQUFNaEIsUUFBUUMsYUFBYWdCLE9BQU8sQ0FBQztRQUNuQyxtQkFBbUI7UUFFbkIsSUFBSSxDQUFDakIsT0FBTztZQUNWLE9BQU87Z0JBQUVrQixNQUFNO1lBQUs7UUFDdEI7UUFFQSxPQUFPO1lBQUVBLE1BQU1wQztRQUFLO0lBQ3RCO0lBRUEsTUFBTXFDLFVBQXVDO1FBQzNDbEIsYUFBYW1CLFVBQVUsQ0FBQztRQUV4QixPQUFPLENBQUM7SUFDVjtBQUNGO0FBRU8sTUFBTUMsYUFBYSxJQUFJeEIsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL2F1dGgvY2xpZW50LnRzP2NkMzEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tICdAL3R5cGVzL3VzZXInO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRva2VuKCk6IHN0cmluZyB7XG4gIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KDEyKTtcbiAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyKTtcbiAgcmV0dXJuIEFycmF5LmZyb20oYXJyLCAodikgPT4gdi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSkuam9pbignJyk7XG59XG5cbmNvbnN0IHVzZXIgPSB7XG4gIGlkOiAnVVNSLTAwMCcsXG4gIGF2YXRhcjogJy9hc3NldHMvYXZhdGFyLnBuZycsXG4gIGZpcnN0TmFtZTogJ1NvZmlhJyxcbiAgbGFzdE5hbWU6ICdSaXZlcnMnLFxuICBlbWFpbDogJ3NvZmlhQGRldmlhcy5pbycsXG59IHNhdGlzZmllcyBVc2VyO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25VcFBhcmFtcyB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25JbldpdGhPQXV0aFBhcmFtcyB7XG4gIHByb3ZpZGVyOiAnZ29vZ2xlJyB8ICdkaXNjb3JkJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaWduSW5XaXRoUGFzc3dvcmRQYXJhbXMge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc2V0UGFzc3dvcmRQYXJhbXMge1xuICBlbWFpbDogc3RyaW5nO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdpdGhUeXBlPFQ+KHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdEluaXQpOiBQcm9taXNlPFQ+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG4gICAgXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZTxUPjsgLy8gQXNzZXJ0IHRoZSB0eXBlIGhlcmVcbn1cbmNsYXNzIEF1dGhDbGllbnQge1xuICBhc3luYyBzaWduVXAoXzogU2lnblVwUGFyYW1zKTogUHJvbWlzZTx7IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgICAvLyBNYWtlIEFQSSByZXF1ZXN0XG5cbiAgICAvLyBXZSBkbyBub3QgaGFuZGxlIHRoZSBBUEksIHNvIHdlJ2xsIGp1c3QgZ2VuZXJhdGUgYSB0b2tlbiBhbmQgc3RvcmUgaXQgaW4gbG9jYWxTdG9yYWdlLlxuICAgIGNvbnN0IHRva2VuID0gZ2VuZXJhdGVUb2tlbigpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkeW5hbW8tdG9rZW4nLCB0b2tlbik7XG5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICBhc3luYyBzaWduSW5XaXRoT0F1dGgoXzogU2lnbkluV2l0aE9BdXRoUGFyYW1zKTogUHJvbWlzZTx7IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgICByZXR1cm4geyBlcnJvcjogJ1NvY2lhbCBhdXRoZW50aWNhdGlvbiBub3QgaW1wbGVtZW50ZWQnIH07XG4gIH1cblxuICBcblxuICBhc3luYyBzaWduSW5XaXRoUGFzc3dvcmQocGFyYW1zOiBTaWduSW5XaXRoUGFzc3dvcmRQYXJhbXMpOiBQcm9taXNlPHsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBwYXJhbXM7XG5cbiAgICAvLyBNYWtlIEFQSSByZXF1ZXN0XG4gICAgaW50ZXJmYWNlIFRva2VuICB7IGFjY2Vzc190b2tlbjogc3RyaW5nIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hXaXRoVHlwZTxUb2tlbj4oJy9hcGkvYXV0aGVudGljYXRlJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfTpUb2tlbiAgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIC8vIFdlIGRvIG5vdCBoYW5kbGUgdGhlIEFQSSwgc28gd2UnbGwgY2hlY2sgaWYgdGhlIGNyZWRlbnRpYWxzIG1hdGNoIHdpdGggdGhlIGhhcmRjb2RlZCBvbmVzLlxuICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZHluYW1vLXRva2VuJywgYWNjZXNzX3Rva2VuKTtcblxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGFzeW5jIHJlc2V0UGFzc3dvcmQoXzogUmVzZXRQYXNzd29yZFBhcmFtcyk6IFByb21pc2U8eyBlcnJvcj86IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdQYXNzd29yZCByZXNldCBub3QgaW1wbGVtZW50ZWQnIH07XG4gIH1cblxuICBhc3luYyB1cGRhdGVQYXNzd29yZChfOiBSZXNldFBhc3N3b3JkUGFyYW1zKTogUHJvbWlzZTx7IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgICByZXR1cm4geyBlcnJvcjogJ1VwZGF0ZSByZXNldCBub3QgaW1wbGVtZW50ZWQnIH07XG4gIH1cblxuICBhc3luYyBnZXRVc2VyKCk6IFByb21pc2U8eyBkYXRhPzogVXNlciB8IG51bGw7IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkeW5hbW8tdG9rZW4nKTtcbiAgICAvLyBNYWtlIEFQSSByZXF1ZXN0XG5cbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICByZXR1cm4geyBkYXRhOiBudWxsIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZGF0YTogdXNlciB9O1xuICB9XG5cbiAgYXN5bmMgc2lnbk91dCgpOiBQcm9taXNlPHsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdkeW5hbW8tdG9rZW4nKTtcblxuICAgIHJldHVybiB7fTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXV0aENsaWVudCA9IG5ldyBBdXRoQ2xpZW50KCk7XG4iXSwibmFtZXMiOlsiZ2VuZXJhdGVUb2tlbiIsImFyciIsIlVpbnQ4QXJyYXkiLCJ3aW5kb3ciLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJBcnJheSIsImZyb20iLCJ2IiwidG9TdHJpbmciLCJwYWRTdGFydCIsImpvaW4iLCJ1c2VyIiwiaWQiLCJhdmF0YXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiZmV0Y2hXaXRoVHlwZSIsInVybCIsIm9wdGlvbnMiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJBdXRoQ2xpZW50Iiwic2lnblVwIiwiXyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNpZ25JbldpdGhPQXV0aCIsImVycm9yIiwic2lnbkluV2l0aFBhc3N3b3JkIiwicGFyYW1zIiwicGFzc3dvcmQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhY2Nlc3NfdG9rZW4iLCJyZXNldFBhc3N3b3JkIiwidXBkYXRlUGFzc3dvcmQiLCJnZXRVc2VyIiwiZ2V0SXRlbSIsImRhdGEiLCJzaWduT3V0IiwicmVtb3ZlSXRlbSIsImF1dGhDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/auth/client.ts\n"));

/***/ })

});