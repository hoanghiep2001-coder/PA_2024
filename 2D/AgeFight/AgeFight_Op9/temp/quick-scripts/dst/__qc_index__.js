
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controller/BaseController');
require('./assets/Script/Controller/BossController');
require('./assets/Script/Controller/CoinController');
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/GamePlay');
require('./assets/Script/Controller/KingController');
require('./assets/Script/Controller/LoadFoodController');
require('./assets/Script/Controller/SpawnController');
require('./assets/Script/Controller/TouchAreaController');
require('./assets/Script/Data/IronSource');
require('./assets/Script/Data/Ultils');
require('./assets/Script/Data/constants');
require('./assets/Script/Other/Army');
require('./assets/Script/Other/CTA');
require('./assets/Script/Plugin/AudioManager');
require('./assets/Script/Plugin/Responsive');
require('./assets/Script/Plugin/Singleton');
require('./assets/neutrinoparticles/textures');
require('./neutrinoparticles-runtime/NeutrinoAssembler');
require('./neutrinoparticles-runtime/NeutrinoAssemblerJSB');
require('./neutrinoparticles-runtime/NeutrinoAssemblerWebGL');
require('./neutrinoparticles-runtime/NeutrinoComponent');
require('./neutrinoparticles-runtime/NeutrinoContext');
require('./neutrinoparticles-runtime/NeutrinoSettings');
require('./neutrinoparticles-runtime/neutrinoparticles.js/neutrinoparticles.umd');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();