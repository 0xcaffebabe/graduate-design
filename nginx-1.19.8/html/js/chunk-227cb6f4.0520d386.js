(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-227cb6f4"],{"0c93":function(e,t,r){},"304b":function(e,t,r){},3121:function(e,t,r){"use strict";r("304b")},"467d":function(e,t,r){"use strict";r("a061")},"46db":function(e,t,r){"use strict";r("e14f")},"4c41":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{staticStyle:{"margin-bottom":"20px"},attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("我的")])],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{staticClass:"my-left",attrs:{span:8}},[r("el-card",[r("el-row",[r("el-col",{staticStyle:{"text-align":"center"},attrs:{span:6}},[r("el-avatar",{attrs:{circle:"",size:64,src:e.userInfo.avatar}}),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.handleUpload}},[e._v("上传头像")])],1),r("el-col",{attrs:{span:18}},[r("h3",{directives:[{name:"show",rawName:"v-show",value:e.nickNameShow,expression:"nickNameShow"}],on:{click:function(t){e.nickNameShow=!e.nickNameShow}}},[e._v(e._s(e.userInfo.username))]),r("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.nickNameShow,expression:"!nickNameShow"}],staticStyle:{width:"200px"},attrs:{clearable:"",value:e.userInfo.username},on:{blur:function(t){e.nickNameShow=!e.nickNameShow}}}),r("p",{staticStyle:{"margin-top":"-10px"}},[r("span",{staticClass:"el-icon el-icon-phone"}),e._v(" "+e._s(e.userInfo.phone))])],1)],1)],1),r("el-card",{staticClass:"info-card"},[r("div",{on:{click:function(t){return e.showUserEditPanel("delivery")}}},[r("span",{staticClass:"el-icon el-icon-place"}),e._v(" "),r("span",{staticClass:"el-icon-arrow-right",staticStyle:{float:"right"}}),e._v(" 收货地址")]),r("el-divider"),r("div",{on:{click:function(t){return e.showUserEditPanel("password")}}},[r("span",{staticClass:"el-icon el-icon-lock"}),e._v(" "),r("span",{staticClass:"el-icon-arrow-right",staticStyle:{float:"right"}}),e._v(" 登录密码")]),r("el-divider"),r("div",{on:{click:function(t){return e.showUserEditPanel("info")}}},[r("span",{staticClass:"el-icon el-icon-phone-outline"}),e._v(" "),r("span",{staticClass:"el-icon-arrow-right",staticStyle:{float:"right"}}),e._v(" 手机号码")]),r("el-divider"),r("div",{on:{click:e.showVipPanel}},[r("span",{staticClass:"el-icon el-icon-sugar"}),e._v(" "),r("span",{staticClass:"el-icon-arrow-right",staticStyle:{float:"right"}}),e._v(" 饱了吧会员")]),r("el-divider"),r("div",{on:{click:function(t){return e.$router.push("/service")}}},[r("span",{staticClass:"el-icon el-icon-service"}),e._v(" "),r("span",{staticClass:"el-icon-arrow-right",staticStyle:{float:"right"}}),e._v(" 客服中心")])],1)],1),r("el-col",{staticClass:"my-right",attrs:{span:16}},[r("account"),r("task-list",{staticStyle:{"margin-top":"20px"}})],1)],1),r("user-edit-pane",{attrs:{currentTab:e.currentTab}}),r("vip-pane")],1)},n=[],s=(r("96cf"),r("1da1")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"编辑资料",visible:e.$store.state.userEditPanelShow,width:"30%"},on:{close:function(t){return e.$store.commit("toggleUserEditPanel")}}},[r("el-tabs",{model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[r("el-tab-pane",{attrs:{label:"收货地址",name:"delivery"}},[r("ul",{staticClass:"delivery-list"},e._l(e.deliveryList,(function(t){return r("li",{key:t.deliveryId,staticClass:"delivery-item"},[r("el-row",[r("el-col",{attrs:{span:16}},[r("h4",[e._v(e._s(t.building)+" "+e._s(t.detail)+" "),t.defaultDelivery?r("el-tag",{attrs:{effect:"dark",size:"medium"}},[e._v("默认地址")]):e._e()],1)]),r("el-col",{attrs:{span:8}},[t.defaultDelivery?e._e():r("el-button",{staticClass:"default-btn",staticStyle:{floar:"right"},attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.updateDelivery(t)}}},[e._v("设为默认地址")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){return e.handleDelteDelivery(t.deliveryId)}}},[e._v("删除")])],1)],1),r("el-divider")],1)})),0),r("div",{staticClass:"new-delivery"},[r("el-form",{ref:"deliveryForm",attrs:{model:e.deliveryForm,rules:e.deliveryFormRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"地址",prop:"building"}},[r("el-input",{attrs:{placeholder:"在地图上点击以选择地点",readonly:""},model:{value:e.deliveryForm.building,callback:function(t){e.$set(e.deliveryForm,"building",t)},expression:"deliveryForm.building"}}),r("el-amap",{staticClass:"amap-box",attrs:{vid:"amap-vue",zoom:10,events:e.mapEvents,plugin:e.plugin}})],1),r("el-form-item",{attrs:{label:"详细地址",prop:"detail"}},[r("el-input",{attrs:{placeholder:"详细地址"},model:{value:e.deliveryForm.detail,callback:function(t){e.$set(e.deliveryForm,"detail",t)},expression:"deliveryForm.detail"}})],1),r("el-checkbox",{model:{value:e.deliveryForm.defaultDelivery,callback:function(t){e.$set(e.deliveryForm,"defaultDelivery",t)},expression:"deliveryForm.defaultDelivery"}},[e._v("设为默认收货地址")]),r("el-button",{staticStyle:{float:"right"},attrs:{type:"success",size:"small"},on:{click:e.handleSaveDelivery}},[e._v("保存")])],1)],1)]),r("el-tab-pane",{attrs:{label:"登录密码",name:"password"}},[r("el-form",{attrs:{"label-width":"100px"}},[r("el-form-item",{attrs:{label:"旧密码",prop:"name"}},[r("el-input",{attrs:{placeholder:"旧密码","show-password":"",clearable:""},model:{value:e.oldPassword,callback:function(t){e.oldPassword=t},expression:"oldPassword"}})],1),r("el-form-item",{attrs:{label:"新密码",prop:"name"}},[r("el-input",{attrs:{placeholder:"新密码","show-password":"",clearable:""},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}})],1),r("el-form-item",{attrs:{label:"重复新密码",prop:"name"}},[r("el-input",{attrs:{placeholder:"重复新密码","show-password":"",clearable:""},model:{value:e.repeatPassword,callback:function(t){e.repeatPassword=t},expression:"repeatPassword"}})],1),r("el-button",{staticStyle:{float:"right"},attrs:{type:"success",size:"small"},on:{click:e.handleUpdatePassword}},[e._v("确认修改")])],1)],1),r("el-tab-pane",{attrs:{label:"个人信息",name:"info"}},[r("el-form",{attrs:{"label-width":"70px"}},[r("el-form-item",{attrs:{label:"联系人",prop:"name"}},[r("el-input",{attrs:{placeholder:"姓名"},model:{value:e.userInfo.realName,callback:function(t){e.$set(e.userInfo,"realName",t)},expression:"userInfo.realName"}})],1),r("el-form-item",{attrs:{label:"电话",prop:"name"}},[r("el-input",{attrs:{placeholder:"手机号码"},model:{value:e.userInfo.phone,callback:function(t){e.$set(e.userInfo,"phone",t)},expression:"userInfo.phone"}})],1)],1),r("el-button",{staticStyle:{float:"right","margin-top":"20px"},attrs:{type:"success",size:"small"},on:{click:e.updateUserInfo}},[e._v("确认修改")])],1)],1)],1)},o=[],l=r("d4ec"),c=r("bee2"),u=r("27de"),p=function(){function e(){Object(l["a"])(this,e)}return Object(c["a"])(e,[{key:"getDeliveryList",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].getDeliveryList();case 2:if(t=e.sent,t.success){e.next=5;break}throw new Error("获取收货信息列表失败:"+t.msg);case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"addDelivery",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].addDelivery(t);case 2:if(r=e.sent,r.success){e.next=5;break}throw new Error("增加收货信息失败:"+r.msg);case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateDelivery",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].updateDelivery(t);case 2:if(r=e.sent,r.success){e.next=5;break}throw new Error("增加收货信息失败:"+r.msg);case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteDelivery",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].deleteDelivery(t);case 2:if(r=e.sent,r.success){e.next=5;break}throw new Error("删除收货信息失败:"+r.msg);case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),v=new p,d=r("6525"),m={props:["currentTab"],data:function(){return{activeName:"delivery",deliveryForm:{building:"",detail:"",defaultDelivery:!1},userInfo:this.$store.state.user.info,deliveryFormRules:{building:[{required:!0,message:"请选择地点",trigger:"blur"}],detail:[{required:!0,message:"情输入详细地址",trigger:"blur"}]},oldPassword:"",newPassword:"",repeatPassword:"",deliveryList:[],mapEvents:{click:function(e){var t=e.lnglat,r=t.lng,a=t.lat;this.lng=r,this.lat=a;var n=new AMap.Geocoder({radius:1e3,extensions:"all"});n.getAddress([r,a],(function(e,t){"complete"===e&&"OK"===t.info&&t&&t.regeocode&&(v.editPanel.deliveryForm.building=t.regeocode.formattedAddress)}))}},plugin:[{pName:"Geolocation",events:{init:function(e){e.getCurrentPosition((function(e,t){t&&t.position&&(self.lng=t.position.lng,self.lat=t.position.lat,self.center=[self.lng,self.lat],self.loaded=!0,self.$nextTick())}))}}}]}},methods:{getDeliveryList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.getDeliveryList();case 3:e.deliveryList=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.$message.error(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},addDelivery:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.addDelivery(e.deliveryForm);case 3:if(!t.sent){t.next=6;break}e.$message.success("添加收货信息成功"),e.getDeliveryList();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$message.error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},handleSaveDelivery:function(){var e=this;this.$refs.deliveryForm.validate((function(t){t?e.addDelivery():e.$message.error("请将信息填写完整")}))},updateDelivery:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.defaultDelivery=!0,r.prev=1,r.next=4,v.updateDelivery(e);case 4:if(!r.sent){r.next=7;break}t.$message.success("设为默认地址成功"),t.getDeliveryList();case 7:r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](1),t.$message.error(r.t0.message);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},handleDelteDelivery:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.deleteDelivery(e);case 3:if(!r.sent){r.next=6;break}t.$message.success("删除收货信息成功"),t.getDeliveryList();case 6:r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),t.$message.error(r.t0.message);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},updateUserInfo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d["a"].updateUserInfo(e.userInfo);case 3:if(!t.sent){t.next=5;break}e.$message.success("更新资料成功");case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$message.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},handleUpdatePassword:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.oldPassword&&e.newPassword&&e.repeatPassword)){t.next=15;break}if(e.newPassword===e.repeatPassword){t.next=3;break}return t.abrupt("return",e.$message.error("两次输入的新密码不一致"));case 3:return t.prev=3,t.next=6,d["a"].updatePassword(e.oldPassword,e.newPassword);case 6:if(!t.sent){t.next=8;break}e.$message.success("修改密码成功");case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](3),e.$message.error(t.t0.message);case 13:t.next=16;break;case 15:e.$message.error("请将密码信息填写完整");case 16:case"end":return t.stop()}}),t,null,[[3,10]])})))()}},created:function(){v.editPanel=this,this.getDeliveryList()}},f=m,h=(r("915f"),r("2877")),w=Object(h["a"])(f,i,o,!1,null,"0d626985",null),g=w.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"为账户 CAFFEBABE 购买会员",visible:e.$store.state.vipPanelShow,width:"50%"},on:{close:function(t){return e.$store.commit("toggleVipPanel")}}},[r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[e._v("开通会员")]),r("el-radio-group",{model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[r("el-radio",{attrs:{label:3}},[e._v("1个月")]),r("el-radio",{attrs:{label:6}},[e._v("3个月")]),r("el-radio",{attrs:{label:9}},[e._v("1年")])],1),r("el-input",{staticStyle:{"margin-top":"20px"},attrs:{placeholder:"使用卡密"}}),r("el-button",{staticStyle:{float:"right","margin-top":"10px"},attrs:{type:"warning",size:"mini",plain:""},on:{click:function(t){e.showQrCode=!e.showQrCode}}},[e._v("购买")]),r("h3",{staticStyle:{color:"FF6600"}},[e._v("￥20.00")])],1),r("el-collapse-transition",[e.showQrCode?r("el-card",{staticStyle:{"margin-top":"20px"}},[r("div",{attrs:{slot:"header"},slot:"header"},[e._v("支付二维码")]),r("div",{staticStyle:{"text-align":"center"}},[r("img",{attrs:{width:"256px;height:256px",src:"/imgs/qrcode.png",alt:""}})])]):e._e()],1),r("el-card",{staticStyle:{"margin-top":"20px"}},[r("div",{attrs:{slot:"header"},slot:"header"},[e._v("会员特权")]),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:4}},[r("img",{attrs:{src:"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUxpcVGm/1Kn/1Kn/1Gm/1Gm/6f//1Gm/1ao/1Wq/1Gm/1Gm/1Gm/1Kn/1qx/1Gm/1Gm/2C2/1Gm/1Gm/2O2/1Om/1Sq/1Wq/1Sp/1Gm/1Ko/1er/1Gn/1Gm/1Gn/1Kn/1Kn/1Kn/1Kn/1Kn/1Gn/1Gm/1Gm/1Sp/1Gm/1Gm/1Kn/1Gm/1Gm/0Kn+j4AAAAsdFJOUwCKSJH+1gH4JSD1+6C3Du2ZBKflCSsaKC7BNhSwb8pmeEJWT7zGgzzR2l7fYL3NXQAAA75JREFUeNrFlmtzgjoQQMNDwaC8Kw9B8Vltz///fbfFXOoItUFn7j0fjCNwzO6GZMV/QroPiyQ4zj/85x3+rpIovMVm9Yxj9bFwuGKroaiX4xzLzcGjZd2UflrWhXc1rZuZrmNWFzYA9rHuHlptFkp8brK/HW6zVsk4bO5C8D8qFebklD9y5KczLY5KaD/psaTl0ying47SuNAiq0flTffzgJbE2kZ3F9+tT1qCeJeKP4jMUJmC0LyZk7lWv873qdAi2lqJytPuX1EDQBKqOWoyLY1rBOHVUwOB9T4V4ylPCWC1K0JC7IsnSS2wv8tvQBGJ54mh+hoK2IrxuN2ih+RrCOCJkEppqWQqATjjLVkAhvo+gZmGxq/3vR0ggWQ2TtOAeyeeQPAmdDVmuyWEYH4N+0PeTeaM8y50NQ3O8keT4HQV9Yu90NWUHs5Kaa6DLEWHria9QHMTVFqohIzTWHCMbjTCP6vyjNHsbaQrbjWRBVxWozRbBzbiVpOfAThEIzRbCbG40USNA4QSLH3Nzrn5Wwsy9wjIjdjZsNPVmB4c/W6xGVboAMV3ek8g3zQ1MRzSn+2+sgFZT9s8F7DW1JRrI+1OyyMAhXvzVqZ6GkVUNuooX5uiIz802pWKsp2xCGhx4t7uqKPZh4dPjw4ZWz8Ym1RTM+Mh66meJrcBj1950wwqM9/dFILyrUe+hq2ORjGFiRhgDub/osEbwP5V4+ENa4bpay6txsEe1MjFAMmwZimEhOlLufmEVXsEpy9pElipzwFNYAwwGdBIiFSiX0mx3ZZ6DfkrGh+Cr6ECc0jz6Q4wcHMG5+uOvXklxVtYXPsOQ/TwCHK3Rzbwam4g/Br2UPU1Cb+R9Q/pumsB7zG0ty3Vgk4DcPvJ2RnzAcLav288HOyVOpU24mlMWKsccex1vNrM4XQ90Rx463W8mviyeziGuNfxanL6CaUEO+91vFos5U2HEcM56nW8OlS3K8CVYPU6Xg1qsG9u3wB11/Fqs/fu8hiD/SFGsnVUs9oRHcBuxll2Dkz8u/ofgTDVl0xPNlyWvaa8As7aK3h1ANYr0SOyVIenwy4A4nT4mgSOmcaiqwCvFr/gFoBn+I8lUSOBSfkgb7UEko9Hke0vgHeKxCNmFcD51zX4fgQocvEX5gWgGHwl8op2tkKDqA4ADr3gs9gG5MkXevgnCbAo+xIvXAl9lpbTirrQ8lZix64YxzL0AIrtd9XK6irJxHhmoQOQVNWFVtIvj35oCk/N5EmRkQAEliteY5qZZh6JP/gH4pi+7mLJkZ4AAAAASUVORK5CYII=",alt:""}})]),r("el-col",{attrs:{span:20}},[r("div",{staticClass:"vip-detail"},[r("h3",[e._v("减免配送费")]),r("p",[e._v("每月减免30单，每日可减免3单，每单最高减4元")]),r("p",[e._v("蜂鸟专送专享")])])])],1),r("el-divider"),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:4}},[r("img",{attrs:{src:"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB+UExURUxpcVKn/1qw/1Or/1Gm/1Gm/1Gm/1Gm/1Or/1Gm/1Ws/3DU/1Gm/161/1Gn/1Gm/1Op/1Kn/1Gn/1Oo/1Gn/1Kn/1Gn/1Sq/1Gn/1Kn/1Gm/1Gn/1Gn/1Sp/1Gm/1Gm/1Gm/1Gm/1Kn/1Kn/1Gm/1Gn/1Gm/1Gn/1Kn/1Gm/xLw9zUAAAApdFJOUwBEDxz9w/T5ItYWA+0IbeUtTZo2tJPMJ9N+pHZVPa7bvOFcY4SNialmEIpfyAAAA5pJREFUeNq9l+mSojAYRdlRZEdRVFBc+7z/C45DUhZtFCJTNfdPbJXjt+UmbfwXRfvcTUI3P1nTGdap8ZDyjz/BFEZwXvoIOXJxY/s7hh0f5bPlrrCiInYdQSp3M13G7PGQ8vPBz9GX4Go9zljvSrUYz1JJ0vySDjHSaiMZy3Pwtuj7uyx6eyveM4rbgU5eM9TeKNuGdEpW9eLlw/raSsZ2HxkjWpi5JIW52SOZJfLdTDJGSfUqkXXaG1KViFGQ9VXIDHLxZwyEVyVPLdIlAVbdRHhwtyZvuis4f9t/A3dhTNcW7o/FBXPC0+vn0EPyWEKYkFLhrWQKEgD+hFhCuMnXc5hNw9gtJPa/Yqw5hKnxrxh7g18bo5is5aOS7G84bmaMYhYhAwpFh8YxAYMKNDE2JMYHJWBrYmZw+IQ5wEwTk8LmE2YDqSamgPKxVFXVr/uqih9LCYUmpgb3sfgQ/ap7KDZyrYkx4Sique6FKAp2BFMTk8FSlKE3ZCcR4hIyTcwemseSw9V4KhdbuoG9JuYEWxGU/2zu2hfZbOGkiTkLt18cwLXlKJWwkUGdNTGxNHvTAW9XB0G988DpOrSCWBOzg6t44fCUI56+wk4TU8FFFjvp+UOnC1SjGOWr0blpPa9tzpHyE4MYNXA1YQ2MWka1/HoYtanqMKgYR8EoI6aOpmpBPo7RkzLw6kZRMbZheGD0pG4/ddv+VtvZcyhtRUoxA9VEVHu2JKwv1ZpUS+vLg4UsdE+qUaoG25fsUQnpgG2P2r0FoehLNnCIjB4+awFewXngSBs9Ck3Ru51wx55CBhUav/QD+dtJmDOo+dsdOIP2JcyWAbWmMh6mzGFtTFbk43RX0DvE0zEmcpDOL4P5XWhbpB1aPqyVG6+mLA/SJ3Cr3Hg1deGZSgFOqtx4tWR7PW+6QxkpN14dLfs7debBVbnxaigGp+4PtGi6uPFqK/Nf6ngH5/T1yPiv/4pFR3B231H2Psytl/67QB7pQxaVAwelp9ESKLUnODgCZfAGvwK8WDOhELhH7z/zAFcjILsB/Pij0bqAf7NGrGHnAZtioG6xByTnxdCwHAD/MtyNWQOw+TiDtQvgpuNDdQBw326JtAFITloTEYcARyX59d0BvMrS9aKLB7AsfkG2DuDngaEve+UDHOtnOl0kzvZb87dzATI7Y2s6yH3KCTIToLZpDnQQpT3fpUYvnYmgWwsQriRkutZmlo6eOH8AyHKn4WUusgUAAAAASUVORK5CYII=",alt:""}})]),r("el-col",{attrs:{span:20}},[r("div",{staticClass:"vip-detail"},[r("h3",[e._v("减免配送费")]),r("p",[e._v("每月减免30单，每日可减免3单，每单最高减4元")]),r("p",[e._v("蜂鸟专送专享")])])])],1)],1)],1)},y=[],x={data:function(){return{radio:3,showQrCode:!1}}},k=x,A=(r("46db"),Object(h["a"])(k,b,y,!1,null,"0944e96c",null)),P=A.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[e._v("账户")]),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("div",{staticClass:"account-item"},[r("span",{staticStyle:{color:"#ff9900"},on:{click:function(t){return e.$store.commit("toggleBalancePane")}}},[e._v(e._s(e.info.balance))]),r("span",[e._v(" 元")]),r("p",[e._v("账户余额")])])]),r("el-col",{attrs:{span:8}},[r("div",{staticClass:"account-item"},[r("span",{staticStyle:{color:"#ff5f3e"},on:{click:function(t){return e.$store.commit("toggleCouponPaneShow")}}},[e._v(e._s(e.info.coupon))]),r("span",[e._v(" 张")]),r("p",[e._v("优惠券")])])]),r("el-col",{attrs:{span:8}},[r("div",{staticClass:"account-item",staticStyle:{"border-right":"none"}},[r("span",{staticStyle:{color:"#6ac20b"},on:{click:function(t){return e.$router.push("/pointsMall")}}},[e._v(e._s(e.info.points))]),r("span",[e._v(" 分")]),r("p",[e._v("积分")])])])],1),r("balance-pane"),r("coupon-pane")],1)},D=[],C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"账户余额",visible:e.$store.state.balancePaneShow,width:"20%"},on:{close:function(t){return e.$store.commit("closeBalancePane")}}},[r("el-button",{staticStyle:{float:"right","margin-left":"10px"},attrs:{type:"success"},on:{click:function(t){e.showRecharge=!e.showRecharge}}},[e._v("充值")]),r("el-popconfirm",{attrs:{confirmButtonText:"好的",cancelButtonText:"不用了",icon:"el-icon-info",iconColor:"rgb(102,177,255)",title:"确认进行提现吗？"},on:{confirm:e.withdraw},scopedSlots:e._u([{key:"reference",fn:function(){return[r("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[e._v("提现")])]},proxy:!0}])}),r("span",{staticStyle:{"font-size":"32px"}},[e._v("123.18")]),e._v(" "),r("span",[e._v("元")]),r("el-divider"),r("el-collapse-transition",[e.showRecharge?r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("el-button",{staticStyle:{float:"right"},attrs:{type:"default",size:"mini",circle:"",icon:"el-icon-close"},on:{click:function(t){e.showRecharge=!1}}}),e._v(" 充值 ")],1),r("div",{staticStyle:{"text-align":"center"}},[r("span",{staticStyle:{"font-size":"18px"}},[e._v("充值金额")]),r("el-input-number",{staticClass:"amount-input",attrs:{precision:2,step:.1,max:9999},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1),r("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[r("img",{attrs:{src:"/imgs/qrcode.png",alt:""}}),r("div"),r("span",[e._v("使用微信/支付宝扫描二维码")])])]):e._e()],1),r("el-card",{staticStyle:{"margin-top":"20px"}},[r("div",{attrs:{slot:"header"},slot:"header"},[e._v("交易明细")]),r("div",{staticStyle:{"text-align":"center"}},[r("img",{attrs:{src:"data:image/png;base64,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",alt:""}}),r("p",[e._v("暂无明细记录")])])])],1)},G=[],R={data:function(){return{amount:100,showRecharge:!1}},methods:{withdraw:function(){this.$message.success("已提交提现请求"),this.$store.commit("closeBalancePane")}}},O=R,E=(r("4d01"),Object(h["a"])(O,C,G,!1,null,"3d70001c",null)),I=E.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"优惠券",visible:e.$store.state.couponPaneShow,width:"50%"},on:{close:function(t){return e.$store.commit("closeCouponPane")}}},[r("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"红包",name:"redEnv"}},[e._v(" 有 "),r("span",{staticStyle:{color:"#ff5340"}},[e._v(e._s(e.redEnv.expireSonn))]),e._v(" 个红包即将过期 "),r("ul",{staticClass:"red-env-list"},e._l(e.redEnv.envList,(function(t){return r("li",{key:t.id},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"red-env-left"},[r("h2",[e._v("￥"+e._s(t.amount))]),r("p",[e._v("满"+e._s(t.leastAmount)+"元可用")])])]),r("el-col",{attrs:{span:14}},[r("div",{staticClass:"red-env-right"},[r("p",{staticStyle:{"font-size":"16px",color:"#666"}},[e._v(e._s(t.name))]),r("p",[e._v(e._s(t.expireDate)+" 过期")]),r("p",[e._v(e._s(t.desc))])])]),r("el-col",{attrs:{span:4}},[r("el-button",{staticStyle:{"margin-top":"50%"},attrs:{type:"primary",size:"medium"},on:{click:e.useCoupon}},[e._v("去使用")])],1)],1),r("el-divider")],1)})),0)]),r("el-tab-pane",{attrs:{label:"商家代金券",name:"sellerToken"}},[e._v(" 有 "),r("span",{staticStyle:{color:"#ff5340"}},[e._v(e._s(e.voucher.expireSonn))]),e._v(" 个红包即将过期 "),r("ul",{staticClass:"red-env-list"},e._l(e.voucher.list,(function(t){return r("li",{key:t.id},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"red-env-left"},[r("h2",[e._v("￥"+e._s(t.amount))]),r("p",[e._v("满"+e._s(t.leastAmount)+"元可用")])])]),r("el-col",{attrs:{span:14}},[r("div",{staticClass:"red-env-right"},[r("p",{staticStyle:{"font-size":"16px",color:"#666"}},[e._v(e._s(t.name))]),r("p",[e._v(e._s(t.expireDate)+" 过期")]),r("p",[e._v(e._s(t.desc))])])]),r("el-col",{attrs:{span:4}},[r("el-button",{staticStyle:{"margin-top":"50%"},attrs:{type:"primary",size:"medium"},on:{click:e.useCoupon}},[e._v("去使用")])],1)],1),r("el-divider")],1)})),0)])],1)],1)},j=[],L={data:function(){return{activeName:"redEnv",redEnv:{expireSonn:3,envList:[{id:1,amount:5,name:"吃货联盟超级红包",leastAmount:20,expireDate:(new Date).toLocaleDateString(),desc:"限收货手机号: 17359561234"},{id:2,amount:5,name:"商超联盟红包",leastAmount:10,expireDate:(new Date).toLocaleDateString(),desc:"限收货手机号: 17359561234及指定商家"},{id:3,amount:20,name:"吃货联盟超级红包",leastAmount:30,expireDate:(new Date).toLocaleDateString(),desc:"限收货手机号: 17359561234"},{id:4,amount:15,name:"吃货联盟超级红包",leastAmount:20,expireDate:(new Date).toLocaleDateString(),desc:"限收货手机号: 17359561234"}]},voucher:{expireSonn:3,list:[{id:1,amount:2,name:"黄焖鸡米饭代金券",leastAmount:20,expireDate:(new Date).toLocaleDateString(),desc:"限收货手机号: 17359561234及指定商家"},{id:2,amount:15,name:"阿牛很芒代金券",leastAmount:20,expireDate:(new Date).toLocaleDateString(),desc:"限收货手机号: 17359561234及指定商家"},{id:3,amount:29.9,name:"网红奶茶店代金券",leastAmount:30,expireDate:(new Date).toLocaleDateString(),desc:"限收货手机号: 17359561234"}]}}},methods:{useCoupon:function(){this.$store.commit("closeCouponPane"),this.$router.push("/shop/1")}}},U=L,K=(r("467d"),Object(h["a"])(U,F,j,!1,null,null,null)),W=K.exports,q={data:function(){return{info:{balance:123.18,coupon:26,points:58}}},components:{BalancePane:I,CouponPane:W}},z=q,B=(r("3121"),Object(h["a"])(z,S,D,!1,null,"63a8f378",null)),N=B.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[e._v("任务中心")]),r("el-progress",{attrs:{percentage:25}}),r("ul",{staticClass:"task-list"},[r("li",[r("el-row",[r("el-col",{attrs:{span:6}},[r("span",{staticClass:"el-icon el-icon-user"},[e._v(" 上传头像")])]),r("el-col",{attrs:{span:18}},[r("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"mini"}},[e._v("去完成")])],1)],1)],1),r("li",[r("el-row",[r("el-col",{attrs:{span:6}},[r("span",{staticClass:"el-icon el-icon-phone"},[e._v(" 绑定手机")])]),r("el-col",{attrs:{span:18}},[r("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"mini"}},[e._v("去完成")])],1)],1)],1),r("li",[r("el-row",[r("el-col",{attrs:{span:6}},[r("span",{staticClass:"el-icon el-icon-shopping-cart-1"},[e._v(" 完成首笔订单")])]),r("el-col",{attrs:{span:18}},[r("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"mini"}},[e._v("去完成")])],1)],1)],1),r("li",[r("el-row",[r("el-col",{attrs:{span:6}},[r("span",{staticClass:"el-icon el-icon-share"},[r("del",[e._v("分享给好友")])])]),r("el-col",{attrs:{span:18}},[r("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"mini",disabled:!0}},[e._v("已完成")])],1)],1)],1)])],1)},_=[],Q={data:function(){return{}}},T=Q,H=(r("cb91"),Object(h["a"])(T,V,_,!1,null,"7e4e49c2",null)),Y=H.exports,J={data:function(){return{nickNameShow:!0,userInfo:this.$store.state.user.info,currentTab:"devliery"}},methods:{handleUpload:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$refs.fileUploader.files,t.prev=1,t.next=4,d["a"].uploadAvatar(r);case 4:if(a=t.sent,!a){t.next=12;break}return e.$message.success("上传头像成功"),e.userInfo.avatar=a,t.next=10,d["a"].updateUserInfo(e.userInfo);case 10:if(!t.sent){t.next=12;break}e.$message.success("更新资料成功");case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](1),e.$message.error(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})))()},showUserEditPanel:function(e){this.currentTab=e,this.$store.commit("toggleUserEditPanel")},showVipPanel:function(){this.$store.commit("toggleVipPanel")}},components:{UserEditPane:g,TaskList:Y,VipPane:P,Account:N}},Z=J,X=(r("94fd"),Object(h["a"])(Z,a,n,!1,null,"7e75c944",null));t["default"]=X.exports},"4d01":function(e,t,r){"use strict";r("8b48")},5492:function(e,t,r){},6132:function(e,t,r){},6525:function(e,t,r){"use strict";r("96cf");var a=r("1da1"),n=r("d4ec"),s=r("bee2"),i=r("27de"),o=function(){function e(){Object(n["a"])(this,e)}return Object(s["a"])(e,[{key:"getItem",value:function(e){return window.localStorage.getItem(e)}},{key:"putItem",value:function(e,t){window.localStorage.setItem(e,t)}},{key:"remove",value:function(e){window.localStorage.removeItem(e)}}]),e}(),l=new o,c=function(){function e(){Object(n["a"])(this,e)}return Object(s["a"])(e,[{key:"isLogin",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=l.getItem("token"),t){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,i["a"].getConsumerInfo();case 5:return r=e.sent,e.abrupt("return",r.success);case 7:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getConsumerInfo",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.consumerInfo){e.next=2;break}return e.abrupt("return",this.consumerInfo);case 2:return e.next=4,i["a"].getConsumerInfo();case 4:if(t=e.sent,t.success){e.next=7;break}throw new Error("获取用户信息失败:"+t.msg);case 7:return e.abrupt("return",t.data);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"login",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].login(t,r);case 2:if(a=e.sent,a.success){e.next=5;break}throw new Error("登录失败:"+a.msg);case 5:return l.putItem("token",a.data.token),e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"register",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].register(t);case 2:if(r=e.sent,r.success){e.next=5;break}throw new Error("注册失败:"+r.msg);case 5:return e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getDefaultDelivery",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].getConsumerDefaultDelivery();case 2:if(t=e.sent,t.success){e.next=5;break}throw new Error("获取默认收货信息失败:"+t.msg);case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(){l.remove("token")}},{key:"uploadAvatar",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t&&0!==t.length){e.next=2;break}throw new Error("上传头像失败:没有选择图片");case 2:return r=new FormData,r.append("file",t[0]),e.next=6,i["a"].uploadAvatar(r);case 6:if(a=e.sent,a.success){e.next=9;break}throw new Error("上传头像失败:"+a.msg);case 9:return e.abrupt("return",a.data);case 10:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateUserInfo",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].updateUserInfo(t);case 2:if(r=e.sent,r.success){e.next=5;break}throw new Error("保存用户信息失败:"+r.msg);case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updatePassword",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].updatePassword(t,r);case 2:if(a=e.sent,a.success){e.next=5;break}throw new Error("修改密码失败:"+a.msg);case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()}]),e}();t["a"]=new c},"8b48":function(e,t,r){},"915f":function(e,t,r){"use strict";r("0c93")},"94fd":function(e,t,r){"use strict";r("6132")},a061:function(e,t,r){},cb91:function(e,t,r){"use strict";r("5492")},e14f:function(e,t,r){}}]);
//# sourceMappingURL=chunk-227cb6f4.0520d386.js.map