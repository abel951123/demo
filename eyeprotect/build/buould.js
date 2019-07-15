/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"index.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	function loadHomepage() {
	    ajax("get","test.html","","Text").then(function (html) {
	        document.getElementById("main").innerHTML=html;
	    });

	}
	loadHomepage();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	function ajax(method,url,postStr,dataType="json") {
	    return new Promise((resolve,reject)=>{
	        //获取 xhr
	        var xhr=(()=>{
	            if(window.XMLHttpRequest){
	                return new XMLHttpRequest();
	            }else{
	                return new ActiveXobject("Microsoft.XMLHttp");
	            }
	        })();
	        //创建请求
	        xhr.open(method,url,true);
	        //设置响应消息头
	        if(method=="post"){
	            xhr.setRequestHeader(
	                "Content-Type",
	                "applicaiton/x-www-form-urlencoded"            );
	        }
	        //设置回调
	        xhr.onreadystatechange=()=>{
	            if(xhr.readyState==4)
	                if(xhr.status==200){
	                    if(dataType.toLowerCase()=="json") {
	                        resolve(JSON.parse(xhr.responseText));
	                    }else{
	                        resolve(xhr.responseText);
	                    }
	                }else
	                    reject("ajax出错啦！"+xhr.status);
	        }
	        //发送
	        try{
	            xhr.send(postStr);
	        }
	        catch (err){
	            reject(err)
	        }
	    })
	}

/***/ })
/******/ ]);