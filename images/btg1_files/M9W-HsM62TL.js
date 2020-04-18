if (self.CavalryLogger) { CavalryLogger.start_js(["UCIj9"]); }

__d("ContextualLayerAlignmentEnum",["prop-types","objectValues"],(function(a,b,c,d,e,f){"use strict";a={left:"left",center:"center",right:"right"};c=b("objectValues")(a);d=babelHelpers["extends"]({},a,{values:c,propType:b("prop-types").oneOf(c)});e.exports=d}),null);
__d("ContextualLayerPositionEnum",["prop-types","objectValues"],(function(a,b,c,d,e,f){"use strict";a={above:"above",below:"below",left:"left",right:"right"};c=b("objectValues")(a);d=babelHelpers["extends"]({},a,{values:c,propType:b("prop-types").oneOf(c)});e.exports=d}),null);
__d("ARIA",["DOM","emptyFunction","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f){var g,h,i=function(){g=b("ge")("ariaAssertiveAlert"),g||(g=b("DOM").create("div",{id:"ariaAssertiveAlert",className:"accessible_elem","aria-live":"assertive"}),b("DOM").appendContent(document.body,g)),h=b("ge")("ariaPoliteAlert"),h||(h=g.cloneNode(!1),h.setAttribute("id","ariaPoliteAlert"),h.setAttribute("aria-live","polite"),b("DOM").appendContent(document.body,h)),i=b("emptyFunction")};function j(a,c){i();c=c?g:h;b("DOM").setContent(c,a)}a={controls:function(a){for(var c=arguments.length,d=new Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];var f=d.map(function(a){return b("getOrCreateDOMID")(a)}).join(" ");a.setAttribute("aria-controls",f)},describedBy:function(a){for(var c=arguments.length,d=new Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];var f=d.map(function(a){return b("getOrCreateDOMID")(a)}).join(" ");a.setAttribute("aria-describedby",f)},owns:function(a,c){a.setAttribute("aria-owns",b("getOrCreateDOMID")(c))},setPopup:function(a,c){c=b("getOrCreateDOMID")(c);a.setAttribute("aria-controls",c);a.setAttribute("aria-haspopup","true");c=a.getAttribute("role")||"";c&&a.setAttribute("role",c)},announce:function(a){j(a,!0)},notify:function(a){j(a,!1)}};e.exports=a}),null);
__d("DOMDimensions",["Style","getDocumentScrollElement"],(function(a,b,c,d,e,f){"use strict";a={getElementDimensions:function(a){var b=a?a.offsetHeight:0;a=a?a.offsetWidth:0;return{height:b,width:a}},getDocumentDimensions:function(a){a=b("getDocumentScrollElement")(a);var c=a.scrollWidth||0;a=a.scrollHeight||0;return{width:c,height:a}},measureElementBox:function(a,c,d,e,f){var g;switch(c){case"left":case"right":case"top":case"bottom":g=[c];break;case"width":g=["left","right"];break;case"height":g=["top","bottom"];break;default:throw Error("Invalid plane: "+c)}c=function(c,d){var e=0;for(var f=0;f<g.length;f++)e+=parseFloat(b("Style").get(a,c+"-"+g[f]+d))||0;return e};return(d?c("padding",""):0)+(e?c("border","-width"):0)+(f?c("margin",""):0)}};e.exports=a}),null);
__d("SVGChecker",[],(function(a,b,c,d,e,f){e.exports={isSVG:function(a){return!!a.ownerSVGElement||a.tagName.toLowerCase()==="svg"},isDisplayed:function(a){try{a=a.getBBox();if(a&&(a.height===0||a.width===0))return!1}catch(a){return!1}return!0}}}),null);
__d("getOffsetParent",["Style"],(function(a,b,c,d,e,f){function g(a){a=a.parentNode;if(!a||a===document.documentElement)return document.documentElement;return b("Style").get(a,"position")!=="static"?a:a===document.body?document.documentElement:g(a)}e.exports=g}),null);
__d("ContextualLayer",["invariant","requireCond","Arbiter","ARIA","Bootloader","ContextualLayerAlignmentEnum","ContextualLayerPositionEnum","ContextualThing","CSS","DataStore","DOM","Event","Layer","cr:971473","Locale","Parent","Rect","Scroll","Style","SVGChecker","Vector","containsNode","emptyFunction","getOffsetParent","getOrCreateDOMID","getOverlayZIndex","getOwnObjectValues","isElementNode","killswitch","removeFromArray","throttle"],(function(a,b,c,d,e,f,g){function h(a){return a.getPosition()==="left"||a.isVertical()&&a.getAlignment()==="right"}a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d._configure=function(b,c){b.dialogRole!=="dialog"&&(this._dialogRole=b.dialogRole),b.shouldSetARIAProperties===!1&&(this._shouldSetARIAProperties=b.shouldSetARIAProperties),b.label&&(this._label=b.label),b.labelledBy&&(this._labelledBy=b.labelledBy),a.prototype._configure.call(this,b,c),b.context?this.setContext(b.context):b.contextID?this._setContextID(b.contextID):b.contextSelector&&(this._setContextSelector(b.contextSelector),this._setARIAProperties()),this.setPosition(b.position),this.setAlignment(b.alignment),this.setOffsetX(b.offsetX),this.setOffsetY(b.offsetY),this.setArrowDimensions(b.arrowDimensions),this._content=c};d._getDefaultBehaviors=function(){var d=c.getDefaultBehaviorsAsObject();return a.prototype._getDefaultBehaviors.call(this).concat(b("getOwnObjectValues")(d))};d._buildWrapper=function(a,c){this._contentWrapper=b("DOM").create("div",{className:"uiContextualLayer"},c);this._dialogRole&&this._contentWrapper.setAttribute("role",this._dialogRole);this._labelledBy?this._contentWrapper.setAttribute("aria-labelledby",this._labelledBy):this._label&&this._contentWrapper.setAttribute("aria-label",this._label);this._dialogRole==="alert"&&this._contentWrapper.setAttribute("aria-atomic","true");return b("DOM").create("div",{className:"uiContextualLayerPositioner","data-testid":a["data-testid"]},this._contentWrapper)};d.getInsertParent=function(){var c=this._insertParent;if(!c){var d=this.getContext();d&&(c=b("Parent").byClass(d,"uiContextualLayerParent"))}return c||a.prototype.getInsertParent.call(this)};d.setContent=function(a){this._content=a;b("DOM").setContent(this._contentWrapper,this._content);this._shown&&this.updatePosition();return this};d.setContext=function(a){return this.setContextWithBounds(a,null)};d.setContextWithBounds=function(a,c){if(this._contextNode===a&&c&&this._contextBounds&&c.isEqualTo(this._contextBounds))return this;this._contextNode=a;var d=c&&this._contextBounds&&c.t===this._contextBounds.t&&c.r===this._contextBounds.r&&c.b===this._contextBounds.b&&c.l===this._contextBounds.l;if(d)return this;this._contextBounds=c||null;this._contextSelector="#"+b("getOrCreateDOMID")(a);this._contextScrollParent=null;this._shown&&(b("ContextualThing").register(this.getRoot(),this._contextNode),this.updatePosition());this._setParentSubscription();this._setARIAProperties();return this};d.shouldSetARIAProperties=function(a){this._shouldSetARIAProperties=a;return this};d._setARIAProperties=function(){if(!this._shouldSetARIAProperties)return this;this._dialogRole==="dialog"?b("ARIA").setPopup(this.getCausalElement(),this.getRoot()):this._dialogRole==="region"&&b("Bootloader").loadModules(["ContextualLayerInlineTabOrder"],function(a){this.hasBehavior(a)||this.enableBehavior(a)}.bind(this),"ContextualLayer");return this};d._setContextID=function(a){this._contextSelector="#"+a,this._contextNode=null};d._setContextSelector=function(a){this._contextSelector=a,this._contextNode=null};d.getCausalElement=function(){return a.prototype.getCausalElement.call(this)||this.getContext()};d._setParentSubscription=function(){var a=this.getContext(),c=null;while(a!=null){c=b("DataStore").get(a,"layer");if(c)break;a=a.parentNode}if(c===this._parentLayer)return;this._parentLayer&&this._parentSubscription&&(this._parentLayer.unsubscribe(this._parentSubscription),this._parentSubscription=null);c&&(this._parentSubscription=c.subscribe("hide",this.hide.bind(this)));this._parentLayer=c};d.setPosition=function(a){this.getOrientation().setDefaultPosition(a)&&(this._shown&&this.updatePosition());return this};d.setAlignment=function(a){this.getOrientation().setDefaultAlignment(a)&&(this._shown&&this.updatePosition());return this};d.setOffsetX=function(a){this.getOrientation().setDefaultOffsetX(a)&&(this._shown&&this.updatePosition());return this};d.setArrowDimensions=function(a){a&&this.getOrientation().setArrowOffset(a.offset)&&(this._shown&&this.updatePosition());return this};d.setOffsetY=function(a){this.getOrientation().setDefaultOffsetY(a)&&(this._shown&&this.updatePosition());return this};d.getPosition=function(){return this.getOrientation().getPosition()};d.getOrientation=function(){this._orientation||(this._orientation=new l());return this._orientation};d.getContentRoot=function(){return this._contentWrapper};d.getContent=function(){return this._content};d.getContext=function(){this._contextNode||(this._contextSelector!=null||g(0,11711),this._contextNode=b("DOM").find(document,this._contextSelector));return this._contextNode};d.getContextBounds=function(a){if(this._contextBounds)return this._contextBounds.convertTo(a);var c=this.getContext();return b("Rect").newFromVectors(b("Vector").getElementPosition(c,a),b("Vector").getElementDimensions(c))};d.getContextScrollParent=function(){!this._contextScrollParent?this._contextScrollParent=b("Style").getScrollParent(this.getContext()):b("isElementNode")(this._contextScrollParent)&&!b("containsNode")(document.documentElement,this._contextScrollParent)&&(this._contextScrollParent=b("Style").getScrollParent(this.getContext()));return this._contextScrollParent};d.setInsertParent=function(b){this._insertScrollParent=null;return a.prototype.setInsertParent.call(this,b)};d.getInsertScrollParent=function(){this._insertScrollParent||(this._insertScrollParent=b("Style").getScrollParent(this.getInsertParent()));return this._insertScrollParent};d.show=function(){var c=this;if(this._shown)return this;a.prototype.show.call(this);b("Arbiter").inform("contextualLayer/toggle",{show:!0,contentRoot:this.getRoot()});this._shown&&(b("ContextualThing").register(this.getRoot(),this.getContext()),i.push(this),this._resizeListener=this._resizeListener||b("Event").listen(window,"resize",b("throttle")(function(){c._shown&&c.updatePosition()})));return this};d.finishHide=function(){b("removeFromArray")(i,this);this._resizeListener&&this._resizeListener.remove();this._resizeListener=null;this._insertScrollParent=null;b("Arbiter").inform("contextualLayer/toggle",{show:!1,contentRoot:this.getRoot()});return a.prototype.finishHide.call(this)};d.isFixed=function(){return b("Style").isFixed(this.getContext())&&!b("Style").isFixed(this.getInsertParent())};d.updatePosition=function(){var a=this.getContext();if(!a)return!1;var c=this.isFixed();if(!c&&!(a.offsetParent||b("SVGChecker").isSVG(a)&&b("SVGChecker").isDisplayed(a)))return!1;var d=this.getRoot(),e=!b("killswitch")("CONTEXTUAL_POSITIONING_MOBILE_FIX"),f=e?b("Vector").getLayoutViewportDimensions().x:b("Vector").getViewportDimensions().x;b("Style").set(d,"width",f+"px");var g=this.getOrientation();this.inform("adjust",g.reset());if(!g.isValid())return!1;this._updateWrapperPosition(g);this._updateWrapperClass(g);b("CSS").conditionClass(d,"uiContextualLayerPositionerFixed",c);var i=c?"viewport":"document",j=c?document.documentElement:b("getOffsetParent")(d);if(c&&e)c=new(b("Vector"))(0,0),e=f;else if(j===document.documentElement)c=new(b("Vector"))(0,0),e=document.documentElement.clientWidth;else if(!d.offsetParent)return!1;else c=b("Vector").getElementPosition(j,i),e=j.offsetWidth,j!==document.body&&(c=c.sub(new(b("Vector"))(b("Scroll").getLeft(j),b("Scroll").getTop(j))));f=this.getContextBounds(i);j=f.l-c.x;i=f.t-c.y;c=f.h();f=f.w();var k=b("Locale").isRTL();g.getPosition()==="below"&&(i+=c);(g.getPosition()==="right"||g.isVertical()&&g.getAlignment()==="right")!=k&&(j+=f);c=g.getOffsetX();g.isVertical()&&g.getAlignment()==="center"&&(c+=(f-this.getContentRoot().offsetWidth)/2);k&&(c*=-1);f="left";j=Math.floor(j+c);h(g)!==k&&(f="right",j=e-j);b("Style").set(d,f,j+"px");b("Style").set(d,f==="left"?"right":"left","");c=this.getInsertScrollParent();k=0;c!==window?(e=c.clientWidth,k=b("Vector").getElementPosition(c).x):e=document.documentElement.clientWidth;j=b("Vector").getElementPosition(d).x-k;f==="left"&&e-j>0?b("Style").set(d,"width",e-j+"px"):f==="right"&&j+d.offsetWidth>0?b("Style").set(d,"width",j+d.offsetWidth+"px"):b("Style").set(d,"width","");b("Style").set(d,"top",i+g.getOffsetY()+"px");c=b("getOverlayZIndex")(a,this.getInsertParent());b("Style").set(d,"z-index",c>200?c:"");this.inform("reposition",g);return!0};d._updateWrapperPosition=function(a){var c=a.getPosition()==="above";b("Style").set(this._contentWrapper,"bottom",c?"0":null);c=b("Locale").isRTL()?"left":"right";a=h(a);b("Style").set(this._contentWrapper,c,a?"0":null)};d._updateWrapperClass=function(a){a=a.getClassName();if(a===this._orientationClass)return;this._orientationClass&&b("CSS").removeClass(this._contentWrapper,this._orientationClass);this._orientationClass=a;b("CSS").addClass(this._contentWrapper,a)};d.simulateOrientation=function(a,c){a=a.getClassName();if(a===this._orientationClass)return c();else{this._orientationClass&&b("CSS").removeClass(this._contentWrapper,this._orientationClass);b("CSS").addClass(this._contentWrapper,a);c=c();b("CSS").removeClass(this._contentWrapper,a);this._orientationClass&&b("CSS").addClass(this._contentWrapper,this._orientationClass);return c}};d.destroy=function(){a.prototype.destroy.call(this);this._contentWrapper=null;this._content=null;return this};d.getArrowDimensions=function(){return this._config.arrowDimensions||{offset:0,length:0}};c.getDefaultBehaviorsAsObject=function(){return b("cr:971473")==null?{}:{LayerHideOnTransition:b("cr:971473")}};return c}(b("Layer"));var i=[];b("Arbiter").subscribe("reflow",function(){i.forEach(function(a){a.updatePosition()===!1&&a.hide()})});Object.assign(a.prototype,{_contentWrapper:null,_content:null,_contextNode:null,_contextBounds:null,_contextSelector:null,_dialogRole:"dialog",_label:null,_labelledBy:[],_parentLayer:null,_parentSubscription:null,_orientation:null,_orientationClass:null,_shouldSetARIAProperties:!0});var j=b("emptyFunction").thatReturnsArgument,k=b("emptyFunction").thatReturnsArgument,l=function(){"use strict";function a(){this._default={_position:"above",_alignment:"left",_offsetX:0,_offsetY:0,_valid:!0,_preferMoreContentShownRect:!1},this.reset()}var b=a.prototype;b.setPosition=function(a){this._position=j(a);return this};b.setAlignment=function(a){this._alignment=k(a);return this};b.getOppositePosition=function(){return a.OPPOSITE[this.getPosition()]};b.invalidate=function(){this._valid=!1;return this};b.getPosition=function(){return this._position||"above"};b.getAlignment=function(){return this._alignment||"left"};b.getOffsetX=function(){var a=this._offsetX||0;!this.isVertical()?this._default._position!==this._position&&(a*=-1):this._default._alignment!==this._alignment&&(a*=-1);return a};b.getOffsetY=function(){var a=this._offsetY||0;this.isVertical()&&this._default._position!==this._position&&(a*=-1);return a};b.getClassName=function(){var a=this.getAlignment(),b=this.getPosition();if(b==="below")if(a==="left")return"uiContextualLayerBelowLeft";else if(a==="right")return"uiContextualLayerBelowRight";else return"uiContextualLayerBelowCenter";else if(b==="above")if(a==="left")return"uiContextualLayerAboveLeft";else if(a==="right")return"uiContextualLayerAboveRight";else return"uiContextualLayerAboveCenter";else if(b==="left")return"uiContextualLayerLeft";else return"uiContextualLayerRight"};b.isValid=function(){return this._valid};b.isVertical=function(){return this.getPosition()==="above"||this.getPosition()==="below"};b.reset=function(){Object.assign(this,this._default);return this};b.setDefaultPosition=function(a){var b=this._default._position;this._default._position=j(a);return b!==a};b.setDefaultAlignment=function(a){var b=this._default._alignment;this._default._alignment=k(a);return b!==a};b.setDefaultOffsetX=function(a){var b=this._default._offsetX;this._default._offsetX=a;return b!==a};b.setArrowOffset=function(a){var b=this._default._arrowOffset;this._default._arrowOffset=a;return b!==a};b.getArrowOffset=function(){return this._default._arrowOffset||0};b.setDefaultOffsetY=function(a){var b=this._default._offsetY;this._default._offsetY=a;return b!==a};b.setPreferMoreContentShownRect=function(a){var b=this._default._preferMoreContentShownRect;this._default._preferMoreContentShownRect=a;return b!==a};b.getPreferMoreContentShownRect=function(){return this._default._preferMoreContentShownRect};return a}();l.OPPOSITE={above:"below",below:"above",left:"right",right:"left"};e.exports=a}),null);
__d("ContextualLayerAutoFlip",["ContextualLayerAlignmentEnum","ContextualLayerDimensions","DOMDimensions","Rect","Vector","getDocumentScrollElement"],(function(a,b,c,d,e,f){function g(a,c){c=new(b("Rect"))(c).convertTo(a.domain);var d=Math.max(a.l,c.l);a=Math.min(a.r,c.r);return Math.max(a-d,0)}a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("adjust",this._adjustOrientation.bind(this)),this._layer.isShown()&&this._layer.updatePosition()};c.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null),this._layer.isShown()&&this._layer.updatePosition()};c._adjustOrientation=function(a,c){a=this.getValidPositions(c);if(!a.length){c.invalidate();return}var d=b("ContextualLayerDimensions").getViewportRect(this._layer),e=this._getValidAlignments(c),f,h,i;for(f=0;f<e.length;f++){c.setAlignment(e[f]);for(h=0;h<a.length;h++){c.setPosition(a[h]);i=b("ContextualLayerDimensions").getLayerRect(this._layer,c);if(d.contains(i))return}}var j=-1;if(c.getPreferMoreContentShownRect()){var k=b("DOMDimensions").getDocumentDimensions(),l=new(b("Rect"))(d).convertTo("document"),m=99999;for(h=0;h<a.length;h++){c.setPosition(a[h]);i=b("ContextualLayerDimensions").getLayerRect(this._layer,c);var n=new(b("Rect"))(i).convertTo("document");if(n.l>=0&&n.r<=k.width&&n.t>=43&&n.b<=k.height){var o=l.l-n.l,p=n.r-l.r,q=l.t-n.t;n=n.b-l.b;o=(o>0?o:0)+(p>0?p:0)+(q>0?q:0)+(n>0?n:0);o<m&&(j=h,m=o)}}}this.__setBestPosition(j,c,a);p=0;q=0;for(f=0;f<e.length;f++)c.setAlignment(e[f]),i=b("ContextualLayerDimensions").getLayerRect(this._layer,c),n=g(d,i),n>q&&(q=n,p=f);c.setAlignment(e[p])};c.__setBestPosition=function(a,b,c){a>=0?b.setPosition(c[a]):b.setPosition(c.includes("below")?"below":c[0])};c.getValidPositions=function(a){var c=[a.getPosition(),a.getOppositePosition()],d=this._layer.getContextScrollParent();if(d===window||d===b("getDocumentScrollElement")())return c;var e=this._layer.getContext(),f=b("Vector").getElementPosition(d,"viewport").y,g=b("Vector").getElementPosition(e,"viewport").y;if(a.isVertical())return c.filter(function(a){if(a==="above")return g>=f;else{a=f+d.offsetHeight;var b=g+e.offsetHeight;return b<=a}});else{a=f+d.offsetHeight;if(g>=f&&g+e.offsetHeight<=a)return c;else return[]}};c._getValidAlignments=function(a){var c=b("ContextualLayerAlignmentEnum").values;a=a.getAlignment();var d=c.indexOf(a);d>0&&(c.splice(d,1),c.unshift(a));return c};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("getInlineBoundingRect",["Rect"],(function(a,b,c,d,e,f){function a(a,c){var d=a.getClientRects();if(!c||d.length===0)return b("Rect").getElementBounds(a);var e,f=!1;for(var g=0;g<d.length;g++){var h=new(b("Rect"))(Math.round(d[g].top),Math.round(d[g].right),Math.round(d[g].bottom),Math.round(d[g].left),"viewport").convertTo("document"),i=h.getPositionVector(),j=i.add(h.getDimensionVector());if(!e||i.x<=e.l&&i.y>e.t){if(f)break;e=new(b("Rect"))(i.y,j.x,j.y,i.x,"document")}else e.t=Math.min(e.t,i.y),e.b=Math.max(e.b,j.y),e.r=j.x;h.contains(c)&&(f=!0)}e||(e=b("Rect").getElementBounds(a));return e}e.exports=a}),null);
__d("nl2br",["DOM"],(function(a,b,c,d,e,f){var g=/(\r\n|[\r\n])/;function a(a){return a.split(g).map(function(a){return g.test(a)?b("DOM").create("br"):a})}e.exports=a}),null);
__d("Tooltip",["fbt","invariant","Arbiter","AsyncRequest","ContextualLayer","ContextualLayerAutoFlip","CSS","DOM","Event","Style","TooltipData","Vector","emptyFunction","getElementText","getInlineBoundingRect","getOrCreateDOMID","gkx","killswitch","nl2br","setImmediate"],(function(a,b,c,d,e,f,g,h){var i=null,j=null,k=null,l=null,m=null,n=null,o=null,p=!1,q=[],r=[];function s(){if(!m){n=b("DOM").create("div",{className:"tooltipContent","data-testid":"tooltip_testid"});o=b("getOrCreateDOMID")(n);var a=b("DOM").create("i",{className:"arrow"});a=b("DOM").create("div",{className:"uiTooltipX"},[n,a]);m=new(b("ContextualLayer"))({},a);m.shouldSetARIAProperties(!1);m.enableBehavior(b("ContextualLayerAutoFlip"));b("gkx")("764802")&&(m.getRoot().style.pointerEvents="none")}}function t(a,c){v._show(a,g._("\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14...")),new(b("AsyncRequest"))(c).setHandler(function(b){v._show(a,b.getPayload()),m&&m.updatePosition()}).setErrorHandler(b("emptyFunction")).send()}var u;b("Event").listen(document.documentElement,"mouseover",function(a){u=a,b("setImmediate")(function(){u=null})});var v=babelHelpers["extends"]({},b("TooltipData"),{isActive:function(a){return a===i},process:function(a,c){if(!b("DOM").contains(a,c))return;if(a!==i){v.fetchIfNecessary(a);c=v._get(a);if(c.suppress)return;c.delay?v._showWithDelay(a,c.delay):v.show(a)}},fetchIfNecessary:function(a){var b=a.getAttribute("data-tooltip-uri");b&&(a.removeAttribute("data-tooltip-uri"),t(a,b))},suspend:function(){p=!0},hide:function(){var a=i,c,d=p;p=!1;try{b("Arbiter").inform("tooltip/requesthide",{context:a}),c=p}finally{p=d}c||v.commitHide(a)},commitHide:function(a){if(!j||a!==j){if(a&&m){m.hide();i=null;while(q.length)q.pop().remove()}b("Arbiter").inform("tooltip/hide",{context:a})}},_show:function(a,b){v._store({context:a,content:b}),v.isActive(a)&&v.show(a)},show:function(a){var c,d=p;p=!1;try{b("Arbiter").inform("tooltip/requestshow",{context:a}),c=p}finally{p=d}c||v.commitShow(a)},commitShow:function(a){var c=function(){a.removeAttribute("aria-describedby");var c=v._get(a);c.className&&m&&b("CSS").removeClass(m.getRoot(),c.className);v.hide()},d=function(a){b("DOM").contains(i,a.getTarget())||c()};j=a;s();a!==i&&(b("killswitch")("TOOLTIP_FIX_HIDE_ACTIVE_TOOLTIP_BEFORE_NEW_ONE")?v.commitHide(a):v.commitHide(i));j=null;a!==i&&b("Arbiter").inform("tooltip/beforeshow",{context:a});var e=v._get(a);if(e.suppress||v.allSuppressed)return;var f=e.content;if(e.overflowDisplay){if(a.offsetWidth>=a.scrollWidth)return;f||(f=b("getElementText")(a))}var g=f?function(){a.setAttribute("aria-describedby",o),m&&m.show()}:function(){},k=0,l=e.offsetY?parseInt(e.offsetY,10):0;if(e.position==="left"||e.position==="right")l=(a.offsetHeight-28)/2;else if(e.alignH!=="center"){var p=a.offsetWidth;p<32&&(k=(p-32)/2*(e.alignH==="right"?-1:1))}p=u?b("Vector").getEventPosition(u):b("Vector").getElementPosition(a);m||h(0,4328);m.setContextWithBounds(a,b("getInlineBoundingRect")(a,p)).setOffsetX(k).setOffsetY(l).setPosition(e.position).setAlignment(e.alignH);if(typeof f==="string"){b("CSS").addClass(m.getRoot(),"invisible_elem");p=b("DOM").create("span",{},b("nl2br")(f));k=b("DOM").create("div",{className:"tooltipText"},p);b("DOM").setContent(n,k);g();b("CSS").removeClass(m.getRoot(),"invisible_elem")}else b("DOM").setContent(n,f),g();q.push(b("Event").listen(document.documentElement,"mouseover",d),b("Event").listen(document.documentElement,"focusin",d));l=b("Style").getScrollParent(a);l!==window&&q.push(b("Event").listen(l,"scroll",c));e.persistOnClick||q.push(b("Event").listen(a,"click",c));e.className&&b("CSS").addClass(m.getRoot(),e.className);i=a},_showWithDelay:function(a,c){a!==k&&v._clearDelay();if(!l){var d=function(a){b("DOM").contains(k,a.getTarget())||v._clearDelay()};r.push(b("Event").listen(document.documentElement,"mouseover",d),b("Event").listen(document.documentElement,"focusin",d));k=a;l=setTimeout(function(){v._clearDelay(),v.show(a)},c)}},_clearDelay:function(){clearTimeout(l);k=null;l=null;while(r.length)r.pop().remove()}});b("Event").listen(window,"scroll",v.hide);e.exports=v}),null);