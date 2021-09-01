/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (function() {

eval("throw new Error(\"Module build failed (from ../node_modules/babel-loader/lib/index.js):\\nError: Cannot find module '@babel/preset-env'\\nRequire stack:\\n- D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\files\\\\plugins.js\\n- D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\files\\\\index.js\\n- D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\index.js\\n- D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js\\n- D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\loader-runner\\\\lib\\\\loadLoader.js\\n- D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js\\n- D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js\\n- D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js\\n- D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\webpack\\\\lib\\\\webpack.js\\n- D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\webpack\\\\lib\\\\index.js\\n- D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\webpack-cli\\\\lib\\\\webpack-cli.js\\n- D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\webpack-cli\\\\lib\\\\bootstrap.js\\n- D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\webpack-cli\\\\bin\\\\cli.js\\n- D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\webpack\\\\bin\\\\webpack.js\\n    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:927:15)\\n    at resolve (D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:164:23)\\n    at resolveStandardizedName (D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\files\\\\plugins.js:111:7)\\n    at resolvePreset (D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\files\\\\plugins.js:59:10)\\n    at loadPreset (D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\files\\\\plugins.js:78:20)\\n    at loadPreset.next (<anonymous>)\\n    at createDescriptor (D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:187:16)\\n    at createDescriptor.next (<anonymous>)\\n    at step (D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\gensync\\\\index.js:261:32)\\n    at evaluateAsync (D:\\\\Thomas\\\\FRONTEND\\\\1-Thomas\\\\1-Projects\\\\ThomasCode\\\\Website-Thomas-Code\\\\node_modules\\\\gensync\\\\index.js:291:5)\");\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;