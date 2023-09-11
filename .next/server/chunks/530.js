exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 1234:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 12382:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 17029));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 20807));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 24937));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 31670));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 89287));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 49882));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1990));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 155));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 95797));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 16079));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 81752));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 87636));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99253));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 545));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 92642));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54066));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 81649));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 20953));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98847));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 43872));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 20094, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 33987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6176, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 43610, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 79536, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 74147, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61272, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 19868, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 48547, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 93429, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 17421, 23))

/***/ }),

/***/ 17029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ThemeRegistry)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CssBaseline/index.js
var CssBaseline = __webpack_require__(98331);
// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.esm.js + 7 modules
var emotion_cache_esm = __webpack_require__(68941);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-6bdfffb2.esm.js + 1 modules
var emotion_element_6bdfffb2_esm = __webpack_require__(7904);
;// CONCATENATED MODULE: ./src/app/components/ThemeRegistry/EmotionCache.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




// Adapted from https://github.com/garronej/tss-react/blob/main/src/next/appDir.tsx
function NextAppDirEmotionCacheProvider(props) {
    const { options, CacheProvider = emotion_element_6bdfffb2_esm.C, children } = props;
    const [registry] = react_.useState(()=>{
        const cache = (0,emotion_cache_esm["default"])(options);
        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted = [];
        cache.insert = (...args)=>{
            const [selector, serialized] = args;
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push({
                    name: serialized.name,
                    isGlobal: !selector
                });
            }
            return prevInsert(...args);
        };
        const flush = ()=>{
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };
        return {
            cache,
            flush
        };
    });
    (0,navigation.useServerInsertedHTML)(()=>{
        const inserted = registry.flush();
        if (inserted.length === 0) {
            return null;
        }
        let styles = "";
        let dataEmotionAttribute = registry.cache.key;
        const globals = [];
        inserted.forEach(({ name, isGlobal })=>{
            const style = registry.cache.inserted[name];
            if (typeof style !== "boolean") {
                if (isGlobal) {
                    globals.push({
                        name,
                        style
                    });
                } else {
                    styles += style;
                    dataEmotionAttribute += ` ${name}`;
                }
            }
        });
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
            children: [
                globals.map(({ name, style })=>/*#__PURE__*/ jsx_runtime_.jsx("style", {
                        "data-emotion": `${registry.cache.key}-global ${name}`,
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML: {
                            __html: style
                        }
                    }, name)),
                styles && /*#__PURE__*/ jsx_runtime_.jsx("style", {
                    "data-emotion": dataEmotionAttribute,
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML: {
                        __html: styles
                    }
                })
            ]
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(CacheProvider, {
        value: registry.cache,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/components/ThemeRegistry/theme.js","import":"Roboto","arguments":[{"weight":["300","400","500","700"],"subsets":["latin"],"display":"swap"}],"variableName":"roboto"}
var theme_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_variableName_roboto_ = __webpack_require__(24388);
var theme_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_variableName_roboto_default = /*#__PURE__*/__webpack_require__.n(theme_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_variableName_roboto_);
;// CONCATENATED MODULE: ./src/app/components/ThemeRegistry/theme.js


const theme = (0,styles.createTheme)({
    palette: {
        mode: "light"
    },
    typography: {
        fontFamily: (theme_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_variableName_roboto_default()).style.fontFamily
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState })=>({
                        ...ownerState.severity === "info" && {
                            backgroundColor: "#60a5fa"
                        }
                    })
            }
        }
    }
});
/* harmony default export */ const ThemeRegistry_theme = (theme);

;// CONCATENATED MODULE: ./src/app/components/ThemeRegistry/ThemeRegistry.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





function ThemeRegistry({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(NextAppDirEmotionCacheProvider, {
        options: {
            key: "mui"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.ThemeProvider, {
            theme: ThemeRegistry_theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CssBaseline["default"], {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 11679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62947);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14178);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);








function MediaCard({ heading, text }) {
    return /*#__PURE__*/ _jsxs(Card, {
        children: [
            /*#__PURE__*/ _jsx(Image, {
                alt: "Random image",
                src: "https://source.unsplash.com/random",
                width: 640,
                height: 480,
                style: {
                    maxWidth: "100%",
                    height: "200px",
                    objectFit: "cover"
                }
            }),
            /*#__PURE__*/ _jsxs(CardContent, {
                children: [
                    /*#__PURE__*/ _jsx(Typography, {
                        gutterBottom: true,
                        variant: "h5",
                        component: "div",
                        children: heading
                    }),
                    /*#__PURE__*/ _jsx(Typography, {
                        variant: "body2",
                        color: "text.secondary",
                        children: text
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(CardActions, {
                children: [
                    /*#__PURE__*/ _jsx(Button, {
                        size: "small",
                        children: "Share"
                    }),
                    /*#__PURE__*/ _jsx(Button, {
                        size: "small",
                        children: "Learn More"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 39701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AppBar/index.js
var AppBar = __webpack_require__(40881);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(58811);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Drawer/index.js
var Drawer = __webpack_require__(84945);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Toolbar/index.js
var Toolbar = __webpack_require__(87117);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(48476);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(47351);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/List/index.js
var List = __webpack_require__(82834);
var List_default = /*#__PURE__*/__webpack_require__.n(List);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItem/index.js
var ListItem = __webpack_require__(17470);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemButton/index.js
var ListItemButton = __webpack_require__(52049);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemIcon/index.js
var ListItemIcon = __webpack_require__(19314);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(85974);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Dashboard.js
var Dashboard = __webpack_require__(85989);
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(Dashboard);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Home.js
var Home = __webpack_require__(7775);
var Home_default = /*#__PURE__*/__webpack_require__.n(Home);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/AirlineStops.js
var AirlineStops = __webpack_require__(71049);
var AirlineStops_default = /*#__PURE__*/__webpack_require__.n(AirlineStops);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/DirectionsCar.js
var DirectionsCar = __webpack_require__(35636);
var DirectionsCar_default = /*#__PURE__*/__webpack_require__.n(DirectionsCar);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/RvHookup.js
var RvHookup = __webpack_require__(95054);
var RvHookup_default = /*#__PURE__*/__webpack_require__.n(RvHookup);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Commit.js
var Commit = __webpack_require__(58282);
var Commit_default = /*#__PURE__*/__webpack_require__.n(Commit);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/DirectionsBusFilled.js
var DirectionsBusFilled = __webpack_require__(81222);
var DirectionsBusFilled_default = /*#__PURE__*/__webpack_require__.n(DirectionsBusFilled);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Logout.js
var Logout = __webpack_require__(51833);
var Logout_default = /*#__PURE__*/__webpack_require__.n(Logout);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/PeopleAlt.js
var PeopleAlt = __webpack_require__(51108);
var PeopleAlt_default = /*#__PURE__*/__webpack_require__.n(PeopleAlt);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Engineering.js
var Engineering = __webpack_require__(73565);
var Engineering_default = /*#__PURE__*/__webpack_require__.n(Engineering);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/LocalShipping.js
var LocalShipping = __webpack_require__(90459);
var LocalShipping_default = /*#__PURE__*/__webpack_require__.n(LocalShipping);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Build.js
var Build = __webpack_require__(88907);
var Build_default = /*#__PURE__*/__webpack_require__.n(Build);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ZoomInMap.js
var ZoomInMap = __webpack_require__(23984);
var ZoomInMap_default = /*#__PURE__*/__webpack_require__.n(ZoomInMap);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Webhook.js
var Webhook = __webpack_require__(34761);
var Webhook_default = /*#__PURE__*/__webpack_require__.n(Webhook);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/app/components/ThemeRegistry/ThemeRegistry.js

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/suign/Desktop/me/@apps/fullTrailer/apps/webapp/src/app/components/ThemeRegistry/ThemeRegistry.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ThemeRegistry = (__default__);
// EXTERNAL MODULE: ./node_modules/@fontsource/roboto/300.css
var _300 = __webpack_require__(37816);
// EXTERNAL MODULE: ./node_modules/@fontsource/roboto/400.css
var _400 = __webpack_require__(11789);
// EXTERNAL MODULE: ./node_modules/@fontsource/roboto/500.css
var _500 = __webpack_require__(73476);
// EXTERNAL MODULE: ./node_modules/@fontsource/roboto/700.css
var _700 = __webpack_require__(44797);
// EXTERNAL MODULE: ./node_modules/dotenv/lib/main.js
var main = __webpack_require__(26191);
var main_default = /*#__PURE__*/__webpack_require__.n(main);
;// CONCATENATED MODULE: ./src/app/layout.js







































main_default().config();
const metadata = {
    title: "FullTrailer",
    description: "Empowering Logistics"
};
const DRAWER_WIDTH = 240;
const LINKS = [
    {
        text: "Home",
        href: "/",
        icon: (Home_default())
    },
    {
        text: "Estatus Motum",
        href: "/estatus",
        icon: (ZoomInMap_default())
    },
    {
        text: "Tractocamiones",
        href: "/tractocamiones",
        icon: (DirectionsBusFilled_default())
    },
    {
        text: "Remolques",
        href: "/remolques",
        icon: (RvHookup_default())
    },
    {
        text: "Dollies",
        href: "/dollies",
        icon: (Commit_default())
    },
    {
        text: "Configuraciones",
        href: "/configuraciones",
        icon: (LocalShipping_default())
    },
    {
        text: "Operadores",
        href: "/operadores",
        icon: (PeopleAlt_default())
    },
    {
        text: "Rutas",
        href: "/rutas",
        icon: (AirlineStops_default())
    },
    {
        text: "Taller",
        href: "/taller",
        icon: (Build_default())
    },
    {
        text: "Mec\xe1nicos",
        href: "/mecanicos",
        icon: (Engineering_default())
    },
    {
        text: "Veh\xedculos",
        href: "/vehiculos",
        icon: (DirectionsCar_default())
    },
    {
        text: "Gr\xfaas",
        href: "/gruas",
        icon: (Webhook_default())
    }
];
const PLACEHOLDER_LINKS = [
    //{ text: 'Settings', icon: SettingsIcon },
    //{ text: 'Support', icon: SupportIcon },
    {
        text: "Logout",
        icon: (Logout_default())
    }
];
const correctPassword = "password";
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ThemeRegistry, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                        position: "fixed",
                        sx: {
                            zIndex: 2000
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                            sx: {
                                backgroundColor: "background.paper"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Dashboard_default()), {
                                    sx: {
                                        color: "#444",
                                        mr: 2,
                                        transform: "translateY(-2px)"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    noWrap: true,
                                    component: "div",
                                    color: "black",
                                    children: "Sitema FullTrailer"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
                        sx: {
                            width: DRAWER_WIDTH,
                            flexShrink: 0,
                            "& .MuiDrawer-paper": {
                                width: DRAWER_WIDTH,
                                boxSizing: "border-box",
                                top: [
                                    "48px",
                                    "56px",
                                    "64px"
                                ],
                                height: "auto",
                                bottom: 0
                            }
                        },
                        variant: "permanent",
                        anchor: "left",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                            /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                children: LINKS.map(({ text, href, icon: Icon })=>/*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        disablePadding: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                            component: (link_default()),
                                            href: href,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                    primary: text
                                                })
                                            ]
                                        })
                                    }, href))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                sx: {
                                    mt: "auto"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                children: PLACEHOLDER_LINKS.map(({ text, icon: Icon })=>/*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        disablePadding: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                    primary: text
                                                })
                                            ]
                                        })
                                    }, text))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        component: "main",
                        sx: {
                            flexGrow: 1,
                            bgcolor: "background.default",
                            ml: `${DRAWER_WIDTH}px`,
                            mt: [
                                "48px",
                                "56px",
                                "64px"
                            ],
                            p: 3
                        },
                        children: children
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ })

};
;