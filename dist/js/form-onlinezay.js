$(document).ready(function(){$("#error").hide(),$("#success2").hide();var s=$(".choose_zay"),y=($(".choose_zay").click(function(){var t;some_choos_ind=s.index(this),s.each(function(t){t!=some_choos_ind&&s.eq(t).stop().animate({height:40},300)}),$(this).height()<50&&($(this).css({height:"auto"}),t=$(this).height()-41,$(this).css({height:"40px"}),$(this).stop().animate({height:t},300))}),$(".choose_zay > p").click(function(){50<$(this).closest(".choose_zay").height()&&$(this).closest(".choose_zay").stop().animate({height:40},300)}),$("#gruz").focusout(function(){$("#gruzperevoz").val($("#gruz").val()),$("#gruzsert").val($("#gruz").val())}),$("#gruzperevoz").focusout(function(){$("#gruz").val($("#gruzperevoz").val()),$("#gruzsert").val($("#gruzperevoz").val())}),$("#gruzsert").focusout(function(){$("#gruz").val($("#gruzsert").val()),$("#gruzperevoz").val($("#gruzsert").val())}),$("#stoimostgruzastrah").keyup(function(){var t=$("#stoimostgruzastrah").val();$("#stoimostgruzastrahpred").val(Math.round(.0035*t*100)/100)}),!1);return $("#email").keyup(function(){/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i.test($(this).val())?(y=!0,$(this).css("background","#FFF","important")):(y=!1,$(this).css("background","#FF7676","important"))}),$("#email").focusout(function(){/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i.test($(this).val())?(y=!0,$(this).css("background","#FFF","important")):(y=!1,$(this).css("background","#FF7676","important"))}),$("#send").click(function(){if(1==y){$("#error").hide();var t=$("input#name").val(),s=(""==t&&$("input#name").focus(),$("input#nameface").val()),a=(""==s&&$("input#nameface").focus(),$("input#tel").val()),u=(""==a&&$("input#tel").focus(),$("input#email").val());if(""==u)return $("#error").fadeIn().text("Пустое поле: Email"),$("input#email").focus(),!1;var i=$("input#gruz").val(),e=(""==i&&$("input#gruz").focus(),$("input#kg").val()),o=(""==e&&$("input#kg").focus(),$("input#metr").val()),r=(""==o&&$("input#metr").focus(),$("input#city").val()),n=(""==r&&$("input#city").focus(),$("input#city2").val()),c=(""==n&&$("input#city2").focus(),$("input#transport").val()),p=(""==c&&$("input#transport").focus(),$("input#gruzperevoz").val()),m=(""==p&&$("input#gruzperevoz").focus(),$("input#mesto").val()),h=(""==m&&$("input#mesto").focus(),$("input#gruzsert").val()),l=(""==h&&$("input#gruzsert").focus(),$("input#vid").val()),v=(""==l&&$("input#vid").focus(),$("input#sert").val()),z=(""==v&&$("input#sert").focus(),$("input#stoimostgruzastrah").val()),g=(""==z&&$("input#stoimostgruzastrah").focus(),$("input#stoimostgruzastrahpred").val());""==g&&$("input#stoimostgruzastrahpred").focus();""==$("#messZamechaniy").val()&&$("input#messZamechaniy").focus();var f=$("#mess").val(),d=(""==f&&$("input#mess").focus(),$("#messmessZamechaniy").val()),t=(""==d&&$("input#messmessZamechaniy").focus(),"name="+t+"&nameface="+s+"&tel="+a+"&email="+u+"&gruz="+i+"&kg="+e+"&metr="+o+"&city="+r+"&city2="+n+"&transport="+c+"&gruzperevoz="+p+"&mesto="+m+"&gruzsert="+h+"&vid="+l+"&sert="+v+"&stoimostgruzastrah="+z+"&stoimostgruzastrahpred="+g+"&messmessZamechaniy="+d+"&mess="+f);$.ajax({type:"POST",url:"send-mail_a.php",data:t,success:($("#success2").fadeIn(),void $("#formMail").fadeOut())})}else $("#email").focus(),$("#email").css("background","#FF7676","important")}),!1});