"use strict";
exports.id = 217;
exports.ids = [217];
exports.modules = {

/***/ 6145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StatusTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31022);
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77523);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24608);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80765);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68101);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70138);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44233);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52694);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(62106);
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20524);
/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71113);
/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

















let apiUrl;
if (true) {
    // Si está en producción (Heroku), usa la URL de producción.
    apiUrl = "https://fulltrailerserver-4d6224ea988e.herokuapp.com/api/";
} else {}
async function getStatus() {
    const res = await fetch(apiUrl + "getMotumStatus");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const responseData = await res.json();
    return responseData;
}
function StatusTable({ data }) {
    const [latestTransaction, setLatestTransaction] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [relatedData, setRelatedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getStatus().then((data)=>{
            setLatestTransaction(data.latestTransaction);
            setRelatedData(data.relatedData);
        }).catch((error)=>console.error("Error fetching data:", error));
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_2___default()), {
                variant: "outlined",
                "aria-label": "outlined button group",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        children: "Generar Barrido"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        children: "Anterior"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        children: "Siguiente"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Estatus Motum:"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("pre", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                        children: "Fecha del Status:"
                    }),
                    JSON.stringify(latestTransaction.querydate, null, 2)
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("pre", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                        children: "ID de la Consulta:"
                    }),
                    JSON.stringify(latestTransaction.transactionid, null, 2)
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4___default()), {
                component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5___default()),
                sx: {
                    maxHeight: "90vh"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_6___default()), {
                    sx: {
                        minWidth: "610"
                    },
                    stickyHeader: true,
                    "aria-label": "sticky table",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default()), {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        children: "Asset ID"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        children: "Vehicle Number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        children: "Number Plates"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        children: "Vehicle Brand"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        children: "Vehicle Model"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        children: "Vehicle Year"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        children: "VIN"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        children: "Engine Model"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        children: "Group Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        children: "Serial Number"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_10___default()), {
                            children: relatedData.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Row, {
                                    row: item
                                }, item.assetid))
                        })
                    ]
                })
            })
        ]
    });
}
function Row(props) {
    const { row } = props;
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default()), {
                sx: {
                    "& > *": {
                        borderBottom: "unset"
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
                            "aria-label": "expand row",
                            size: "small",
                            onClick: ()=>setOpen(!open),
                            children: open ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                        children: row.assetid
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                        children: row.vehiclenumber
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                        children: row.numberplates
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                        children: row.vehiclebrand
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                        children: row.vehiclemodel
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                        children: row.vehicleyear
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                        children: row.vin
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                        children: row.enginemodel
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                        children: row.groupname
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                        children: row.serialnumber
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                    style: {
                        paddingBottom: 0,
                        paddingTop: 0
                    },
                    colSpan: 7,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_14___default()), {
                        in: open,
                        timeout: "auto",
                        unmountOnExit: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_15__["default"], {
                            sx: {
                                display: "flex",
                                justifyContent: "space-between",
                                margin: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default()), {
                                            variant: "h6",
                                            gutterBottom: true,
                                            component: "div",
                                            children: "Operador"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default()), {
                                            variant: "body2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: "Date:"
                                                }),
                                                " ",
                                                row.position.date,
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: " Driver ID:"
                                                }),
                                                row.position.driver.driverId,
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: " Driver Name:"
                                                }),
                                                row.position.driver.driverName,
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: " Driver Last Name:"
                                                }),
                                                row.position.driver.driverLastName,
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: " Driver Key:"
                                                }),
                                                row.position.driver.driverKey,
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default()), {
                                            variant: "h6",
                                            gutterBottom: true,
                                            component: "div",
                                            children: "Detalles de Posici\xf3n"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default()), {
                                            variant: "body2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: "Altitude"
                                                }),
                                                " ",
                                                row.position.altitude,
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: "gpsSpeed:"
                                                }),
                                                " ",
                                                row.position.gpsSpeed,
                                                "   ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: "ignition:"
                                                }),
                                                " ",
                                                row.position.ignition,
                                                "   ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: "latitude:"
                                                }),
                                                " ",
                                                row.position.latitude,
                                                "   ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: "longitude:"
                                                }),
                                                " ",
                                                row.position.longitude,
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: "orientation:"
                                                }),
                                                " ",
                                                row.position.orientation,
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: "streetReference:"
                                                }),
                                                " ",
                                                row.position.streetReference,
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: "nearestCityReference:"
                                                }),
                                                " ",
                                                row.position.nearestCityReference,
                                                "  ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 11248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/suign/Desktop/me/@apps/fullTrailer/apps/webapp/src/app/components/StatusTable.js`)

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