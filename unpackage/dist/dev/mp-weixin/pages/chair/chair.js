"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_check = require("../../utils/check.js");
const CustomModal = () => "../../component/custom-modal/custom-modal.js";
const _sfc_main = {
  components: {
    CustomModal
  },
  data() {
    return {
      isOpen: getApp().globalData.isOP,
      inner: getApp().globalData.in,
      chairId: -1,
      status: false,
      username: "暂无",
      canOperate: true,
      showModal: false
    };
  },
  methods: {
    // 显示自定义模态对话框
    showCustomModal() {
      this.showModal = true;
    },
    // 处理用户点击自定义模态对话框的确认按钮的逻辑
    handleConfirm(data) {
      utils_check.register(data.name, data.className);
      this.showModal = false;
    },
    // 处理用户关闭自定义模态对话框的逻辑
    handleClose() {
      this.showModal = false;
    },
    // 开门
    toOpenDoor() {
      common_vendor.index.navigateTo({
        url: "/pages/openDoor/openDoor"
      });
    },
    // 获取chair状态
    getChairById() {
      const token = common_vendor.index.getStorageSync("token");
      if (token === "") {
        common_vendor.index.request({
          url: "https://turingclock.raqtpie.xyz:9642/getChairById",
          method: "GET",
          data: {
            id: this.chairId
          },
          success: (res) => {
            console.log(res);
            if (res.data.code === 200) {
              this.status = res.data.data.status;
              this.username = res.data.data.username;
              this.canOperate = res.data.data.canOperate;
            }
          },
          fail: (err) => {
            console.log(err);
          }
        });
      } else {
        common_vendor.index.request({
          url: "https://turingclock.raqtpie.xyz:9642/getChairById",
          method: "GET",
          data: {
            id: this.chairId
          },
          header: {
            Authorization: token
          },
          success: (res) => {
            console.log(res);
            if (res.data.code === 200) {
              this.status = res.data.data.status;
              this.username = res.data.data.username;
              this.canOperate = res.data.data.canOperate;
            }
          },
          fail: (err) => {
            console.log(err);
          }
        });
      }
    },
    //签到
    signIn() {
      const token = common_vendor.index.getStorageSync("token");
      if (token == "") {
        console.log("未登录");
        utils_check.login(this.sitDown, this.showCustomModal);
        return;
      }
      this.sitDown();
    },
    // 坐下
    sitDown() {
      const token = common_vendor.index.getStorageSync("token");
      if (token == "") {
        return;
      }
      common_vendor.index.request({
        url: "https://turingclock.raqtpie.xyz:9642/work".concat("?chairId=", this.chairId),
        method: "PUT",
        header: {
          Authorization: token
        },
        // data:{
        // 	chairId: this.chairId,
        // },
        success: (res) => {
          if (res.data.code == 200) {
            common_vendor.index.showToast({
              title: "加载中",
              icon: "loading",
              duration: 700,
              mask: true
            });
            setTimeout(() => {
              this.getChairById();
            }, 700);
          } else if (res.data.code === 400) {
            common_vendor.index.showToast({
              title: res.data.msg,
              icon: "error",
              mask: true
            });
            setTimeout(() => {
              common_vendor.index.reLaunch({
                url: "/pages/seat/seat"
              });
            }, 1500);
          } else if (res.data.code === 403) {
            utils_check.login(this.sitDown, this.showCustomModal);
          }
        },
        fail: (err) => {
          console.log(err);
        }
      });
    },
    //签退
    signOut() {
      const token = common_vendor.index.getStorageSync("token");
      if (token == "") {
        console.log("未登录");
        utils_check.login(this.leave, this.showCustomModal);
        return;
      }
      this.leave();
    },
    // 离开
    leave() {
      const token = common_vendor.index.getStorageSync("token");
      if (token === "") {
        return;
      }
      common_vendor.index.request({
        url: "https://turingclock.raqtpie.xyz:9642/life".concat("?chairId=", this.chairId),
        method: "PUT",
        header: {
          Authorization: token
        },
        // data:{
        // 	chairId: this.chairId,
        // },
        success: (res) => {
          if (res.data.code == 200) {
            common_vendor.index.showToast({
              title: "加载中",
              icon: "loading",
              duration: 700,
              mask: true
            });
            setTimeout(() => {
              this.getChairById();
            }, 700);
          } else if (res.data.code === 403) {
            utils_check.login(this.leave, this.showCustomModal);
          }
        },
        fail: (err) => {
          console.log(err);
        }
      });
    }
  },
  onLoad(e) {
    const token = common_vendor.index.getStorageSync("token");
    this.chairId = e.id;
    this.getChairById();
    if (token == "") {
      utils_check.login2();
    }
  }
};
if (!Array) {
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _component_CustomModal = common_vendor.resolveComponent("CustomModal");
  (_easycom_uni_notice_bar2 + _component_CustomModal)();
}
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
if (!Math) {
  _easycom_uni_notice_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.toOpenDoor),
    b: common_vendor.p({
      single: true,
      color: !$data.isOpen ? "#fff" : "#00917c",
      ["background-color"]: !$data.isOpen ? "red" : "#caf7e3",
      text: !$data.isOpen ? "暂未开门，请在群里询问或点此修正开门状态" : "实验室已开门，点此修正开门状态"
    }),
    c: common_vendor.t(this.chairId),
    d: common_vendor.t(this.username),
    e: $data.isOpen
  }, $data.isOpen ? common_vendor.e({
    f: common_vendor.t(!$data.status ? "空闲" : "正在使用"),
    g: common_vendor.n(!$data.status ? "freeText" : "unfreeText"),
    h: !$data.status
  }, !$data.status ? common_vendor.e({
    i: !$data.inner,
    j: common_vendor.o((...args) => $options.signIn && $options.signIn(...args)),
    k: !$data.inner
  }, !$data.inner ? {} : {}, {
    l: !$data.inner
  }, !$data.inner ? {} : {}) : {}, {
    m: $data.status && $data.canOperate
  }, $data.status && $data.canOperate ? {
    n: common_vendor.o((...args) => $options.signOut && $options.signOut(...args))
  } : {}, {
    o: $data.status && !$data.canOperate
  }, $data.status && !$data.canOperate ? {} : {}) : {}, {
    p: !$data.isOpen
  }, !$data.isOpen ? {
    q: common_vendor.o((...args) => $options.toOpenDoor && $options.toOpenDoor(...args))
  } : {}, {
    r: common_vendor.o($options.handleConfirm),
    s: common_vendor.o($options.handleClose),
    t: $data.showModal
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Turing/SignWe/SignWe/pages/chair/chair.vue"]]);
wx.createPage(MiniProgramPage);
