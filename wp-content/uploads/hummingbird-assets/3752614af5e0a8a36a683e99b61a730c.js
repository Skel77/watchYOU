var js={};!function(a){a(document).on("click",".se-q",function(){var e=a(this).parents(".se-c"),s=e.find(".se-a"),e=e.find(".se-t");s.slideToggle(200),e.hasClass("se-o")?e.removeClass("se-o"):e.addClass("se-o")}),a(document).on("click","#top-page",function(){return a("html, body").animate({scrollTop:0},"slow"),!1}),a(document).on("click","#discoverclic",function(){a(this).addClass("hidde"),a("#closediscoverclic").removeClass("hidde"),a("#discover").addClass("show"),a("#requests").addClass("hidde"),a(".requests_menu").addClass("hidde"),a(".requests_menu_filter").removeClass("hidde")}),a(document).on("click","#closediscoverclic",function(){a(this).addClass("hidde"),a("#discoverclic").removeClass("hidde"),a("#discover").removeClass("show"),a("#requests").removeClass("hidde"),a(".requests_menu_filter").addClass("hidde"),a(".requests_menu").removeClass("hidde")}),a(document).on("click",".filtermenu a",function(){var e=a(this).attr("data-type");return a(".filtermenu a").removeClass("active"),a(this).addClass("active"),a("#type").val(e),!1}),a(document).on("click",".rmenu a",function(){var e=a(this).attr("data-tab");return a(".rmenu a").removeClass("active"),a(".tabox").removeClass("current"),a(this).addClass("active"),a("#"+e).addClass("current"),!1}),a(document).on("click",".clicklogin",function(){a(".login_box ").show()}),a(document).on("click","#c_loginbox",function(){a(".login_box ").hide()}),a(document).on("click",".nav-resp",function(){a("#arch-menu").toggleClass("sidblock"),a(".nav-resp").toggleClass("active")}),a(document).on("click",".nav-advc",function(){a("#advc-menu").toggleClass("advcblock"),a(".nav-advc").toggleClass("dactive")}),a(document).on("click",".report-video",function(){a("#report-video").toggleClass("report-video-active"),a(".report-video").toggleClass("report-video-dactive")}),a(document).on("click",".adduser",function(){a("#register_form").toggleClass("advcblock"),a(".form_fondo").toggleClass("advcblock"),a(".adduser").toggleClass("dellink")}),a(document).on("click",".search-resp",function(){a("#form-search-resp").toggleClass("formblock"),a(".search-resp").toggleClass("active")}),a(document).on("click",".wide",function(){a("#playex").toggleClass("fullplayer"),a(".sidebar").toggleClass("fullsidebar"),a(".icons-enlarge2").toggleClass("icons-shrink2")}),a(document).on("click",".sources",function(){a(".sourceslist").toggleClass("sourcesfix"),a(".listsormenu").toggleClass("icon-close2")}),a(document).keyup(function(e){27==e.keyCode&&(a(".login_box").hide(100),a("#result_edit_link").hide(100),a("#report-video").removeClass("report-video-active"))}),a.each(["#tvload","#movload","#featload","#epiload","#seaload","#slallload","#sltvload","#slmovload",".genreload"],function(e,s){1<=a(s).length&&(a(".content").ready(function(){a(s).css("display","none")}),a(".content").load(function(){a(s).css("display","none")}))});for(var e=0,s=a(".items .item"),o=0;o<=s.length;o++)3<e?(a(".items .item:nth-child("+o+") .dtinfo").addClass("right"),e<5?e++:(e--,e--,e--,e--)):(a(".items .item:nth-child("+o+") .dtinfo").addClass("left"),e++);a.fn.exists=function(){return 0<e(this).length},js.model={events:{},extend:function(e){var o=a.extend({},this,e);return a.each(o.events,function(e,s){o._add_event(e,s)}),o},_add_event:function(e,s){var o=this,t=e,i="",n=document;0<e.indexOf(" ")&&(t=e.substr(0,e.indexOf(" ")),i=e.substr(e.indexOf(" ")+1)),"resize"!=t&&"scroll"!=t||(n=window),a(n).on(t,i,function(e){e.$el=a(this),"function"==typeof o.event&&(e=o.event(e)),o[s].apply(o,[e])})}},js.header=js.model.extend({$header:null,$sub_header:null,active:0,hover:0,show:0,y:0,opacity:1,direction:"down",events:{ready:"ready",scroll:"scroll","mouseenter #header":"mouseenter","mouseleave #header":"mouseleave"},ready:function(){this.$header=a("#header"),this.$sub_header=a("#sub-header"),this.active=1},mouseenter:function(){var e=a(window).scrollTop();this.hover=1,this.opacity=1,this.show=e,this.$header.stop().animate({opacity:1},250)},mouseleave:function(){this.hover=0},scroll:function(){var e,s,o,t,o,o,o;this.active&&(o=(s=(e=a(window).scrollTop())>=this.y?"down":"up")!==this.direction,this.y,t=this.$sub_header.outerHeight(),clearTimeout(this.t),e<70&&this.$header.removeClass("-white"),o&&(0==this.opacity&&"up"==s?(this.show=e)<t?this.show=0:this.show-=70:1==this.opacity&&"down"==s&&(this.show=e),this.show=Math.max(0,this.show)),this.$header.hasClass("-open")&&(this.show=e),this.hover&&(this.show=e),o=e-this.show,o=Math.max(0,o),o=(70-(o=Math.min(o,70)))/70,this.$header.css("opacity",o),t<e?this.$header.addClass("-white"):0==o&&this.$header.removeClass("-white"),this.y=e,this.direction=s,this.opacity=o)}})}(jQuery);!function(o){var a,s=function(s,e){clearTimeout(a),a=setTimeout(s,e)},e=!1;function t(){var s=o("#term").val(),e=o("#page").val(),a=o("#type").val(),t=o("#nonce").val(),i=o("#action").val();o("#get_requests").find("span").addClass("icons-spinner9").addClass("loading"),o.ajax({url:dtAjax.url,type:"POST",data:{type:a,term:s,page:e,nonce:t,action:i},error:function(s){console.log(s)},success:function(s){o("#get_requests").find("span").removeClass("icons-spinner9").removeClass("loading"),o("#discover_results").html(s),o(".get_content_dbmovies").click(function(){var e,s,a,t=o(this).data("id"),i,n,s=o(this).data("type"),a=o(this).data("nonce");o("#tmdb-"+(e=t)).html('<div class="itm-exists">'+dtAjax.loading+"</div>"),o.ajax({url:dtAjax.url,type:"POST",data:{id:e,type:s,nonce:a,action:"dbmovies_post_requests"},error:function(s){console.log(s)},success:function(s){console.log(s),o("#tmdb-"+e).html('<div class="itm-exists">'+dtAjax.ready+"</div>")}})})}})}enterActive=!(a=0),o('input[name="s"]').on("input",function(){var n=this.value;s(function(){return n.length<=2?(o(dtGonza.area).hide(),void o(dtGonza.button).find("span").removeClass("icons-spinner9").removeClass("loading")):void(e||(e=!0,1==dtGonza.livesearchactive&&(o(dtGonza.button).find("span").addClass("icons-spinner9").addClass("loading"),o(dtGonza.area).find("ul").addClass("process").addClass("noselect"),o.ajax({type:"GET",url:dtGonza.api,data:"keyword="+n+"&nonce="+dtGonza.nonce,dataType:"json",success:function(s){var e,a,t,i;s.error?o(dtGonza.area).hide():(o(dtGonza.area).show(),t='<li class="ctsx"><a class="more live_search_click" data-search="searchform">'+(a=dtGonza.more.replace("%s",'<span class="icon-search-1">'+n+"</span>"))+"</a></li>",moreText2='<li class="ctsv"><a class="more live_search_click" data-search="form-search-resp">'+a+"</a></li>",i=[],o.each(s,function(s,e){name="",date="",imdb="",!1!==e.extra.date&&(date='<span class="release">('+e.extra.date+")</span>"),!1!==e.extra.imdb&&(imdb='<div class="imdb"><span class="icon-star"></span> '+e.extra.imdb+"</div>"),i.push('<li id="'+s+'"><a href="'+e.url+'" class="clearfix"><div class="poster"><img src="'+e.img+'" /></div><div class="title">'+e.title+date+"</div>"+imdb+"</a></li>")}),o(dtGonza.area).html("<ul>"+i.join("")+t+"</ul>"))},complete:function(){enterActive=e=!1,o(dtGonza.button).find("span").removeClass("icons-spinner9").removeClass("loading"),o(dtGonza.area).find("ul").removeClass("process").removeClass("noselect")}}))))},500)}),o(document).on("click",".live_search_click",function(){var s=o(this).data("search");0!=s&&o("#"+s).submit()}),o(document).on("keypress","#search-form",function(s){if(enterActive)return 13!=s.keyCode}),o(document).click(function(){o(event.target),0==o(event.target).closest('input[name="s"]').length?o(dtGonza.area).hide():o(dtGonza.area).show(),0==o(event.target).closest(".lglossary").length?(o(".items_glossary").hide(),o(".lglossary").removeClass("active")):o(".items_glossary").show()}),o(document).on("click",".post-request",function(){o(".post_request").show(),o("#post_request_archive").html('<div class="load_event">'+dtAjax.loading+"</div>");var s=o(this).data("id");o.ajax({url:dtAjax.url,type:"POST",data:{id:s,action:"dbmovies_post_archive"},error:function(s){console.log(s)},success:function(s){o("#post_request_archive").html(s),o(".backdrop").click(function(){o(".post_request").hide()})}})}),o("#discover_requests").keyup(function(){return s(function(){t()},500),!1}),o("#discover_requests").submit(function(){return t(),!1}),o(document).on("click",".lglossary",function(){var s=o(this).data("glossary"),e=o(this).data("type");o(".lglossary").removeClass("active"),o(this).addClass("active"),o(".items_glossary").show(),o(".items_glossary").html('<div class="load"><i class="icons-spinner9 loading"></i></div>'),o.ajax({type:"GET",url:dtGonza.glossary,data:"term="+s+"&nonce="+dtGonza.nonce+"&type="+e,dataType:"json",success:function(s){if(s.error)return o(".items_glossary").hide(),void o(".lglossary").removeClass("active");o(".items_glossary").show();var a=[];o.each(s,function(s,e){imdb="",!1!==e.imdb&&(imdb='<div class="rating"><i class="icon-star"></i> '+e.imdb+"</div>"),a.push('<div id="'+s+'" class="item"><a href="'+e.url+'"><div class="poster"><img src="'+e.img+'"/>'+imdb+'</div></a><div class="data"><h3>'+e.title+"</h3><span>"+e.year+"</span></div></div>")}),o(".items_glossary").html('<div class="items animation-2">'+a.join("")+"</div>")}})}),o(document).keyup(function(s){27==s.keyCode&&(o(".post_request").hide(),o(".items_glossary").hide(),o(".items_glossary").html(" "),o(".lglossary").removeClass("active")),39==s.keyCode&&o("#nextpagination").trigger("click"),37==s.keyCode&&o("#prevpagination").trigger("click")})}(jQuery);