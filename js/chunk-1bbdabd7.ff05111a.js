(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bbdabd7"],{"765f":function(e,a,t){},"9f27":function(e,a,t){"use strict";var l=t("765f"),s=t.n(l);s.a},d400:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-lx-friend"}),e._v(" 员工管理")]),t("el-breadcrumb-item",[e._v(" 查看详情")])],1)],1),t("div",{staticClass:"container"},[t("h5",{staticClass:"mgb10"},[e._v("基本信息")]),t("el-form",{attrs:{inline:!0,model:e.baseInfo,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"姓名"}},[t("el-input",{attrs:{placeholder:"周吴"},model:{value:e.baseInfo.name,callback:function(a){e.$set(e.baseInfo,"name",a)},expression:"baseInfo.name"}})],1),t("el-form-item",{attrs:{label:"身份证号"}},[t("el-input",{attrs:{placeholder:"110987199001026666"},model:{value:e.baseInfo.idno,callback:function(a){e.$set(e.baseInfo,"idno",a)},expression:"baseInfo.idno"}})],1),t("el-form-item",{attrs:{label:"性别"}},[t("el-select",{staticStyle:{width:"200px"},model:{value:e.baseInfo.sex,callback:function(a){e.$set(e.baseInfo,"sex",a)},expression:"baseInfo.sex"}},[t("el-option",{attrs:{label:"男",value:"1"}}),t("el-option",{attrs:{label:"女",value:"2"}})],1)],1),t("el-form-item",{attrs:{label:"生日"}},[t("el-input",{attrs:{placeholder:"1990-01-02"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"民族"}},[t("el-input",{attrs:{placeholder:"汉族"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"籍贯"}},[t("el-input",{attrs:{placeholder:"北京市海淀区上地"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"婚姻状况"}},[t("el-select",{staticStyle:{width:"200px"},model:{value:e.baseInfo.maritalStatus,callback:function(a){e.$set(e.baseInfo,"maritalStatus",a)},expression:"baseInfo.maritalStatus"}},[t("el-option",{attrs:{label:"已婚",value:"1"}}),t("el-option",{attrs:{label:"未婚",value:"2"}})],1)],1),t("el-form-item",{attrs:{label:"邮箱"}},[t("el-input",{attrs:{placeholder:"zhouwu@126.com"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"手机号码"}},[t("el-input",{attrs:{placeholder:"18600007666"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"学历"}},[t("el-select",{staticStyle:{width:"200px"},model:{value:e.baseInfo.educationbg,callback:function(a){e.$set(e.baseInfo,"educationbg",a)},expression:"baseInfo.educationbg"}},[t("el-option",{attrs:{label:"博士",value:"1"}}),t("el-option",{attrs:{label:"硕士",value:"2"}}),t("el-option",{attrs:{label:"本科",value:"3"}}),t("el-option",{attrs:{label:"大专",value:"4"}})],1)],1),t("el-form-item",{attrs:{label:"毕业院校"}},[t("el-input",{attrs:{placeholder:"北京大学"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"专业"}},[t("el-input",{attrs:{placeholder:"计算机科学与技术"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"毕业日期"}},[t("el-date-picker",{staticClass:"width-control",attrs:{type:"date",placeholder:"选择日期"},model:{value:e.baseInfo.date1,callback:function(a){e.$set(e.baseInfo,"date1",a)},expression:"baseInfo.date1"}})],1),t("el-form-item",{attrs:{label:"职位"}},[t("el-select",{staticStyle:{width:"200px"},model:{value:e.deptInfo.position,callback:function(a){e.$set(e.deptInfo,"position",a)},expression:"deptInfo.position"}},[t("el-option",{attrs:{label:"员工",value:"1"}}),t("el-option",{attrs:{label:"部门经理",value:"2"}}),t("el-option",{attrs:{label:"总经理",value:"3"}})],1)],1),t("el-form-item",{attrs:{label:"岗位"}},[t("el-select",{staticStyle:{width:"200px"},model:{value:e.deptInfo.job,callback:function(a){e.$set(e.deptInfo,"job",a)},expression:"deptInfo.job"}},[t("el-option",{attrs:{label:"java开发",value:"1"}}),t("el-option",{attrs:{label:"前端开发",value:"2"}}),t("el-option",{attrs:{label:"软件测试",value:"3"}}),t("el-option",{attrs:{label:"需求分析",value:"4"}})],1)],1),t("el-form-item",{attrs:{label:"在职状态"}},[t("el-select",{staticStyle:{width:"200px"},model:{value:e.deptInfo.status,callback:function(a){e.$set(e.deptInfo,"status",a)},expression:"deptInfo.status"}},[t("el-option",{attrs:{label:"在职",value:"1"}}),t("el-option",{attrs:{label:"离职",value:"2"}})],1)],1),t("el-form-item",{attrs:{label:"入司日期"}},[t("el-date-picker",{staticClass:"width-control",attrs:{type:"date",placeholder:"选择日期"},model:{value:e.baseInfo.date2,callback:function(a){e.$set(e.baseInfo,"date2",a)},expression:"baseInfo.date2"}})],1),t("el-form-item",{attrs:{label:"离司日期"}},[t("el-date-picker",{staticClass:"width-control",attrs:{type:"date",placeholder:"选择日期"},model:{value:e.baseInfo.date3,callback:function(a){e.$set(e.baseInfo,"date3",a)},expression:"baseInfo.date3"}})],1),t("el-form-item",{attrs:{label:"所属部门"}},[t("el-select",{staticStyle:{width:"200px"},model:{value:e.deptInfo.name,callback:function(a){e.$set(e.deptInfo,"name",a)},expression:"deptInfo.name"}},[t("el-option",{attrs:{label:"资源一部",value:"1"}}),t("el-option",{attrs:{label:"资源二部",value:"2"}}),t("el-option",{attrs:{label:"资源三部",value:"3"}}),t("el-option",{attrs:{label:"资源四部",value:"4"}})],1)],1)],1),t("el-button",{attrs:{type:"primary"}},[e._v("保存")]),t("el-button",{attrs:{type:"success"}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger"},on:{click:e.cancel}},[e._v("取消")])],1)])},s=[],o={data:function(){return{baseInfo:{sex:"1",maritalStatus:"2"},deptInfo:{},projectInfo:{}}},methods:{cancel:function(){this.$router.go(-1)}}},n=o,i=(t("9f27"),t("5be0")),r=Object(i["a"])(n,l,s,!1,null,"56cc2c1b",null);a["default"]=r.exports}}]);