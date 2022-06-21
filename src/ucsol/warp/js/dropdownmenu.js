(function($){var Plugin=function(){};$.extend(Plugin.prototype,{name:"dropdownMenu",options:{mode:"default",itemSelector:"li",firstLevelSelector:"li.level1",dropdownSelector:"ul",duration:600,remainTime:800,remainClass:"remain",matchHeight:true,transition:"easeOutExpo",withopacity:true,centerDropdown:false,reverseAnimation:false,fixWidth:false,fancy:null,boundary:$(window),boundarySelector:null},initialize:function(element,options){this.options=$.extend({},this.options,options);var $this=this,lastactive=null,remain=false;this.menu=element;this.dropdowns=[];this.options.withopacity=$.support.opacity?this.options.withopacity:false;if(this.options.fixWidth){var fixwidth=5;this.menu.children().each(function(){fixwidth+=$(this).width()});this.menu.css("width",fixwidth)}if(this.options.matchHeight){this.matchHeight()}this.menu.find(this.options.firstLevelSelector).each(function(index){var item=$(this),dropdown=item.find($this.options.dropdownSelector).css({overflow:"hidden"}),dpinit=false;if(dropdown.length){dropdown.css("overflow","hidden").show();dropdown.data("init-width",parseFloat(dropdown.css("width")));dropdown.data("columns",dropdown.find(".column").length);dropdown.data("single-width",dropdown.data("columns")>1?dropdown.data("init-width")/dropdown.data("columns"):dropdown.data("init-width"));var div=$("<div>").css({overflow:"hidden"}).append("<div></div>"),innerdiv=div.find("div:first");dropdown.children().appendTo(innerdiv);div.appendTo(dropdown);$this.dropdowns.push({dropdown:dropdown,div:div,innerdiv:innerdiv});dropdown.hide()}item.bind({mouseenter:function(event){remain=true;$this.menu.trigger("menu:enter",[item,index]);if(lastactive){if(lastactive.index==index)return;lastactive.item.removeClass($this.options.remainClass);lastactive.div.hide().parent().hide()}if(!dropdown.length){active=null;lastactive=null;return}dropdown.parent().find("div").css({width:"",height:"","min-width":"","min-height":""});dropdown.removeClass("flip").removeClass("stack");item.addClass($this.options.remainClass);div.stop().show();dropdown.show();if($this.options.centerDropdown){dropdown.css("margin-left",(parseFloat(dropdown.data("init-width"))/2-item.width()/2)*-1)}var dpwidth=dropdown.css("width",dropdown.data("init-width")).data("init-width");dpitem=$this.options.boundarySelector?$($this.options.boundarySelector,div):div,boundary={top:0,left:0,width:$this.options.boundary.width()};innerdiv.css({"min-width":dpwidth});try{$.extend(boundary,$this.options.boundary.offset())}catch(e){}if(dpitem.offset().left<boundary.left||dpitem.offset().left+dpwidth-boundary.left>boundary.width){dropdown.addClass("flip");if(dpitem.offset().left<boundary.left){dropdown.removeClass("flip").addClass("stack");dpwidth=dropdown.css("width",dropdown.data("single-width")).data("single-width");innerdiv.css({"min-width":dpwidth});if($this.options.centerDropdown){dropdown.css({"margin-left":""})}}}var dpheight=parseFloat(dropdown.height());switch($this.options.mode){case"showhide":var to={width:dpwidth,height:dpheight};div.css(to);break;case"diagonal":var from={width:0,height:0};var to={width:dpwidth,height:dpheight};if($this.options.withopacity){from.opacity=0;to.opacity=1}div.css(from).animate(to,$this.options.duration,$this.options.transition);break;case"height":var from={width:dpwidth,height:0};var to={height:dpheight};if($this.options.withopacity){from.opacity=0;to.opacity=1}div.css(from).animate(to,$this.options.duration,$this.options.transition);break;case"width":var from={width:0,height:dpheight};var to={width:dpwidth};if($this.options.withopacity){from.opacity=0;to.opacity=1}div.css(from).animate(to,$this.options.duration,$this.options.transition);break;case"slide":dropdown.css({width:dpwidth,height:dpheight});div.css({width:dpwidth,height:dpheight,"margin-top":dpheight*-1}).animate({"margin-top":0},$this.options.duration,$this.options.transition);break;default:var from={width:dpwidth,height:dpheight};var to={};if($this.options.withopacity){from.opacity=0;to.opacity=1}div.css(from).animate(to,$this.options.duration,$this.options.transition)}lastactive={item:item,div:div,index:index}},mouseleave:function(event){if(event["srcElement"]&&$(event.srcElement).hasClass("module")){return false}remain=false;if(!dropdown.length){$this.menu.trigger("menu:leave");return}window.setTimeout(function(){if(remain||div.css("display")=="none")return;$this.menu.trigger("menu:leave",[item,index]);var finalize=function(){item.removeClass($this.options.remainClass);lastactive=null;div.hide().parent().hide()};if(!$this.options.reverseAnimation){finalize();return}switch($this.options.mode){case"showhide":finalize();break;case"diagonal":var to={width:0,height:0};if($this.options.withopacity)to.opacity=0;div.stop().animate(to,$this.options.duration,$this.options.transition,function(){finalize()});break;case"height":var to={height:0};if($this.options.withopacity)to.opacity=0;div.stop().animate(to,$this.options.duration,$this.options.transition,function(){finalize()});break;case"width":var to={width:0};if($this.options.withopacity)to.opacity=0;div.stop().animate(to,$this.options.duration,$this.options.transition,function(){finalize()});break;case"slide":div.stop().animate({"margin-top":parseFloat(div.data("dpheight"))*-1},$this.options.duration,$this.options.transition,function(){finalize()});break;default:var to={};if($this.options.withopacity)to.opacity=0;div.stop().animate(to,$this.options.duration,$this.options.transition,function(){finalize()})}},$this.options.remainTime)}})});if(this.options.fancy){var fancyoptions=$.extend({mode:"move",transition:"easeOutExpo",duration:500,onEnter:null,onLeave:null},this.options.fancy);var fancy=this.menu.append('<div class="fancy bg1"><div class="fancy-1"><div class="fancy-2"><div class="fancy-3"></div></div></div></div>').find(".fancy:first").hide();var start=this.menu.find(".active:first");var fancycurrent=null;var fancyMove=function(to,show,index){if(show&&fancycurrent&&to.get(0)==fancycurrent.get(0))return;fancy.stop().show().css("visibility","visible");if(fancyoptions.mode=="move"){if(!start.length&&!show){fancy.hide()}else{fancy.animate({left:to.position().left+"px",width:to.width()+"px"},fancyoptions.duration,fancyoptions.transition)}}else{if(show){fancy.css({opacity:start?0:1,left:to.position().left+"px",width:to.width()+"px"}).animate({opacity:1},fancyoptions.duration)}else{fancy.animate({opacity:0},fancyoptions.duration)}}fancycurrent=show?to:null};this.menu.bind({"menu:enter":function(e,current,index){fancyMove(current,true);if(fancyoptions.onEnter){fancyoptions.onEnter(current,index,fancy)}},"menu:leave":function(e,current,index){fancyMove(start,false);if(fancyoptions.onLeave){fancyoptions.onLeave(current,index,fancy)}},"menu:fixfancy":function(e){if(!fancycurrent)return;fancy.stop().show().css({left:fancycurrent.position().left+"px",width:fancycurrent.width()+"px"})}});if(start.length&&fancyoptions.mode=="move")fancyMove(start,true)}},matchHeight:function(){this.menu.find("li.level1.parent").each(function(){var max=0;$(this).find("ul.level2").each(function(){var ul=$(this),dp=ul.parents(".dropdown:first").show();max=Math.max(ul.height(),max);dp.hide()}).css("min-height",max)})}});$.fn[Plugin.prototype.name]=function(){var args=arguments;var method=args[0]?args[0]:null;return this.each(function(){var element=$(this);if(Plugin.prototype[method]&&element.data(Plugin.prototype.name)&&method!="initialize"){element.data(Plugin.prototype.name)[method].apply(element.data(Plugin.prototype.name),Array.prototype.slice.call(args,1))}else if(!method||$.isPlainObject(method)){var plugin=new Plugin;if(Plugin.prototype["initialize"]){plugin.initialize.apply(plugin,$.merge([element],args))}element.data(Plugin.prototype.name,plugin)}else{$.error("Method "+method+" does not exist on jQuery."+Plugin.name)}})}})(jQuery);