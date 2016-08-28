"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),Alerts=function(){function e(){_classCallCheck(this,e);var t=this;t.mdl=new Vue({el:"#alerts",data:{children:[]},methods:{acknowledge:function(e){t.close(e)}}}),t.uidNext=1}return _createClass(e,[{key:"push",value:function(e){var t=this,n=_.defaults(e,{_uid:t.uidNext,class:"is-info",message:"---",sticky:!1,title:"---"});t.mdl.children.push(n),n.sticky||_.delay(function(){t.close(n._uid)},5e3),t.uidNext++}},{key:"pushError",value:function(e,t){this.push({class:"is-danger",message:t,sticky:!1,title:e})}},{key:"pushSuccess",value:function(e,t){this.push({class:"is-success",message:t,sticky:!1,title:e})}},{key:"close",value:function(e){var t=this,n=_.findIndex(t.mdl.children,["_uid",e]),s=_.nth(t.mdl.children,n);n>=0&&s&&(s.class+=" exit",t.mdl.children.$set(n,s),_.delay(function(){t.mdl.children.$remove(s)},500))}}]),e}();jQuery(document).ready(function(e){e("a").smoothScroll({speed:400,offset:-20});var t=(new Sticky(".stickyscroll"),new Alerts);if(alertsData&&_.forEach(alertsData,function(e){t.push(e)}),1===e("#mk-editor").length){new SimpleMDE({autofocus:!0,element:e("#mk-editor").get(0),autoDownloadFontAwesome:!1,placeholder:"Enter Markdown formatted content here...",hideIcons:["heading","quote"],showIcons:["strikethrough","heading-1","heading-2","heading-3","code","table","horizontal-rule"],spellChecker:!1})}});