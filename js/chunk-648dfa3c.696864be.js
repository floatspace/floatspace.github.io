(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-648dfa3c"],{"32cb":function(t,l,e){"use strict";var a=e("dffa"),o=e.n(a);o.a},"93c1":function(t,l,e){"use strict";e.r(l);var a=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"table"},[e("div",{staticClass:"crumbs"},[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",[e("i",{staticClass:"el-icon-lx-remind"}),t._v(" 工时管理")]),e("el-breadcrumb-item",[t._v(" 工时查询")])],1)],1),e("div",{staticClass:"container"},[e("el-form",{attrs:{inline:!0,model:t.formInline,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"员工姓名"}},[e("el-input",{attrs:{placeholder:"员工姓名"},model:{value:t.formInline.user,callback:function(l){t.$set(t.formInline,"user",l)},expression:"formInline.user"}})],1),e("el-form-item",{attrs:{label:"客户名称"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formInline.region,callback:function(l){t.$set(t.formInline,"region",l)},expression:"formInline.region"}},[e("el-option",{attrs:{label:"中国银行",value:"zhonghang"}}),e("el-option",{attrs:{label:"中国人寿",value:"renshou"}})],1)],1),e("el-form-item",{attrs:{label:"选择日期"}},[e("el-date-picker",{staticStyle:{width:"120px"},attrs:{type:"month",placeholder:"开始日期"},model:{value:t.form.startDate,callback:function(l){t.$set(t.form,"startDate",l)},expression:"form.startDate"}}),t._v(" -\r\n                "),e("el-date-picker",{staticStyle:{width:"120px"},attrs:{type:"month",placeholder:"结束日期"},model:{value:t.form.endDate,callback:function(l){t.$set(t.form,"endDate",l)},expression:"form.endDate"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1),e("el-row",{staticClass:"mgb5",attrs:{gutter:24}},[e("el-col",{staticClass:"font-bold",attrs:{span:4}},[t._v("月份：2019-01")]),e("el-col",{staticClass:"font-bold",attrs:{span:4}},[t._v("当月正常工作日：22D")]),e("el-col",{staticClass:"font-bold",attrs:{span:4}},[t._v("当月正常工时：176H")]),e("el-col",{staticClass:"font-bold",attrs:{span:4}},[t._v("当月出勤工时：176H")]),e("el-col",{staticClass:"font-bold",attrs:{span:4}},[t._v("当月加班工时：176H")]),e("el-col",{attrs:{span:4,algin:"right"}},[e("el-button",{attrs:{type:"danger",size:"mini"}},[t._v("导出")]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(l){t.dialogFormVisible=!0}}},[t._v("异议申请")])],1)],1),e("el-row",[e("el-table",{staticClass:"table",attrs:{data:t.data,border:"",height:"220"}},[e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"80"}}),e("el-table-column",{attrs:{prop:"proDpmt",label:"部门","min-width":"120"}}),e("el-table-column",{attrs:{prop:"proName",label:"项目","min-width":"120"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"1日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"2日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"3日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"4日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"5日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"6日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"7日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"8日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"9日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"10日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"11日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"12日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"13日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"14日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"15日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"16日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"17日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"18日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"19日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"20日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"21日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"22日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"23日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"24日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"25日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"26日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"27日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"28日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"29日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"30日"}}),e("el-table-column",{attrs:{prop:"normalHour",label:"31日"}}),e("el-table-column",{attrs:{prop:"normalHours",width:"100",label:"正常工时"}}),e("el-table-column",{attrs:{prop:"addedHours",width:"100",label:"加班工时"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")])]}}])})],1)],1),e("el-dialog",{attrs:{title:"异议申请",visible:t.dialogFormVisible},on:{"update:visible":function(l){t.dialogFormVisible=l}}},[e("el-form",{attrs:{model:t.form}},[e("el-form-item",{attrs:{label:"异议日期","label-width":t.formLabelWidth}},[e("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.objectionForm.date,callback:function(l){t.$set(t.objectionForm,"date",l)},expression:"objectionForm.date"}})],1),e("el-form-item",{attrs:{label:"当天工时","label-width":t.formLabelWidth}},[e("el-row",{attrs:{gutter:24}},[e("el-col",{attrs:{span:5,align:"left"}},[e("el-tag",{attrs:{type:"primary"}},[t._v("正常工时：8H")])],1),e("el-col",{attrs:{span:5}},[e("el-tag",{attrs:{type:"success"}},[t._v("加班工时：2H")])],1),e("el-col",{attrs:{span:5}},[e("el-tag",{attrs:{type:"danger"}},[t._v("请假工时：0H")])],1)],1)],1),e("el-form-item",{attrs:{label:"申请工时","label-width":t.formLabelWidth}},[e("p",[t._v("正常工时 "),e("el-input-number",{attrs:{min:1,max:10,size:"mini","controls-position":"right"},model:{value:t.num1,callback:function(l){t.num1=l},expression:"num1"}}),t._v(" H")],1),e("p",[t._v("加班工时 "),e("el-input-number",{attrs:{min:1,max:10,size:"mini","controls-position":"right"},model:{value:t.num2,callback:function(l){t.num2=l},expression:"num2"}}),t._v(" H")],1),e("p",[t._v("请假工时 "),e("el-input-number",{attrs:{min:1,max:10,size:"mini","controls-position":"right"},model:{value:t.num3,callback:function(l){t.num3=l},expression:"num3"}}),t._v(" H")],1)]),e("el-form-item",{attrs:{label:"申请理由","label-width":t.formLabelWidth}},[e("el-input",{attrs:{type:"textarea"},model:{value:t.objectionForm.desc,callback:function(l){t.$set(t.objectionForm,"desc",l)},expression:"objectionForm.desc"}})],1),e("el-form-item",{attrs:{label:"附件","label-width":t.formLabelWidth}},[e("el-upload",{staticClass:"upload-demo",attrs:{action:"","list-type":"picture"}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(l){t.dialogFormVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(l){t.dialogFormVisible=!1}}},[t._v("确 定")])],1)],1)],1)])},o=[],r=(e("d4aa"),{name:"basetable",data:function(){return{tableData:[],cur_page:1,num1:0,num2:0,num3:0,form:{name:"",date:"",time:""},formInline:{user:"",region:""},dialogFormVisible:!1,objectionForm:{region:"",date:"",desc:""},formLabelWidth:"120px"}},created:function(){this.getData()},computed:{data:function(){return this.tableData}},methods:{onSubmit:function(){console.log("submit!")},handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){this.$axios.post("api/nantian-parent/a/a.do?username=admin&password=123456").then(function(t){console.log(t.data)})},formatter:function(t,l){return"-"},filterTag:function(t,l){return l.tag===t}}}),n=r,s=(e("32cb"),e("5be0")),i=Object(s["a"])(n,a,o,!1,null,"780502e1",null);l["default"]=i.exports},dffa:function(t,l,e){}}]);