
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"490",
  
  "macros":[{
      "function":"__u",
      "vtp_stripWww":true,
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=void 0,a=",["escape",["macro",0],8,16],";\"www.\"==a.substring(0,4)\u0026\u0026(a=a.substring(4,a.length));a=a.split(\".\");for(var b=1;b\u003C=a.length;b++)if(document.cookie=\"gtm_tld_testcookie\\x3d1; path\\x3d\/; domain\\x3d\"+a.slice(-1*b).join(\".\"),-1!=document.cookie.indexOf(\"gtm_tld_testcookie\")){c=a.slice(-1*b).join(\".\");document.cookie=\"gtm_tld_testcookie\\x3d1; expires\\x3dThu, 01 Jan 1970 00:00:01 GMT; path\\x3d\/; domain\\x3d\"+a.slice(-1*b).join(\".\");break}return c})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var cookie=",["escape",["macro",2],8,16],";if(cookieGA){var myRegExPattern=new RegExp(\/^GA[1-2]\\.[0-9]+\\.([0-9]+.[0-9]+)$\/);if(myRegExPattern.test(cookieGA)===true)return myRegExPattern.exec(cookieGA)[1]}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!0})();"]
    },{
      "function":"__u",
      "convert_case_to":1,
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";return a=a.split(\"\/\")[1]})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "convert_case_to":1,
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var pagePath=",["escape",["macro",5],8,16],";var pageQuery=",["escape",["macro",7],8,16],";var pageHashFragment=",["escape",["macro",8],8,16],";pageHashFragment=pageHashFragment?pageHashFragment.replace(\"?\",\"\\x26\"):undefined;if(pageQuery\u0026\u0026pageHashFragment)return\"?\"+pageQuery+\"\\x26\"+pageHashFragment;else if(pageQuery)return\"?\"+pageQuery;else if(pageHashFragment)return\"?\"+pageHashFragment;else return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!1})();"]
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var gtmEvent=",["escape",["macro",11],8,16],";for(var e=document.getElementsByTagName(\"iframe\"),x=e.length;x--;)if(\/youtube(-nocookie)?\\.com\\\/embed\/.test(e[x].src))return true;return false})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"pageVirtual"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var f=",["escape",["macro",13],8,16],",c=",["escape",["macro",11],8,16],",d=",["escape",["macro",14],8,16],",g=",["escape",["macro",15],8,16],",a=",["escape",["macro",5],8,16],",b=",["escape",["macro",7],8,16],",e=",["escape",["macro",8],8,16],";return f?\"\/virtual\"+f:\"gtm.historyChange\"===c\u0026\u0026\"pushState\"===g\u0026\u0026b?\"\/virtual\"+a+\"?\"+b:\"gtm.historyChange\"===c\u0026\u0026\"pushState\"===g?\"\/virtual\"+a:\"gtm.historyChange\"===c\u0026\u0026b\u0026\u0026d?\"\/virtual\"+a+\"?\"+b+\"#\"+d:\"gtm.historyChange\"===c\u0026\u0026d?\"\/virtual\"+a+\"#\"+d:b\u0026\u0026e?a+\"?\"+b+\"#\"+e:e?a+\"#\"+e:b?a+\"?\"+b:a})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",17],8,16],";if(a){var b=new RegExp(\/^GA[1-2]\\.[0-9]+\\.([0-9]+.[0-9]+)$\/);return b.exec(a)[1]}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"entityTaxonomy.author"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],",b;for(b in a)if(a.hasOwnProperty(b))return a[b]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!1;if(\/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino\/i.test(navigator.userAgent)||\/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-\/i.test(navigator.userAgent.substr(0,\n4)))a=!0;return a})();"]
    },{
      "function":"__e"
    },{
      "function":"__cid"
    },{
      "function":"__dbg"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"pageEnvironment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"visitorType"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",26],
      "vtp_defaultValue":["macro",10],
      "vtp_map":["list",["map","key","administrator","value",["macro",4]],["map","key","editorial","value",["macro",4]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",25],
      "vtp_defaultValue":["macro",27],
      "vtp_map":["list",["map","key","development","value",["macro",4]],["map","key","staging","value",["macro",4]],["map","key","beta","value",["macro",4]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",24],
      "vtp_defaultValue":["macro",28],
      "vtp_map":["list",["map","key","true","value",["macro",4]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_defaultValue":["macro",29],
      "vtp_map":["list",["map","key","212.53.86.164","value",["macro",4]],["map","key","localhost","value",["macro",4]],["map","key","local","value",["macro",4]],["map","key","testalfresco.local","value",["macro",4]],["map","key","alfresco.dev","value",["macro",4]],["map","key","alfresco.drupal","value",["macro",4]],["map","key","activitidev.alfresco.com","value",["macro",4]],["map","key","test-alfresco-devcon.pantheonsite.io","value",["macro",4]],["map","key","dev-alfresco-devcon.pantheonsite.io","value",["macro",4]],["map","key","live-alfresco-devcon.pantheonsite.io","value",["macro",4]],["map","key","alfresco-ext.jiveon.com","value",["macro",4]],["map","key","alfresco-devcon.lndo.site","value",["macro",4]],["map","key","alfresco-dev-alt.dyndns.org","value",["macro",4]],["map","key","ts.alfresco.com","value",["macro",4]],["map","key","tstest.alfresco.com","value",["macro",4]],["map","key","test.alfresco.com","value",["macro",4]],["map","key","wwwtest.alfresco.com","value",["macro",4]]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":["macro",30],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(^|.+\\.)((.*test.*\\.|.*dev\\.|ts\\.)alfresco\\.com|lndo\\.site|pantheonsite\\.io|alfresco\\.drupal|alfresco\\.dev|alfresco\\.local|localhost|local|([0-9]{1,3}\\.){3}[0-9]{1,3})(:[0-9]+)?$","value",["macro",4]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",23],
      "vtp_defaultValue":["macro",31],
      "vtp_map":["list",["map","key","GTM-MZHX96P","value",["macro",4]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",32],
      "vtp_defaultValue":"474629",
      "vtp_map":["list",["map","key","true","value","999999999"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",32],
      "vtp_defaultValue":"4807551",
      "vtp_map":["list",["map","key","true","value","999999999"]]
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",32],
      "vtp_defaultValue":"42472",
      "vtp_map":["list",["map","key","true","value","99999"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_defaultValue":"UA-1936916-21",
      "vtp_map":["list",["map","key","de","value","UA-1936916-17"],["map","key","es","value","UA-1936916-18"],["map","key","fr","value","UA-1936916-19"],["map","key","it","value","UA-1936916-20"],["map","key","jp","value","UA-1936916-31"],["map","key","en","value","UA-1936916-21"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",32],
      "vtp_defaultValue":["macro",38],
      "vtp_map":["list",["map","key","true","value","UA-1936916-97"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","alfresco.com","value",["macro",39]],["map","key","www.alfresco.com","value",["macro",39]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",40],8,16],",b=\/^UA\\-[0-9]+\\-([0-9]{1,2})$\/;if(!0===b.test(a))return\"languageFolder_\"+b.exec(a)[1]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"platform_from_breadcrumb"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"entityBundle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"entityType"
    },{
      "function":"__uv"
    },{
      "function":"__v",
      "convert_null_to":["macro",45],
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"entityTaxonomy.source"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",46],8,16],",d=0,a,c;if(b){for(d in b)b.hasOwnProperty(d)\u0026\u0026((c=b[d])\u0026\u0026a?a=a+\", \"+c:c\u0026\u0026(a=c));return a}})();"]
    },{
      "function":"__ctv"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",32],
      "vtp_defaultValue":["macro",4],
      "vtp_map":["list",["map","key","true","value",["macro",10]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",32],
      "vtp_defaultValue":"10",
      "vtp_map":["list",["map","key","true","value","0"]]
    },{
      "function":"__v",
      "convert_null_to":["macro",45],
      "convert_true_to":["macro",45],
      "convert_false_to":["macro",45],
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userUid"
    },{
      "function":"__u",
      "convert_case_to":1,
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_customUrlSource":["macro",9],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "convert_case_to":1,
      "vtp_stripWww":true,
      "vtp_component":"HOST"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",53],8,16],",b=",["escape",["macro",52],8,16],";if(a\u0026\u0026!b){if(\"go.alfresco.com\"===a||\"suite24.emarsys.net\"===a)return\"email\"}else return b})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",52],
      "vtp_defaultValue":["macro",52],
      "vtp_map":["list",["map","key","undefined","value",["macro",54]]]
    },{
      "function":"__u",
      "convert_case_to":1,
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_customUrlSource":["macro",9],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",53],8,16],",b=",["escape",["macro",56],8,16],";if(a\u0026\u0026!b){if(\"go.alfresco.com\"===a||\"suite24.emarsys.net\"===a)return\"newsletter\"}else return b})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",56],
      "vtp_defaultValue":["macro",56],
      "vtp_map":["list",["map","key","undefined","value",["macro",57]]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_customUrlSource":["macro",9],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_content",
      "vtp_customUrlSource":["macro",9],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "convert_case_to":1,
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_term",
      "vtp_customUrlSource":["macro",9],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"gclid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"dclid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","wiki.alfresco.com","value","UA-1936916-06"],["map","key","support.alfresco.com","value","UA-1936916-12"],["map","key","myalfresco.force.com","value","UA-1936916-12"],["map","key","forums.alfresco.com","value","UA-1936916-16"],["map","key","university.alfresco.com","value","UA-1936916-27"],["map","key","activiti.org","value","UA-1936916-30"],["map","key","partners.alfresco.com","value","UA-1936916-33"],["map","key","docs.alfresco.com","value","UA-1936916-34"],["map","key","my.alfresco.com","value","UA-1936916-37"],["map","key","addons.alfresco.com","value","UA-1936916-38"],["map","key","devcon.alfresco.com","value","UA-1936916-40"],["map","key","activitidev.alfresco.com","value","UA-1936916-43"],["map","key","activiti.alfresco.com","value","UA-1936916-44"],["map","key","forums.activiti.org","value","UA-1936916-45"],["map","key","pages.alfresco.com","value","UA-1936916-46"],["map","key","intranet.alfresco.com","value","UA-1936916-47"],["map","key","apps.alfresco.com","value","UA-1936916-48"],["map","key","hub.alfresco.com","value","UA-1936916-51"],["map","key","app-community.alfresco.com","value","UA-1936916-51"],["map","key","alfresco-ext.jiveon.com","value","UA-1936916-51"],["map","key","devproducts.alfresco.com","value","UA-1936916-52"],["map","key","api-explorer.alfresco.com","value","UA-1936916-53"],["map","key","trial.alfresco.com","value","UA-1936916-54"],["map","key","XXX_begin_www_all_languages_XXX","value",["macro",45]],["map","key","alfresco.com","value","UA-1936916-1"],["map","key","www.alfresco.com","value","UA-1936916-1"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_defaultValue":["macro",64],
      "vtp_map":["list",["map","key","activiti","value","UA-1936916-50"],["map","key","blogs","value","UA-1936916-08"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_defaultValue":["macro",64],
      "vtp_map":["list",["map","key","alfresco.com","value",["macro",65]],["map","key","www.alfresco.com","value",["macro",65]],["map","key","docs.alfresco.com","value",["macro",65]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",32],
      "vtp_defaultValue":["macro",66],
      "vtp_map":["list",["map","key","true","value","UA-1936916-47"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",67],8,16],",b=\/^UA\\-[0-9]+\\-([0-9]{1,2})$\/;if(!0===b.test(a))return\"subDomain_\"+b.exec(a)[1]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audience"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"company_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"industry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sub_industry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"revenue_range"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"demandbase_sid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audience_segment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"marketing_alias"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"employee_range"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"state"
    },{
      "function":"__v",
      "convert_case_to":2,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"country"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"watch_list_account_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"watch_list_account_status"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"watch_list_campagin_code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"watch_list_account_owner"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"web_site"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_functionName":"ga",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",42]],["map","index","2","group",["macro",43]],["map","index","3","group",["macro",44]],["map","index","4","group",["macro",47]],["map","index","5","group",["template",["macro",23],": ",["macro",48]]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value",["macro",4]],["map","fieldName","page","value",["macro",16]],["map","fieldName","anonymizeIp","value",["macro",49]],["map","fieldName","siteSpeedSampleRate","value",["macro",50]],["map","fieldName","userId","value",["macro",51]],["map","fieldName","useAmpClientId","value",["macro",4]],["map","fieldName","campaignMedium","value",["macro",55]],["map","fieldName","campaignSource","value",["macro",58]],["map","fieldName","campaignName","value",["macro",59]],["map","fieldName","campaignContent","value",["macro",60]],["map","fieldName","campaignKeyword","value",["macro",61]],["map","fieldName","campaignId","value",["macro",45]],["map","fieldName","gclid","value",["macro",62]],["map","fieldName","dclid","value",["macro",63]]],
      "vtp_trackerName":["macro",68],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",69]],["map","index","2","dimension",["macro",70]],["map","index","3","dimension",["macro",71]],["map","index","4","dimension",["macro",72]],["map","index","5","dimension",["macro",73]],["map","index","6","dimension",["macro",45]],["map","index","7","dimension",["macro",74]],["map","index","8","dimension",["macro",75]],["map","index","9","dimension",["macro",76]],["map","index","10","dimension",["macro",77]],["map","index","11","dimension",["macro",45]],["map","index","12","dimension",["macro",78]],["map","index","13","dimension",["macro",45]],["map","index","14","dimension",["macro",79]],["map","index","15","dimension",["macro",80]],["map","index","16","dimension",["macro",81]],["map","index","17","dimension",["macro",82]],["map","index","18","dimension",["macro",83]],["map","index","19","dimension",["macro",3]],["map","index","20","dimension",["macro",84]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",11],
      "vtp_map":["list",["map","key","CommunityDownloadForm","value","Global Community Download Form"],["map","key","ContactSalesForm","value","Global Sales Enquiry"],["map","key","WhitepaperForm","value","Global Content Asset Form"],["map","key","EventsForm","value","Global Events Form"],["map","key","MiscForm","value","Global Misc Form"],["map","key","PricingForm","value","Global Pricing Form"],["map","key","TrialForm","value","Global Trial Form"],["map","key","WebinarForm","value","Global Webinar Form"],["map","key","ActivitiGettingStartedForm","value","Global Trial Form"],["map","key","contactForm","value","Global Sales Enquiry"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",32],
      "vtp_defaultValue":"UA-1936916-22",
      "vtp_map":["list",["map","key","true","value","UA-1936916-49"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",91],8,16],",b=\/^UA\\-[0-9]+\\-([0-9]{1,2})$\/;if(!0===b.test(a))return\"rollup_\"+b.exec(a)[1]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"PDF Action"
    },{
      "function":"__j",
      "vtp_name":"location.href"
    },{
      "function":"__aev",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_stripWww":true,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__aev",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"EXTENSION"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"IS_OUTBOUND"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__f",
      "convert_case_to":1,
      "vtp_stripWww":true,
      "vtp_component":"HOST"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",108],
      "vtp_defaultValue":["macro",4],
      "vtp_map":["list",["map","key","0","value",["macro",4]],["map","key","25","value",["macro",4]],["map","key","50","value",["macro",4]],["map","key","75","value",["macro",10]],["map","key","90","value",["macro",10]],["map","key","100","value",["macro",10]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",108],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","0","value","01 article loaded"],["map","key","25","value","02 start reading"],["map","key","50","value","03 content reading"],["map","key","75","value","04 content bottom"],["map","key","90","value","05 page bottom"],["map","key","100","value","05 page bottom"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",111],
      "vtp_defaultValue":["macro",111],
      "vtp_map":["list",["map","key","progress","value",["template","progress: ",["macro",112],"%"]]]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":["macro",96],
      "vtp_name":"socialAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",94],
      "vtp_name":"opt_target"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":["macro",101],
      "vtp_name":"network"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"activiti.org, alfresco.com",
      "vtp_map":["list",["map","key","alfresco.com","value","activiti.org"],["map","key","activiti.org","value","alfresco.com"],["map","key","pantheonsite.io","value","activiti.org, alfresco.com"],["map","key","jiveon.com","value","activiti.org, alfresco.com"],["map","key","lndo.site","value","activiti.org, alfresco.com"],["map","key","dyndns.org","value","activiti.org, alfresco.com"],["map","key","localhost","value","activiti.org, alfresco.com"],["map","key","212.53.86.164","value","activiti.org, alfresco.com"],["map","key","alfresco.dev","value","activiti.org, alfresco.com"]]
    },{
      "function":"__u",
      "convert_case_to":1,
      "vtp_stripWww":true,
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "convert_null_to":"false",
      "convert_undefined_to":"false",
      "vtp_decodeCookie":false,
      "vtp_name":"Alfresco_Community_Download_en"
    },{
      "function":"__k",
      "convert_null_to":["macro",45],
      "vtp_decodeCookie":false,
      "vtp_name":"trialPassword"
    },{
      "function":"__k",
      "convert_null_to":["macro",45],
      "vtp_decodeCookie":false,
      "vtp_name":"trialUsername"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",32],
      "vtp_defaultValue":"453-LIZ-762",
      "vtp_map":["list",["map","key","true","value","123-XYZ-123"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",32],
      "vtp_defaultValue":"845r5wctyg8n",
      "vtp_map":["list",["map","key","true","value","845r5wctyg8n"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"a9564268c40199206e2ffd8e02f140652116dca5",
      "vtp_map":["list",["map","key","(^|.+\\.)((app-)?community\\.alfresco\\.com|alfresco-ext\\.jiveon\\.com)$","value","04935808bcaaa9edd896b60e998ac437db6c968c"],["map","key","^(www\\.)?alfresco\\.com$","value","a9564268c40199206e2ffd8e02f140652116dca5"],["map","key","^wwwtest\\.alfresco\\.com$","value","92e9aaa7e86c54d02333572f596e72d172fd8fb7"]]
    },{
      "function":"__u",
      "convert_case_to":1,
      "vtp_component":"QUERY",
      "vtp_queryKey":"salesplay",
      "vtp_customUrlSource":["macro",9],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"utm_campaign"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"salesplay"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"182.5",
      "vtp_name":"cookieExpires"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",32],
      "vtp_defaultValue":"3871",
      "vtp_map":["list",["map","key","true","value","9999"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"isDemandBaseAlreadySet"
    },{
      "function":"__k",
      "convert_case_to":2,
      "vtp_decodeCookie":false,
      "vtp_name":"_ccrp"
    },{
      "function":"__aev",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"EXTENSION"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"utm_content"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"utm_medium"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"utm_source"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"utm_term"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"referrer",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"QUERY"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(Non-Company Visitor)",
      "vtp_name":"demandbase_sid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"watch_list_sfdc_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cookieReferrer"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_defaultValue":"UA-1936916-7",
      "vtp_map":["list",["map","key","fr","value","UA-1936916-2"],["map","key","es","value","UA-1936916-3"],["map","key","de","value","UA-1936916-4"],["map","key","en","value","UA-1936916-7"],["map","key","it","value","UA-1936916-9"],["map","key","jp","value","UA-1936916-11"],["map","key","pl","value","UA-1936916-14"],["map","key","pt","value","UA-1936916-15"],["map","key","us","value",["macro",45]],["map","key","ja","value",["macro",45]],["map","key","ca","value",["macro",45]],["map","key","ch","value",["macro",45]],["map","key","in","value",["macro",45]],["map","key","mx","value",["macro",45]],["map","key","nl","value",["macro",45]],["map","key","br","value","UA-1936916-23"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",32],
      "vtp_defaultValue":"b2be1939-5bd9-4ac4-83f1-6455cc3a7cd8",
      "vtp_map":["list",["map","key","true","value","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"FirstSession"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","hub.alfresco.com","value",["macro",143]]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"gtm_dclid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"gtm_gclid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"gtm_referralHostname"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_defaultValue":["macro",146],
      "vtp_map":["list",["map","key","true","value","UA-1936916-99"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",150],8,16],",b=\/^UA\\-[0-9]+\\-([0-9]{1,2})$\/;if(!0===b.test(a))return\"forum_\"+b.exec(a)[1]})();"]
    },{
      "function":"__j",
      "vtp_name":"navigator.doNotTrack"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",152],
      "vtp_defaultValue":"true",
      "vtp_map":["list",["map","key","1","value","false"],["map","key","0","value","true"],["map","key","true","value","false"],["map","key","false","value","true"],["map","key","null","value","true"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "convert_null_to":["macro",45],
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"entityCreated"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",156],8,16],";a\u0026\u0026(a=(new Date(1E3*a)).toGMTString());var c=",["escape",["macro",5],8,16],",b=new RegExp(\/^\\\/(blog|news)\\\/.+$\/);if(b.test(c)\u0026\u0026a)return b=new Date(a),a=\"\"+(b.getMonth()+1),c=\"\"+b.getDate(),b=b.getFullYear(),2\u003Ea.length\u0026\u0026(a=\"0\"+a),2\u003Ec.length\u0026\u0026(c=\"0\"+c),[b,a,c].join(\"-\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"entityLabel"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"eventAction",
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":["macro",11],
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":["macro",10],
      "vtp_name":"eventNonInteractive"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"0",
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"drupalLanguage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"entityAuthor"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"entityPostDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"entityPostDateDay"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"entityPostDateMonth"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"entityPostDateYear"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"entityUid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"city"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"watch_list_Enterprise_Top_500"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"zip"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":1,
      "metadata":["map"],
      "setup_tags":["list",["tag",70,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_trackerName":["macro",92],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",118],
      "vtp_gaSettings":["macro",85],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1296
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":["macro",33],
      "tag_id":1029
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"alfre0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"unive0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":["macro",34],
      "vtp_ordinalStandard":["macro",35],
      "vtp_url":["macro",36],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":1118
    },{
      "function":"__bzi",
      "once_per_load":true,
      "vtp_id":["macro",37],
      "tag_id":1128
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1131
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_trackerName":["macro",41],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",85],
      "vtp_trackingId":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1155
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":1156
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Form Submission",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",86],
      "vtp_eventLabel":["macro",5],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1158
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Homepage CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1161
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Notification CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1162
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Keyplay form CTA",
      "vtp_eventLabel":["macro",5],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1169
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Form Submission",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",86],
      "vtp_eventLabel":["macro",5],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1198
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Form Submission",
      "vtp_trackerName":["macro",68],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",86],
      "vtp_eventLabel":["macro",5],
      "vtp_trackingId":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1209
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Jive Space",
      "vtp_trackerName":["macro",68],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",42],
      "vtp_eventLabel":["macro",5],
      "vtp_trackingId":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1210
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"PDF",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",93],
      "vtp_eventLabel":["macro",94],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1225
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Community Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",0],
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1226
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Careers CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1227
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Cludo Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Category CTA",
      "vtp_eventLabel":["macro",96],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1228
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Floating Button CTA",
      "vtp_eventLabel":["macro",94],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1229
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Floating Corner Notification - Ad CTA",
      "vtp_eventLabel":["macro",94],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1230
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Floating Corner Notification - Button CTA",
      "vtp_eventLabel":["macro",94],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1231
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Game",
      "vtp_eventLabel":["macro",96],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1232
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Keyplay CTA",
      "vtp_eventLabel":["macro",5],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1233
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"LP Button CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1234
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"LP Link CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1235
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Learn Page CTA Buttons",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1236
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Learn Page CTA Click",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1237
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Trial Page CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1238
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"7 Habit Back To Top CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1239
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"7 Habit Explore More Links",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1240
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"7 Habit Inline Link CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1241
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"7 Habit Main Page Button CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1242
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"7 Habit Navigation CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1243
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"7 Habit Sidebar CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1244
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"7 Habit Social CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1245
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Facet CTA",
      "vtp_eventLabel":["macro",96],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1246
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Facet CTA",
      "vtp_eventLabel":["macro",96],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1247
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Top Navigation CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1248
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Primary Page CTA Click",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1249
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Recommended Content CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1250
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Community Download",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",0],
      "vtp_eventLabel":["macro",88],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1261
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackerName":["macro",68],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Top Navigation CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_trackingId":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1264
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackerName":["macro",68],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Top Navigation CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_trackingId":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1265
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"error js",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",98],
      "vtp_eventLabel":["template",["macro",94],": Line ",["macro",99]],
      "vtp_trackingId":"UA-1936916-49",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1266
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Activiti Community Download",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"activiti.org",
      "vtp_eventLabel":["macro",88],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1268
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Interesting Page Views",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Form Conversion",
      "vtp_eventLabel":["macro",5],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1271
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"tap to call",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",96],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1272
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Demandbase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"API Resolution",
      "vtp_eventLabel":"IP API",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1273
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"mailto",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",96],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1275
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"map",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",88],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1276
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"outbound - app download",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",101],
      "vtp_eventLabel":["macro",88],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1277
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":["template","download - ",["macro",102]],
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",96],
      "vtp_eventLabel":["macro",95],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1278
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"outbound",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",101],
      "vtp_eventLabel":["macro",88],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1279
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"outbound - social",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",101],
      "vtp_eventLabel":["macro",88],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1280
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"video",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",101],
      "vtp_eventLabel":["macro",88],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1281
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"error 404",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",94],
      "vtp_eventLabel":["macro",105],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1282
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"form submit",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["template","Class: ",["macro",106]],
      "vtp_eventLabel":["template","ID: ",["macro",100]],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1283
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"heartbeat",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"heartbeat - landing page",
      "vtp_eventLabel":["macro",5],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1284
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Demandbase",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"API Resolution",
      "vtp_eventLabel":"IP API",
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1285
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",109],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"reading",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",110],
      "vtp_eventLabel":["macro",5],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1286
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"tap to call",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",96],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1287
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"youtube",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",113],
      "vtp_eventLabel":["macro",114],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1288
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Activiti Community Download",
      "vtp_trackerName":["macro",68],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"activiti.org",
      "vtp_eventLabel":["macro",88],
      "vtp_trackingId":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1289
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Form Submission",
      "vtp_trackerName":["macro",68],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",86],
      "vtp_eventLabel":["macro",5],
      "vtp_trackingId":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1290
    },{
      "function":"__gclidw",
      "once_per_load":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":1293
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",115],
      "vtp_gaSettings":["macro",85],
      "vtp_socialActionTarget":["macro",116],
      "vtp_socialNetwork":["macro",117],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":1294
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":1295
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",70,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_trackerName":["macro",68],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",85],
      "vtp_trackingId":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1297
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"navigation - ajax",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["template","Click: ",["macro",15]],
      "vtp_eventLabel":["template",["macro",5],"#",["macro",14]],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1298
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"CTA Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Page Button CTA",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1300
    },{
      "function":"__opt",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-T74KWSH",
      "vtp_gaSettings":["macro",85],
      "tag_id":1303
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Community Download Disabled Links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",0],
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1305
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Community Download Disabled Links",
      "vtp_trackerName":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",0],
      "vtp_eventLabel":["macro",88],
      "vtp_trackingId":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1306
    },{
      "function":"__cl",
      "tag_id":1307
    },{
      "function":"__cl",
      "tag_id":1308
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1068",
      "tag_id":1309
    },{
      "function":"__jel",
      "tag_id":1310
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1130",
      "tag_id":1311
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1131",
      "tag_id":1312
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1132",
      "tag_id":1313
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1133",
      "tag_id":1314
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1134",
      "tag_id":1315
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1135",
      "tag_id":1316
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1136",
      "tag_id":1317
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1137",
      "tag_id":1318
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1138",
      "tag_id":1319
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1139",
      "tag_id":1320
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1140",
      "tag_id":1321
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1141",
      "tag_id":1322
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1142",
      "tag_id":1323
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1143",
      "tag_id":1324
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1144",
      "tag_id":1325
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1145",
      "tag_id":1326
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1146",
      "tag_id":1327
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1147",
      "tag_id":1328
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1148",
      "tag_id":1329
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1149",
      "tag_id":1330
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1150",
      "tag_id":1331
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1151",
      "tag_id":1332
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1152",
      "tag_id":1333
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1153",
      "tag_id":1334
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1154",
      "tag_id":1335
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1155",
      "tag_id":1336
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1156",
      "tag_id":1337
    },{
      "function":"__fsl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1171",
      "tag_id":1338
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1175",
      "tag_id":1339
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1176",
      "tag_id":1340
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1177",
      "tag_id":1341
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1178",
      "tag_id":1342
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1179",
      "tag_id":1343
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1180",
      "tag_id":1344
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1181",
      "tag_id":1345
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1182",
      "tag_id":1346
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"0,25,50,75,90,100",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"1322523_1183",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1347
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer.30sec",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"1322523_1184",
      "tag_id":1348
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"10, 25, 50, 75, 90",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"1322523_1185",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1349
    },{
      "function":"__hl",
      "tag_id":1350
    },{
      "function":"__hl",
      "tag_id":1351
    },{
      "function":"__hl",
      "tag_id":1352
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".node-type-landing-page",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"1322523_1192",
      "tag_id":1353
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1199",
      "tag_id":1354
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1322523_1221",
      "tag_id":1355
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar trialPassword=",["escape",["macro",121],8,16],";trialPassword=\"undefined\"===trialPassword?void 0:trialPassword;trialPassword=\"null\"===trialPassword?void 0:trialPassword;var trialUsername=",["escape",["macro",122],8,16],";trialUsername=\"undefined\"===trialUsername?void 0:trialUsername;trialUsername=\"null\"===trialUsername?void 0:trialUsername;\nif(trialPassword)if(-1!=document.cookie.indexOf(\"alfLogin\\x3d\"))document.cookie=\"trialUsername\\x3d;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;path\\x3d\/;domain\\x3d.alfresco.com\",document.cookie=\"trialPassword\\x3d;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;path\\x3d\/;domain\\x3d.alfresco.com\";else var trialLoginHelperWait=0,trialLoginHelper=setInterval(function(){var a=!1;10\u003EtrialLoginHelperWait?0\u003Cdocument.getElementsByClassName(\"mat-card-content\").length?(helptext=document.createElement(\"div\"),helptext[\"class\"]=\n\"alfresco-trial-login-helptext\",\"string\"===typeof trialUsername\u0026\u0026\"string\"===typeof trialPassword\u0026\u00260\u003CtrialUsername.length\u0026\u00260\u003CtrialPassword.length\u0026\u0026trialUsername\u0026\u0026trialPassword\u0026\u0026(a=!0),helptext.innerHTML=a?\"\\x3cb\\x3eUsername: \\x3c\/b\\x3e\"+trialUsername+\"\\x3c\/br\\x3e\\x3cb\\x3e Password: \\x3c\/b\\x3e\"+trialPassword:\"We have sent your login credentials to your email. Please check your email to login.\",helptext.style.cssText=\"box-sizing: border-box; width: 100%; padding: 20px; margin: 0 auto; border: 2px solid #1e88e5; text-align: center;\",\ntarget=document.getElementsByClassName(\"mat-card-content\")[0],target.insertBefore(helptext,target.firstChild),clearInterval(trialLoginHelper)):trialLoginHelperWait+=1:clearInterval(trialLoginHelper)},1E3);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1027
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cstyle\u003E\n  #HEADER_SHARE_SERVICES_WARNING { \n    display:none !important; \n  }\n\u003C\/style\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1078
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(",["escape",["macro",123],8,16],"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1079
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n    \"@context\": \"https:\/\/schema.org\",\n    \"@type\": \"Organization\",\n    \"URL\": \"https:\/\/www.alfresco.com\/\", \/\/ PP remove trailing space\n    \"name\": \"Alfresco\",\n    \"logo\": \"https:\/\/www.alfresco.com\/profiles\/alfresco_profile\/themes\/custom\/alfrescodotcom\/img\/logo.png\",\n    \"sameAs\": [\n        \"https:\/\/plus.google.com\/+alfresco\",\n        \"https:\/\/en.wikipedia.org\/wiki\/Alfresco_(software)\"\n    ]\n}\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1080
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.driftt=window.drift=window.driftt||[];if(!a.init){if(a.invoked)return void(window.console\u0026\u0026console.error\u0026\u0026console.error(\"Drift snippet included twice.\"));a.invoked=!0;a.methods=\"identify config track reset debug show ping page hide off on\".split(\" \");a.factory=function(c){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(c),a.push(b),a}};a.methods.forEach(function(c){a[c]=a.factory(c)});a.load=function(a){var b=3E5,c=Math.ceil(new Date\/b)*b;b=\ndocument.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.crossorigin=\"anonymous\";b.src=\"https:\/\/js.driftt.com\/include\/\"+c+\"\/\"+a+\".js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)}}}();drift.SNIPPET_VERSION=\"0.3.1\";drift.load(",["escape",["macro",124],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1124
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"\/\/my.hellobar.com\/",["escape",["macro",125],3],".js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1125
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c,d,e){a=b.createElement(c);b=b.getElementsByTagName(c)[0];a.async=1;a.id=e;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+d;b.parentNode.insertBefore(a,b)})(window,document,\"script\",\"scripts.demandbase.com\/tgRGNEYN.min.js\",\"demandbase_js_lib\");var gtm_pageHostnameTLD=",["escape",["macro",1],8,16],";document.cookie=\"isDemadBaseAlreadySet\\x3dtrue;Expires\\x3d;Domain\\x3d\"+gtm_pageHostnameTLD+\";Path\\x3d\/\";\u003C\/script\u003E\n\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1291
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar utm_source=",["escape",["macro",58],8,16],",utm_medium=",["escape",["macro",55],8,16],",utm_campaign=",["escape",["macro",59],8,16],",utm_content=",["escape",["macro",60],8,16],",utm_term=",["escape",["macro",61],8,16],",gtm_gclid=",["escape",["macro",62],8,16],",gtm_dclid=",["escape",["macro",63],8,16],",gtm_salesplay=",["escape",["macro",126],8,16],",utm_campaignCookie=",["escape",["macro",127],8,16],",salesplayCookie=",["escape",["macro",128],8,16],",namesCookieParameters={utm_campaign:utm_campaignCookie,salesplay:salesplayCookie},gtm_referralHostname=",["escape",["macro",107],8,16],",gtm_gaClientIDCookie=",["escape",["macro",3],8,16],",\nutmParametersCookies={gtm_referralHostname:gtm_referralHostname,utm_source:utm_source,utm_medium:utm_medium,utm_campaign:utm_campaign,utm_content:utm_content,utm_term:utm_term,gtm_gclid:gtm_gclid,gtm_dclid:gtm_dclid,CID:gtm_gaClientIDCookie,salesplay:gtm_salesplay},gtm_cookieExpires=",["escape",["macro",129],8,16],";\nfunction gtm_setCookie(b,a,d){var c=\"\",e=",["escape",["macro",1],8,16],",f=\/(^|.+\\.)(alfresco\\.(com|net|org|dev)|activiti\\.org|pantheonsite\\.io|jiveon\\.com|lndo\\.site|dyndns\\.org|localhost|drupal|dev|local|localhost|([0-9]{1,3}\\.){3}[0-9]{1,3}|getsatisfaction\\.com|googleweblight\\.com|list-manage[1-2]?\\.com|list-manage2\\.com|campaign-archive\\.com)$\/i;d\u0026\u0026(c=new Date,c.setTime(c.getTime()+864E5*d),c=\"; expires\\x3d\"+c.toGMTString());\"referralHostname\"===b\u0026\u0026!0===f.test(a)\u0026\u0026(a=void 0);b\u0026\u0026a\u0026\u0026(a=encodeURIComponent(a),\ndocument.cookie=b+\"\\x3d\"+a+c+\"; domain\\x3d\"+e+\"; path\\x3d\/\")}\nfunction gtm_calculateTrafficSource(){utm_source=\"alfresco\";utm_medium=\"direct\";if(gtm_gclid||gtm_dclid)utm_source=\"google\",utm_medium=\"ppc\";else if(gtm_referralHostname){utm_medium=\"referral\";utm_source=gtm_referralHostname;for(var b=[\"google\",\"bing\"],a=0;a\u003Cb.length;a++)if(-1\u003Cgtm_referralHostname.indexOf(b[a])){utm_medium=\"organicsearch\";utm_source=b[a];break}b=[\"facebook.com\",\"twitter.com\",\"linkedin.com\"];a=b.indexOf(gtm_referralHostname);if(-1\u003Ca)for(utm_medium=\"organicsocial\",a=0;a\u003Cb.length;a++)if(gtm_referralHostname===\nb[a])switch(gtm_referralHostname){case \"facebook.com\":case \"l.facebook.com\":case \"m.facebook.com\":utm_source=\"facebook\";break;case \"twitter.com\":case \"t.co\":utm_source=\"twitter\";break;case \"linked.com\":utm_source=\"linked\";break;default:utm_source=b[a]}}return{utm_source:utm_source,utm_medium:utm_medium}}\n(function(){var b=gtm_calculateTrafficSource(),a=\"undefined\"===typeof b.utm_source?\"direct\":b.utm_source;b=\"undefined\"===typeof b.utm_medium?\"none\":b.utm_medium;var d=[\"utm_campaign\",\"salesplay\"];if(\"referral\"!==b||\"alfresco.com\"!==a\u0026\u0026\"activiti.org\"!==a\u0026\u0026\"docs.alfresco.com\"!==a\u0026\u0026\"community.alfresco.com\"!==a)gtm_setCookie(\"utm_source\",a,gtm_cookieExpires),gtm_setCookie(\"utm_medium\",b,gtm_cookieExpires);for(var c in utmParametersCookies)void 0!==utmParametersCookies[c]?gtm_setCookie(c,utmParametersCookies[c],\ngtm_cookieExpires):0\u003C=d.indexOf(c)\u0026\u0026void 0!==namesCookieParameters[c]\u0026\u0026gtm_setCookie(c,\"NULL\",gtm_cookieExpires)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1292
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,d,e,c,a){b[c]=b[c]||function(){(b[c].queue=b[c].queue||[]).push(arguments)};b.__hly_widget_object={name:c};b[c].accountId=a;e+=\"?aid\\x3d\"+a;a=d.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=e;d=d.getElementsByTagName(\"script\")[0];d.parentNode.insertBefore(a,d)})(window,document,\"https:\/\/app.hushly.com\/runtime\/widget.js\",\"hushly\",",["escape",["macro",130],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1299
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c){a.techtargetic=a.techtargetic||{};a.techtargetic.client=c;a=b.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.crossorigin=\"anonymous\";c=new Date;c.getFullYear();c.getMonth();c.getDate();a.src=\"https:\/\/trk.techtarget.com\/tracking.js\";b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(window,document,\"1229899\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1301
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(www(test)?\\.|ts(test)?\\.)?alfresco\\.(com|local|dev)$"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(^|.+\\.)(app-)?(hub\\.alfresco\\.(com|local|dev)|alfresco-ext\\.jiveon\\.com)$"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"^(CommunityDownloadForm|ContactSalesForm|WhitepaperForm|EventsForm|MiscForm|PricingForm|TrialForm|WebinarForm|ActivitiGettingStartedForm|contactForm)$"
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"homepage-cta"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"notification-bar-cta"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"floating-overlay__button--form"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"industries"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1068($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"contactForm"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"gtm_platform_set"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"PDF"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(release\/community|projects\/alfresco\/files|\/Alfresco\/acs-community-deployment|acs-community-deployment|acs-community-packaging|system\/files_force\/|\/compose\/install|community\/download-6.1)"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1156($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"job-listing"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(www.|wwwtest\\.)?alfresco\\.com$"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1142($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"Cludo Categories"
    },{
      "function":"_sw",
      "arg0":["macro",5],
      "arg1":"\/search\/site"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1143($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^(.+ )?floating-overlay( .+)?$"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1148($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"js-floating-cta-content"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1146($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"js-floating-cta-link"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1147($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^(.+ )?(card-image-link-colorbox|colorbox-load)( .+)?$"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/thank-you\/thank-you-alfresco-content-services-online-trial-setup"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1150($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"floating-overlay__button--keyplay"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/industries"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1154($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^(.+ )?btn( .+)?$"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/cloud-native-ecm"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1152($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"drupal__field-cta-link"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1153($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"cards__card-main"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"^\/(..\/)?learn"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1149($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"^\/(..\/)?try-alfresco"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1151($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"back-to-top"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(www\\.|wwwtest\\.)?(alfresco.com|alfresco\\.local|alfresco\\.dev)$"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1136($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",97],
      "arg1":".paragraphs-item-text-default p  a"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1137($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^(.+ )?grey-link( .+)?$"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1138($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"it-strategists-guide-transforming-ecm"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1139($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",97],
      "arg1":"#block-menu-menu-7-habits \u003E div \u003E div \u003E ul \u003E li \u003E a.menu__link"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(www\\.)?alfresco\\.com$"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1130($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"drupal__field-link"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1140($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^(.+ )?social-share-link-(linkedin|twitter|facebook|email)( .+)?$"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1141($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",97],
      "arg1":".facetapi-facetapi-ajax-checkboxes li"
    },{
      "function":"_sw",
      "arg0":["macro",5],
      "arg1":"\/events-and-webinars"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1131($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"partners"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1132($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"menu__link"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"menu__link--language"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1133($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",97],
      "arg1":".section--quick-links .btn"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"^\/(..\/)?platform"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1134($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",97],
      "arg1":".view-recommended-content .cards__card-footer a"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"thank-you"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1135($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"main-nav__try-alfresco"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"docs.alfresco.com"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1145($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"j-globalNavLink"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"hub.alfresco.com"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1144($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"gtm.pageError"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":".*(\\.zip|\\.html|\/activiti-7-developers-guide\/getting-started\/?)$"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"activiti.org"
    },{
      "function":"_sw",
      "arg0":["macro",5],
      "arg1":"\/get-started"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1155($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"^(mktoForm|.*)$"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"MarketoForm"
    },{
      "function":"_sw",
      "arg0":["macro",88],
      "arg1":"tel:"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1182($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"Demandbase_Loaded"
    },{
      "function":"_sw",
      "arg0":["macro",88],
      "arg1":"mailto:"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1181($|,)))"
    },{
      "function":"_ew",
      "arg0":["macro",101],
      "arg1":"google.com"
    },{
      "function":"_sw",
      "arg0":["macro",95],
      "arg1":"\/maps"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1180($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",101],
      "arg1":"(^|.+\\.)(play\\.google\\.com|itunes\\.apple\\.com|appworld\\.blackberry\\.com|click\\.google\\-analytics\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1178($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",102],
      "arg1":"^(pdf|docx?|eps|jpg|png|svg|xlsx?|pptx?|pdf|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)$"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1175($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",103],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1176($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",101],
      "arg1":"(^|.+\\.)(vimeo\\.com|youtube\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1177($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",101],
      "arg1":"(^|.+\\.)(facebook\\.com|twitter\\.com|reddit\\.com|linkedin\\.com|plus\\.google\\.com|flickr\\.com|pinterest\\.com|instagram\\.com|youtube\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1179($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"social"
    },{
      "function":"_re",
      "arg0":["macro",104],
      "arg1":"^(.*Page not found.*|.*Error 404.*)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",100],
      "arg1":"search-form"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1171($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",107],
      "arg1":"(^|.+\\.)(alfresco\\.com|lndo\\.site|pantheonsite\\.io|alfresco\\.drupal|alfresco\\.dev|alfresco\\.local|localhost|local|([0-9]{1,3}\\.){3}[0-9]{1,3})(:[0-9]+)?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"gtm.timer.30sec"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1184($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(^|.+\\.)(activiti|apps|my|intranet)\\.alfresco\\.(com|local|dev)$"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"post"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1183($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1185($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"ActivitiDownloadForm"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"^gtm_event_(.*)"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"^(popstate|hashchange)$"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"pushState"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(^|.+\\.)(support\\.alfresco\\.com|myalfresco\\.force\\.com)$"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"api-explorer.alfresco.com"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"devproducts.alfresco.com"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"alf-community-nightly.s3-website-eu-west-1.amazonaws.com"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"activiti.alfresco.com"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"activitidev.alfresco.com"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"addons.alfresco.com"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"apps.alfresco.com"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"devcon.alfresco.com"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"my.alfresco.com"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"pages.alfresco.com"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"partners.alfresco.com"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"trial.alfresco.com"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"university.alfresco.com"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"wiki.alfresco.com"
    },{
      "function":"_re",
      "arg0":["macro",119],
      "arg1":"^(www(test)?\\.|ts(test)?\\.)?alfresco\\.(com|local|dev)$"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1199($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"\/products\/community\/download"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"(get-started-show|modal-disable-link)"
    },{
      "function":"_eq",
      "arg0":["macro",120],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(^$|((^|,)1322523_1221($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",94],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(alfresco-community-download|community-file-list|alf-community-nightly|alfresco-community-edition-file-list|thank-you\/thank-you-downloading-alfresco-community-edition|alfresco-community-edition|ga-release-notes|products\/community\/download-6.1)"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"^\/share\/page\/(user|site)(\/?$|\/.*)"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"\/"
    }],
  "rules":[
    [["if",0],["add",1,3,64,0,128,129,73,74,76,113,115,116,117,118,119]],
    [["if",0,3],["add",2,4,5,67,126,127,130,131]],
    [["if",0,4],["add",6,67,127]],
    [["if",6],["unless",5],["add",7,11]],
    [["if",7,8],["add",8]],
    [["if",8,9],["add",9]],
    [["if",10,11,12,13],["add",10]],
    [["if",14],["add",12]],
    [["if",16],["unless",15],["add",13]],
    [["if",17],["add",14]],
    [["if",12,18,19],["add",15,40]],
    [["if",12,20,21,22],["add",16]],
    [["if",12,23,24,25],["add",17]],
    [["if",12,21,26,27],["add",18]],
    [["if",12,28,29],["add",19]],
    [["if",12,30,31],["add",20]],
    [["if",12,32,33,34],["add",21]],
    [["if",12,35,36,37],["add",22]],
    [["if",12,38,39,40],["add",23]],
    [["if",12,39,41,42],["add",24]],
    [["if",12,21,43,44,45],["add",25,26]],
    [["if",12,38,46,47],["add",27]],
    [["if",12,48,49,50],["add",28]],
    [["if",12,49,51,52],["add",29]],
    [["if",12,49,53,54],["add",30]],
    [["if",12,38,55,56],["add",31]],
    [["if",12,57,58,59],["add",32]],
    [["if",12,49,60,61],["add",33]],
    [["if",12,49,62,63],["add",34]],
    [["if",12,64,65,66],["add",35]],
    [["if",12,64,67,68],["add",36]],
    [["if",12,58,69,71],["unless",57,70],["add",37]],
    [["if",12,72,73,74],["add",38]],
    [["if",12,75,76,77],["add",39]],
    [["if",12,78,79,80],["add",41]],
    [["if",12,81,82,83],["add",42]],
    [["if",84],["add",43]],
    [["if",12,85,86,87,88],["add",44,62]],
    [["if",49,89,90],["add",45]],
    [["if",12,91,92],["add",46,60]],
    [["if",93],["add",47,58]],
    [["if",12,94,95],["add",48]],
    [["if",12,96,97,98],["add",49],["block",52]],
    [["if",12,99,100],["add",50],["block",52]],
    [["if",12,101,102],["add",51]],
    [["if",12,103,104],["add",52]],
    [["if",109],["add",53,65]],
    [["if",12,107,108],["add",53,65],["block",52]],
    [["if",12,105,106],["add",54],["block",52]],
    [["if",0,110],["add",55]],
    [["if",112,113],["unless",111],["add",56]],
    [["if",115,116],["unless",114],["add",57]],
    [["if",118,119,120],["add",59]],
    [["if",121,122,123],["add",61]],
    [["if",124],["add",63]],
    [["if",125],["add",66]],
    [["if",126,127],["add",0,68]],
    [["if",127,128],["add",0]],
    [["if",0,129],["add",67]],
    [["if",0,130],["add",67]],
    [["if",0,131],["add",67]],
    [["if",0,132],["add",67]],
    [["if",0,133],["add",67]],
    [["if",0,86],["add",67]],
    [["if",0,134],["add",67]],
    [["if",0,135],["add",67]],
    [["if",0,136],["add",67]],
    [["if",0,137],["add",67,124]],
    [["if",0,79],["add",67]],
    [["if",0,138],["add",67]],
    [["if",0,139],["add",67]],
    [["if",0,140],["add",67]],
    [["if",0,141],["add",67,122,124]],
    [["if",0,142],["add",67]],
    [["if",0,143],["add",67]],
    [["if",126,127,144],["add",67]],
    [["if",12,38,145],["add",69]],
    [["if",0,146],["add",70]],
    [["if",12,18,147,148,149],["add",71,72]],
    [["if",0,11],["add",75]],
    [["if",0,150],["add",77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,104,105,106,107,108,109,110,111,112,114,120]],
    [["if",0,151],["add",103,121]],
    [["if",0,141,152],["add",123]],
    [["if",0,3,153],["add",125],["block",130]],
    [["if",1,2],["block",1,126,127,130]],
    [["if",2,4],["block",44,62,63,62,63]],
    [["if",2,3],["block",47]],
    [["if",2,117],["block",58,0]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,da=null,ha=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var ia=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ja=function(){this.Ha={};this.Lc=!1;this.ie={}};ja.prototype.get=function(a){return this.Ha["dust."+a]};ja.prototype.set=function(a,b){this.Lc||(a="dust."+a,this.ie.hasOwnProperty(a)||(this.Ha[a]=b))};ja.prototype.has=function(a){return this.Ha.hasOwnProperty("dust."+a)};var ka=function(a){var b=[],c;for(c in a.Ha)a.Ha.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ja.prototype.remove=function(a){a="dust."+a;this.Lc||this.ie.hasOwnProperty(a)||delete this.Ha[a]};ja.prototype.Og=function(){this.Lc=!0};var la=function(a){this.Ka=new ja;this.s=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ia(b)?this.s[Number(b)]=a[Number(b)]:this.Ka.set(b,a[b]))};aa=la.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.s.length;c++){var d=this.s[c];null===d||void 0===d?b.push(""):d instanceof la?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!ia(b))throw Error("RangeError: Length property must be a valid integer.");this.s.length=Number(b)}else ia(a)?this.s[Number(a)]=b:this.Ka.set(a,b)};aa.get=function(a){return"length"==a?this.length():ia(a)?this.s[Number(a)]:this.Ka.get(a)};aa.length=function(){return this.s.length};aa.Ic=function(){for(var a=ka(this.Ka),b=0;b<this.s.length;b++)a.push(b+"");return new la(a)};aa.remove=function(a){ia(a)?delete this.s[Number(a)]:this.Ka.remove(a)};aa.pop=function(){return this.s.pop()};
aa.push=function(a){return this.s.push.apply(this.s,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.s.shift()};aa.splice=function(a,b,c){return new la(this.s.splice.apply(this.s,arguments))};aa.unshift=function(a){return this.s.unshift.apply(this.s,Array.prototype.slice.call(arguments))};aa.has=function(a){return ia(a)&&this.s.hasOwnProperty(a)||this.Ka.has(a)};la.prototype.unshift=la.prototype.unshift;la.prototype.splice=la.prototype.splice;la.prototype.shift=la.prototype.shift;
la.prototype.push=la.prototype.push;la.prototype.pop=la.prototype.pop;la.prototype.remove=la.prototype.remove;la.prototype.getKeys=la.prototype.Ic;la.prototype.get=la.prototype.get;la.prototype.set=la.prototype.set;var ma=function(){},na=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},oa=function(a){return"number"==typeof a&&!isNaN(a)},pa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ra=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},sa=function(a,b){if(a&&pa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},ta=function(a,b){if(!oa(a)||
!oa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},va=function(a,b){for(var c=new ua,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},wa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},xa=function(a){return Math.round(Number(a))||0},ya=function(a){return"false"==String(a).toLowerCase()?!1:!!a},za=function(a){var b=[];if(pa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Aa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ba=function(){return(new Date).getTime()},ua=function(){this.prefix="gtm.";this.values={}};ua.prototype.set=function(a,b){this.values[this.prefix+a]=b};ua.prototype.get=function(a){return this.values[this.prefix+a]};ua.prototype.contains=function(a){return void 0!==this.get(a)};
var Ca=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Fa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ga=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ha=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ia=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ja=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};var Ka=function(a,b){ja.call(this);this.pe=a;this.ng=b};ha(Ka,ja);var La=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof Ka))throw Error("Attempting to execute non-function "+b[0]+".");return c.Tb.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.Qh;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};Ka.prototype.toString=function(){return this.pe};Ka.prototype.getName=function(){return this.pe};Ka.prototype.getName=Ka.prototype.getName;Ka.prototype.Ic=function(){return new la(ka(this))};
Ka.prototype.getKeys=Ka.prototype.Ic;Ka.prototype.Tb=function(a,b){var c=this;a.de().Lh();return this.ng.apply({evaluate:function(d){var e=a;return pa(d)?La(e,d):d},Sh:function(d){for(var e=a,g,h=0;h<d.length;h++)g=La(e,d[h]);return g},getName:function(){return c.getName()},de:function(){return a.de()},Rb:function(){return a}},Array.prototype.slice.call(arguments,1))};Ka.prototype.invoke=Ka.prototype.Tb;
Ka.prototype.lh=function(a,b){try{return this.Tb.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};Ka.prototype.safeInvoke=Ka.prototype.lh;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},u=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=u(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=u(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;Qa[3]=function(a){return String(a).replace(Ta,Sa)};var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,ab={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},bb=function(a){return ab[a]};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,bb)+"'"}};var jb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,kb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return kb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],sb=[],tb=[],ub=[],vb={},wb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=vb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[void 0!==d?g:g.substr(4)]=a[g]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=vb[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(pa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=pb[g];if(!h||b.Nc(h))return;c[g]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);yb&&(d=yb.$f(d,k))}catch(w){b.oe&&b.oe(w,Number(g)),d=!1}c[g]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var n=Bb(a[p],b,c);xb&&(m=m||n===xb.Ab);d.push(n)}return xb&&m?xb.cg(d):d.join("");case "escape":d=Bb(a[1],b,c);if(xb&&pa(a[1])&&"macro"===a[1][0]&&xb.Kg(a))return xb.Wg(d);d=String(d);for(var t=2;t<a.length;t++)Qa[a[t]]&&(d=Qa[a[t]](d));return d;case "tag":var q=a[1];if(!tb[q])throw Error("Unable to resolve tag reference "+q+".");return d={$d:a[2],
index:q};case "zb":var r={arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=Eb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Eb=function(a,b,c){try{return wb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return null};var Fb=function(){var a=function(b){return{toString:function(){return b}}};return{qd:a("convert_case_to"),rd:a("convert_false_to"),sd:a("convert_null_to"),td:a("convert_true_to"),ud:a("convert_undefined_to"),Eh:a("debug_mode_metadata"),ka:a("function"),pf:a("instance_name"),qf:a("live_only"),rf:a("malware_disabled"),sf:a("metadata"),Gh:a("original_vendor_template_id"),tf:a("once_per_event"),Nd:a("once_per_load"),Od:a("setup_tags"),Pd:a("tag_id"),Qd:a("teardown_tags")}}();var Gb=null,Jb=function(a){function b(n){for(var t=0;t<n.length;t++)d[n[t]]=!0}var c=[],d=[];Gb=Hb(a);for(var e=0;e<qb.length;e++){var g=qb[e],h=Ib(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],p=0;p<tb.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},Ib=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Gb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Gb(e[g]);if(null===h)return null;
if(h)return!1}return!0},Hb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Eb(sb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var Mb=function(a,b){var c=new Ka(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.evaluate(d[e]);return b.apply(this,d)});c.Og();return c};for(var Nb="floor ceil round max min abs pow sqrt".split(" "),Ob=0;Ob<Nb.length;Ob++)Math.hasOwnProperty(Nb[Ob]);(function(){var a={};return a})();var C=window,D=document,Pb=navigator,Qb=D.currentScript&&D.currentScript.src,Rb=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Sb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Tb=function(a,b,c){var d=D.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Sb(d,b);c&&(d.onerror=c);var e;if(null===da)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){da=k;break b}}da=""}e=da;e&&d.setAttribute("nonce",e);var l=D.getElementsByTagName("script")[0]||D.body||D.head;l.parentNode.insertBefore(d,l);return d},Ub=function(){if(Qb){var a=Qb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Vb=function(a,b){var c=D.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=D.body&&D.body.lastChild||
D.body||D.head;d.parentNode.insertBefore(c,d);Sb(c,b);void 0!==a&&(c.src=a);return c},Wb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Xb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Yb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},F=function(a){C.setTimeout(a,0)},Zb=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},$b=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},ac=function(a){var b=D.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},bc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},cc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={Za:"_ee",ic:"event_callback",Qa:"event_timeout",H:"gtag.config",S:"allow_ad_personalization_signals",U:"cookie_expires",Oa:"cookie_update",za:"session_duration"};var rc=/[A-Z]+/,sc=/\s/,tc=function(a){if(f(a)&&(a=Aa(a),!sc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(rc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},vc=function(a){for(var b={},c=0;c<a.length;++c){var d=tc(a[c]);d&&(b[d.id]=d)}uc(b);var e=[];wa(b,function(g,h){e.push(h)});return e};
function uc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var wc={},xc=null,yc=Math.random();wc.m="GTM-W4HV22";wc.Eb="aa0";var zc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},Ac="www.googletagmanager.com/gtm.js";var Bc=Ac,Cc=null,Dc=null,Ec=null,Fc="//www.googletagmanager.com/a?id="+wc.m+"&cv=490",Gc={},Hc={},Ic=function(){var a=xc.sequence||0;xc.sequence=a+1;return a};var Jc={},Kc=function(a,b){Jc[a]=Jc[a]||[];Jc[a][b]=!0},Lc=function(a){for(var b=[],c=Jc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Mc=function(){return"&tc="+tb.filter(function(a){return a}).length},Xc=function(){Oc&&(C.clearTimeout(Oc),Oc=void 0);void 0===Pc||Qc[Pc]&&!Rc||(Sc[Pc]||Tc.Mg()||0>=Uc--?(Kc("GTM",1),Sc[Pc]=!0):(Tc.hh(),Wb(Vc()),Qc[Pc]=!0,Wc=Rc=""))},Vc=function(){var a=Pc;if(void 0===a)return"";var b=Lc("GTM"),c=Lc("TAGGING");return[Yc,Qc[a]?"":"&es=1",Zc[a],b?"&u="+b:"",c?"&ut="+c:"",Mc(),Rc,Wc,"&z=0"].join("")},$c=function(){return[Fc,"&v=3&t=t","&pid="+ta(),"&rv="+wc.Eb].join("")},ad="0.005000">
Math.random(),Yc=$c(),bd=function(){Yc=$c()},Qc={},Rc="",Wc="",Pc=void 0,Zc={},Sc={},Oc=void 0,Tc=function(a,b){var c=0,d=0;return{Mg:function(){if(c<a)return!1;Ba()-d>=b&&(c=0);return c>=a},hh:function(){Ba()-d>=b&&(c=0);c++;d=Ba()}}}(2,1E3),Uc=1E3,cd=function(a,b){if(ad&&!Sc[a]&&Pc!==a){Xc();Pc=a;Rc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Zc[a]="&e="+c+"&eid="+a;Oc||(Oc=C.setTimeout(Xc,500))}},dd=function(a,b,c){if(ad&&!Sc[a]&&b){a!==Pc&&(Xc(),Pc=a);var d=String(b[Fb.ka]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Rc=Rc?Rc+"."+e:"&tr="+e;Oc||(Oc=C.setTimeout(Xc,500));2022<=Vc().length&&Xc()}};var ed={},fd=new ua,gd={},hd={},kd={name:"dataLayer",set:function(a,b){u(Ja(a,b),gd);id()},get:function(a){return jd(a,2)},reset:function(){fd=new ua;gd={};id()}},jd=function(a,b){if(2!=b){var c=fd.get(a);if(ad){var d=ld(a);c!==d&&Kc("GTM",5)}return c}return ld(a)},ld=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:nd(d)},nd=function(a){for(var b=gd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var qd=function(a,b){hd.hasOwnProperty(a)||(fd.set(a,b),u(Ja(a,b),gd),id())},id=function(a){wa(hd,function(b,c){fd.set(b,c);u(Ja(b,void 0),gd);u(Ja(b,c),gd);a&&delete hd[b]})},rd=function(a,b,c){ed[a]=ed[a]||{};var d=1!==c?ld(b):fd.get(b);"array"===Na(d)||"object"===Na(d)?ed[a][b]=u(d):ed[a][b]=d},sd=function(a,b){if(ed[a])return ed[a][b]};var td=function(){var a=!1;return a};var L=function(a,b,c,d){return(2===ud()||d||"http:"!=C.location.protocol?a:b)+c},ud=function(){var a=Ub(),b;if(1===a)a:{var c=Bc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=D.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Jd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Kd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ld={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Md="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Od=function(a){var b=jd("gtm.whitelist");b&&Kc("GTM",9);var c=b&&Ia(za(b),Kd),d=jd("gtm.blacklist");d||(d=jd("tagTypeBlacklist"))&&Kc("GTM",3);
d?Kc("GTM",8):d=[];Nd()&&(d=za(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=ra(za(d),"google")&&Kc("GTM",2);var e=d&&Ia(za(d),Ld),g={};return function(h){var k=h&&h[Fb.ka];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Hc[k]||[],m=a(k,l);if(b){var p;if(p=m)a:{if(0>ra(c,k))if(l&&0<l.length)for(var n=0;n<l.length;n++){if(0>
ra(c,l[n])){Kc("GTM",11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var q=0<=ra(e,k);if(q)t=q;else{var r=va(e,l||[]);r&&Kc("GTM",10);t=r}}var v=!m||t;v||!(0<=ra(l,"sandboxedScripts"))||c&&-1!==ra(c,"sandboxedScripts")||(v=va(e,Md));return g[k]=v}},Nd=function(){return Jd.test(C.location&&C.location.hostname)};var Pd={$f:function(a,b){b[Fb.qd]&&"string"===typeof a&&(a=1==b[Fb.qd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fb.sd)&&null===a&&(a=b[Fb.sd]);b.hasOwnProperty(Fb.ud)&&void 0===a&&(a=b[Fb.ud]);b.hasOwnProperty(Fb.td)&&!0===a&&(a=b[Fb.td]);b.hasOwnProperty(Fb.rd)&&!1===a&&(a=b[Fb.rd]);return a}};var Qd={active:!0,isWhitelisted:function(){return!0}},Rd=function(a){var b=xc.zones;!b&&a&&(b=xc.zones=a());return b};var Sd=!1,Td=0,Ud=[];function Vd(a){if(!Sd){var b=D.createEventObject,c="complete"==D.readyState,d="interactive"==D.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Sd=!0;for(var e=0;e<Ud.length;e++)F(Ud[e])}Ud.push=function(){for(var g=0;g<arguments.length;g++)F(arguments[g]);return 0}}}function Wd(){if(!Sd&&140>Td){Td++;try{D.documentElement.doScroll("left"),Vd()}catch(a){C.setTimeout(Wd,50)}}}var Xd=function(a){Sd?a():Ud.push(a)};var Yd={},Zd={},$d=function(a,b,c,d){if(!Zd[a]||zc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=u(d,e));e.id=c;e.status="timeout";return Zd[a].tags.push(e)-1},ae=function(a,b,c,d){if(Zd[a]){var e=Zd[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function be(a){for(var b=Yd[a]||[],c=0;c<b.length;c++)b[c]();Yd[a]={push:function(d){d(wc.m,Zd[a])}}}
var ee=function(a,b,c){Zd[a]={tags:[]};na(b)&&ce(a,b);c&&C.setTimeout(function(){return be(a)},Number(c));return de(a)},ce=function(a,b){Yd[a]=Yd[a]||[];Yd[a].push(Fa(function(){return F(function(){b(wc.m,Zd[a])})}))};function de(a){var b=0,c=0,d=!1;return{add:function(){c++;return Fa(function(){b++;d&&b>=c&&be(a)})},Jf:function(){d=!0;b>=c&&be(a)}}};var fe=function(){function a(d){return!oa(d)||0>d?0:d}if(!xc._li&&C.performance&&C.performance.timing){var b=C.performance.timing.navigationStart,c=oa(kd.get("gtm.start"))?kd.get("gtm.start"):0;xc._li={cst:a(c-b),cbt:a(Dc-b)}}};var je=!1,ke=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]},le=!1;
var me=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(C[b])C.hasOwnProperty(b)||Kc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}fe();return C[b]},ne=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ke();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var pe=function(){},oe=function(){return C.GoogleAnalyticsObject||"ga"};var re=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var se=/:[0-9]+$/,te=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},we=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ue(a.protocol)||ue(C.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:C.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||C.location.hostname).replace(se,"").toLowerCase());var g=b,h,k=ue(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=ve(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(se,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Kc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=ra(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=te(h,e,void 0));break;case "extension":var p=a.pathname.split(".");h=1<p.length?p[p.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},ue=function(a){return a?a.replace(":","").toLowerCase():""},ve=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
xe=function(a){var b=D.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Kc("TAGGING",1),c="/"+c);var d=b.hostname.replace(se,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var De=function(a){};function Ce(a,b){a.containerId=wc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function Ee(a,b,c,d){var e=tb[a],g=Fe(a,b,c,d);if(!g)return null;var h=Bb(e[Fb.Od],c,[]);if(h&&h.length){var k=h[0];g=Ee(k.index,{L:g,V:1===k.$d?b.terminate:g,terminate:b.terminate},c,d)}return g}
function Fe(a,b,c,d){function e(){if(g[Fb.rf])k();else{var w=Cb(g,c,[]),y=$d(c.id,String(g[Fb.ka]),Number(g[Fb.Pd]),w[Fb.sf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=Ba()-A;dd(c.id,tb[a],"5");ae(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=Ba()-A;dd(c.id,tb[a],"6");ae(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;dd(c.id,g,"1");var z=function(B){var E=Ba()-A;De(B);dd(c.id,g,"7");ae(c.id,y,"exception",E);x||(x=!0,k())};var A=Ba();try{Ab(w,c)}catch(B){z(B)}}}var g=tb[a],h=b.L,k=b.V,l=b.terminate;if(c.Nc(g))return null;var m=Bb(g[Fb.Qd],c,[]);if(m&&m.length){var p=m[0],n=Ee(p.index,{L:h,V:k,terminate:l},c,d);if(!n)return null;h=n;k=2===p.$d?l:n}if(g[Fb.Nd]||g[Fb.tf]){var t=g[Fb.Nd]?ub:c.sh,q=h,r=k;if(!t[a]){e=Fa(e);var v=Ge(a,t,e);h=v.L;k=v.V}return function(){t[a](q,r)}}return e}
function Ge(a,b,c){var d=[],e=[];b[a]=He(d,e,c);return{L:function(){b[a]=Ie;for(var g=0;g<d.length;g++)d[g]()},V:function(){b[a]=Je;for(var g=0;g<e.length;g++)e[g]()}}}function He(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ie(a){a()}function Je(a,b){b()};var Me=function(a,b){for(var c=[],d=0;d<tb.length;d++)if(a.jb[d]){var e=tb[d];var g=b.add();try{var h=Ee(d,{L:g,V:g,terminate:g},a,d);h?c.push({He:d,we:Db(e),kg:h}):(Ke(d,a),g())}catch(l){g()}}b.Jf();c.sort(Le);for(var k=0;k<c.length;k++)c[k].kg();return 0<c.length};function Le(a,b){var c,d=b.we,e=a.we;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.He,k=b.He;g=h>k?1:h<k?-1:0}return g}
function Ke(a,b){if(!ad)return;var c=function(d){var e=b.Nc(tb[d])?"3":"4",g=Bb(tb[d][Fb.Od],b,[]);g&&g.length&&c(g[0].index);dd(b.id,tb[d],e);var h=Bb(tb[d][Fb.Qd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Ne=!1,Oe=function(a,b,c,d,e){if("gtm.js"==b){if(Ne)return!1;Ne=!0}cd(a,b);var g=ee(a,d,e);rd(a,"event",1);rd(a,"ecommerce",1);rd(a,"gtm");var h={id:a,name:b,Nc:Od(c),jb:[],sh:[],oe:function(p){Kc("GTM",6);De(p)}};h.jb=Jb(h);var k=Me(h,g);
if(!k)return k;for(var l=0;l<h.jb.length;l++)if(h.jb[l]){var m=tb[l];if(m&&!zc[String(m[Fb.ka])])return!0}return!1};var Qe=function(a,b,c,d,e){var g=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.containerConfig=c||{};this.lb=d||{};this.globalConfig=e||{};this.getWithConfig=function(h){if(void 0!==g.eventModel[h])return g.eventModel[h];if(void 0!==g.targetConfig[h])return g.targetConfig[h];if(void 0!==g.containerConfig[h])return g.containerConfig[h];if(void 0!==g.lb[h])return g.lb[h];if(void 0!==g.globalConfig[h])return g.globalConfig[h]}};var Re={},Se=["G"];Re.Je="";var Te=Re.Je.split(",");function Ue(){var a=xc;return a.gcq=a.gcq||new Ve}
var We=function(a,b,c){Ue().register(a,b,c)},Xe=function(a,b,c,d){Ue().push("event",[b,a],c,d)},Ye=function(a,b){Ue().push("config",[a],b)},Ze={},$e=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.lb={};this.xe=null;this.je=!1},af=function(a,b,c,d,e){this.type=a;this.Ie=b;this.N=c||"";this.Ib=d;this.defer=e},Ve=function(){this.Wd={};this.fe={};this.eb=[]},bf=function(a,b){var c=tc(b);return a.Wd[c.containerId]=a.Wd[c.containerId]||new $e},cf=function(a,b,c,d){if(d.N){var e=
bf(a,d.N),g=e.xe;if(g){var h=u(c),k=u(e.targetConfig[d.N]),l=u(e.containerConfig),m=u(e.lb),p=u(a.fe),n=new Qe(h,k,l,m,p);try{3===g.length?g(b,d.Ie,n):4===g.length&&g(d.N,b,d.Ie,n)}catch(t){}}}};
Ve.prototype.register=function(a,b,c){if(3!==bf(this,a).status){bf(this,a).xe=b;bf(this,a).status=3;c&&(bf(this,a).lb=c);var d=tc(a),e=Ze[d.containerId];if(void 0!==e){var g=xc[d.containerId].bootstrap,h=jd("gtm.uniqueEventId"),k=d.prefix,l=Ba()-g;if(ad&&!Sc[h]){h!==Pc&&(Xc(),Pc=h);var m=k+"."+Math.floor(g-e)+"."+Math.floor(l);Wc=Wc?Wc+","+m:"&cl="+m}delete Ze[d.containerId]}this.flush()}};
Ve.prototype.push=function(a,b,c,d){var e=Math.floor(Ba()/1E3);if(c){var g=tc(c),h;if(h=g){var k;if(k=1===bf(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(bf(this,c).status=2,this.push("require",[],g.containerId),Ze[g.containerId]=Ba(),!td())){var m=encodeURIComponent(g.containerId);Tb(("http:"!=C.location.protocol?"https:":
"http:")+("//www.googletagmanager.com/gtag/js?id="+m+"&l=dataLayer&cx=c"))}}this.eb.push(new af(a,e,c,b,d));d||this.flush()};
Ve.prototype.flush=function(a){for(var b=this;this.eb.length;){var c=this.eb[0];if(c.defer)c.defer=!1,this.eb.push(c);else switch(c.type){case "require":if(3!==bf(this,c.N).status&&!a)return;break;case "set":wa(c.Ib[0],function(l,m){u(Ja(l,m),b.fe)});break;case "config":var d=c.Ib[0],e=!!d[H.yb];delete d[H.yb];var g=bf(this,c.N),h=tc(c.N),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.N]={});g.je&&e||cf(this,H.H,d,c);g.je=!0;k?u(d,g.containerConfig):u(d,g.targetConfig[c.N]);break;
case "event":cf(this,c.Ib[1],c.Ib[0],c)}this.eb.shift()}};var df=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},gf=function(a,b,c,d){var e=ef(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=ff(e,function(g){return g.Nb},b);if(1===e.length)return e[0].id;e=ff(e,function(g){return g.kb},c);return e[0]?e[0].id:void 0}};
function hf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=df(b,e).indexOf(c)}
var lf=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var p=l;p&&1200<p.length&&(p=p.substring(0,1200));l=p;m=a+"="+l}var n=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":n=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===n){for(var v=jf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!kf(y,t)&&hf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else n&&"none"!=n&&(m+="; domain="+n),k=!kf(n,t)&&hf(m,a,l)}return k};function ff(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function ef(a,b){for(var c=[],d=df(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Nb:1*k[0]||1,kb:1*k[1]||1}))}}return c}
var mf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,nf=/(^|\.)doubleclick\.net$/i,kf=function(a,b){return nf.test(document.location.hostname)||"/"===b&&mf.test(a)},jf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;nf.test(e)||mf.test(e)||a.push("none");return a};var of="".split(/,/),qf=null,rf={},sf={},tf,uf=function(a,b){var c={event:a};b&&(c.eventModel=u(b),b[H.ic]&&(c.eventCallback=b[H.ic]),b[H.Qa]&&(c.eventTimeout=b[H.Qa]));return c};
var Af={config:function(a){},
event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=uf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).Uh().Kh(a[1],a[2])},set:function(a){var b;2==a.length&&Pa(a[1])?b=u(a[1]):3==a.length&&f(a[1])&&(b={},Pa(a[2])||pa(a[2])?b[a[1]]=u(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Bf={policy:!0};var Df=function(a){return Cf?D.querySelectorAll(a):null},Ef=function(a,b){if(!Cf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!D.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ff=!1;if(D.querySelectorAll)try{var Gf=D.querySelectorAll(":root");Gf&&1==Gf.length&&Gf[0]==D.documentElement&&(Ff=!0)}catch(a){}var Cf=Ff;var Nf=function(a){if(Mf(a))return a;this.zh=a};Nf.prototype.sg=function(){return this.zh};var Mf=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};Nf.prototype.getUntrustedUpdateValue=Nf.prototype.sg;var Of=!1,Pf=[];function Qf(){if(!Of){Of=!0;for(var a=0;a<Pf.length;a++)F(Pf[a])}}var Rf=function(a){Of?F(a):Pf.push(a)};var Sf=[],Tf=!1,Uf=function(a){return C["dataLayer"].push(a)},Vf=function(a){var b=xc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Xf=function(a){var b=a._clear;wa(a,function(g,h){"_clear"!==g&&(b&&qd(g,void 0),qd(g,h))});Cc||(Cc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ic(),a["gtm.uniqueEventId"]=d,qd("gtm.uniqueEventId",d));Ec=c;var e=Wf(a);
Ec=null;switch(c){case "gtm.init":Kc("GTM",19),e&&Kc("GTM",20)}return e};function Wf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=xc.zones;d=e?e.checkState(wc.m,c):Qd;return d.active?Oe(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Yf=function(){for(var a=!1;!Tf&&0<Sf.length;){Tf=!0;delete gd.eventModel;id();var b=Sf.shift();if(null!=b){var c=Mf(b);if(c){var d=b;b=Mf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=jd(h,1);if(pa(k)||Pa(k))k=u(k);hd[h]=k}}try{if(na(b))try{b.call(kd)}catch(v){}else if(pa(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),p=m.pop(),n=l.slice(1),t=jd(m.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,n)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&f(b[0])){var r=Af[b[0]];if(r&&(!c||!Bf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Tf=!1;continue}}a=Xf(b)||a}}finally{c&&id(!0)}}Tf=!1}
return!a},Zf=function(){var a=Yf();try{var b=wc.m,c=C["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},$f=function(){var a=Rb("dataLayer",[]),b=Rb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Xd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Rf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<xc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Nf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Sf.push.apply(Sf,d);if(300<this.length)for(Kc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Yf()&&h};Sf.push.apply(Sf,a.slice(0));F(Zf)};var ag;var wg={};wg.Ab=new String("undefined");
var xg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===wg.Ab?b:a[d]);return c.join("")}};xg.prototype.toString=function(){return this.resolve("undefined")};xg.prototype.valueOf=xg.prototype.toString;wg.wf=xg;wg.xc={};wg.cg=function(a){return new xg(a)};var yg={};wg.ih=function(a,b){var c=Ic();yg[c]=[a,b];return c};wg.Xd=function(a){var b=a?0:1;return function(c){var d=yg[c];if(d&&"function"===typeof d[b])d[b]();yg[c]=void 0}};wg.Kg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};wg.Wg=function(a){if(a===wg.Ab)return a;var b=Ic();wg.xc[b]=a;return'google_tag_manager["'+wc.m+'"].macro('+b+")"};wg.Pg=function(a,b,c){a instanceof wg.wf&&(a=a.resolve(wg.ih(b,c)),b=ma);return{Kc:a,L:b}};var zg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Zb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Ag=function(a){xc.hasOwnProperty("autoEventsSettings")||(xc.autoEventsSettings={});var b=xc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Bg=function(a,b,c){Ag(a)[b]=c},Cg=function(a,b,c,d){var e=Ag(a),g=Ca(e,b,d);e[b]=c(g)},Dg=function(a,b,c){var d=Ag(a);return Ca(d,b,c)};var Eg=function(){for(var a=Pb.userAgent+(D.cookie||"")+(D.referrer||""),b=a.length,c=C.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ba()/1E3)].join(".")},Hg=function(a,b,c,d){var e=Fg(b);return gf(a,e,Gg(c),d)},Ig=function(a,b,c,d){var e=""+Fg(c),g=Gg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},Fg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Gg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Jg=["1"],Kg={},Og=function(a,b,c,d){var e=Lg(a);Kg[e]||Mg(e,b,c)||(Ng(e,Eg(),b,c,d),Mg(e,b,c))};function Ng(a,b,c,d,e){var g=Ig(b,"1",d,c);lf(a,g,c,d,0==e?void 0:new Date(Ba()+1E3*(void 0==e?7776E3:e)))}function Mg(a,b,c){var d=Hg(a,b,c,Jg);d&&(Kg[a]=d);return d}function Lg(a){return(a||"_gcl")+"_au"};var Pg=function(){for(var a=[],b=D.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({hd:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].hd]||(g[a[h].hd]=[]),g[a[h].hd].push({timestamp:k[1],pg:k[2]}))}return g};function Qg(){for(var a=Rg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Sg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Rg,Tg,Ug=function(a){Rg=Rg||Sg();Tg=Tg||Qg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,p=(h&15)<<2|k>>6,n=k&63;e||(n=64,d||(p=64));b.push(Rg[l],Rg[m],Rg[p],Rg[n])}return b.join("")},Vg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Tg[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Rg=Rg||Sg();Tg=Tg||
Qg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Wg;function Xg(a,b){if(!a||b===D.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var ah=function(){var a=Yg,b=Zg,c=$g(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Xb(D,"mousedown",d);Xb(D,"keyup",d);Xb(D,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},$g=function(){var a=Rb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var bh=/(.*?)\*(.*?)\*(.*)/,ch=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,dh=/^(?:www\.|m\.|amp\.)+/,eh=/([^?#]+)(\?[^#]*)?(#.*)?/,fh=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,hh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ug(String(d))))}var e=b.join("*");return["1",gh(e),e].join("*")},gh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Wg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Wg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Wg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},jh=function(){return function(a){var b=xe(C.location.href),c=b.search.replace("?",""),d=te(c,"_gl",!0)||"";a.query=ih(d)||{};var e=we(b,"fragment").match(fh);a.fragment=ih(e&&e[3]||
"")||{}}},kh=function(){var a=jh(),b=$g();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ga(c,d.query),Ga(c,d.fragment));return c},ih=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=bh.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===gh(k,p)){l=!0;break a}l=!1}if(l){for(var n={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)n[t[q]]=Vg(t[q+1]);return n}}}}catch(r){}};
function lh(a,b,c){function d(m){var p=m,n=fh.exec(p),t=p;if(n){var q=n[2],r=n[4];t=n[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=eh.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function mh(a,b,c){for(var d={},e={},g=$g().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Xg(k.domains,b)&&(k.fragment?Ga(e,k.callback()):Ga(d,k.callback()))}if(Ha(d)){var l=hh(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var p=a.childNodes||[],n=!1,t=0;t<p.length;t++){var q=p[t];if("_gl"===q.name){q.setAttribute("value",l);n=!0;break}}if(!n){var r=D.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=lh(l,a.action);re.test(v)&&(a.action=v)}}}else nh(l,a,!1)}if(!c&&Ha(e)){var w=hh(e);nh(w,a,!0)}}function nh(a,b,c){if(b.href){var d=lh(a,b.href,void 0===c?!1:c);re.test(d)&&(b.href=d)}}
var Yg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||mh(e,e.hostname,!1)}}catch(h){}},Zg=function(a){try{if(a.action){var b=we(xe(a.action),"host");mh(a,b,!0)}}catch(c){}},oh=function(a,b,c,d){ah();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};$g().decorators.push(e)},ph=function(){var a=D.location.hostname,b=ch.exec(D.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(dh,""),l=e.replace(dh,""),m;if(!(m=k===l)){var p="."+l;m=k.substring(k.length-p.length,k.length)===p}return m},qh=function(a,b){return!1===a?!1:a||b||ph()};var rh={};var sh=/^\w+$/,th=/^[\w-]+$/,uh=/^~?[\w-]+$/,vh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function wh(a){return a&&"string"==typeof a&&a.match(sh)?a:"_gcl"}var yh=function(){var a=xe(C.location.href),b=we(a,"query",!1,void 0,"gclid"),c=we(a,"query",!1,void 0,"gclsrc"),d=we(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||te(e,"gclid",void 0);c=c||te(e,"gclsrc",void 0)}return xh(b,c,d)};
function xh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(th))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==rh.gtm_3pds?0:rh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var Ah=function(a){var b=yh();zh(b,a)};
function zh(a,b,c){function d(n,t){var q=Bh(n,e);q&&lf(q,t,h,g,l,!0)}b=b||{};var e=wh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Vb?7776E3:b.Vb;c=c||Ba();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),p=function(n){return["GCL",m,n].join(".")};a.aw&&(!0===b.ki?d("aw",p("~"+a.aw[0])):d("aw",p(a.aw[0])));a.dc&&d("dc",p(a.dc[0]));a.gf&&d("gf",p(a.gf[0]));a.ha&&d("ha",p(a.ha[0]))}
var Dh=function(a,b,c,d,e){for(var g=kh(),h=wh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==vh[l]){var m=Bh(l,h),p=g[m];if(p){var n=Math.min(Ch(p),Ba()),t;b:{for(var q=n,r=df(m,D.cookie),v=0;v<r.length;++v)if(Ch(r[v])>q){t=!0;break b}t=!1}t||lf(m,p,c,d,0==e?void 0:new Date(n+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};zh(xh(g.gclid,g.gclsrc),w)},Bh=function(a,b){var c=vh[a];if(void 0!==c)return b+c},Ch=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Eh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Fh=function(a,b,c,d,e){if(pa(b)){var g=wh(e);oh(function(){for(var h={},k=0;k<a.length;++k){var l=Bh(a[k],g);if(l){var m=df(l,D.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Gh=function(a){return a.filter(function(b){return uh.test(b)})},Hh=function(a){for(var b=["aw","dc"],c=wh(a&&a.prefix),d={},e=0;e<b.length;e++)vh[b[e]]&&(d[b[e]]=vh[b[e]]);wa(d,function(g,h){var k=df(c+h,D.cookie);if(k.length){var l=k[0],m=Ch(l),p={};p[g]=[Eh(l)];zh(p,a,m)}})};var Ih=/^\d+\.fls\.doubleclick\.net$/;function Jh(a){var b=xe(C.location.href),c=we(b,"host",!1);if(c&&c.match(Ih)){var d=we(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Kh(a,b){if("aw"==a||"dc"==a){var c=Jh("gcl"+a);if(c)return c.split(".")}var d=wh(b);if("_gcl"==d){var e;e=yh()[a]||[];if(0<e.length)return e}var g=Bh(a,d),h;if(g){var k=[];if(D.cookie){var l=df(g,D.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var p=Eh(l[m]);p&&-1===ra(k,p)&&k.push(p)}h=Gh(k)}else h=k}else h=k}else h=[];return h}
var Lh=function(){var a=Jh("gac");if(a)return decodeURIComponent(a);var b=Pg(),c=[];wa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].pg);g=Gh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Mh=function(a,b,c,d,e){Og(b,c,d,e);var g=Kg[Lg(b)],h=yh().dc||[],k=!1;if(g&&0<h.length){var l=xc.joined_au=xc.joined_au||{},m=b||"_gcl";if(!l[m])for(var p=0;p<h.length;p++){var n="https://adservice.google.com/ddm/regclk",t=n=n+"?gclid="+h[p]+"&auiddc="+g;Pb.sendBeacon&&Pb.sendBeacon(t)||Wb(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Lg(b),r=Kg[q];r&&Ng(q,r,c,d,e)}};var Nh;if(3===wc.Eb.length)Nh="g";else{var Oh="G";Nh=Oh}
var Ph={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Nh,OPT:"o"},Qh=function(a){var b=wc.m.split("-"),c=b[0].toUpperCase(),d=Ph[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===wc.Eb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+wc.Eb+e};
var Rh=function(a){return!(void 0===a||null===a||0===(a+"").length)},Sh=function(a,b){var c;if(2===b.R)return a("ord",ta(1E11,1E13)),!0;if(3===b.R)return a("ord","1"),a("num",ta(1E11,1E13)),!0;if(4===b.R)return Rh(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.R)c="1";else if(6===b.R)c=b.bd;else return!1;Rh(c)&&a("qty",c);Rh(b.Kb)&&a("cost",b.Kb);Rh(b.transactionId)&&a("ord",b.transactionId);return!0},Th=encodeURIComponent,Uh=function(a,b){function c(p,n,t){g.hasOwnProperty(p)||(n+="",e+=";"+p+"="+
(t?n:Th(n)))}var d=a.Gc,e=a.protocol;e+=a.Yb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+Th(d)+(";type="+Th(a.Jc))+(";cat="+Th(a.cb));var g=a.eg||{};wa(g,function(p,n){e+=";"+Th(p)+"="+Th(n+"")});if(Sh(c,a)){Rh(a.fc)&&c("u",a.fc);Rh(a.cc)&&c("tran",a.cc);c("gtm",Qh());!1===a.Ff&&c("npa","1");if(a.Ec){var h=Kh("dc",a.Ca);h&&h.length&&c("gcldc",h.join("."));var k=Kh("aw",a.Ca);k&&k.length&&c("gclaw",k.join("."));var l=Lh();l&&c("gac",l);Og(a.Ca,void 0,a.ag,a.bg);
var m=Kg[Lg(a.Ca)];m&&c("auiddc",m)}Rh(a.Yc)&&c("prd",a.Yc,!0);wa(a.kd,function(p,n){c(p,n)});e+=b||"";Rh(a.Wb)&&c("~oref",a.Wb);a.Yb?Vb(e+"?",a.L):Wb(e+"?",a.L,a.V)}else F(a.V)};var Vh=["input","select","textarea"],Wh=["button","hidden","image","reset","submit"],Yh=function(a){var b=a.tagName.toLowerCase();return!sa(Vh,function(c){return c===b})||"input"===b&&sa(Wh,function(c){return c===a.type.toLowerCase()})?!1:!0},Zh=function(a){return a.form?a.form.tagName?a.form:D.getElementById(a.form):bc(a,["form"],100)},$h=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Yh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var ci=!!C.MutationObserver,di=void 0,ei=function(a){if(!di){var b=function(){var c=D.body;if(c)if(ci)(new MutationObserver(function(){for(var e=0;e<di.length;e++)F(di[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Xb(c,"DOMNodeInserted",function(){d||(d=!0,F(function(){d=!1;for(var e=0;e<di.length;e++)F(di[e])}))})}};di=[];D.body?b():F(b)}di.push(a)};
var wi=function(){var a=D.body,b=D.documentElement||a&&a.parentElement,c,d;if(D.compatMode&&"BackCompat"!==D.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};Kc("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},xi=function(a){var b=wi(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},yi=function(a){if(D.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!C.getComputedStyle)return!0;var c=C.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=C.getComputedStyle(d,null))}return!1};var zi=[],Ai=!(!C.IntersectionObserver||!C.IntersectionObserverEntry),Bi=function(a,b,c){for(var d=new C.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<zi.length;g++)if(!zi[g])return zi[g]=d,g;return zi.push(d)-1},Ci=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},p={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ba()};F(function(){return a(p)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=xi(b[k]);if(l>e[k])for(;g[k]<c.length-1&&l>=c[g[k]+1];)d(b[k],l),g[k]++;else if(l<e[k])for(;0<=g[k]&&l<=c[g[k]];)d(b[k],l),g[k]--;e[k]=l}}},Di=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Ai){var e=!1;F(function(){e||Ci(a,b,c)()});return Bi(function(g){e=!0;for(var h={Ma:0};h.Ma<g.length;h={Ma:h.Ma},h.Ma++)F(function(k){return function(){return a(g[k.Ma])}}(h))},b,c)}return C.setInterval(Ci(a,b,c),1E3)},Ei=function(a){Ai?0<=a&&a<zi.length&&zi[a]&&(zi[a].disconnect(),zi[a]=void 0):C.clearInterval(a)};
var Fi=function(a,b,c){function d(){var h=a();g+=e?(Ba()-e)*h.playbackRate/1E3:0;e=Ba()}var e=0,g=0;return{Ob:function(h,k,l){var m=a(),p=m.Yd,n=void 0!==l?Math.round(l):void 0!==k?Math.round(m.Yd*k):Math.round(m.dg),t=void 0!==k?Math.round(100*k):0>=p?0:Math.round(n/p*100),q=D.hidden?!1:.5<=xi(c);d();var r=zg(c,"gtm.video",[b]);r["gtm.videoProvider"]="youtube";r["gtm.videoStatus"]=h;r["gtm.videoUrl"]=m.url;r["gtm.videoTitle"]=m.title;r["gtm.videoDuration"]=Math.round(p);r["gtm.videoCurrentTime"]=
Math.round(n);r["gtm.videoElapsedTime"]=Math.round(g);r["gtm.videoPercent"]=t;r["gtm.videoVisible"]=q;Uf(r)},kh:function(){e=Ba()},yc:function(){d()}}};var Gi=C.clearTimeout,Hi=C.setTimeout,M=function(a,b,c){if(td()){b&&F(b)}else return Tb(a,b,c)},Ii=function(){return C.location.href},Ji=function(a){return we(xe(a),"fragment")},Ki=function(a){return ve(xe(a))},Li=null;
var Mi=function(a,b){return jd(a,b||2)},Ni=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Uf(a)},Oi=function(a,b){C[a]=b},W=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=b);return C[a]},Pi=function(a,b,c){return df(a,b,void 0===c?!0:!!c)},Qi=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Vb:d};Ah(e);Hh(e)},Ri=function(a,b,c,d,e){Fh(a,b,c,d,e);},Si=function(a,b){if(td()){b&&F(b)}else Vb(a,b)},Ti=function(a){return!!Dg(a,"init",!1)},Ui=function(a){Bg(a,"init",!0)},Vi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Bc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&wa(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});M(L("https://","http://",d))},Wi=function(a,b){var c=a[b];
return c};var Yi=wg.Pg;
var Zi=new ua,$i=function(a,b){function c(h){var k=xe(h),l=we(k,"protocol"),m=we(k,"host",!0),p=we(k,"port"),n=we(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,n]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},aj=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&pa(c)){for(var d=0;d<c.length;d++)if(aj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var p;p=String(b).split(",");
return 0<=ra(p,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Zi.get(q);r||(r=new RegExp(c,t),Zi.set(q,r));n=r.test(b)}catch(v){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return $i(b,c)}return!1};var cj={},dj=function(){if(C._gtmexpgrp&&C._gtmexpgrp.hasOwnProperty(1))return C._gtmexpgrp[1];void 0===cj[1]&&(cj[1]=Math.floor(2*Math.random()));return cj[1]};var ej=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var fj={},gj=encodeURI,X=encodeURIComponent,hj=Wb;var ij=function(a,b){if(!a)return!1;var c=we(xe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var jj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};fj.Lg=function(){var a=!1;return a};var Tj=function(){var a=C.gaGlobal=C.gaGlobal||{};a.hid=a.hid||ta();return a.hid};var Ck=window,Dk=document,Ek=function(a){var b=Ck._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Ck["ga-disable-"+a])return!0;try{var c=Ck.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=df("AMP_TOKEN",Dk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Dk.getElementById("__gaOptOutExtension")?!0:!1};var Hk=function(a){return"_"===a.charAt(0)},Ik=function(a){wa(a,function(c){Hk(c)&&delete a[c]});var b=a[H.zb]||{};wa(b,function(c){Hk(c)&&delete b[c]})};var Lk=function(a,b,c){Xe(b,c,a)},Mk=function(a,b,c){Xe(b,c,a,!0)},Ok=function(a,b){},Nk=function(a,b){};
var Z={a:{}};
Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0;Z.__ctv.priorityOverride=0})(function(){return"490"})}();
Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],A=x.split(","),B=0;B<A.length;B++){var E=Number(A[B]);if(isNaN(E))return[];p.test(A[B])||z.push(E)}return z}function c(){var x=0,z=0;return function(){var A=wi(),B=A.height;x=Math.max(v.scrollLeft+A.width,x);z=Math.max(v.scrollTop+B,z);return{fg:x,gg:z}}}function d(){q=W("self");
r=q.document;v=r.scrollingElement||r.body&&r.body.parentNode;y=c()}function e(x,z,A,B){var E=l(z),G={},J;for(J in E){G.ra=J;if(E.hasOwnProperty(G.ra)){var N=Number(G.ra);x<N||(Ni({event:"gtm.scrollDepth","gtm.scrollThreshold":N,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":B,"gtm.triggers":E[G.ra].join(",")}),Cg("sdl",z,function(V){return function(S){delete S[V.ra];return S}}(G),{}))}G={ra:G.ra}}}function g(){var x=y(),z=x.fg,A=x.gg,B=z/v.scrollWidth*100,E=A/v.scrollHeight*100;e(z,"horiz.pix",
n.Cb,t.Md);e(B,"horiz.pct",n.Bb,t.Md);e(A,"vert.pix",n.Cb,t.Sd);e(E,"vert.pct",n.Bb,t.Sd);Bg("sdl","pending",!1)}function h(){var x=250,z=!1;r.scrollingElement&&r.documentElement&&q.addEventListener&&(x=50,z=!0);var A=0,B=!1,E=function(){B?A=Hi(E,x):(A=0,g(),Ti("sdl")&&!a()&&(Yb(q,"scroll",G),Yb(q,"resize",G),Bg("sdl","init",!1)));B=!1},G=function(){z&&y();A?B=!0:(A=Hi(E,x),Bg("sdl","pending",!0))};return G}function k(x,z,A){if(z){var B=b(String(x));Cg("sdl",A,function(E){for(var G=0;G<B.length;G++){var J=
String(B[G]);E.hasOwnProperty(J)||(E[J]=[]);E[J].push(z)}return E},{})}}function l(x){return Dg("sdl",x,{})}function m(x){F(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,A=x.vtp_horizontalThresholdsPixels,B=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,G=x.vtp_verticalThresholdsPixels,J=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case n.Cb:k(A,z,"horiz.pix");break;case n.Bb:k(B,z,"horiz.pct")}switch(E){case n.Cb:k(G,z,"vert.pix");break;case n.Bb:k(J,
z,"vert.pct")}Ti("sdl")?Dg("sdl","pending")||(w||(d(),w=!0),F(function(){return g()})):(d(),w=!0,v&&(Ui("sdl"),Bg("sdl","pending",!0),F(function(){g();if(a()){var N=h();Xb(q,"scroll",N);Xb(q,"resize",N)}else Bg("sdl","init",!1)})))}var p=/^\s*$/,n={Bb:"PERCENT",Cb:"PIXELS"},t={Sd:"vertical",Md:"horizontal"},q,r,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.b="sdl";Z.__sdl.g=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):Rf(function(){m(x)})})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Uh(b,c)}(function(b){Z.__flc=b;Z.__flc.b="flc";Z.__flc.g=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=jj(b.vtp_customVariable||[],"key","value")||{},e={cb:b.vtp_activityTag,Ec:c,Ca:b.vtp_conversionCookiePrefix||void 0,Kb:void 0,R:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Gc:b.vtp_advertiserId,Jc:b.vtp_groupTag,V:b.vtp_gtmOnFailure,L:b.vtp_gtmOnSuccess,
Wb:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",bd:void 0,Yb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,cc:b.vtp_transactionVariable,transactionId:void 0,fc:b.vtp_userVariable,kd:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){M("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,W("google_attr").build([jj(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(sd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=Mi("gtm.referrer",1)||D.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?we(xe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Ki(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=zg(c,"gtm.click");Ni(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Ti("cl")){var c=W("document");Xb(c,"click",a,!0);Ui("cl")}F(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Pi(a.vtp_name,Mi("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return ta(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Mi("gtm.url",1))||Ii();var d=b[a("vtp_component")];if(!d||"URL"==d)return Ki(String(c));var e=xe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?pa(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var p=0;p<m.length;p++){var n=we(e,"QUERY",void 0,void 0,m[p]);if(void 0!=n&&(!l||""!==n)){g=n;break a}}g=void 0}else g=we(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Mi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.Sc&&b.Uc>=b.Sc)b.Mc&&W("self").clearInterval(b.Mc);else{b.Uc++;var c=(new Date).getTime();Ni({event:b.Z,"gtm.timerId":b.Mc,"gtm.timerEventNumber":b.Uc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Sc,"gtm.timerStartTime":b.Ge,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Ge,"gtm.triggers":b.xh})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){F(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{Z:b.vtp_eventName,Uc:0,interval:Number(b.vtp_interval),Sc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),xh:String(b.vtp_uniqueTriggerId||"0"),Ge:(new Date).getTime()};c.Mc=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var p=d.vtp_gaSettings;u(jj(p.vtp_fieldsToSet,"fieldName","value"),g);u(jj(p.vtp_contentGroup,"index","group"),h);u(jj(p.vtp_dimension,"index","dimension"),k);u(jj(p.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;p.vtp_fieldsToSet=void 0;p.vtp_contentGroup=void 0;p.vtp_dimension=void 0;p.vtp_metric=void 0;var n=u(p);d=u(d,n)}u(jj(d.vtp_fieldsToSet,"fieldName","value"),g);u(jj(d.vtp_contentGroup,
"index","group"),h);u(jj(d.vtp_dimension,"index","dimension"),k);u(jj(d.vtp_metric,"index","metric"),l);var t=me(d.vtp_functionName);if(na(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+Ic(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(T){var P=[].slice.call(arguments,0);P[0]=q+P[0];t.apply(window,P)},x=function(T,P){return void 0===P?P:T(P)},z=function(T,P){if(P)for(var qa in P)P.hasOwnProperty(qa)&&y("set",T+qa,P[qa])},A=function(){},B=function(T,P,qa){var Ya=0;if(T)for(var Da in T)if(T.hasOwnProperty(Da)&&(qa&&v[Da]||!qa&&void 0===v[Da])){var Za=w[Da]?ya(T[Da]):T[Da];"anonymizeIp"!=Da||Za||(Za=void 0);P[Da]=Za;Ya++}return Ya},E={name:r};B(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Qh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(T,P){void 0!==d[P]&&y("set",T,d[P])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var G={};B(g,G,!1)&&y("set",G);var J;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var T=g&&g.hitCallback;na(T)&&T();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),A());var N={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(xa,d.vtp_eventValue||
e.value)};B(J,N,!1);y("send",N);}else if("TRACK_SOCIAL"==d.vtp_trackType){var V={hitType:"social",socialNetwork:String(d.vtp_socialNetwork),socialAction:String(d.vtp_socialAction),socialTarget:String(d.vtp_socialActionTarget)};B(J,V,!1);y("send",V);}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),A());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var Y=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:Y})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ea="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ea})}J?y("send","pageview",J):y("send","pageview");d.vtp_autoLinkDomains&&ne(q,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);
}if(!a){var fa=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(fa="internal/"+fa);a=!0;var Ea=L("https:","http:","//www.google-analytics.com/"+fa,g&&g.forceSSL);M(Ea,function(){var T=ke();T&&T.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else F(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();
Z.a.jel=["google"],function(){(function(a){Z.__jel=a;Z.__jel.b="jel";Z.__jel.g=!0;Z.__jel.priorityOverride=0})(function(a){if(!Ti("jel")){var b=W("self"),c=b.onerror;b.onerror=function(d,e,g,h,k){c&&c(d,e,g,h,k);Ni({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":g});return!1};Ui("jel")}F(a.vtp_gtmOnSuccess)})}();
Z.a.uv=["google"],function(){(function(a){Z.__uv=a;Z.__uv.b="uv";Z.__uv.g=!0;Z.__uv.priorityOverride=0})(function(){})}();



Z.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return D.getElementById(w)?a():w}function b(w,y){if(!w)return!1;for(var x=0;x<t.length;x++)if(0<=w.indexOf("//"+t[x]+"/"+y))return!0;return!1}function c(w){var y=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+y+"enablejsapi=1";if(!r){var x=W("document");r=x.location.protocol+"//"+x.location.hostname;x.location.port&&(r+=":"+x.location.port)}return w+y+"enablejsapi=1&origin="+encodeURIComponent(r)}function d(w,
y){var x=w.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(y)return w.setAttribute("src",c(x)),!0}return!1}function e(w,y){if(!w.getAttribute("data-gtm-yt-inspected-"+y.jd)&&(w.setAttribute("data-gtm-yt-inspected-"+y.jd,"true"),d(w,y.be))){w.id||(w.id=a());var x=W("YT"),z=x.get(w.id);z||(z=new x.Player(w.id));var A=h(z,y),B={},E;for(E in A)B.Na=E,A.hasOwnProperty(B.Na)&&z.addEventListener(B.Na,function(G){return function(J){return A[G.Na](J.data)}}(B)),B={Na:B.Na}}}
function g(w){F(function(){function y(){for(var z=x.getElementsByTagName("iframe"),A=z.length,B=0;B<A;B++)e(z[B],w)}var x=W("document");y();ei(y)})}function h(w,y){var x,z;function A(){O=Fi(function(){return{url:R,title:U,Yd:I,dg:w.getCurrentTime(),playbackRate:Y}},y.jd,w.getIframe());I=0;U=R="";Y=1;return B}function B(T){switch(T){case q.PLAYING:I=Math.round(w.getDuration());R=w.getVideoUrl();if(w.getVideoData){var P=w.getVideoData();U=P?P.title:""}Y=w.getPlaybackRate();y.Xf?O.Ob("start"):O.yc();
K=m(y.Zg,y.Yg,w.getDuration());return E(T);default:return B}}function E(){ea=w.getCurrentTime();fa=(new Date).getTime();O.kh();Q();return G}function G(T){var P;switch(T){case q.ENDED:return N(T);case q.PAUSED:P="pause";case q.BUFFERING:var qa=w.getCurrentTime()-ea;P=1<Math.abs(((new Date).getTime()-fa)/1E3*Y-qa)?"seek":P||"buffering";w.getCurrentTime()&&(y.Wf?O.Ob(P):O.yc());S();return J;case q.UNSTARTED:return A(T);default:return G}}function J(T){switch(T){case q.ENDED:return N(T);case q.PLAYING:return E(T);
case q.UNSTARTED:return A(T);default:return J}}function N(){for(;z;){var T=x;Gi(z);T()}y.Vf&&O.Ob("complete",1);return A(q.UNSTARTED)}function V(){}function S(){z&&(Gi(z),z=0,x=V)}function Q(){if(K.length&&0!==Y){var T=-1,P;do{P=K[0];if(P.oa>w.getDuration())return;T=(P.oa-w.getCurrentTime())/Y;if(0>T&&(K.shift(),0===K.length))return}while(0>T);x=function(){z=0;x=V;0<K.length&&K[0].oa===P.oa&&(K.shift(),O.Ob("progress",P.ve,P.De));Q()};z=Hi(x,1E3*T)}}var O,K=[],I,R,U,Y,ea,fa,Ea=A(q.UNSTARTED);z=0;
x=V;return{onStateChange:function(T){Ea=Ea(T)},onPlaybackRateChange:function(T){ea=w.getCurrentTime();fa=(new Date).getTime();O.yc();Y=T;S();Q()}}}function k(w){for(var y=w.split(","),x=y.length,z=[],A=0;A<x;A++){var B=parseInt(y[A],10);isNaN(B)||100<B||0>B||z.push(B/100)}z.sort(function(E,G){return E-G});return z}function l(w){for(var y=w.split(","),x=y.length,z=[],A=0;A<x;A++){var B=parseInt(y[A],10);isNaN(B)||0>B||z.push(B)}z.sort(function(E,G){return E-G});return z}function m(w,y,x){var z=w.map(function(E){return{oa:E,
De:E,ve:void 0}});if(!y.length)return z;var A=y.map(function(E){return{oa:E*x,De:void 0,ve:E}});if(!z.length)return A;var B=z.concat(A);B.sort(function(E,G){return E.oa-G.oa});return B}function p(w){w.vtp_triggerStartOption?n(w):Xd(function(){n(w)})}function n(w){var y=!!w.vtp_captureStart,x=!!w.vtp_captureComplete,z=!!w.vtp_capturePause,A=k(w.vtp_progressThresholdsPercent+""),B=l(w.vtp_progressThresholdsTimeInSeconds+""),E=!!w.vtp_fixMissingApi;if(y||x||z||A.length||B.length){var G={Xf:y,Vf:x,Wf:z,
Yg:A,Zg:B,be:E,jd:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},J=W("YT"),N=function(){g(G)};F(w.vtp_gtmOnSuccess);if(J)J.ready&&J.ready(N);else{var V=W("onYouTubeIframeAPIReady");Oi("onYouTubeIframeAPIReady",function(){V&&V();N()});F(function(){for(var S=W("document"),Q=S.getElementsByTagName("script"),O=Q.length,K=0;K<O;K++){var I=Q[K].getAttribute("src");if(b(I,"iframe_api")||b(I,"player_api"))return}for(var R=S.getElementsByTagName("iframe"),U=R.length,Y=0;Y<U;Y++)if(!v&&d(R[Y],G.be)){M("https://www.youtube.com/iframe_api");
v=!0;break}})}}else F(w.vtp_gtmOnSuccess)}var t=["www.youtube.com","www.youtube-nocookie.com"],q={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,v=!1;Z.__ytl=p;Z.__ytl.b="ytl";Z.__ytl.g=!0;Z.__ytl.priorityOverride=0}();
Z.a.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;u(jj(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var g=u(e);c=u(c,g)||{}}u(jj(c.vtp_fieldsToSet,"fieldName","value"),d);var h=me(c.vtp_functionName);if(na(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+Ic(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},p={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},n=function(y,x,z){var A=0,B;for(B in y)if(y.hasOwnProperty(B)&&
(z&&m[B]||!z&&void 0===m[B])){var E=p[B]?ya(y[B]):y[B];"anonymizeIp"!==B||E||(E=void 0);x[B]=E;A++}return A},t={name:l};n(d,t,!0);var q={"&gtm":Qh(!0)};n(d,q,!1);var r=encodeURI(L("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,t);h(k+"set",q);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,M(r,function(){return ke().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=W("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else F(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.b="opt";Z.__opt.g=!0;Z.__opt.priorityOverride=0}();
Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return wc.m})}();
Z.a.hjtc=["nonGoogleScripts"],function(){(function(a){Z.__hjtc=a;Z.__hjtc.b="hjtc";Z.__hjtc.g=!0;Z.__hjtc.priorityOverride=0})(function(a){var b=a.vtp_hotjar_site_id;Oi("hj",function(){(window.hj.q=window.hj.q||[]).push(arguments)});Oi("_hjSettings",{hjid:b,hjsv:5});M("//static.hotjar.com/c/hotjar-"+X(b)+".js?sv=5",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){F(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
ph())){Dh(a,h,k,l,void 0);}Qi(e,c,d);Mh(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var p=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Ri(a,p,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();

Z.a.aev=["google"],function(){function a(q,r){var v=sd(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var y=q+"."+r,x;if(p.hasOwnProperty(y))x=p[y];else{var z=a(q,w);if(z&&(x=v(z),p[y]=x,n.push(y),35<n.length)){var A=n.shift();delete p[A]}}return x}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(Ii());pa(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(q))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!ij(q,w)}function e(q){m.test(q)||(q="http://"+q);return we(xe(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(r,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(r,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Zb(q,"value");case "button":return $b(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Yh(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Zb(w,r)||v}var m=/^https?:\/\//i,p={},n=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||
v;case "TEXT":return b(r,w,$b)||v;case "URL":var x;a:{var z=String(a(r,"elementUrl")||v||""),A=xe(z),B=String(q.vtp_component||"URL");switch(B){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,q.vtp_affiliatedDomains);break a;default:x=we(A,B,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var G=q.vtp_attribute,J=a(r,"element");E=J&&Zb(J,G)||v||""}return E;case "MD":var N=q.vtp_mdValue,V=b(r,"MD",si);return N&&V?vi(V,N)||
v:V||v;case "FORM":return g(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=u(a),c=b;c[Fb.ka]=null;c[Fb.pf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:Ii()}function b(g,h){Xb(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:Ki(l),F:Ji(l)})})}function c(g,h){Xb(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:Ki(l),F:Ji(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(na(m))try{l[g]=function(p,n,t){m.apply(l,[].slice.call(arguments,0));k({source:g,state:p,url:Ki(Ii()),
F:Ji(Ii())})}}catch(p){}}function e(){var g={source:null,state:W("history").state||null,url:Ki(Ii()),F:Ji(Ii())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.F!=h.F){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.F,"gtm.newUrlFragment":h.F,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;Ni(m)}}}(function(g){Z.__hl=g;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(g){var h=W("self");if(!Ti("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Ui("hl")}F(g.vtp_gtmOnSuccess)})}();
Z.a.bzi=["nonGoogleScripts"],function(){(function(a){Z.__bzi=a;Z.__bzi.b="bzi";Z.__bzi.g=!0;Z.__bzi.priorityOverride=0})(function(a){try{C._bizo_data_partner_id=a.vtp_id,C._bizo_data_partner_title=a.vtp_title,C._bizo_data_partner_domain=a.vtp_domain,C._bizo_data_partner_company=a.vtp_company,C._bizo_data_partner_location=a.vtp_location,C._bizo_data_partner_employee_range=a.vtp_employeeRange,C._bizo_data_partner_sics=a.vtp_standardIndustrialClassification,C._bizo_data_partner_email=a.vtp_email,M(L("https://sjs",
"http://js",".bizographics.com/insight.min.js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}catch(b){F(a.vtp_gtmOnFailure)}})}();Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Z.a.fsl=[],function(){function a(){var e=W("document"),g=c(),h=HTMLFormElement.prototype.submit;Xb(e,"click",function(k){var l=k.target;if(l&&(l=bc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Zb(l,"value")){var m;(m=l.form?l.form.tagName?l.form:D.getElementById(l.form):bc(l,["form"],100))&&g.store(m,l)}},!1);Xb(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,p=b(l)&&!m,n=g.get(l),t=!0;if(d(l,function(){if(t){var q;
n&&(q=e.createElement("input"),q.type="hidden",q.name=n.name,q.value=n.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,p,n))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return sa(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=Dg("fsl",h?"nv.mwt":"mwt",0),p;p=h?Dg("fsl","nv.ids",[]):Dg("fsl","ids",[]);if(!p.length)return!0;var n=zg(e,"gtm.formSubmit",p),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);n["gtm.elementUrl"]=t;l&&(n["gtm.formSubmitElement"]=l);if(k&&m){if(!Ni(n,Vf(g),m))return!1}else Ni(n,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(n){return Math.max(k,n)};Cg("fsl","mwt",m,0);h||Cg("fsl","nv.mwt",m,0)}var p=function(n){n.push(l);return n};Cg("fsl","ids",p,[]);h||Cg("fsl","nv.ids",p,[]);Ti("fsl")||(a(),Ui("fsl"));F(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=jj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){F(a.vtp_gtmOnFailure)})}();

Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=D.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var p=k.getAttribute("data-gtmsrc");p&&(m.src=p,Sb(m,l));d.insertBefore(m,null);p||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var n=
[];k.firstChild;)n.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,n,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){F(h)}}}var c=function(d){if(D.body){var e=
d.vtp_gtmOnFailure,g=Yi(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Kc,k=g.L;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(D.body,ac(h),k,e)()}else Hi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();


Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.a.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=bc(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=Dg("lcl",k?"nv.mwt":"mwt",0),m;m=k?Dg("lcl","nv.ids",[]):Dg("lcl","ids",[]);if(m.length){var p=zg(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var n=W((Wi(h,"target")||"_self").substring(1)),t=!0;if(Ni(p,Vf(function(){t&&n&&(n.location.href=Wi(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else Ni(p,function(){},l||2E3);return!0}}};Xb(c,"click",e,!1);Xb(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=Wi(d,"href"),h=g.indexOf("#"),k=Wi(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Ki(g),m=Ki(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};Cg("lcl","mwt",k,0);e||Cg("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};Cg("lcl","ids",l,[]);e||Cg("lcl","nv.ids",l,[]);Ti("lcl")||(a(),Ui("lcl"));F(c.vtp_gtmOnSuccess)})}();
Z.a.evl=["google"],function(){function a(g,h){this.element=g;this.uid=h}function b(){var g=Number(Mi("gtm.start"))||0;return(new Date).getTime()-g}function c(g,h,k,l){function m(){if(!yi(g.target)){h.has(e.Db)||h.set(e.Db,""+b());h.has(e.vc)||h.set(e.vc,""+b());var n=0;h.has(e.Gb)&&(n=Number(h.get(e.Gb)));n+=100;h.set(e.Gb,""+n);if(n>=k){var t=zg(g.target,"gtm.elementVisibility",[h.uid]),q=xi(g.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.vc));
t["gtm.visibleLastTime"]=Number(h.get(e.Db));Ni(t);l()}}}if(!h.has(e.$a)&&(0==k&&m(),!h.has(e.Aa))){var p=W("self").setInterval(m,100);h.set(e.$a,p)}}function d(g){g.has(e.$a)&&(W("self").clearInterval(Number(g.get(e.$a))),g.remove(e.$a))}var e={$a:"polling-id-",vc:"first-on-screen-",Db:"recent-on-screen-",Gb:"total-visible-time-",Aa:"has-fired-"};a.prototype.has=function(g){return!!this.element.getAttribute("data-gtm-vis-"+g+this.uid)};a.prototype.get=function(g){return this.element.getAttribute("data-gtm-vis-"+
g+this.uid)};a.prototype.set=function(g,h){this.element.setAttribute("data-gtm-vis-"+g+this.uid,h)};a.prototype.remove=function(g){this.element.removeAttribute("data-gtm-vis-"+g+this.uid)};(function(g){Z.__evl=g;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(g){function h(){var y=!1,x=null;if("CSS"===l){try{x=Df(m)}catch(G){}y=!!x&&v.length!=x.length}else if("ID"===l){var z=D.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var A=0;A<v.length;A++){var B=
new a(v[A],q);d(B)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&Ei(w);0<v.length&&(w=Di(k,v,[t]))}}function k(y){var x=new a(y.target,q);y.intersectionRatio>=t?x.has(e.Aa)||c(y,x,n,"ONCE"===r?function(){for(var z=0;z<v.length;z++){var A=new a(v[z],q);A.set(e.Aa,"1");d(A)}Ei(w);if(p&&di)for(var B=0;B<di.length;B++)di[B]===h&&di.splice(B,1)}:function(){x.set(e.Aa,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===r&&x.has(e.Aa)&&(x.remove(e.Aa),x.remove(e.Gb)),x.remove(e.Db))}var l=g.vtp_selectorType,m;"ID"===
l?m=String(g.vtp_elementId):"CSS"===l&&(m=String(g.vtp_elementSelector));var p=!!g.vtp_useDomChangeListener,n=g.vtp_useOnScreenDuration&&Number(g.vtp_onScreenDuration)||0,t=(Number(g.vtp_onScreenRatio)||50)/100,q=g.vtp_uniqueTriggerId,r=g.vtp_firingFrequency,v=[],w=-1;h();p&&ei(h);F(g.vtp_gtmOnSuccess)})}();

var al={};al.macro=function(a){if(wg.xc.hasOwnProperty(a))return wg.xc[a]},al.onHtmlSuccess=wg.Xd(!0),al.onHtmlFailure=wg.Xd(!1);al.dataLayer=kd;al.callback=function(a){Gc.hasOwnProperty(a)&&na(Gc[a])&&Gc[a]();delete Gc[a]};al.Of=function(){xc[wc.m]=al;Ga(Hc,Z.a);xb=xb||wg;yb=Pd};
al.Gg=function(){rh.gtm_3pds=!0;xc=C.google_tag_manager=C.google_tag_manager||{};if(xc[wc.m]){var a=xc.zones;a&&a.unregisterChild(wc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)tb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)sb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],n={},t=0;t<p.length;t++)n[p[t][0]]=Array.prototype.slice.call(p[t],1);qb.push(n)}vb=Z;wb=aj;al.Of();$f();Sd=!1;Td=0;if("interactive"==D.readyState&&!D.createEventObject||"complete"==D.readyState)Vd();else{Xb(D,"DOMContentLoaded",Vd);Xb(D,"readystatechange",Vd);if(D.createEventObject&&D.documentElement.doScroll){var q=!0;try{q=!C.frameElement}catch(y){}q&&Wd()}Xb(C,"load",Vd)}Of=!1;"complete"===D.readyState?Qf():
Xb(C,"load",Qf);a:{if(!ad)break a;C.setInterval(bd,864E5);}
Dc=(new Date).getTime();}};(0,al.Gg)();

})()
