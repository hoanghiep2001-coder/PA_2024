System.register("chunks:///_virtual/Responsive.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Constant.ts","./Game.ts"],(function(i){"use strict";var t,e,n,o,s,a,r,h,c,l,d,u;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,n=i.initializerDefineProperty,o=i.assertThisInitialized,s=i.defineProperty},function(i){a=i.cclegacy,r=i._decorator,h=i.Node,c=i.screen,l=i.Component},function(i){d=i.Constants},function(i){u=i.Game}],execute:function(){var w,G,v,f,p,I;a._RF.push({},"2fa136ZOf9Fl5lXghH8qCrM","Responsive",void 0);var z=r.ccclass,S=r.property;i("default",(w=S(h),G=S(u),z((p=t((f=function(i){function t(){for(var t,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return t=i.call.apply(i,[this].concat(a))||this,n(o(t),"Gradient",p,o(t)),n(o(t),"Game",I,o(t)),s(o(t),"device",""),s(o(t),"HORIZONTAL_IPX","horizontal_IPX"),s(o(t),"HORIZONTAL_TABLET","horizontal_Tablet"),s(o(t),"VERTICAL_IPX","vertical_IPX"),s(o(t),"VERTICAL_MOBILE","vertical_Mobile"),t}e(t,i);var a=t.prototype;return a.onLoad=function(){},a.start=function(){},a.handleRotate=function(){c.windowSize.width>c.windowSize.height?(d.isRotate=!0,this.setHorizontal()):(d.isRotate=!1,this.setVertical())},a.setHorizontal=function(){c.windowSize.height/c.windowSize.width<.65?this.setHorizontalForIpX():this.setHorizontalForTablet()},a.setHorizontalForIpX=function(){this.HORIZONTAL_IPX!==this.device&&(this.device=this.HORIZONTAL_IPX,d.ironSource.isEndGame||(this.Game.title.active=!0,this.Game.icon.active=!0),c.windowSize.height/c.windowSize.width>.55?(this.Gradient.setScale(55,.2,1),this.Gradient.setPosition(0,210,0)):(this.Gradient.setScale(65,.2,1),this.Gradient.setPosition(0,210,0)))},a.setHorizontalForTablet=function(){this.HORIZONTAL_TABLET!==this.device&&(this.device=this.HORIZONTAL_TABLET,d.ironSource.isEndGame||(this.Game.title.active=!0,this.Game.icon.active=!0),this.Gradient.setScale(50,.2,1),this.Gradient.setPosition(0,220,0))},a.setVertical=function(){c.windowSize.width/c.windowSize.height<.5?this.setIphoneX():this.setMobile()},a.setIphoneX=function(){this.VERTICAL_IPX!==this.device&&(this.device=this.VERTICAL_IPX,this.Game.title.active=!1,this.Game.icon.active=!1,this.Gradient.setScale(50,.2,1),this.Gradient.setPosition(0,310,0))},a.setMobile=function(){if(this.VERTICAL_MOBILE!==this.device)if(this.device=this.VERTICAL_MOBILE,c.windowSize.width/c.windowSize.height<.7){if(c.windowSize.width/c.windowSize.height>=.6&&c.windowSize.width/c.windowSize.height<.62)return this.Game.title.active=!1,this.Game.icon.active=!1,this.Gradient.setScale(50,.2,1),void this.Gradient.setPosition(0,240,0);this.Game.title.active=!1,this.Game.icon.active=!1,this.Gradient.setScale(50,.2,1),this.Gradient.setPosition(0,240,0)}else this.Game.title.active=!1,this.Game.icon.active=!1,this.Gradient.setScale(50,.2,1),this.Gradient.setPosition(0,220,0)},a.update=function(i){this.handleRotate()},t}(l)).prototype,"Gradient",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(f.prototype,"Game",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=f))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/CatController.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Constant.ts","./AudioManager.ts","./JoyStick.ts","./Game.ts"],(function(e){"use strict";var i,t,o,n,a,r,l,s,d,c,u,h,g,p,C,y,f,m,b,S;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized,a=e.defineProperty},function(e){r=e.cclegacy,l=e._decorator,s=e.Node,d=e.RigidBody,c=e.CCString,u=e.SkeletalAnimation,h=e.v3,g=e.BoxCollider,p=e.Vec2,C=e.Vec3,y=e.Component},function(e){f=e.Constants},function(e){m=e.default},function(e){b=e.JoyStick},function(e){S=e.Game}],execute:function(){var v,_,M,k,E,D,w,F,z,P,x,A,G,L,R,B,T;r._RF.push({},"50226TeMLNKEqzuYMFQBSOm","CatController",void 0);var j=l.ccclass,I=l.property;e("CatController",(v=j("CatController"),_=I(m),M=I(S),k=I(s),E=I(b),D=I(d),w=I(c),F=I(u),v((x=i((P=function(e){function i(){for(var i,t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return i=e.call.apply(e,[this].concat(r))||this,o(n(i),"AudioManager",x,n(i)),o(n(i),"GamePlay",A,n(i)),o(n(i),"Door1",G,n(i)),o(n(i),"joyStick",L,n(i)),o(n(i),"_body",R,n(i)),o(n(i),"catDirectionMove",B,n(i)),o(n(i),"_aniSkeleton",T,n(i)),a(n(i),"speed",4),a(n(i),"radian",null),a(n(i),"isMoving",!1),a(n(i),"flag",!1),a(n(i),"isRun",!0),a(n(i),"isElectricFlag",!1),a(n(i),"isExitDoorFlag",!1),a(n(i),"rigidbody",null),a(n(i),"collider",null),a(n(i),"angle",null),i}t(i,e);var r=i.prototype;return r.start=function(){this.isMoving=!1,this._body=this.node.getComponent(d),this.node.setRotationFromEuler(h(0,90,0)),this._aniSkeleton=this.node.getComponent(u),this._aniSkeleton.play("Cats_Runcycle"),this.handleCollide()},r.handleCollide=function(){var e=this;this.rigidbody=this.getComponent(d),this.collider=this.getComponent(g),this.collider.on("onCollisionEnter",(function(i){"Electro_vfx_mesh"===i.otherCollider.node.name&&f.laser&&!e.isElectricFlag&&e.die(),"Food"===i.otherCollider.node.name&&(f.isEatFood=!0,i.otherCollider.node.active=!1,i.otherCollider.destroy(),e.AudioManager.playSound(f.SoundTrack.eatSound)),"Door1_1"!==i.otherCollider.node.name&&"Door1_2"!==i.otherCollider.node.name||(f.isCollideDoor=!0),"Vision"===i.otherCollider.node.name&&f.isCollideDoor&&(f.bossCatchedName=i.otherCollider.node.parent.name,e.handleCatIsCatched()),"LaserBtn"===i.otherCollider.node.name&&(f.laser=!f.laser),"WallLaserBtn"===i.otherCollider.node.name&&(f.wallLaser=!f.wallLaser),"ExitDoor"===i.otherCollider.node.name&&e.win()}))},r.die=function(){this.isElectricFlag||(this.collider.destroy(),this.isElectricFlag=!0,f.isCatLive=!1,this.getComponent(u).play("Cats_Electric"),this.AudioManager.playSound(f.SoundTrack.electric2Sound),this.AudioManager.playSound(f.SoundTrack.catAngrySound),this.GamePlay.EndGame(!1))},r.win=function(){this.isExitDoorFlag||(this.isExitDoorFlag=!0,this.GamePlay.EndGame(!0))},r.handleCatIsCatched=function(){var e=this;f.isCatched=!0,this.scheduleOnce((function(){e.getComponent(u).play("Cat_Dead")}),.5)},r.handleAngleCat=function(){var e,i=this.joyStick.node.getPosition(),t=new p(i.x,i.y);e=this.joyStick.stick.getPosition().subtract(t);var o=Math.atan2(e.y,e.x),n=cc.misc.radiansToDegrees(o);this.radian=o,this.angle=n},r.update=function(e){if(this.flag&&this.isMoving&&(this.flag=!1,this._aniSkeleton.resume()),this.flag||this.isMoving||(this.flag=!0,this._aniSkeleton.pause()),this.isMoving&&f.isCatLive&&!f.isCatched&&!f.ironSource.isEndGame){var i=new C(Math.sin(this.radian),0,Math.cos(this.radian));i.normalize(),i.multiplyScalar(this.speed*e);var t=new C(i.x,0,i.z);if(this.node.setRotationFromEuler(h(0,this.angle,0)),this.isRun){if(this.node.getPosition().y>.3)return void this.node.setPosition(this.node.position.x,0,this.node.position.z);this.node.setPosition(this.node.position.add(t))}}},i}(y)).prototype,"AudioManager",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=i(P.prototype,"GamePlay",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=i(P.prototype,"Door1",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=i(P.prototype,"joyStick",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=i(P.prototype,"_body",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=i(P.prototype,"catDirectionMove",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"stop"}}),T=i(P.prototype,"_aniSkeleton",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=P))||z));r._RF.pop()}}}));

System.register("chunks:///_virtual/CubeController.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Constant.ts"],(function(e){"use strict";var t,n,o,r,i,a,c,s,u,p,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized,i=e.defineProperty},function(e){a=e.cclegacy,c=e._decorator,s=e.Node,u=e.RigidBody,p=e.Component},function(e){l=e.Constants}],execute:function(){var f,y,h,C,g;a._RF.push({},"9d69fA7YXNFdJ3sO7cec90s","CubeController",void 0);var d=c.ccclass,b=c.property;e("CubeController",(f=d("CubeController"),y=b([s]),f((g=t((C=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,o(r(t),"Cubes",g,r(t)),i(r(t),"changeTypeFlag",!1),t}n(t,e);var a=t.prototype;return a.start=function(){this.Cubes.forEach((function(e){e.getComponent(u).type=u.Type.STATIC}))},a.changeRigidType=function(){this.changeTypeFlag=!0,this.Cubes.forEach((function(e){var t=e.getComponent(u);t.type=u.Type.DYNAMIC,t.mass=1e-4}))},a.update=function(e){!this.changeTypeFlag&&l.isEatFood&&this.changeRigidType()},t}(p)).prototype,"Cubes",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),h=C))||h));a._RF.pop()}}}));

System.register("chunks:///_virtual/LaserController.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Constant.ts","./AudioManager.ts","./CatController.ts"],(function(e){"use strict";var t,r,a,i,n,l,o,s,u,c,L,f,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,a=e.initializerDefineProperty,i=e.assertThisInitialized,n=e.defineProperty},function(e){l=e.cclegacy,o=e._decorator,s=e.Node,u=e.ParticleSystem,c=e.Component},function(e){L=e.Constants},function(e){f=e.default},function(e){h=e.CatController}],execute:function(){var p,_,d,g,B,b,v,w,y,C,m,F,z,R,S,M,x,A,E,P,T,k,D;l._RF.push({},"a31f86fp3JJCbWTGM9ai5co","LaserController",void 0);var G=o.ccclass,J=o.property;e("LaserController",(p=G("LaserController"),_=J(f),d=J(h),g=J(s),B=J(s),b=J(s),v=J(s),w=J(s),y=J(s),C=J(s),m=J([u]),p((R=t((z=function(e){function t(){for(var t,r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return t=e.call.apply(e,[this].concat(l))||this,a(i(t),"AudioManager",R,i(t)),a(i(t),"CatController",S,i(t)),a(i(t),"wallLaser_1",M,i(t)),a(i(t),"wallLaser_2",x,i(t)),a(i(t),"Laser",A,i(t)),a(i(t),"LaserBtn_Red",E,i(t)),a(i(t),"LaserBtn_Blue",P,i(t)),a(i(t),"wallLaserBtn_Red",T,i(t)),a(i(t),"wallLaserBtn_Blue",k,i(t)),a(i(t),"Fx_Lightning",D,i(t)),n(i(t),"laserFlag",!1),n(i(t),"wallLaserFlag",!1),t}r(t,e);var l=t.prototype;return l.onLoad=function(){this.LaserBtn_Blue&&(this.LaserBtn_Blue.active=!1,this.LaserBtn_Red.active=!0,this.wallLaserBtn_Blue.active=!0,this.wallLaserBtn_Red.active=!1),this.Laser&&(this.Laser.active=!1),this.Fx_Lightning.forEach((function(e){e.node.active=!1}))},l.start=function(){},l.activeLaser=function(){if(L.wallLaser?(this.wallLaserBtn_Blue.active=!0,this.wallLaserBtn_Red.active=!1,this.wallLaser_1.active=!0,this.wallLaser_2.active=!0):(this.wallLaserBtn_Red.active=!0,this.wallLaserBtn_Blue.active=!1,this.wallLaser_1.active=!1,this.wallLaser_2.active=!1),L.laser){if(this.laserFlag)return;this.laserFlag=!0,this.LaserBtn_Blue.active=!0,this.LaserBtn_Red.active=!1,this.Laser.active=!0,this.AudioManager.playSound(L.SoundTrack.electricSound),this.Fx_Lightning.forEach((function(e){e.node.active=!0,e.play()}))}else{if(!this.laserFlag)return;this.laserFlag=!1,this.LaserBtn_Red.active=!0,this.LaserBtn_Blue.active=!1,this.Laser.active=!1,this.AudioManager.stopSound(L.SoundTrack.electricSound),this.Fx_Lightning.forEach((function(e){e.node.active=!1,e.stop()}))}},l.update=function(e){!L.ironSource.isEndGame&&this.LaserBtn_Blue&&this.activeLaser()},t}(c)).prototype,"AudioManager",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(z.prototype,"CatController",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=t(z.prototype,"wallLaser_1",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=t(z.prototype,"wallLaser_2",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=t(z.prototype,"Laser",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=t(z.prototype,"LaserBtn_Red",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(z.prototype,"LaserBtn_Blue",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(z.prototype,"wallLaserBtn_Red",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(z.prototype,"wallLaserBtn_Blue",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(z.prototype,"Fx_Lightning",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),F=z))||F));l._RF.pop()}}}));

System.register("chunks:///_virtual/Game.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Constant.ts","./AudioManager.ts","./GameController.ts","./JoyStick.ts"],(function(e){"use strict";var t,i,n,o,a,r,l,u,s,c,h,d,S,p,g,m,b,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized,a=e.defineProperty},function(e){r=e.cclegacy,l=e._decorator,u=e.Node,s=e.CCFloat,c=e.Animation,h=e.Vec3,d=e.screen,S=e.v3,p=e.Component},function(e){g=e.Constants},function(e){m=e.default},function(e){b=e.GameController},function(e){f=e.JoyStick}],execute:function(){var y,w,C,T,A,v,_,z,k,G,H,M,D,E,P,I,R,W,J,x,L,B,O,U,F,j,N,V,q,Y,K,Q,X,Z,$,ee,te,ie,ne,oe;r._RF.push({},"ab7fdcqdMJBlbVEI/I8YoiE","Game",void 0);var ae=l.ccclass,re=l.property;e("Game",(y=ae("Game"),w=re(f),C=re(b),T=re(m),A=re(u),v=re(u),_=re(u),z=re(u),k=re(u),G=re(u),H=re(u),M=re(u),D=re(u),E=re(u),P=re(u),I=re(u),R=re(u),W=re(s),J=re(s),y((B=t((L=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,n(o(t),"JoyStickComponent",B,o(t)),n(o(t),"GameController",O,o(t)),n(o(t),"AudioManager",U,o(t)),n(o(t),"Cat",F,o(t)),n(o(t),"canvas2D",j,o(t)),n(o(t),"icon",N,o(t)),n(o(t),"navigate",V,o(t)),n(o(t),"text",q,o(t)),n(o(t),"title",Y,o(t)),n(o(t),"joyStick",K,o(t)),n(o(t),"camera",Q,o(t)),n(o(t),"step",X,o(t)),n(o(t),"HideMask",Z,o(t)),n(o(t),"CTA",$,o(t)),n(o(t),"CTA_btn",ee,o(t)),n(o(t),"CTA_tryBtn",te,o(t)),n(o(t),"CTA_Download",ie,o(t)),n(o(t),"_realHeight",ne,o(t)),n(o(t),"_realWidth",oe,o(t)),a(o(t),"meowSoundState",null),a(o(t),"ironSourceState",1),a(o(t),"ironSourceSoundState",!0),a(o(t),"isEndGame",!1),a(o(t),"endGame",!1),t}i(t,e);var r=t.prototype;return r.start=function(){this.reset(),this.Cat.active=!0,this.canvas2D.active=!0,this.text.active=!0,this.navigate.active=!0,this.canvas2D.on(u.EventType.TOUCH_START,this.managerScene,this)},r.reset=function(){g.isCollideDoor=!1,g.laser=!1,g.wallLaser=!0,g.isEatFood=!1,g.isWinGame&&this.HideMask.on(u.EventType.TOUCH_START,this.GameController.installHandle,this)},r.countDown=function(){var e=this;g.isTouch||g.isCatched||!g.isCatLive||this.scheduleOnce((function(){g.ironSource.isEndGame||e.EndGame(!1)}),6)},r.handleCountingTime=function(){g.countingTime<0&&g.isRing?this.timeline.setScale(0,1,1):(g.countingTime<.5&&!g.isRing&&(this.AudioManager.playSound(g.SoundTrack.clockSound),g.isRing=!0),g.ironSource.isEndGame||(g.countingTime-=.0017,this.timeline.setScale(g.countingTime,1,1)))},r.EndGame=function(e){this.CTA.active=!0,g.isCatched?this.CTA.getComponent(c).play("CTA_Anim"):this.CTA.getComponent(c).play("CTA_Anim_NoLose"),this.title.active=!1,this.icon.active=!1,this.CTA_Download.active=!0,this.CTA_tryBtn.on(u.EventType.TOUCH_START,this.GameController.installHandle,this),this.CTA_Download.on(u.EventType.TOUCH_START,this.GameController.installHandle,this),this.AudioManager.stopSound(g.SoundTrack.electric2Sound),this.AudioManager.stopSound(g.SoundTrack.electricSound),this.AudioManager.playSound(g.SoundTrack.loseSound),this.AudioManager.stopSound(g.SoundTrack.catAngrySound)},r.handleIronSourceSound=function(){},r.managerScene=function(e){if(this.step++,2===this.step){var t=e.getUILocation(),i=new h(t.x-160,t.y-240,0);this.JoyStickComponent.node.setPosition(i),this.JoyStickComponent.stick.setPosition(i),this.text.active=!1,this.navigate.active=!1}},r.handleMuteSoundIronSource=function(){g.ironSource.State=parseInt(localStorage.getItem("cocosSoundState"),10),g.ironSource.State&&(1!==g.ironSource.State||g.ironSource.SoundState||g.ironSource.isEndGame||(g.ironSource.SoundState=!0,this.AudioManager.playSound(g.SoundTrack.bgSound)),2===g.ironSource.State&&g.ironSource.SoundState&&(g.ironSource.SoundState=!1,this.AudioManager.stopAllSound()))},r.update=function(e){this.responsive(),this.handleMuteSoundIronSource()},r.responsive=function(){d.windowSize.width>d.windowSize.height?(this.camera.setPosition(S(-14.8,24,0)),this._realHeight=480,this._realWidth=d.windowSize.width/d.windowSize.height*320,this.icon.setPosition((this._realWidth-320)/2+160,0,0),this.title.setPosition((320-this._realWidth)/2-160,0,0),this.icon.setScale(.9,.9,.9),this.title.setScale(.35,.35,.35)):(this.camera.setPosition(S(-13,24,0)),d.windowSize.height/d.windowSize.width<1.4?this._realWidth=370:this._realWidth=320,this._realHeight=this._realWidth*(d.windowSize.height/d.windowSize.width),this.icon.setPosition(56,207+(this._realHeight-480)/2,0),this.title.setPosition(-40,207+(this._realHeight-480)/2,0),this.icon.setScale(.25,.25,.25),this.title.setScale(.2,.2,.2))},t}(p)).prototype,"JoyStickComponent",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=t(L.prototype,"GameController",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=t(L.prototype,"AudioManager",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=t(L.prototype,"Cat",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=t(L.prototype,"canvas2D",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=t(L.prototype,"icon",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=t(L.prototype,"navigate",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=t(L.prototype,"text",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=t(L.prototype,"title",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=t(L.prototype,"joyStick",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=t(L.prototype,"camera",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=t(L.prototype,"step",[re],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),Z=t(L.prototype,"HideMask",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$=t(L.prototype,"CTA",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ee=t(L.prototype,"CTA_btn",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),te=t(L.prototype,"CTA_tryBtn",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ie=t(L.prototype,"CTA_Download",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ne=t(L.prototype,"_realHeight",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),oe=t(L.prototype,"_realWidth",[J],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=L))||x));r._RF.pop()}}}));

System.register("chunks:///_virtual/Constant.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var t,n,e;return{setters:[function(o){t=o.defineProperty},function(o){n=o.cclegacy,e=o._decorator}],execute:function(){n._RF.push({},"ad635qlxYJKO7zA3Z348j6W","Constant",void 0);var c;e.ccclass,e.property;!function(o){o.bgSound="bgSound",o.catAngrySound="catAngrySound",o.electricSound="electricSound",o.electric2Sound="electric2Sound",o.winSound="winSound",o.loseSound="loseSound",o.eatSound="eatSound",o.clockSound="clockSound"}(c||(c={}));var u=o("Constants",(function(){}));t(u,"localPos",null),t(u,"bossAction",null),t(u,"countingTime",1),t(u,"isCatLive",!0),t(u,"isWinGame",!1),t(u,"isEatFood",!1),t(u,"isCatched",!1),t(u,"laser",!1),t(u,"wallLaser",!0),t(u,"isTouch",!1),t(u,"isRotate",!1),t(u,"isRing",!1),t(u,"isCollideDoor",!1),t(u,"bossCatchedName",""),t(u,"Event",{touchStart:"touchstart",touchMove:"touchmove",touchEnd:"touchend",touchCancel:"touchcancel"}),t(u,"SoundTrack",c),t(u,"ironSource",{SoundState:!0,State:1,isEndGame:!1,isPlayBgSound:!1}),t(u,"Responsive",{HORIZONTAL_IPX:"horizontal_IPX",HORIZONTAL_TABLET:"horizontal_Tablet",VERTICAL_IPX:"vertical_IPX",VERTICAL_MOBILE:"vertical_Mobile"}),n._RF.pop()}}}));

System.register("chunks:///_virtual/JoyStick.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Constant.ts","./AudioManager.ts"],(function(t){"use strict";var i,e,n,o,a,r,c,s,l,u,p,h,f;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized,a=t.defineProperty},function(t){r=t.cclegacy,c=t._decorator,s=t.Node,l=t.CCBoolean,u=t.Vec3,p=t.Component},function(t){h=t.Constants},function(t){f=t.default}],execute:function(){var d,y,g,m,C,b,k,v,S,T,E,P,B,M,O,_,w;r._RF.push({},"c3658qOQadEYZt80EqPpq5n","JoyStick",void 0);var G=c.ccclass,U=c.property;t("JoyStick",(d=G("JoyStick"),y=U(f),g=U(s),m=U(s),C=U(s),b=U(s),k=U(l),d((T=i((S=function(t){function i(){for(var i,e=arguments.length,r=new Array(e),c=0;c<e;c++)r[c]=arguments[c];return i=t.call.apply(t,[this].concat(r))||this,n(o(i),"AudioManager",T,o(i)),n(o(i),"Game",E,o(i)),n(o(i),"controlCubeBox",P,o(i)),n(o(i),"stick",B,o(i)),n(o(i),"fakeBg",M,o(i)),n(o(i),"max_r",O,o(i)),n(o(i),"isTouch",_,o(i)),n(o(i),"angleMove",w,o(i)),a(o(i),"controlCat",null),a(o(i),"setTimeOut",void 0),a(o(i),"currentPos",null),i}e(i,t);var r=i.prototype;return r.start=function(){this.controlCat=this.controlCubeBox.getComponent("CatController"),this.fakeBg.on(cc.Node.EventType.TOUCH_START,this.stickStart,this),this.fakeBg.on(cc.Node.EventType.TOUCH_MOVE,this.stickMove,this),this.fakeBg.on(cc.Node.EventType.TOUCH_CANCEL,this.stickEnd,this),this.fakeBg.on(cc.Node.EventType.TOUCH_END,this.stickEnd,this)},r.onLoad=function(){this.stick.setPosition(0,0,0)},r.stickStart=function(t){if(h.isWinGame&&this.Game.getComponent("Game").GameController.installHandle(),!h.isWinGame){this.Game.getComponent("Game").countDown(),h.isTouch=!0,this.isTouch=!0;var i=t.getUILocation(),e=new u(i.x-160,i.y-240,0);this.node.setPosition(e),this.node.getComponent("cc.UIOpacity").opacity=120,this.stick.getComponent("cc.UIOpacity").opacity=120,this.stick.setPosition(e),this.handleIronSourcePlaySound()}},r.stickMove=function(t){if(h.isCatLive&&!h.isCatched&&!h.ironSource.isEndGame){var i=t.getUILocation(),e=new u(i.x-160,i.y-240,0),n=e.clone().subtract(this.node.position);n.length()>this.max_r&&(n.normalize().multiplyScalar(this.max_r),e=this.node.position.clone().add(n)),this.stick.setPosition(e),h.localPos=e,this.controlCat.isMoving=!0,this.controlCat.handleAngleCat()}},r.stickEnd=function(t){!h.isCatLive||h.isCatched||h.ironSource.isEndGame||(this.isTouch=!1,this.stick.setPosition(0,0,0),this.controlCat.isMoving=!1,this.stick.getComponent("cc.UIOpacity").opacity=0,this.node.getComponent("cc.UIOpacity").opacity=0)},r.offEvent=function(){this.stick.getComponent("cc.UIOpacity").opacity=0,this.node.getComponent("cc.UIOpacity").opacity=0,this.fakeBg.active=!1,this.controlCat.isMoving=!1},r.handleIronSourcePlaySound=function(){h.ironSource.isPlayBgSound||(h.ironSource.SoundState&&this.AudioManager.playSound(h.SoundTrack.bgSound),h.ironSource.isPlayBgSound=!0)},r.update=function(t){h.ironSource.isEndGame&&this.offEvent()},i}(p)).prototype,"AudioManager",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=i(S.prototype,"Game",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=i(S.prototype,"controlCubeBox",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=i(S.prototype,"stick",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=i(S.prototype,"fakeBg",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=i(S.prototype,"max_r",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 40}}),_=i(S.prototype,"isTouch",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),w=i(S.prototype,"angleMove",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=S))||v));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Constant.ts","./AudioManager.ts"],(function(e){"use strict";var o,t,n,i,a,s,r,c,l;return{setters:[function(e){o=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,s=e._decorator,r=e.Component},function(e){c=e.Constants},function(e){l=e.default}],execute:function(){var p,d,u,y,f;a._RF.push({},"cf8e1aetmhO9Ixn3ulRoUSJ","GameController",void 0);var m=s.ccclass,g=s.property;e("GameController",(p=m("GameController"),d=g(l),p((f=o((y=function(e){function o(){for(var o,t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return o=e.call.apply(e,[this].concat(a))||this,n(i(o),"AudioManager",f,i(o)),o}t(o,e);var a=o.prototype;return a.onLoad=function(){},a.start=function(){window.gameReady&&window.gameReady()},a.installHandle=function(){if(console.log("install"),c.ironSource.isEndGame=!0,this.AudioManager.stopAllSound(),window.gameEnd&&window.gameEnd(),"undefined"==typeof playableSDK)if("undefined"==typeof ExitApi){if("undefined"==typeof dapi)return"undefined"!=typeof mraid?cc.sys.os==cc.sys.OS_ANDROID||cc.sys.os==cc.sys.ANDROID?void mraid.open("https://play.google.com/store/apps/details?id=com.an.catescape.thecatgame"):cc.sys.os==cc.sys.OS_IOS||cc.sys.os==cc.sys.IPHONE||cc.sys.os==cc.sys.IPAD?void mraid.open("https://itunes.apple.com/us/app/id6450246575?mt=8"):void mraid.open("https://play.google.com/store/apps/details?id=com.an.catescape.thecatgame"):void(window.install&&window.install());dapi.openStoreUrl()}else ExitApi.exit();else window.playableSDK.openAppStore()},o}(r)).prototype,"AudioManager",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),u=y))||u));a._RF.pop()}}}));

System.register("chunks:///_virtual/BossAction.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Constant.ts","./AudioManager.ts","./Game.ts"],(function(e){"use strict";var t,n,i,o,r,a,s,l,c,u,d,h,p,f,m,g,w;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized,r=e.defineProperty},function(e){a=e.cclegacy,s=e._decorator,l=e.Node,c=e.Collider,u=e.tween,d=e.Vec3,h=e.Quat,p=e.SkeletalAnimation,f=e.Component},function(e){m=e.Constants},function(e){g=e.default},function(e){w=e.Game}],execute:function(){var y,S,C,b,v,A,F,B,E,_,k;a._RF.push({},"d3eadinT6dHdY+UphBQAWhj","BossAction",void 0);var T=s.ccclass,G=s.property;e("BossAction",(y=T("BossAction"),S=G(g),C=G(w),b=G(l),v=G(l),y((B=t((F=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,i(o(t),"AudioManager",B,o(t)),i(o(t),"Game",E,o(t)),i(o(t),"fakeCat",_,o(t)),i(o(t),"vision",k,o(t)),r(o(t),"tweenState",null),r(o(t),"isElectricFlag",!1),r(o(t),"isStopFlag",!1),r(o(t),"rigidbody",null),r(o(t),"collide",null),t}n(t,e);var a=t.prototype;return a.start=function(){"Boss"===this.node.name&&this.runTweenOfBossFirstScene(),"Boss_2"===this.node.name&&this.runTweenOfBossSecondScene(),this.collide=this.getComponent(c),this.handleCollide()},a.runTweenOfBossFirstScene=function(){this.tweenState=u(this.node).by(3,{position:new d(6,0,0)}).to(0,{rotation:h.fromEuler(new h,0,-90,0)}).by(3,{position:new d(-6,0,0)}).to(0,{rotation:h.fromEuler(new h,0,90,0)}).union().repeatForever().start()},a.runTweenOfBossSecondScene=function(){this.tweenState=u(this.node).by(3,{position:new d(0,0,6)}).to(0,{rotation:h.fromEuler(new h,0,180,0)}).by(3,{position:new d(0,0,-6)}).to(0,{rotation:h.fromEuler(new h,0,0,0)}).union().repeatForever().start()},a.handleCollide=function(){var e=this;this.collide&&this.collide.on("onCollisionEnter",(function(t){"Electro_vfx_mesh"===t.otherCollider.node.name&&m.laser&&!e.isElectricFlag&&e.die()}))},a.die=function(){this.isElectricFlag||(this.isElectricFlag=!0,this.vision.active=!1,this.tweenState.stop(),this.getComponent(p).play("police_die"),this.AudioManager.playSound(m.SoundTrack.electric2Sound))},a.isCatCatched=function(){var e=this;m.ironSource.isEndGame=!0,this.isStopFlag=!0,this.tweenState.stop(),this.getComponent(p).play("police_atk"),this.scheduleOnce((function(){e.fakeCat.active=!0,e.AudioManager.playSound(m.SoundTrack.catAngrySound)}),.5),this.scheduleOnce((function(){e.Game.EndGame(!1)}),2.5)},a.update=function(e){!this.isStopFlag&&m.isCatched&&m.isCatLive&&m.bossCatchedName===this.node.name&&this.isCatCatched()},t}(f)).prototype,"AudioManager",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=t(F.prototype,"Game",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=t(F.prototype,"fakeCat",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(F.prototype,"vision",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=F))||A));a._RF.pop()}}}));

System.register("chunks:///_virtual/AudioManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Constant.ts"],(function(e){"use strict";var n,t,o,i,r,u,a,c,l;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){r=e.cclegacy,u=e._decorator,a=e.AudioSource,c=e.Component},function(e){l=e.Constants}],execute:function(){var s,d,S,p,b,h,y,g,f,w,A,k,z,m,v,M,_;r._RF.push({},"d948b2gMqdAD6CRzTBJFAiN","AudioManager",void 0);var C=u.ccclass,D=u.property;e("default",(s=C("AudioManager"),d=D(a),S=D(a),p=D(a),b=D(a),h=D(a),y=D(a),g=D(a),s((A=n((w=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];return n=e.call.apply(e,[this].concat(r))||this,o(i(n),"bgSound",A,i(n)),o(i(n),"catAngrySound",k,i(n)),o(i(n),"electricSound",z,i(n)),o(i(n),"electric2Sound",m,i(n)),o(i(n),"winSound",v,i(n)),o(i(n),"loseSound",M,i(n)),o(i(n),"eatSound",_,i(n)),n}t(n,e);var r=n.prototype;return r.playSound=function(e){if(l.ironSource.SoundState)switch(e){case"bgSound":this.bgSound.play();break;case"catAngrySound":this.catAngrySound.play();break;case"electricSound":this.electricSound.play();break;case"electric2Sound":this.electric2Sound.play();break;case"winSound":this.winSound.play();break;case"loseSound":this.loseSound.play();break;case"eatSound":this.eatSound.play()}},r.stopSound=function(e){switch(e){case"bgSound":this.bgSound.stop();break;case"catAngrySound":this.catAngrySound.stop();break;case"electricSound":this.electricSound.stop();break;case"electric2Sound":this.electric2Sound.stop();break;case"winSound":this.winSound.stop();break;case"loseSound":this.loseSound.stop();break;case"eatSound":this.eatSound.stop()}},r.stopAllSound=function(){this.bgSound.stop(),this.catAngrySound.stop(),this.electricSound.stop(),this.electric2Sound.stop(),this.winSound.stop(),this.loseSound.stop(),this.eatSound.stop()},n}(c)).prototype,"bgSound",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=n(w.prototype,"catAngrySound",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=n(w.prototype,"electricSound",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=n(w.prototype,"electric2Sound",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=n(w.prototype,"winSound",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=n(w.prototype,"loseSound",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=n(w.prototype,"eatSound",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=w))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Constant.ts","./AudioManager.ts","./GameController.ts","./JoyStick.ts","./Game.ts","./Responsive.ts","./CatController.ts","./CubeController.ts","./LaserController.ts","./BossAction.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});