(function(t){function e(e){for(var i,r,a=e[0],l=e[1],c=e[2],p=0,u=[];p<a.length;p++)r=a[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"41f0":function(t,e,n){},"4e6b":function(t,e,n){t.exports=n.p+"img/roomNo.61738bc6.svg"},5106:function(t,e,n){"use strict";n("8a4c")},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("XML")],1)},s=[],r=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"xml",attrs:{"element-loading-text":"Please wait for settings...","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[e("div",{staticClass:"xml-box",class:{ghp1:t.isGHP61}},[e("ul",{staticClass:"xmls"},[e("div",{staticClass:"ghp-type"},[e("p",[t._v("Chiose GHP Model")]),e("el-select",{model:{value:t.isGHP61,callback:function(e){t.isGHP61=e},expression:"isGHP61"}},[e("el-option",{key:"GHP62x",attrs:{value:!1,label:"GHP62x"}},[t._v("GHP62x")]),e("el-option",{key:"GHP61x",attrs:{value:!0,label:"GHP61x"}},[t._v("GHP61x")])],1)],1),e("div",{staticClass:"xml-card"},[e("Qeditor",{directives:[{name:"show",rawName:"v-show",value:!t.isGHP61,expression:"!isGHP61"}],on:{editor:t.setEditorHtml}}),e("div",{staticClass:"xml-icons"},t._l(t.isGHP61?t.selectMpk.slice(0,3):t.selectMpk,(function(n,i){return e("li",{key:i,staticClass:"xml"},[e("div",{staticClass:"edit",class:{none:"-1"===n.keyMode},on:{click:function(e){return t.AddIcon(i,"-1"===n.keyMode)}}},[n.icon?e("i",{staticClass:"icon-mpk",class:"icon-"+n.icon}):e("i",{staticClass:"icon-xml_select"}),e("i",{staticClass:"icon-xml_edit"}),n.icon?e("i",{staticClass:"icon-arr_del",on:{click:function(t){return t.stopPropagation(),(()=>{n.icon=""}).apply(null,arguments)}}}):t._e()]),e("ul",{staticClass:"opts"},[e("li",[e("el-input",{attrs:{disabled:"-1"===n.keyMode,placeholder:t.$t("LABEL")},model:{value:n.description,callback:function(e){t.$set(n,"description",e)},expression:"mpk.description"}})],1)])])})),0)],1)]),e("div",{staticClass:"xml-print"},[e("p",[t._v("Preview")]),e("ul",{ref:"print",class:t.isGHP61?"ghp1":"ghp2"},[t.isGHP61?t._e():e("div",{staticClass:"box"},[e("div",{staticClass:"led"}),e("div",{staticClass:"equill ql-editor",domProps:{innerHTML:t._s(t.editorHtml)}})]),t._l(t.isGHP61?t.selectMpk.slice(0,3):t.selectMpk,(function(n,i){return e("li",{key:i,class:[{before:i<3},{center:4==i||1===i}]},[t.mpkList[i].icon?e("i",{staticClass:"icon-print",class:"icon-"+t.mpkList[i].icon}):e("i",{staticClass:"icon-xml_select_nor"}),e("p",[t._v(t._s(t.mpkList[i].description))]),e("div")])}))],2)])]),t.isGHP61?t._e():e("div",{staticClass:"set-print"},[t._m(0),t._m(1),e("p",{staticClass:"set"},[e("span",{staticClass:"dot"},[t._v("2")]),t._v("Set room number range "),e("el-input",{attrs:{placeholder:"3001,4001,5001 OR 001-009"},model:{value:t.room_no,callback:function(e){t.room_no=e},expression:"room_no"}}),t._v(" Different variable values should be separated by commas, such as 300140015001. If it is a numerical range, please add '-' to the first and last digits, such as 001-099 ")],1),e("p",{staticClass:"start"},[e("span",{staticClass:"dot"},[t._v("3")]),t._v("Start: Click this button to perform the batch room number customize"),e("el-button",{attrs:{type:"primary"},on:{click:t.getBatchDoc}},[t._v("Start")])],1),t._m(2)]),e("div",{staticClass:"print-card2"},[e("div",{ref:"printDoc2",staticClass:"doc"},[e("div",{staticClass:"d-top"},[t._m(3),e("div",{staticClass:"d-right"},[e("p",{staticClass:"d-title"},[t._v("Silkprint content:")]),t._m(4),t._m(5),t.isGHP61?t._e():e("div",{staticClass:"d-row led"},[t._m(6),t._m(7),e("div",{staticClass:"color"})])])]),e("div",{staticClass:"d-bottom"},[e("div",{staticClass:"warn"},[e("p",[t._v("Note：")]),e("p",[t._v("1. Lens thickness is "+t._s(t.isGHP61?"0.2":"0.8")+"MM")]),e("p",[t._v("2. The silkprint color number on the surface of all accessories corresponds to the PANTONE number (except the user-defined color), or the specified sample color card is provided")]),e("p",[t._v("3. All silkprint content is provided in 1:1, and the silkprint position is indicated")]),e("p",[t._v("4. All sample should follow "+t._s(t.table.fun)+" requirements")]),e("p",[t._v(t._s(t.table.note))])]),e("div",{staticClass:"aa"},[e("table",[e("tr",{staticClass:"t-head"},[e("td",{attrs:{colspan:"3"}},[t._v(t._s(t.table.company))]),e("td",[t._v("Phone Model")]),e("td",{attrs:{colspan:"3"}},[e("strong",[t._v(t._s(t.isGHP61?"GHP610X/611X":"GHP620X/621X"))])])]),e("tbody",[e("tr",[e("td",[t._v("Designer")]),e("td",{attrs:{colspan:"2"}},[t._v(t._s(t.table.designer))]),e("td",{attrs:{rowspan:"2"}},[t._v("Class")]),t._m(8)]),e("tr",[e("td",[t._v("Cartographer")]),e("td",{attrs:{colspan:"2"}},[t._v(t._s(t.table.imgmaker))])]),e("tr",[e("td",[t._v("Reviwer")]),e("td",[t._v("CMF")]),e("td",[t._v(t._s(t.table.cmf))]),e("td",[t._v("Scale")]),e("td",[t._v("Version")]),e("td",[t._v("Date")]),e("td",[t._v("Page")])]),e("tr",{staticClass:"t-foot"},[e("td",[t._v("Reviewer")]),e("td",[t._v("MD")]),e("td",[t._v(t._s(t.table.md))]),e("td",[t._v("1:1")]),e("td",[t._v(t._s(t.table.verstion))]),e("td",[t._v(t._s(t.today))]),e("td",[t._v("1/1")])])])])])])])]),e("div",{staticClass:"print-card"},[e("div",{ref:"printDoc",staticClass:"doc"},[e("div",{staticClass:"d-top"},[t._m(9),e("div",{staticClass:"d-right"},[e("p",{staticClass:"d-title"},[t._v("Silkprint content:")]),t._m(10),t._m(11),t.isGHP61?t._e():e("div",{staticClass:"d-row led"},[t._m(12),t._m(13),e("div",{staticClass:"color"})])])]),e("div",{staticClass:"d-bottom"},[e("div",{staticClass:"warn"},[e("p",[t._v("Note:")]),e("p",[t._v("1. Lens thickness is "+t._s(t.isGHP61?"0.2":"0.8")+"MM")]),e("p",[t._v("2. The silkprint color number on the surface of all accessories corresponds to the PANTONE number (except the user-defined color), or the specified sample color card is provided")]),e("p",[t._v("3. All silkprint content is provided in 1:1, and the silkprint position is indicated")]),e("p",{staticClass:"fun"},[t._v("4. All sample should follow "),e("el-input",{attrs:{placeholder:"______________"},model:{value:t.table.fun,callback:function(e){t.$set(t.table,"fun",e)},expression:"table.fun"}}),t._v(" requirements")],1),e("p",[e("el-input",{attrs:{placeholder:"5. Input something more here...."},model:{value:t.table.note,callback:function(e){t.$set(t.table,"note",e)},expression:"table.note"}})],1)]),e("table",[e("tr",{staticClass:"t-head"},[e("td",{attrs:{colspan:"3"}},[e("el-input",{attrs:{placeholder:"Company"},model:{value:t.table.company,callback:function(e){t.$set(t.table,"company",e)},expression:"table.company"}})],1),e("td",[t._v("Phone Model")]),e("td",{attrs:{colspan:"3"}},[e("strong",[t._v(t._s(t.isGHP61?"GHP610X/611X":"GHP620X/621X"))])])]),e("tbody",[e("tr",[e("td",[t._v("Designer")]),e("td",{attrs:{colspan:"2"}},[e("el-input",{attrs:{placeholder:"Name"},model:{value:t.table.designer,callback:function(e){t.$set(t.table,"designer",e)},expression:"table.designer"}})],1),e("td",{attrs:{rowspan:"2"}},[t._v("Class")]),t._m(14)]),e("tr",[e("td",[t._v("Cartographer")]),e("td",{attrs:{colspan:"2"}},[e("el-input",{attrs:{placeholder:"Name"},model:{value:t.table.imgmaker,callback:function(e){t.$set(t.table,"imgmaker",e)},expression:"table.imgmaker"}})],1)]),e("tr",[e("td",[t._v("Reviewer")]),e("td",[t._v("CMF")]),e("td",[e("el-input",{attrs:{placeholder:"Name"},model:{value:t.table.cmf,callback:function(e){t.$set(t.table,"cmf",e)},expression:"table.cmf"}})],1),e("td",[t._v("Scale")]),e("td",[t._v("Version")]),e("td",[t._v("Date")]),e("td",[t._v("Page")])]),e("tr",{staticClass:"t-foot"},[e("td",[t._v("Reviewer")]),e("td",[t._v("MD")]),e("td",[e("el-input",{attrs:{placeholder:"Name"},model:{value:t.table.md,callback:function(e){t.$set(t.table,"md",e)},expression:"table.md"}})],1),e("td",[t._v("1:1")]),e("td",[e("el-input",{attrs:{placeholder:"Version number"},model:{value:t.table.verstion,callback:function(e){t.$set(t.table,"verstion",e)},expression:"table.verstion"}})],1),e("td",[t._v(t._s(t.today))]),e("td",[t._v("1/1")])])])])])])]),e("div",{staticClass:"xml-btns"},[t.isGHP61?e("el-button",{staticClass:"saveBtn",attrs:{type:"primary"},on:{click:t.saveMpkList}},[t._v("Save")]):e("el-button",{staticClass:"saveBtn",attrs:{type:"primary"},on:{click:t.saveHtml}},[t._v("Save")]),e("el-button",{class:{ghp2:!t.isGHP61},attrs:{disabled:!t.printable,title:t.printable?"":t.$t("PRINTABLE")},on:{click:t.print}},[t._v("Print")])],1),e("el-dialog",{attrs:{center:!0,title:"Select an icon",visible:t.dialogVisible,width:"840px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("ul",{staticClass:"select-icon"},t._l(t.icons,(function(n){return e("li",{key:n},[e("p",{on:{click:function(e){t.selectedIcon=n}}},[e("i",{class:"icon-"+n})]),n===t.selectedIcon?e("i",{staticClass:"icon-arr_select"}):t._e(),e("p",{domProps:{textContent:t._s(t.mapIcon[n])}})])})),0),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary",disabled:!t.selectedIcon},domProps:{textContent:t._s("Save")},on:{click:t.saveMPK}}),e("el-button",{domProps:{textContent:t._s("Cancel")},on:{click:function(e){t.dialogVisible=!1}}})],1)])],1)},a=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"title"},[t._v("Config batch printing room numbers"),e("span",[t._v("(For customizing room number batch production, support number only)")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"mark"},[e("span",{staticClass:"dot"},[t._v("1")]),t._v("Mark the number: select the room number zoom, then click "),e("img",{attrs:{src:n("4e6b"),width:"18",height:"18"}}),t._v(" to set the mark. ")])},function(){var t=this,e=t._self._c;return e("p",[e("span",{staticClass:"dot"},[t._v("4")]),t._v("Tip: Please wait for the batch customize file generation, if the range is large.")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-left"},[e("p",{staticClass:"d-title"},[t._v("Silkprint position:")]),e("div",{attrs:{id:"dxml"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-row keys"},[e("div",{staticClass:"d-img"},[e("div",{attrs:{id:"dicon"}})]),e("div",{staticClass:"d-desc"},[e("p",[e("strong",[t._v("Character:")])]),e("p",[t._v("Pantone Cool Gray 6 C")]),e("p",[t._v("Silkprint on the backside")])]),e("div",{staticClass:"color"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-row bg"},[e("div",{staticClass:"d-img"},[e("div",{attrs:{id:"noicon"}})]),e("div",{staticClass:"d-desc"},[e("p",[e("strong",[t._v("Background color:")])]),e("p",[t._v("Pantone Black C")]),e("p",[t._v("Silkprint on the backside")])]),e("div",{staticClass:"color"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-img"},[e("div",{attrs:{id:"led"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-desc"},[e("p",[e("strong",[t._v("Message LED zoom:")])]),e("p",[t._v("Silkprint on the backside with translucency black color")]),e("p",[t._v("Effect: Hidden when LED off, visable when LED on")]),e("p",[t._v("Transparent Rate 10±5%,")])])},function(){var t=this,e=t._self._c;return e("td",{attrs:{rowspan:"2",colspan:"3"}},[e("strong",[t._v("Lens silkprint")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-left"},[e("p",{staticClass:"d-title"},[t._v("Silkprint position:")]),e("div",{attrs:{id:"dxml"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-row keys"},[e("div",{staticClass:"d-img"},[e("div",{attrs:{id:"dicon"}})]),e("div",{staticClass:"d-desc"},[e("p",[e("strong",[t._v("Character:")])]),e("p",[t._v("Pantone Cool Gray 6 C")]),e("p",[t._v("Silkprint on the backside")])]),e("div",{staticClass:"color"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-row bg"},[e("div",{staticClass:"d-img"},[e("div",{attrs:{id:"noicon"}})]),e("div",{staticClass:"d-desc"},[e("p",[e("strong",[t._v("Background color")])]),e("p",[t._v("Pantone Black C")]),e("p",[t._v("Silkprint on the backside")])]),e("div",{staticClass:"color"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-img"},[e("div",{attrs:{id:"led"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-desc"},[e("p",[e("strong",[t._v("Message LED zoom:")])]),e("p",[t._v("Silkprint on the backside with translucency black color")]),e("p",[t._v("Effect: Hidden when LED off, visable when LED on")]),e("p",[t._v("Transparent Rate 10±5%,")])])},function(){var t=this,e=t._self._c;return e("td",{attrs:{rowspan:"2",colspan:"3"}},[e("strong",[t._v("Lens silkprint")])])}],l=(n("14d9"),n("5b81"),n("3748")),c='\n\nhtml,\n    body {\n      width: 100%;\n      height: 100%;\n      padding: 0;\n      margin: 0;\n      -webkit-print-color-adjust: exact;\n        //   font-family:"Open Sans","SimHei",sans-serif !important;\n        //   font-family:"Open Sans",sans-serif,"SimHei" !important;\n\n    }\n    .doc {\n      margin-bottom:125px;\n      border: 2px solid #000;\n      height: auto;\n      box-sizing: border-box;\n    }\n    .d-bottom {\n      height: auto;\n      border-top: 2px solid #000;\n      font-size: 14px;\n      padding-left: 20px;\n      box-sizing: border-box;\n      background: #f2f3f4;\n      display: flex;\n    }\n    .d-bottom .warn {\n        flex:1;\n    }\n    .d-bottom   p {\n        margin: 4px;\n      }\n    td {\n      border: 1px solid #000;\n      border-right: none;\n      height:auto;\n    }\n    .t-head td{\n        border-top: none;\n    }\n    .t-foot td{\n        border-bottom: none;\n        min-width:50px;\n    }\n    .aa {\n        flex: 1;\n        width: 50%;\n    }\n    .d-bottom table {\n      text-align: center;\n      vertical-align: center;\n      border-collapse: collapse;\n      font-size: 12px;\n      border-left: 1px solid #000;\n      width: 100%;\n      height:100%;\n    }\n    .ttest {\n        background:red;\n    }\n\n    .d-top {\n        padding: 40px 0 20px;\n        box-sizing: border-box;\n        height: 85%;\n        display: flex;\n      }\n    .d-left {\n      min-width:30%;\n      width: auto;\n      height: 100%;\n      border-right: 2px solid #000;\n    }\n    .d-left #dxml .ghp2{\n        margin:200px auto;\n    }\n    .d-left #dxml .ghp1{\n        margin:200px 0;\n    }\n    .d-right {\n      flex:1;\n      height: 100%;\n      padding: 0 50px;\n      box-sizing: border-box;\n      display: flex;\n      flex-direction: column;\n    }\n    .keys ul {\n      background: #fff;\n    }\n    .keys ul .icon-print:before {\n      color: #fff;\n    }\n    .bg ul li{\n        display: none;\n    }\n    .d-title {\n      margin-top: -20px;\n      margin-left: 30px;\n      overflow: hidden;\n    }\n    .d-row {\n      position: relative;\n      height: auto;\n      border-bottom: 1px dashed #000;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n    .d-desc {\n        overflow: hidden;\n          width: 40%;\n          height:auto;\n        padding-top: 20px;\n    }\n    .color {\n      width: 50px;\n      height: 30px;\n      background: #000;\n      position: absolute;\n      bottom: 0;\n      right: 0;\n    }\n    .keys .color{\n        background: #AAABAE;\n    }\n\n    /* *************************************字符区域 */\n    #dicon{\n        overflow:hidden;\n    }\n    #dicon .ghp2{\n        margin:-25% 0;\n    }\n    #dicon .ghp2 .box{\n        text-shadow:#000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0;\n    }\n    #dicon .ghp2 .box .led{\n        display:none;\n    }\n\n    /* *************************************底色区域 */\n    #noicon{\n        overflow:hidden;\n    }\n    #noicon .ghp2{\n        margin:-25% 0;\n    }\n    #noicon .ghp2 .box .led{\n        background:#fff;\n    }\n    #noicon .ghp2 li{\n        display: unset;\n    }\n    #noicon .ghp2 li p{\n        color:#000;\n    }\n    #noicon .ghp2 li i{\n        background:#000;\n    }\n\n    /* *************************************指示灯区域 */\n    #led .ghp2 {\n        height:auto;\n    }\n    #led .ghp2 .box {\n        height:auto;\n    }\n    #led .ghp2 .box .equill{\n        display:none;\n    }\n    #led .ghp2 .box .led{\n        background:#000;\n    }\n    #led .ghp2 li{\n        display:none\n    }\n\n\n    ',d=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"qeditor"}},[e("quill-editor",{ref:"qeditor",attrs:{options:t.editorOption},on:{change:function(e){return t.onEditorChange(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},p=[],u=(n("edce"),n("9339")),m=n.n(u),h=n("953d"),g=n("f318"),f=n.n(g);const v=n("4e6b");m.a.register("modules/imageResize",f.a);const b=m.a.import("attributors/style/size");b.whitelist=["12px","14px","16px","18px","20px","22px","24px","36px","48px"],m.a.register(b,!0);const _=m.a.import("attributors/style/font"),x=["Open Sans","Anton","Playfair","Asul"];_.whitelist=x,m.a.register(_,!0);var k={name:"qeditor",components:{quillEditor:h["quillEditor"]},mounted(){const t=document.querySelector(".ql-roomNo"),e=document.createElement("img");e.src=v,t.appendChild(e)},data(){return{content:"",editorOption:{modules:{toolbar:{container:[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{header:1},{header:2}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{size:b.whitelist}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:x}],[{align:[]}],["clean"],["image"],["roomNo"]],handlers:{roomNo:this.roomNo}},imageResize:{displayStyles:{backgroundColor:"black",border:"none",color:"white"},modules:["Resize","DisplaySize","Toolbar"]}}}}},created(){const t=localStorage.getItem("editorHtml");this.content=t},methods:{onEditorChange({html:t}){this.$emit("editor",t)},roomNo(){const t=document.querySelectorAll(".room-no");t.forEach(t=>{t.classList.remove("room-no")});const{focusNode:e,baseOffset:n}=window.getSelection();if(!n)return this.$message.error("请选择需要标记的内容");const i=e.parentNode;i.className="room-no";const o=document.querySelector(".ql-editor").innerHTML;this.$message.success("标记成功"),this.$emit("editor",o)}}},C=k,y=n("2877"),P=Object(y["a"])(C,d,p,!1,null,null,null),S=P.exports;const w='\nul {\n          font-family:"Open Sans","SimHei",sans-serif !important;\n        //   font-family:"Open Sans",sans-serif,"SimHei" !important;\n//   width: 132.3px;\n  width: 264.5px;\n  height: 64.2px;\n  background: #09090b;\n  border-radius: 8px;\n  box-sizing: border-box;\n  list-style: none;\n  padding: 0;\n  padding-top: 2px;\n  transform:scale(0.5);//整体缩放\n}\nul li {\n  height:auto;\n  overflow: hidden;\n  box-sizing: border-box;\n  text-align: center;\npadding: 0;\npadding-top:4px;\n\n}\nul li .icon-print {\n    //   font-size: 18px;\n    font-size: 34px;\n    background: #AAABAE;\n    border-radius: 6px;\n    margin:0px;\n    color:black !important;\n}\n.icon-print:before{\n    color: #000;\n}\nul li .icon-xml_select_nor:before {\n    // font-size:18px;\n    font-size:34px;\n    color:#AAABAE;\n}\nul li p {\n  color: #AAABAE;\n  text-align: center;\n  white-space: nowrap;\n  padding: 0px;\n  margin:0px;\n  font-weight: blod;\n}\n\n\nul.ghp1 {\n  display: flex;\n}\nul.ghp1 li {\n    flex: 1;\n  height: inherit;\n}\nul.ghp1 li p {\n  font-size: 12px;\n  line-height: 16px;\n  transform:scale(0.8);\n}\nul.ghp1 li > div {\n  display: none;\n}\n\n/* ******************GHP2x******************* */\nul.ghp2 {\n  height: 649px;\n  width: 448px;\n  display: block;\n  border-radius: 30px;\n  padding: 0;\n   transform: scale(0.564);\n}\nul.ghp2 .box {\n  height: 387px;\n  border-radius: 30px;\n  margin:0;\n  padding:0;\n  font-size:12px;\n\n}\nul.ghp2 .box .led {\n  width: 66.87px;\n  height: 16.73px;\n  background: #606467;\n  border-radius: 8.36px;\n  float: right;\n  margin: 20px;\n}\nul.ghp2 .box .equill{\n    float: left;\n    height: 320px;\n    overflow: hidden;\n    color: #fff;\n    width: 100%;\n    padding: 0 15px;\n    box-sizing: border-box;\n}\nul.ghp2 .box .equill img {\n    max-width: 100% !important;\n}\nul.ghp2 li {\n  width: 38.84%;\n  float: left;\n  height: auto;\n  padding-top: 0 !important;\n  \n}\nul.ghp2 li.before {\n  margin-bottom: 32px;\n}\nul.ghp2 li.center {\n  width: 22.32%;\n}\nul.ghp2 li p {\n  height: 27px;\n  margin: 0;\n  font-size:14px;\n}\nul.ghp2 li div {\n  background: #fff !important;\n  margin: 0 auto;\n  width: 66px;\n  height: 37px;\n  background: #47474e;\n  border-radius: 8.02px;\n}\nul.ghp2 li .icon-xml_select_nor::before {\n  font-size: 34px;\n}\nul.ghp2 li .icon-print {\n  font-size: 34px;\n}\n\n',H="\n        @page {\n          /* 横向（宽度展示内容更大） */\n          size: A4 landscape;\n}",M="\n        @page {\n          /* 横向（宽度展示内容更大） */\n          size:20in 15in;\n}";var G={components:{Qeditor:S},data(){return{type:0,dialogVisible:!1,selectMpk:null,mpkList:[{description:"Front Desk",icon:"FD-1"},{description:"Room Service",icon:"RS-1"},{description:"Emergency",icon:"EM-1"},{description:"Wake-Up",icon:"WU-1"},{description:"Restaurant",icon:"RS-2"},{description:"Housekeeping",icon:"HK-1"},{description:"Front Desk",icon:"FD-2"},{description:"Concierge Service",icon:"FD-3"},{description:"Messages Service",icon:"MS-1"},{description:"Luggage Storage",icon:"VA-1"},{description:"Laundry Service",icon:"VA-2"},{description:"Room Service",icon:"RS-4"},{description:"Room Service",icon:"RS-3"},{description:"Restaurant",icon:"RS-5"},{description:"Vehicle Service",icon:"TR-1"},{description:"Port Service",icon:"TR-2"},{description:"Airport Services",icon:"TR-3"},{description:"Maintenance",icon:"MT-1"},{description:"Business",icon:"BU-1"},{description:"Conference",icon:"BU-2"},{description:"Fishing",icon:"AC-1"},{description:"Cycling",icon:"AC-2"},{description:"Swimming",icon:"AC-3"},{description:"Riding",icon:"AC-4"},{description:"Golf",icon:"AC-5"},{description:"Rowing",icon:"AC-6"},{description:"Bowling",icon:"AC-7"},{description:"Fitness Center",icon:"HB-1"},{description:"Massage Service",icon:"HB-2"},{description:"Haircut",icon:"HB-3"},{description:"Gif",icon:"IN-1"},{description:"Information",icon:"IN-2"},{description:"Photo Service",icon:"IN-3"},{description:"Operator",icon:"OP-1"},{description:"Reservation",icon:"OP-2"},{description:"Evaluation",icon:"OP-3"},{description:"Karaoke",icon:"GP-1"},{description:"Movies",icon:"GP-2"},{description:"Exchange Money",icon:"GP-3"},{description:"Summer Holiday",icon:"GP-4"},{description:"Temperature",icon:"GP-5"},{description:"TV",icon:"GP-6"},{description:"Sleep",icon:"GP-7"},{description:"Taxi",icon:"TT-1"},{description:"Gas Pump",icon:"TT-2"},{description:"Towing",icon:"TT-3"},{description:"Open Doo",icon:"OD-1"}],icons:["WU-1","VA-2","VA-1","TT-3","TT-2","TT-1","TR-3","TR-2","TR-1","RS-5","RS-4","RS-3","RS-2","RS-1","OP-3","OP-2","OP-1","OD-1","MT-1","MS-1","IN-3","IN-2","IN-1","HK-1","HB-3","HB-2","HB-1","GP-7","GP-6","GP-5","GP-4","GP-3","GP-2","GP-1","FD-3","FD-2","FD-1","EM-1","BU-2","BU-1","AC-7","AC-6","AC-5","AC-4","AC-3","AC-2","AC-1"],editXML:0,selectedIcon:"",printable:!0,editorHtml:"",isGHP61:!1,isLoading:!1,room_no:"",table:{company:"",designer:"",imgmaker:"",cmf:"",md:"",verstion:"",note:"",section:"",fun:""}}},created(){const t=localStorage.getItem("editorHtml");this.editorHtml=t;const e=JSON.parse(localStorage.getItem("selectMpk")),n=JSON.parse(localStorage.getItem("table"));this.selectMpk=this.selectMpk||e||this.mpkList.slice(0,6),this.table=n||this.table},computed:{today(){let t=new Date,e=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return e+"/"+n+"/"+i},mpks(){const t=this.isGHP61?3:6,e=[[365,366,368,367,"icon_mpk1"],[369,370,372,371,"icon_mpk2"],[373,374,376,375,"icon_mpk3"],[377,378,380,379,"icon_mpk4"],[381,382,384,383,"icon_mpk5"],[385,386,388,387,"icon_mpk6"]];return e.slice(0,t)},mapIcon(){const t={};return this.$nextTick(()=>{this.mpkList.forEach(e=>{t[e.icon]=e.description})}),t}},methods:{saveHtml(){localStorage.setItem("editorHtml",this.editorHtml),localStorage.setItem("pages",this.room_no),localStorage.setItem("table",JSON.stringify(this.table)),localStorage.setItem("selectMpk",JSON.stringify(this.selectMpk)),this.$message.success("Design is saved")},saveMpkList(){localStorage.setItem("selectMpk",JSON.stringify(this.selectMpk)),localStorage.setItem("table",JSON.stringify(this.table)),this.$message.success("Desgin is saved")},setEditorHtml(t){this.editorHtml=t},AddIcon(t,e){if(e)return!1;this.selectedIcon=this.selectMpk[t].icon||"",this.editXML=t,this.dialogVisible=!0},saveMPK(){this.dialogVisible=!1,this.selectMpk[this.editXML].icon=this.selectedIcon,this.selectMpk[this.editXML].description=this.mapIcon[this.selectedIcon]},getBatchDoc(){if(this.room_no){const t=/^(\d+-)(\d+)$/g,e=/^(\d+)[\d+|,]+(\d+)$/g,n=t.test(this.room_no),i=e.test(this.room_no);if(n||i){const t=this.getDoc(),e=document.createElement("section");let n=[];const i=document.querySelector(".room-no");if(!i)return this.$message.error("Marker not found");if(this.room_no.includes("-")){let t=this.room_no.split("-"),e=parseInt(t[0]),i=parseInt(t[1]),o=t[0].length;for(let s=e;s<=i;s++)n.push((s+"").padStart(o,"0"))}else n=this.room_no.includes(",")?this.room_no.split(","):[];const o=i.innerText.replace(/[^0-9]/gi,"");if(n.length>0){let i="";n.forEach(e=>i+=t.replaceAll(o,e)),e.innerHTML=i}this.section=e,this.$message.success("Success")}else this.$message.error("Invalid format"),this.section=""}else this.$message.success("Reset as empty"),this.section=""},getDoc(){const t=this.$refs.printDoc2;let e=this.$refs.print.outerHTML;const n=document.getElementById("dxml"),i=document.getElementById("dicon"),o=document.getElementById("noicon");n.innerHTML=e,i.innerHTML=e,o.innerHTML=e;let s=t.outerHTML;return s},print(){this.isLoading=!0;const t=location.origin+"/iconfonts/iconStyle.css",e=location.origin+"/iconfonts/quill.css",n=[];let i=document.createElement("section");if(this.isGHP61)i.innerHTML=this.getDoc();else if(this.section)i=this.section;else{const t=document.getElementById("led");let e=this.$refs.print.outerHTML;t.innerHTML=e,i.innerHTML=this.getDoc()}const o=({launchPrint:t})=>setTimeout(()=>{t()},500),s=new l["Printd"];s.print(i,[t,e,w,c,this.isGHP61?H:M],n,o),this.isLoading=!1}}},A=G,T=(n("5106"),Object(y["a"])(A,r,a,!1,null,"551b3aae",null)),L=T.exports,O={name:"App",components:{XML:L}},D=O,R=(n("fac2"),Object(y["a"])(D,o,s,!1,null,null,null)),E=R.exports,I=(n("0fb7"),n("450d"),n("f529")),N=n.n(I),z=(n("be4f"),n("896a")),B=n.n(z),$=(n("6611"),n("e772")),q=n.n($),F=(n("fd71"),n("a447")),V=n.n(F),j=(n("a7cc"),n("df33")),X=n.n(j),U=(n("1f1a"),n("4e4b")),J=n.n(U),K=(n("1951"),n("eedf")),W=n.n(K),Q=(n("10cb"),n("f3ad")),Y=n.n(Q),Z=(n("560b"),n("dcdc")),tt=n.n(Z);i["default"].use(tt.a),i["default"].use(Y.a),i["default"].use(W.a),i["default"].use(J.a),i["default"].use(X.a),i["default"].use(V.a),i["default"].use(q.a),i["default"].use(B.a),i["default"].prototype.$message=N.a;var et={"FD-1":"Front Desk","RS-1":"Room Service","EM-1":"Emergency","WU-1":"Wake Up","RS-2":"Restaurant","HK-1":"Housekeeping","OD-1":"Open Door"};i["default"].config.productionTip=!1,i["default"].prototype.$t=t=>et[t]||t,new i["default"]({render:t=>t(E)}).$mount("#app")},"8a4c":function(t,e,n){},edce:function(t,e,n){},fac2:function(t,e,n){"use strict";n("41f0")}});
//# sourceMappingURL=app.3ac0ea9b.js.map