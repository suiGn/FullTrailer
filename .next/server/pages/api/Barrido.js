"use strict";
(() => {
var exports = {};
exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 90730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 43076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 26295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2FBarrido_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FBarrido_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/Barrido.js
var Barrido_namespaceObject = {};
__webpack_require__.r(Barrido_namespaceObject);
__webpack_require__.d(Barrido_namespaceObject, {
  handler: () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(56429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(47153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(37305);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/Barrido.js
// pages/api/Barrido.js

const TABLE_DATA_URL = "/api/tableData";
async function getTableData() {
    try {
        const response = await external_axios_default().get(TABLE_DATA_URL);
        return response.data;
    } catch (error) {
        console.log("Error fetching table data", error);
        throw error;
    }
}
async function handler({ req }) {
    // Fetch the table data from the database
    const tableData = await getTableData();
    // Return the table data as JSON
    return {
        body: JSON.stringify(tableData),
        headers: {
            "content-type": "application/json"
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FBarrido&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2FBarrido.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2FBarrido_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FBarrido_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(Barrido_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(Barrido_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/Barrido",
        pathname: "/api/Barrido",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: Barrido_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(26295)));
module.exports = __webpack_exports__;

})();