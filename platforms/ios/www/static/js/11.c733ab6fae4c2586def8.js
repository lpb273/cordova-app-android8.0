webpackJsonp([11],{"+RLV":function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,"\n.scence-gifts-wrap[data-v-5b17e83c] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.scence-gifts-content[data-v-5b17e83c] {\n  width: 100%;\n  overflow: hidden;\n  overflow-y: scroll;\n  margin-top: 50px;\n}\n.scence-release-content[data-v-5b17e83c] {\n  width: 100%;\n  margin-top: 470px;\n  background: #fff;\n  overflow: hidden;\n  overflow-y: scroll;\n  box-sizing: border-box;\n}\n","",{version:3,sources:["/Users/lpb/Desktop/kachuoweb_svn/kachuoAPPX/src/components/pages/kachuomall/FamousCollection.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;CACxB",file:"FamousCollection.vue",sourcesContent:["\n.scence-gifts-wrap[data-v-5b17e83c] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.scence-gifts-content[data-v-5b17e83c] {\n  width: 100%;\n  overflow: hidden;\n  overflow-y: scroll;\n  margin-top: 50px;\n}\n.scence-release-content[data-v-5b17e83c] {\n  width: 100%;\n  margin-top: 470px;\n  background: #fff;\n  overflow: hidden;\n  overflow-y: scroll;\n  box-sizing: border-box;\n}\n"],sourceRoot:""}])},"6TeS":function(t,e,n){t.exports=n.p+"static/img/wusanda.3b4b993.png"},BjDU:function(t,e,n){t.exports=n.p+"static/img/yangshuhua.102e5ec.png"},Ms1Q:function(t,e,n){t.exports=n.p+"static/img/kachuo.5ac765c.png"},SEeY:function(t,e,n){t.exports=n.p+"static/img/zhangzhongting.df748fd.png"},Xrx2:function(t,e,n){t.exports=n.p+"static/img/zhongmingshan.886e036.png"},dHAM:function(t,e,n){t.exports=n.p+"static/img/zhangguoqing.14748d5.png"},iG6y:function(t,e,n){t.exports=n.p+"static/img/songshuiguan.af226cf.png"},"iI/5":function(t,e,n){"use strict";function i(t){n("qk9T")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("GgDs"),a=n("wHMM"),s=n("b8xO"),c=n("d6MD"),l=n("jcoB"),r=n("wnvf"),d=n("6qln"),f=n("zz/f"),g=(o.a,a.a,s.a,c.a,l.a,r.a,d.a,{name:"",props:[""],data:function(){return{TitleObjData:{titleContent:"发布详情",showLeftBack:!0,showRightMore:!1},title:"精选好物",page:0,list:[],refreshText:"下拉刷新",noDataText:"没有更多数据",dataList:[{icon:n("6TeS"),name:"吴三大",link:"/scenceconsumdetails?title=吴三大&id=120&type=2&flag=2"},{icon:n("SEeY"),name:"张仲亭",link:"/scenceconsumdetails?title=张仲亭&id=119&type=2&flag=2"},{icon:n("Xrx2"),name:"钟明善",link:"/scenceconsumdetails?title=钟明善&id=118&type=2&flag=2"},{icon:n("iG6y"),name:"宋水官",link:"/scenceconsumdetails?title=宋水官&id=117&type=2&flag=2"},{icon:n("BjDU"),name:"杨曙华",link:"/scenceconsumdetails?title=杨曙华&id=115&type=2&flag=2"},{icon:n("dHAM"),name:"张国庆",link:"/scenceconsumdetails?title=张国庆&id=116&type=2&flag=2"},{icon:n("Ms1Q"),name:"官方馆藏",link:"/scenceconsumdetails?title=官方馆藏&id=114&type=2&flag=2"}],goodsDataList:[]}},components:{Header:o.a,TabItemMallAdvertise:a.a,DividedArea:s.a,FlexWrap:c.a,Divider:l.a,Scroll:r.a,GoodsList:d.a},computed:{scenceGiftsContent:function(){return{height:document.documentElement.clientHeight-45+"px"}}},beforeMount:function(){},mounted:function(){this.setTitle(),this.getGoodsComm(),this.getBannerImgFn("6")},methods:{getGoodsComm:function(){var t=this;Object(f.L)({type:4}).then(function(e){console.log(e),1===e.result&&(t.goodsDataList=e.data.result)}).catch(function(t){console.log(t)})},setTitle:function(){this.TitleObjData.titleContent=this.$route.query.title}},watch:{}}),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scence-gifts-wrap"},[n("Header",{attrs:{titleContent:t.TitleObjData.titleContent,showLeftBack:t.TitleObjData.showLeftBack,showRightMore:t.TitleObjData.showRightMore}}),t._v(" "),n("div",{staticClass:"scence-gifts-content",style:t.scenceGiftsContent},[n("TabItemMallAdvertise"),t._v(" "),n("DividedArea"),t._v(" "),n("FlexWrap",{ref:"dataList",attrs:{dataListCon:t.dataList}}),t._v(" "),n("DividedArea"),t._v(" "),n("Divider",{attrs:{content:t.title}}),t._v(" "),n("GoodsList",{attrs:{goodList:t.goodsDataList}})],1)],1)},p=[],A={render:u,staticRenderFns:p},h=A,m=n("VU/8"),v=i,C=m(g,h,!1,v,"data-v-5b17e83c",null);e.default=C.exports},qk9T:function(t,e,n){var i=n("+RLV");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("18c786c2",i,!0,{})}});
//# sourceMappingURL=11.c733ab6fae4c2586def8.js.map