"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/sign-up/page",{

/***/ "(app-pages-browser)/./src/lib/auth/client.ts":
/*!********************************!*\
  !*** ./src/lib/auth/client.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authClient: function() { return /* binding */ authClient; }\n/* harmony export */ });\n/* __next_internal_client_entry_do_not_use__ authClient auto */ function generateToken() {\n    const arr = new Uint8Array(12);\n    window.crypto.getRandomValues(arr);\n    return Array.from(arr, (v)=>v.toString(16).padStart(2, \"0\")).join(\"\");\n}\nconst user = {\n    id: \"USR-000\",\n    avatar: \"/assets/avatar.png\",\n    firstName: \"Sofia\",\n    lastName: \"Rivers\",\n    email: \"sofia@devias.io\"\n};\nclass AuthClient {\n    async signUp(_) {\n        // Make API request\n        // We do not handle the API, so we'll just generate a token and store it in localStorage.\n        const token = generateToken();\n        localStorage.setItem(\"dynamo-token\", token);\n        return {};\n    }\n    async signInWithOAuth(_) {\n        return {\n            error: \"Social authentication not implemented\"\n        };\n    }\n    async signInWithPassword(params) {\n        const { email, password } = params;\n        // Make API request\n        const response = await fetch(\"/api/authenticate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email,\n                password\n            })\n        });\n        const { access_token } = await response.json();\n        // We do not handle the API, so we'll check if the credentials match with the hardcoded ones.\n        localStorage.setItem(\"dynamo-token\", access_token);\n        return {};\n    }\n    async resetPassword(_) {\n        return {\n            error: \"Password reset not implemented\"\n        };\n    }\n    async updatePassword(_) {\n        return {\n            error: \"Update reset not implemented\"\n        };\n    }\n    async getUser() {\n        const token = localStorage.getItem(\"dynamo-token\");\n        // Make API request\n        if (!token) {\n            return {\n                data: null\n            };\n        }\n        return {\n            data: user\n        };\n    }\n    async signOut() {\n        localStorage.removeItem(\"dynamo-token\");\n        return {};\n    }\n}\nconst authClient = new AuthClient();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvYXV0aC9jbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7OztnRUFJQSxTQUFTQTtJQUNQLE1BQU1DLE1BQU0sSUFBSUMsV0FBVztJQUMzQkMsT0FBT0MsTUFBTSxDQUFDQyxlQUFlLENBQUNKO0lBQzlCLE9BQU9LLE1BQU1DLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxJQUFNQSxFQUFFQyxRQUFRLENBQUMsSUFBSUMsUUFBUSxDQUFDLEdBQUcsTUFBTUMsSUFBSSxDQUFDO0FBQ3RFO0FBRUEsTUFBTUMsT0FBTztJQUNYQyxJQUFJO0lBQ0pDLFFBQVE7SUFDUkMsV0FBVztJQUNYQyxVQUFVO0lBQ1ZDLE9BQU87QUFDVDtBQXNCQSxNQUFNQztJQUNKLE1BQU1DLE9BQU9DLENBQWUsRUFBK0I7UUFDekQsbUJBQW1CO1FBRW5CLHlGQUF5RjtRQUN6RixNQUFNQyxRQUFRckI7UUFDZHNCLGFBQWFDLE9BQU8sQ0FBQyxnQkFBZ0JGO1FBRXJDLE9BQU8sQ0FBQztJQUNWO0lBRUEsTUFBTUcsZ0JBQWdCSixDQUF3QixFQUErQjtRQUMzRSxPQUFPO1lBQUVLLE9BQU87UUFBd0M7SUFDMUQ7SUFFQSxNQUFNQyxtQkFBbUJDLE1BQWdDLEVBQStCO1FBQ3RGLE1BQU0sRUFBRVYsS0FBSyxFQUFFVyxRQUFRLEVBQUUsR0FBR0Q7UUFFNUIsbUJBQW1CO1FBRW5CLE1BQU1FLFdBQVcsTUFBTUMsTUFBTSxxQkFBcUI7WUFDOUNDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQmxCO2dCQUNBVztZQUNGO1FBQ0o7UUFFQSxNQUFNLEVBQUVRLFlBQVksRUFBRSxHQUFXLE1BQU1QLFNBQVNRLElBQUk7UUFFcEQsNkZBQTZGO1FBRTdGZixhQUFhQyxPQUFPLENBQUMsZ0JBQWdCYTtRQUVyQyxPQUFPLENBQUM7SUFDVjtJQUVBLE1BQU1FLGNBQWNsQixDQUFzQixFQUErQjtRQUN2RSxPQUFPO1lBQUVLLE9BQU87UUFBaUM7SUFDbkQ7SUFFQSxNQUFNYyxlQUFlbkIsQ0FBc0IsRUFBK0I7UUFDeEUsT0FBTztZQUFFSyxPQUFPO1FBQStCO0lBQ2pEO0lBRUEsTUFBTWUsVUFBMkQ7UUFDL0QsTUFBTW5CLFFBQVFDLGFBQWFtQixPQUFPLENBQUM7UUFDbkMsbUJBQW1CO1FBRW5CLElBQUksQ0FBQ3BCLE9BQU87WUFDVixPQUFPO2dCQUFFcUIsTUFBTTtZQUFLO1FBQ3RCO1FBRUEsT0FBTztZQUFFQSxNQUFNOUI7UUFBSztJQUN0QjtJQUVBLE1BQU0rQixVQUF1QztRQUMzQ3JCLGFBQWFzQixVQUFVLENBQUM7UUFFeEIsT0FBTyxDQUFDO0lBQ1Y7QUFDRjtBQUVPLE1BQU1DLGFBQWEsSUFBSTNCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9hdXRoL2NsaWVudC50cz9jZDMxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSAnQC90eXBlcy91c2VyJztcblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2tlbigpOiBzdHJpbmcge1xuICBjb25zdCBhcnIgPSBuZXcgVWludDhBcnJheSgxMik7XG4gIHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGFycik7XG4gIHJldHVybiBBcnJheS5mcm9tKGFyciwgKHYpID0+IHYudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xufVxuXG5jb25zdCB1c2VyID0ge1xuICBpZDogJ1VTUi0wMDAnLFxuICBhdmF0YXI6ICcvYXNzZXRzL2F2YXRhci5wbmcnLFxuICBmaXJzdE5hbWU6ICdTb2ZpYScsXG4gIGxhc3ROYW1lOiAnUml2ZXJzJyxcbiAgZW1haWw6ICdzb2ZpYUBkZXZpYXMuaW8nLFxufSBzYXRpc2ZpZXMgVXNlcjtcblxuZXhwb3J0IGludGVyZmFjZSBTaWduVXBQYXJhbXMge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaWduSW5XaXRoT0F1dGhQYXJhbXMge1xuICBwcm92aWRlcjogJ2dvb2dsZScgfCAnZGlzY29yZCc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbkluV2l0aFBhc3N3b3JkUGFyYW1zIHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNldFBhc3N3b3JkUGFyYW1zIHtcbiAgZW1haWw6IHN0cmluZztcbn1cblxuY2xhc3MgQXV0aENsaWVudCB7XG4gIGFzeW5jIHNpZ25VcChfOiBTaWduVXBQYXJhbXMpOiBQcm9taXNlPHsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICAgIC8vIE1ha2UgQVBJIHJlcXVlc3RcblxuICAgIC8vIFdlIGRvIG5vdCBoYW5kbGUgdGhlIEFQSSwgc28gd2UnbGwganVzdCBnZW5lcmF0ZSBhIHRva2VuIGFuZCBzdG9yZSBpdCBpbiBsb2NhbFN0b3JhZ2UuXG4gICAgY29uc3QgdG9rZW4gPSBnZW5lcmF0ZVRva2VuKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2R5bmFtby10b2tlbicsIHRva2VuKTtcblxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGFzeW5jIHNpZ25JbldpdGhPQXV0aChfOiBTaWduSW5XaXRoT0F1dGhQYXJhbXMpOiBQcm9taXNlPHsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICAgIHJldHVybiB7IGVycm9yOiAnU29jaWFsIGF1dGhlbnRpY2F0aW9uIG5vdCBpbXBsZW1lbnRlZCcgfTtcbiAgfVxuXG4gIGFzeW5jIHNpZ25JbldpdGhQYXNzd29yZChwYXJhbXM6IFNpZ25JbldpdGhQYXNzd29yZFBhcmFtcyk6IFByb21pc2U8eyBlcnJvcj86IHN0cmluZyB9PiB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHBhcmFtcztcblxuICAgIC8vIE1ha2UgQVBJIHJlcXVlc3RcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYXV0aGVudGljYXRlJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfTogc3RyaW5nID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICAvLyBXZSBkbyBub3QgaGFuZGxlIHRoZSBBUEksIHNvIHdlJ2xsIGNoZWNrIGlmIHRoZSBjcmVkZW50aWFscyBtYXRjaCB3aXRoIHRoZSBoYXJkY29kZWQgb25lcy5cbiAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2R5bmFtby10b2tlbicsIGFjY2Vzc190b2tlbik7XG5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICBhc3luYyByZXNldFBhc3N3b3JkKF86IFJlc2V0UGFzc3dvcmRQYXJhbXMpOiBQcm9taXNlPHsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICAgIHJldHVybiB7IGVycm9yOiAnUGFzc3dvcmQgcmVzZXQgbm90IGltcGxlbWVudGVkJyB9O1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlUGFzc3dvcmQoXzogUmVzZXRQYXNzd29yZFBhcmFtcyk6IFByb21pc2U8eyBlcnJvcj86IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdVcGRhdGUgcmVzZXQgbm90IGltcGxlbWVudGVkJyB9O1xuICB9XG5cbiAgYXN5bmMgZ2V0VXNlcigpOiBQcm9taXNlPHsgZGF0YT86IFVzZXIgfCBudWxsOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZHluYW1vLXRva2VuJyk7XG4gICAgLy8gTWFrZSBBUEkgcmVxdWVzdFxuXG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcmV0dXJuIHsgZGF0YTogbnVsbCB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IGRhdGE6IHVzZXIgfTtcbiAgfVxuXG4gIGFzeW5jIHNpZ25PdXQoKTogUHJvbWlzZTx7IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZHluYW1vLXRva2VuJyk7XG5cbiAgICByZXR1cm4ge307XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhDbGllbnQgPSBuZXcgQXV0aENsaWVudCgpO1xuIl0sIm5hbWVzIjpbImdlbmVyYXRlVG9rZW4iLCJhcnIiLCJVaW50OEFycmF5Iiwid2luZG93IiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiQXJyYXkiLCJmcm9tIiwidiIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJqb2luIiwidXNlciIsImlkIiwiYXZhdGFyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsIkF1dGhDbGllbnQiLCJzaWduVXAiLCJfIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2lnbkluV2l0aE9BdXRoIiwiZXJyb3IiLCJzaWduSW5XaXRoUGFzc3dvcmQiLCJwYXJhbXMiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhY2Nlc3NfdG9rZW4iLCJqc29uIiwicmVzZXRQYXNzd29yZCIsInVwZGF0ZVBhc3N3b3JkIiwiZ2V0VXNlciIsImdldEl0ZW0iLCJkYXRhIiwic2lnbk91dCIsInJlbW92ZUl0ZW0iLCJhdXRoQ2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/auth/client.ts\n"));

/***/ })

});