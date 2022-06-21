/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

(function($){var script={};var floatmetrics=function(doc){var bool=false,docElem=doc.documentElement,refNode=docElem.firstElementChild||docElem.firstChild,div=doc.createElement("div");div.style.cssText="position:absolute;top:-100em;width:1.1px";docElem.insertBefore(div,refNode);bool=(div.getBoundingClientRect()["width"]||1)%1!==0;docElem.removeChild(div);if(!bool){var msie=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase());if(msie)bool=parseInt(msie[1],10)==8||parseInt(msie[1],10)==9}return bool}(document);$.fn.socialButtons=function(options){options=$.extend({wrapper:'<div class="socialbuttons clearfix" />'},options);if(!options["twitter"]&&!options["plusone"]&&!options["facebook"]){return this}if(options["twitter"]&&!script["twitter"]){script["twitter"]=$.getScript("//platform.twitter.com/widgets.js")}if(options["plusone"]&&!script["plusone"]){script["plusone"]=$.getScript("//apis.google.com/js/plusone.js")}if(!window["FB"]&&options["facebook"]&&!script["facebook"]){$("body").append('<div id="fb-root"></div>');(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/en_US/all.js#xfbml=1";fjs.parentNode.insertBefore(js,fjs)})(document,"script","facebook-jssdk");script["facebook"]=true}return this.each(function(){var link=$(this).data("permalink"),buttons=$(options.wrapper).appendTo(this);if(options["twitter"]){buttons.append('<div><a href="http://twitter.com/share" class="twitter-share-button" data-url="'+link+'" data-count="none">Tweet</a></div>')}if(options["plusone"]){buttons.append('<div><div class="g-plusone" data-size="medium" data-annotation="none" data-href="'+link+'"></div></div>')}if(options["facebook"]){buttons.append('<div><div class="fb-like" data-href="'+link+'" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false"></div></div>')}})};var matchers={};$.matchHeight=function(id,elements,deepest){var win=$(window),event="debouncedresize orientationchange",matcher=id&&matchers[id];if(!matcher){matcher=matchers[id]={id:id,elements:elements,deepest:deepest,match:function(){var elements=this.revert(),max=0;$(this.elements).each(function(){max=Math.max(max,$(this).outerHeight())}).each(function(i){var boxheight="outerHeight";if(elements[i].css("box-sizing")=="border-box"){boxheight="height"}var box=$(this),element=elements[i],height=element.height()+(max-box[boxheight]());element.css("min-height",height+"px")})},revert:function(){var elements=[],deepest=this.deepest;$(this.elements).each(function(i){var e=deepest?$(this).find(deepest+":first"):$(this);elements.push(e.css("min-height",""))});return elements},remove:function(){win.unbind(event,resize);this.revert();delete matchers[this.id]}};function resize(){matcher.match()}win.bind(event,resize)}return matcher};$.matchWidth=function(id,elements,selector){var win=$(window),event="debouncedresize orientationchange",matcher=id&&matchers[id];if(!matcher){if(floatmetrics){matchers[id]={match:function(){},revert:function(){},remove:function(){}};return matchers[id]}matcher=matchers[id]={id:id,elements:elements,selector:selector,match:function(){this.revert();$(this.elements).each(function(){var $this=$(this),w=$this.width(),elements=$this.children(selector),sum=0;elements.each(function(index){if(index<elements.length-1){sum+=$(this).width();return}$(this).width(w-sum)})})},revert:function(){$(elements).children(selector).css("width","")},remove:function(){win.unbind(event,resize);this.revert();delete matchers[this.id]}};function resize(){matcher.match()}win.bind(event,resize)}return matcher};$.fn.matchHeight=function(deepest){var max=0,elements=[];this.each(function(i){var ele=deepest?$(this).find(deepest+":first"):$(this);elements.push(ele);ele.css("min-height","")});this.each(function(){max=Math.max(max,$(this).outerHeight())});return this.each(function(i){var box=$(this),ele=elements[i],height=ele.height()+(max-box.outerHeight());ele.css("min-height",height+"px")})};$.fn.matchWidth=function(selector){return this.each(function(){var ele=$(this),children=ele.children(selector),sum=0;children.width(function(index,width){if(index<children.length-1){sum+=width;return width}return ele.width()-sum})})};$.fn.smoothScroller=function(options){options=$.extend({duration:1e3,transition:"easeOutExpo"},options);return this.each(function(){$(this).bind("click",function(){var newHash=this.hash,target=$(this.hash).offset().top,oldLocation=window.location.href.replace(window.location.hash,""),newLocation=this;if(oldLocation+newHash==newLocation){$("html:not(:animated),body:not(:animated)").animate({scrollTop:target},options.duration,options.transition,function(){window.location.hash=newHash.replace("#","")});return false}})})}})(jQuery);(function(jQuery){jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*(--t*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return t==0?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return t==d?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=1.525)+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<1/2.75){return c*(7.5625*t*t)+b}else if(t<2/2.75){return c*(7.5625*(t-=1.5/2.75)*t+.75)+b}else if(t<2.5/2.75){return c*(7.5625*(t-=2.25/2.75)*t+.9375)+b}else{return c*(7.5625*(t-=2.625/2.75)*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}})})(jQuery);(function($){var isInputSupported="placeholder"in document.createElement("input"),isTextareaSupported="placeholder"in document.createElement("textarea");if(isInputSupported&&isTextareaSupported){$.fn.placeholder=function(){return this}}else{$.fn.placeholder=function(){return this.filter((isInputSupported?"textarea":":input")+"[placeholder]").bind("focus.placeholder",clearPlaceholder).bind("blur.placeholder",setPlaceholder).trigger("blur.placeholder").end()}}function args(elem){var newAttrs={},rinlinejQuery=/^jQuery\d+$/;$.each(elem.attributes,function(i,attr){if(attr.specified&&!rinlinejQuery.test(attr.name)){newAttrs[attr.name]=attr.value}});return newAttrs}function clearPlaceholder(){var $input=$(this);if($input.val()===$input.attr("placeholder")&&$input.hasClass("placeholder")){if($input.data("placeholder-password")){$input.hide().next().show().focus()}else{$input.val("").removeClass("placeholder")}}}function setPlaceholder(elem){var $replacement,$input=$(this);if($input.val()===""||$input.val()===$input.attr("placeholder")){if($input.is(":password")){if(!$input.data("placeholder-textinput")){try{$replacement=$input.clone().attr({type:"text"})}catch(e){$replacement=$("<input>").attr($.extend(args($input[0]),{type:"text"}))}$replacement.removeAttr("name").data("placeholder-password",true).bind("focus.placeholder",clearPlaceholder);$input.data("placeholder-textinput",$replacement).before($replacement)}$input=$input.hide().prev().show()}$input.addClass("placeholder").val($input.attr("placeholder"))}else{$input.removeClass("placeholder")}}$(function(){$("form").bind("submit.placeholder",function(){var $inputs=$(".placeholder",this).each(clearPlaceholder);setTimeout(function(){$inputs.each(setPlaceholder)},10)})});$(window).bind("unload.placeholder",function(){$(".placeholder").val("")})})(jQuery);(function($){if($.event.special.debouncedresize)return;var $event=$.event,$special,resizeTimeout;$special=$event.special.debouncedresize={setup:function(){$(this).on("resize",$special.handler)},teardown:function(){$(this).off("resize",$special.handler)},handler:function(event,execAsap){var context=this,args=arguments,dispatch=function(){event.type="debouncedresize";$event.dispatch.apply(context,args)};if(resizeTimeout){clearTimeout(resizeTimeout)}execAsap?dispatch():resizeTimeout=setTimeout(dispatch,$special.threshold)},threshold:150}})(jQuery);