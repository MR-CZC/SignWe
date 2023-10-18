"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      chairs: [
        { id: 1, status: false },
        { id: 2, status: false },
        { id: 3, status: false },
        { id: 4, status: false },
        { id: 5, status: false },
        { id: 6, status: false },
        { id: 7, status: false },
        { id: 8, status: false },
        { id: 9, status: false },
        { id: 10, status: false },
        { id: 11, status: false },
        { id: 12, status: false }
      ],
      message: ""
    };
  },
  methods: {
    // 工位
    memberShow() {
      this.message = "成员工位";
      this.$refs.popup.open("center");
    },
    // 设备
    machineShow() {
      this.message = "设备";
      this.$refs.popup.open("center");
    },
    // 门
    doorShow() {
      this.message = "门";
      this.$refs.popup.open("center");
    },
    // 书柜
    bookShow() {
      this.message = "书柜";
      this.$refs.popup.open("center");
    },
    // 空调
    aircShow() {
      this.message = "空调";
      this.$refs.popup.open("center");
    },
    // 打印机
    printerShow() {
      this.message = "打印机";
      this.$refs.popup.open("center");
    },
    // 饮水机
    waterShow() {
      this.message = "饮水机";
      this.$refs.popup.open("center");
    },
    // 坐下
    sitDown(id) {
      common_vendor.index.navigateTo({
        url: `/pages/chair/chair?id=${id}`
      });
    },
    //起立
    standUp(id) {
      common_vendor.index.navigateTo({
        url: `/pages/chair/chair?id=${id}`
      });
    },
    // 获取所有椅子状态
    getAllChair() {
      common_vendor.index.request({
        url: "https://turingclock.raqtpie.xyz:9642/getChair",
        method: "GET",
        success: (res) => {
          if (res.data.code === 200) {
            this.chairs = res.data.data;
          }
        }
      });
    }
  },
  onLoad() {
    common_vendor.index.startPullDownRefresh();
  },
  onShow() {
    common_vendor.index.startPullDownRefresh();
    setTimeout(() => {
      common_vendor.index.stopPullDownRefresh();
    }, 1e3);
  },
  onPullDownRefresh() {
    setTimeout(() => {
      this.getAllChair();
    }, 700);
    setTimeout(() => {
      common_vendor.index.stopPullDownRefresh();
    }, 1e3);
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.printerShow && $options.printerShow(...args)),
    b: common_vendor.o((...args) => $options.doorShow && $options.doorShow(...args)),
    c: common_vendor.o((...args) => $options.machineShow && $options.machineShow(...args)),
    d: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    e: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    f: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    g: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    h: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    i: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    j: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    k: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    l: common_vendor.o((...args) => $options.aircShow && $options.aircShow(...args)),
    m: common_vendor.o((...args) => $options.bookShow && $options.bookShow(...args)),
    n: !$data.chairs[0].status
  }, !$data.chairs[0].status ? {
    o: common_vendor.o(($event) => $options.sitDown(1))
  } : {}, {
    p: $data.chairs[0].status
  }, $data.chairs[0].status ? {
    q: common_vendor.o(($event) => $options.standUp(1))
  } : {}, {
    r: !$data.chairs[1].status
  }, !$data.chairs[1].status ? {
    s: common_vendor.o(($event) => $options.sitDown(2))
  } : {}, {
    t: $data.chairs[1].status
  }, $data.chairs[1].status ? {
    v: common_vendor.o(($event) => $options.standUp(2))
  } : {}, {
    w: !$data.chairs[2].status
  }, !$data.chairs[2].status ? {
    x: common_vendor.o(($event) => $options.sitDown(3))
  } : {}, {
    y: $data.chairs[2].status
  }, $data.chairs[2].status ? {
    z: common_vendor.o(($event) => $options.standUp(3))
  } : {}, {
    A: !$data.chairs[5].status
  }, !$data.chairs[5].status ? {
    B: common_vendor.o(($event) => $options.sitDown(6))
  } : {}, {
    C: $data.chairs[5].status
  }, $data.chairs[5].status ? {
    D: common_vendor.o(($event) => $options.standUp(6))
  } : {}, {
    E: !$data.chairs[4].status
  }, !$data.chairs[4].status ? {
    F: common_vendor.o(($event) => $options.sitDown(5))
  } : {}, {
    G: $data.chairs[4].status
  }, $data.chairs[4].status ? {
    H: common_vendor.o(($event) => $options.standUp(5))
  } : {}, {
    I: !$data.chairs[3].status
  }, !$data.chairs[3].status ? {
    J: common_vendor.o(($event) => $options.sitDown(4))
  } : {}, {
    K: $data.chairs[3].status
  }, $data.chairs[3].status ? {
    L: common_vendor.o(($event) => $options.standUp(4))
  } : {}, {
    M: !$data.chairs[6].status
  }, !$data.chairs[6].status ? {
    N: common_vendor.o(($event) => $options.sitDown(7))
  } : {}, {
    O: $data.chairs[6].status
  }, $data.chairs[6].status ? {
    P: common_vendor.o(($event) => $options.standUp(7))
  } : {}, {
    Q: !$data.chairs[7].status
  }, !$data.chairs[7].status ? {
    R: common_vendor.o(($event) => $options.sitDown(8))
  } : {}, {
    S: $data.chairs[7].status
  }, $data.chairs[7].status ? {
    T: common_vendor.o(($event) => $options.standUp(8))
  } : {}, {
    U: !$data.chairs[8].status
  }, !$data.chairs[8].status ? {
    V: common_vendor.o(($event) => $options.sitDown(9))
  } : {}, {
    W: $data.chairs[8].status
  }, $data.chairs[8].status ? {
    X: common_vendor.o(($event) => $options.standUp(9))
  } : {}, {
    Y: !$data.chairs[11].status
  }, !$data.chairs[11].status ? {
    Z: common_vendor.o(($event) => $options.sitDown(12))
  } : {}, {
    aa: $data.chairs[11].status
  }, $data.chairs[11].status ? {
    ab: common_vendor.o(($event) => $options.standUp(12))
  } : {}, {
    ac: !$data.chairs[10].status
  }, !$data.chairs[10].status ? {
    ad: common_vendor.o(($event) => $options.sitDown(11))
  } : {}, {
    ae: $data.chairs[10].status
  }, $data.chairs[10].status ? {
    af: common_vendor.o(($event) => $options.standUp(11))
  } : {}, {
    ag: !$data.chairs[9].status
  }, !$data.chairs[9].status ? {
    ah: common_vendor.o(($event) => $options.sitDown(10))
  } : {}, {
    ai: $data.chairs[9].status
  }, $data.chairs[9].status ? {
    aj: common_vendor.o(($event) => $options.standUp(10))
  } : {}, {
    ak: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    al: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    am: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    an: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    ao: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    ap: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    aq: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    ar: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    as: common_vendor.o((...args) => $options.doorShow && $options.doorShow(...args)),
    at: common_vendor.o((...args) => $options.waterShow && $options.waterShow(...args)),
    av: common_vendor.o((...args) => $options.doorShow && $options.doorShow(...args)),
    aw: common_vendor.o((...args) => $options.memberShow && $options.memberShow(...args)),
    ax: common_vendor.o((...args) => $options.aircShow && $options.aircShow(...args)),
    ay: common_vendor.t($data.message),
    az: common_vendor.sr("popup", "716c9ebc-0")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Turing/SignWe/SignWe/pages/seat/seat.vue"]]);
wx.createPage(MiniProgramPage);
