
(function () {
var scripts = [{"deps":{"./assets/Script/Controller/GraphicsContro":1,"./assets/Script/Controller/NodesController":3,"./assets/Script/Controller/PointController":4,"./assets/Script/Controller/TouchController":6,"./assets/Script/Controller/Bee":8,"./assets/Script/Data/constants":7,"./assets/Script/Data/StateForJS":2,"./assets/Script/Plugin/MyPhysicsCollider":5,"./assets/Script/Plugin/Responsive":9,"./assets/Script/Plugin/AudioManager":10,"./assets/Script/Controller/GameController":11,"./assets/Script/Controller/GamePlay":12},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../Data/StateForJS":2},"path":"preview-scripts/assets/Script/Controller/GraphicsContro.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/StateForJS.js"},{"deps":{"../Data/constants":7},"path":"preview-scripts/assets/Script/Controller/NodesController.js"},{"deps":{"./GameController":11},"path":"preview-scripts/assets/Script/Controller/PointController.js"},{"deps":{},"path":"preview-scripts/assets/Script/Plugin/MyPhysicsCollider.js"},{"deps":{"../Data/StateForJS":2},"path":"preview-scripts/assets/Script/Controller/TouchController.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/constants.js"},{"deps":{"../Data/constants":7,"../Plugin/AudioManager":10},"path":"preview-scripts/assets/Script/Controller/Bee.js"},{"deps":{"../Controller/NodesController":3,"../Data/constants":7},"path":"preview-scripts/assets/Script/Plugin/Responsive.js"},{"deps":{"../Data/constants":7},"path":"preview-scripts/assets/Script/Plugin/AudioManager.js"},{"deps":{"../Data/constants":7,"../Plugin/AudioManager":10},"path":"preview-scripts/assets/Script/Controller/GameController.js"},{"deps":{"./GameController":11,"./NodesController":3,"../Data/constants":7,"../Plugin/AudioManager":10},"path":"preview-scripts/assets/Script/Controller/GamePlay.js"},{"deps":{"./src/PathFinding":14},"path":"preview-scripts/__node_modules/pathfinding/index.js"},{"deps":{"./core/Grid":15,"./core/Util":20,"./core/DiagonalMovement":17,"./core/Heuristic":21,"./core/Node":18,"./finders/BestFirstFinder":16,"./finders/BreadthFirstFinder":19,"./finders/DijkstraFinder":22,"./finders/BiBestFirstFinder":24,"./finders/BiBreadthFirstFinder":26,"./finders/BiDijkstraFinder":25,"./finders/IDAStarFinder":29,"./finders/AStarFinder":30,"heap":27,"./finders/JumpPointFinder":28,"./finders/BiAStarFinder":23},"path":"preview-scripts/__node_modules/pathfinding/src/PathFinding.js"},{"deps":{"./Node":18,"./DiagonalMovement":17},"path":"preview-scripts/__node_modules/pathfinding/src/core/Grid.js"},{"deps":{"./AStarFinder":30},"path":"preview-scripts/__node_modules/pathfinding/src/finders/BestFirstFinder.js"},{"deps":{},"path":"preview-scripts/__node_modules/pathfinding/src/core/DiagonalMovement.js"},{"deps":{},"path":"preview-scripts/__node_modules/pathfinding/src/core/Node.js"},{"deps":{"../core/Util":20,"../core/DiagonalMovement":17},"path":"preview-scripts/__node_modules/pathfinding/src/finders/BreadthFirstFinder.js"},{"deps":{},"path":"preview-scripts/__node_modules/pathfinding/src/core/Util.js"},{"deps":{},"path":"preview-scripts/__node_modules/pathfinding/src/core/Heuristic.js"},{"deps":{"./AStarFinder":30},"path":"preview-scripts/__node_modules/pathfinding/src/finders/DijkstraFinder.js"},{"deps":{"../core/Util":20,"../core/Heuristic":21,"../core/DiagonalMovement":17,"heap":27},"path":"preview-scripts/__node_modules/pathfinding/src/finders/BiAStarFinder.js"},{"deps":{"./BiAStarFinder":23},"path":"preview-scripts/__node_modules/pathfinding/src/finders/BiBestFirstFinder.js"},{"deps":{"./BiAStarFinder":23},"path":"preview-scripts/__node_modules/pathfinding/src/finders/BiDijkstraFinder.js"},{"deps":{"../core/Util":20,"../core/DiagonalMovement":17},"path":"preview-scripts/__node_modules/pathfinding/src/finders/BiBreadthFirstFinder.js"},{"deps":{"./lib/heap":31},"path":"preview-scripts/__node_modules/heap/index.js"},{"deps":{"../core/DiagonalMovement":17,"./JPFAlwaysMoveDiagonally":32,"./JPFMoveDiagonallyIfNoObstacles":34,"./JPFMoveDiagonallyIfAtMostOneObstacle":35,"./JPFNeverMoveDiagonally":33},"path":"preview-scripts/__node_modules/pathfinding/src/finders/JumpPointFinder.js"},{"deps":{"../core/Util":20,"../core/Heuristic":21,"../core/Node":18,"../core/DiagonalMovement":17},"path":"preview-scripts/__node_modules/pathfinding/src/finders/IDAStarFinder.js"},{"deps":{"../core/Util":20,"../core/Heuristic":21,"../core/DiagonalMovement":17,"heap":27},"path":"preview-scripts/__node_modules/pathfinding/src/finders/AStarFinder.js"},{"deps":{},"path":"preview-scripts/__node_modules/heap/lib/heap.js"},{"deps":{"./JumpPointFinderBase":36,"../core/DiagonalMovement":17},"path":"preview-scripts/__node_modules/pathfinding/src/finders/JPFAlwaysMoveDiagonally.js"},{"deps":{"../core/DiagonalMovement":17,"./JumpPointFinderBase":36},"path":"preview-scripts/__node_modules/pathfinding/src/finders/JPFNeverMoveDiagonally.js"},{"deps":{"./JumpPointFinderBase":36,"../core/DiagonalMovement":17},"path":"preview-scripts/__node_modules/pathfinding/src/finders/JPFMoveDiagonallyIfNoObstacles.js"},{"deps":{"./JumpPointFinderBase":36,"../core/DiagonalMovement":17},"path":"preview-scripts/__node_modules/pathfinding/src/finders/JPFMoveDiagonallyIfAtMostOneObstacle.js"},{"deps":{"heap":27,"../core/Util":20,"../core/Heuristic":21,"../core/DiagonalMovement":17},"path":"preview-scripts/__node_modules/pathfinding/src/finders/JumpPointFinderBase.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    