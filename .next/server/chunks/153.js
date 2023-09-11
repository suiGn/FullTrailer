"use strict";
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 68415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VehiculosTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14800);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const columns = [
    {
        field: "clave",
        headerName: "Clave",
        width: 130
    },
    {
        field: "descripcion",
        headerName: "Descripcion",
        width: 130
    },
    {
        field: "marca",
        headerName: "Marca",
        width: 130
    },
    {
        field: "modelo",
        headerName: "Modelo",
        width: 130
    },
    {
        field: "placas",
        headerName: "Placas",
        width: 130
    },
    {
        field: "numSerie",
        headerName: "NumSerie",
        width: 130
    },
    {
        field: "categoria",
        headerName: "Categoria",
        width: 130
    },
    {
        field: "tipo",
        headerName: "Tipo",
        width: 130
    },
    {
        field: "activo",
        headerName: "Activo",
        width: 130
    },
    {
        field: "assetid",
        headerName: "Asset ID",
        width: 130
    }
];
async function getVehiculos() {
    let apiUrl;
    if (true) {
        // Si está en producción (Heroku), usa la URL de producción.
        apiUrl = "https://fulltrailerserver-4d6224ea988e.herokuapp.com/api/";
    } else {}
    const res = await fetch(apiUrl + "getGruas");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const responseData = await res.json();
    // Add unique IDs to your rows (assuming 'clave' can be used as an ID)
    const rowsWithIds = responseData.map((row, index)=>({
            ...row,
            id: row.clave || index
        }));
    return rowsWithIds;
}
function VehiculosTable() {
    const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getVehiculos().then((data)=>{
            setRows(data);
        }).catch((error)=>console.error("Error fetching data:", error));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            height: "89vh",
            minWidth: "610"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__.DataGrid, {
            rows: rows,
            columns: columns,
            pageSize: 50,
            checkboxSelection: true
        })
    });
}


/***/ }),

/***/ 80447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/suign/Desktop/me/@apps/fullTrailer/apps/webapp/src/app/components/GruasTable.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;