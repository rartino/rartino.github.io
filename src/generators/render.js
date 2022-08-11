var system = require('system');
var fs = require('fs');

if (system.args.length < 3) {
    console.log('Usage: phantomjs render.js <input file> <output file>');
    phantom.exit(1);
}

var input_filename = system.args[1];
var output_filename = system.args[2];

console.log('Rendering '+input_filename+' into '+output_filename);

function getFileUrl(str) {
  var pathName = fs.absolute(str).replace(/\\/g, '/');
  // Windows drive letter must be prefixed with a slash
  if (pathName[0] !== "/") {
    pathName = "/" + pathName;
  }
  return encodeURI("file://" + pathName);
}

// This example shows how to render pages that perform AJAX calls
// upon page load.
//
// Instead of waiting a fixed amount of time before doing the render,
// we are keeping track of every resource that is loaded.
//
// Once all resources are loaded, we wait a small amount of time
// (resourceWait) in case these resources load other resources.
//
// The page is rendered after a maximum amount of time (maxRenderTime)
// or if no new resources are loaded.

var resourceWait  = 10,
    maxRenderWait = 10000,
    url           = getFileUrl(input_filename);

var page          = require('webpage').create(),
    count         = 0,
    forcedRenderTimeout,
    ts,
    renderTimeout;
   

page.viewportSize = { width: 1280, height : 1024 };

function onPageReady() {
    //var htmlContent = page.evaluate(function () {
    //    return document.documentElement.outerHTML;
    //});
    var htmlContent = page.evaluate(function () {
        return document.getElementById('output').innerHTML;
    });    
    fs.write(output_filename, htmlContent, 'w');
    console.log("Render done");
    phantom.exit(0);
}

function doRender() {
    //page.render('twitter.png');
    //phantom.exit();
    //response.statusCode = 200;
    //response.headers = {
    //    'Cache': 'no-cache',
    //    'Content-Type': 'text/html;charset=utf-8'
    //};
    // TODO: do something on the page and generate `result`
    //response.write(page.content);
    //response.close();
    var t = Date.now() - ts;
    console.log("Ready to render: "+t);
    page.evaluate(function () {
	document.everything_is_finished = "complete";
    });
}

page.onResourceRequested = function (req) {
    ts = Date.now();
    count += 1;
    console.log('' + count + '>');
    //console.log('' + count + '> ' + req.id + ' - ' + req.url);
    clearTimeout(renderTimeout);
};

page.onResourceReceived = function (res) {
    if (!res.stage || res.stage === 'end') {
	var t = Date.now() - ts;
	count -= 1;
	console.log('' + count + '<' + t);
        //console.log('' + count + '< ' + res.id + ' ' + res.status + ' - ' + res.url);
        if (count === 0) {
            renderTimeout = setTimeout(doRender, resourceWait);
        }
    }
};

page.open(url, function (status) {
    if (status !== "success") {
	console.log('Unable to load url');
    } else {
	function checkReadyState() {
	    setTimeout(function () {
		var readyState = page.evaluate(function () {
		    return document.everything_is_finished;
		});
		if ("complete" === readyState) {
		    onPageReady();
		} else {
		    checkReadyState();
		}
	    });
	}
	checkReadyState();
	
        //forcedRenderTimeout = setTimeout(function () {
	//	console.log(count);
	//	t = Date.now() - t;
	//	console.log('Loading time ' + t + ' msec');
	//	doRender(response);
        //  }, maxRenderWait);
    }
});
