/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/mapbox.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/mapbox.js":
/*!**********************!*\
  !*** ./js/mapbox.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("mapboxgl.accessToken =\n  'pk.eyJ1IjoiYWFyb25tb3Nrb3dpdHoiLCJhIjoiY2llb3c1MjR4MGk0M3MxbTJzZm1saWNqYyJ9.qvm0T0Gp3yni0-jaEcRP0w';\n\nconst map = new mapboxgl.Map({\n  container: 'map', // container id\n  style: 'mapbox://styles/mapbox/light-v10', // stylesheet location\n  center: [-84.5, 38.05], // starting position\n  zoom: 12, // starting zoom\n});\nconst popup = new mapboxgl.Popup();\nconst hospitals = {\n  type: 'FeatureCollection',\n  features: [\n    {\n      type: 'Feature',\n      properties: {\n        Name: 'VA Medical Center -- Leestown Division',\n        Address: '2250 Leestown Rd',\n      },\n      geometry: { type: 'Point', coordinates: [-84.539487, 38.072916] },\n    },\n    {\n      type: 'Feature',\n      properties: {\n        Name: 'St. Joseph East',\n        Address: '150 N Eagle Creek Dr',\n      },\n      geometry: { type: 'Point', coordinates: [-84.440434, 37.998757] },\n    },\n    {\n      type: 'Feature',\n      properties: {\n        Name: 'Central Baptist Hospital',\n        Address: '1740 Nicholasville Rd',\n      },\n      geometry: { type: 'Point', coordinates: [-84.512283, 38.018918] },\n    },\n    {\n      type: 'Feature',\n      properties: {\n        Name: 'VA Medical Center -- Cooper Dr Division',\n        Address: '1101 Veterans Dr',\n      },\n      geometry: { type: 'Point', coordinates: [-84.506483, 38.02972] },\n    },\n    {\n      type: 'Feature',\n      properties: {\n        Name: 'Shriners Hospital for Children',\n        Address: '1900 Richmond Rd',\n      },\n      geometry: { type: 'Point', coordinates: [-84.472941, 38.022564] },\n    },\n    {\n      type: 'Feature',\n      properties: {\n        Name: 'Eastern State Hospital',\n        Address: '627 W Fourth St',\n      },\n      geometry: { type: 'Point', coordinates: [-84.498816, 38.060791] },\n    },\n    {\n      type: 'Feature',\n      properties: {\n        Name: 'Cardinal Hill Rehabilitation Hospital',\n        Address: '2050 Versailles Rd',\n      },\n      geometry: { type: 'Point', coordinates: [-84.54212, 38.046568] },\n    },\n    {\n      type: 'Feature',\n      properties: { Name: 'St. Joseph Hospital', ADDRESS: '1 St Joseph Dr' },\n      geometry: { type: 'Point', coordinates: [-84.523636, 38.032475] },\n    },\n    {\n      type: 'Feature',\n      properties: {\n        Name: 'UK Healthcare Good Samaritan Hospital',\n        Address: '310 S Limestone',\n      },\n      geometry: { type: 'Point', coordinates: [-84.501222, 38.042123] },\n    },\n    {\n      type: 'Feature',\n      properties: { Name: 'UK Medical Center', Address: '800 Rose St' },\n      geometry: { type: 'Point', coordinates: [-84.508205, 38.031254] },\n    },\n  ],\n};\nconst libraries = {\n  type: 'FeatureCollection',\n  features: [\n    {\n      type: 'Feature',\n      properties: { Name: 'Village Branch', Address: '2185 Versailles Rd' },\n      geometry: { type: 'Point', coordinates: [-84.548369, 38.047876] },\n    },\n    {\n      type: 'Feature',\n      properties: {\n        Name: 'Northside Branch',\n        ADDRESS: '1733 Russell Cave Rd',\n      },\n      geometry: { type: 'Point', coordinates: [-84.47135, 38.079734] },\n    },\n    {\n      type: 'Feature',\n      properties: { Name: 'Central Library', ADDRESS: '140 E Main St' },\n      geometry: { type: 'Point', coordinates: [-84.496894, 38.045459] },\n    },\n    {\n      type: 'Feature',\n      properties: { Name: 'Beaumont Branch', Address: '3080 Fieldstone Way' },\n      geometry: { type: 'Point', coordinates: [-84.557948, 38.012502] },\n    },\n    {\n      type: 'Feature',\n      properties: { Name: 'Tates Creek Branch', Address: '3628 Walden Dr' },\n      geometry: { type: 'Point', coordinates: [-84.498679, 37.979598] },\n    },\n    {\n      type: 'Feature',\n      properties: {\n        Name: 'Eagle Creek Branch',\n        Address: '101 N Eagle Creek Dr',\n      },\n      geometry: { type: 'Point', coordinates: [-84.442219, 37.999437] },\n    },\n  ],\n};\nfunction loadLayers() {\n  map.addLayer({\n    id: 'hospitals',\n    type: 'symbol',\n    source: {\n      type: 'geojson',\n      data: hospitals,\n    },\n    layout: {\n      'icon-image': 'hospital-15',\n    },\n    paint: {},\n  });\n  map.addLayer({\n    id: 'libraries',\n    type: 'symbol',\n    source: {\n      type: 'geojson',\n      data: libraries,\n    },\n    layout: {\n      'icon-image': 'library-15',\n    },\n    paint: {},\n  });\n}\nmap.on('load', loadLayers);\n\nmodule.exports = {\n  map,\n  hospitals,\n  libraries,\n  popup,\n};\n\n\n//# sourceURL=webpack:///./js/mapbox.js?");

/***/ })

/******/ });