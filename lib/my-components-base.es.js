import { defineComponent, openBlock, createElementBlock, createElementVNode, renderSlot, createCommentVNode, normalizeClass, ref, resolveComponent, createBlock, withCtx, toDisplayString, Fragment, renderList, createVNode, toRefs, computed, unref, normalizeProps, guardReactiveProps, pushScopeId, popScopeId } from "vue";
var LayoutArea_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".layout-area-container[data-v-3eabb0c6]{display:flex;flex-direction:column;min-width:100%;height:100%;min-height:100vh;overflow:hidden;background:#f0f2f5}.layout-area-container .layout-area-container__bottom[data-v-3eabb0c6]{display:flex;flex:1;position:relative;color:#303133}.layout-area-container .layout-area-container__bottom .layout-area-container__bottom__inner[data-v-3eabb0c6]{position:absolute;top:0;left:0;right:0;bottom:0;display:flex}.layout-area-container .layout-area-container__bottom .layout-area-container__bottom__inner .side-layout-area-menu-bar[data-v-3eabb0c6]{position:relative;flex-direction:column;transition:width .28s;border-right:1px solid #dcdfe6;overflow-x:hidden;overflow-y:auto;background-color:#36383d;scroll-behavior:smooth}.layout-area-container .layout-area-container__bottom .layout-area-container__bottom__inner .content-section-container[data-v-3eabb0c6]{display:flex;flex:auto;flex-direction:column;min-width:0;background-color:#f0f2f5}.layout-area-container .layout-area-container__bottom .layout-area-container__bottom__inner .content-section-container .main-content-top[data-v-3eabb0c6]{z-index:1}.layout-area-container .layout-area-container__bottom .layout-area-container__bottom__inner .content-section-container .main-content-box[data-v-3eabb0c6]{flex:auto;position:relative}.layout-area-container .layout-area-container__bottom .layout-area-container__bottom__inner .content-section-container .main-content-box .inner-content[data-v-3eabb0c6]{padding:16px;position:absolute;top:0;left:0;right:0;bottom:0;overflow:auto;scroll-behavior:smooth}.layout-area-container .layout-area-container__bottom .layout-area-container__bottom__inner .content-section-container .main-content-footer[data-v-3eabb0c6]{color:#36383d;text-align:center;line-height:40px;border-top:1px solid #ddd}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = defineComponent({
  name: "LayoutArea"
});
const _hoisted_1$4 = { class: "layout-area-container" };
const _hoisted_2$3 = { class: "layout-area-container__bottom" };
const _hoisted_3$3 = { class: "layout-area-container__bottom__inner" };
const _hoisted_4$1 = {
  key: 0,
  class: "side-layout-area-menu-bar"
};
const _hoisted_5$1 = { class: "content-section-container" };
const _hoisted_6$1 = { class: "main-content-top" };
const _hoisted_7$1 = { class: "main-content-box" };
const _hoisted_8$1 = { class: "inner-content" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createElementVNode("div", _hoisted_2$3, [
      createElementVNode("div", _hoisted_3$3, [
        _ctx.$slots.side ? (openBlock(), createElementBlock("aside", _hoisted_4$1, [
          renderSlot(_ctx.$slots, "side", {}, void 0, true)
        ])) : createCommentVNode("v-if", true),
        createElementVNode("section", _hoisted_5$1, [
          createElementVNode("div", _hoisted_6$1, [
            renderSlot(_ctx.$slots, "rightTop", {}, void 0, true)
          ]),
          createElementVNode("main", _hoisted_7$1, [
            createElementVNode("div", _hoisted_8$1, [
              renderSlot(_ctx.$slots, "content", {}, void 0, true)
            ])
          ]),
          createCommentVNode(' <footer class="main-content-footer">\r\n            \u{1F680} Powered By ShineWingDigital\r\n          </footer> ')
        ])
      ])
    ])
  ]);
}
var LayoutArea = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-3eabb0c6"]]);
var LayoutSection_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".layout-section-container[data-v-66db8e90]{display:flex;flex-direction:column;height:100%}.layout-section-container .layout-section-container__content[data-v-66db8e90]{display:flex;flex-direction:column;position:relative;flex:auto;min-height:0;overflow:hidden}.layout-section-container .layout-section-container__content .content-divider[data-v-66db8e90]{height:1px;background:#dcdfe6;margin-bottom:6px}.layout-section-container .layout-section-container__content .layout-section-container__content-inner.is-flex[data-v-66db8e90]{height:100%;overflow:auto}\n")();
const _sfc_main$3 = defineComponent({
  name: "LayoutSection",
  props: {
    hasDivider: {
      type: Boolean,
      default: false
    },
    flexContent: {
      type: Boolean,
      default: false
    }
  }
});
const _hoisted_1$3 = { class: "layout-section-container" };
const _hoisted_2$2 = { class: "layout-section-container__content" };
const _hoisted_3$2 = {
  key: 0,
  class: "content-divider"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", _hoisted_2$2, [
      _ctx.hasDivider ? (openBlock(), createElementBlock("div", _hoisted_3$2)) : createCommentVNode("v-if", true),
      createElementVNode("div", {
        class: normalizeClass(["layout-section-container__content-inner", {
          "is-flex": _ctx.flexContent
        }])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2)
    ])
  ]);
}
var LayoutSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-66db8e90"]]);
var PublicSideLogo_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".public-side-logo[data-v-70cebc7a]{height:56px;background-color:#f2e1f4;display:flex;align-items:center;justify-content:center}\n")();
const _sfc_main$2 = defineComponent({
  name: "PublicSideLogo",
  components: {},
  props: {},
  setup() {
    return {};
  }
});
const _hoisted_1$2 = { class: "public-side-logo" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, " logo ");
}
var PublicSideLogo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-70cebc7a"]]);
const menuLists = [
  {
    title: "xx\u7BA1\u7406",
    icon: "",
    path: "",
    children: [
      {
        title: "xx\u7BA1\u74061",
        icon: "icon-quanxianguanli",
        path: "/authority-management",
        children: [
          {
            title: "xx\u7BA1\u74061-1",
            icon: "",
            path: "/authority-management/business-organization-management",
            children: [
              {
                title: "xx\u7BA1\u74061-1-1",
                icon: "",
                path: "xx\u7BA1\u74061-1-1",
                children: [
                  {
                    title: "xx\u7BA1\u74061-1-2",
                    icon: "",
                    path: "xx\u7BA1\u74061-1-2"
                  }
                ]
              }
            ]
          },
          {
            title: "xx\u7BA1\u74061-2",
            icon: "",
            path: "/authority-management/role-manage"
          },
          {
            title: "xx\u7BA1\u74061-3",
            icon: "",
            path: "/authority-management/user-management"
          },
          {
            title: "xx\u7BA1\u74061-4",
            icon: "",
            path: "/authority-management/approve-management"
          }
        ]
      },
      {
        title: "xx\u7BA1\u74062",
        icon: "icon-shujucaiji",
        path: "/data-collection",
        children: [
          {
            title: "xx\u7BA1\u74062-1",
            icon: "",
            path: "/data-collection/data-import"
          },
          {
            title: "xx\u7BA1\u74062-2",
            icon: "",
            path: "/data-collection/account-statement-item-map"
          }
        ]
      }
    ]
  },
  {
    title: "xx\u4FE1\u606F",
    icon: "",
    path: "",
    children: [
      {
        title: "xx\u4FE1\u606F1",
        icon: "icon-gongshangxinxi",
        path: "/business-information"
      },
      {
        title: "xx\u4FE1\u606F2",
        icon: "icon-shuiwuxinxi",
        path: "/tax-information"
      }
    ]
  }
];
const findArrayTreePath = (arrayTree, code, pathStack = []) => {
  const findPath = (tree, code2, pathStack2 = []) => {
    pathStack2.push(tree.path);
    if (tree.path && code2.includes(tree.path)) {
      return {
        path: tree.path,
        tree,
        clump: pathStack2
      };
    }
    for (const node of tree.children || []) {
      const result = findPath(node, code2, [...pathStack2]);
      if (result)
        return result;
    }
  };
  for (const node of arrayTree) {
    const result = findPath(node, code, [...pathStack]);
    if (result)
      return result;
  }
};
const getRoutePath = (pathArr) => {
  const routePath = ref("");
  pathArr.forEach((item) => {
    if (!item)
      return;
    routePath.value += item + "/";
  });
  return routePath.value.substring(0, routePath.value.length - 1);
};
var PublicMenuChildren_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".menu-chlldren-box[data-v-33de7f24]{overflow:hidden;background-color:#2a2a2c;color:#d3d7df}.menu-chlldren-box.is-active-current-menu[data-v-33de7f24] .el-sub-menu__title,.menu-chlldren-box.is-active-current-menu[data-v-33de7f24] .el-sub-menu__title .icon-item-title{color:#f37021}.menu-chlldren-box.is-active-current-menu[data-v-33de7f24] .el-sub-menu .is-active-last-child-menu-item .el-menu-item{color:#fff!important;border-radius:2px;background-color:#fa6400!important}.menu-chlldren-box.is-active-current-menu>.is-active-last-child-menu-item>.el-menu-item[data-v-33de7f24]{color:#fa6400}.menu-chlldren-box .title-menu-item[data-v-33de7f24]{margin-left:12px}.menu-chlldren-box.is-show-put-away-icon[data-v-33de7f24] .el-sub-menu__icon-arrow{display:none!important}.menu-chlldren-box[data-v-33de7f24] .el-sub-menu__title{height:40px;color:#d3d7df;background-color:#36383d}.menu-chlldren-box[data-v-33de7f24] .el-sub-menu__title:hover{border-radius:2px;background-color:#4a4c50!important}.menu-chlldren-box[data-v-33de7f24] .el-menu-item{height:40px;color:#d3d7df;background-color:#36383d}.menu-chlldren-box[data-v-33de7f24] .el-menu-item:hover{border-radius:2px;background-color:#4a4c50!important}.menu-chlldren-box[data-v-33de7f24] .el-menu-item span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.menu-chlldren-box[data-v-33de7f24] .el-sub-menu.is-opened .el-menu .el-sub-menu__title{color:#d3d7df;background-color:#2a2a2c}.menu-chlldren-box[data-v-33de7f24] .el-sub-menu.is-opened .el-menu .menu-chlldren-box{background-color:#2a2a2c}.menu-chlldren-box[data-v-33de7f24] .el-sub-menu.is-opened .el-menu .menu-chlldren-box .last-child-menu-item{margin:2px 4px}.menu-chlldren-box[data-v-33de7f24] .el-sub-menu.is-opened .el-menu .menu-chlldren-box .el-menu-item{background-color:#2a2a2c}.menu-chlldren-box[data-v-33de7f24] .el-sub-menu.is-opened .el-menu .menu-chlldren-box .el-menu-item span{overflow:hidden}.menu-chlldren-box[data-v-33de7f24] .el-menu-tooltip__trigger,.menu-chlldren-box[data-v-33de7f24] .el-tooltip__trigger{justify-content:center}\n")();
const _sfc_main$1 = defineComponent({
  name: "PublicMenuChildren",
  components: {},
  props: {
    menuChildData: {
      type: Object,
      default: () => {
        return {};
      }
    },
    isCollapse: {
      type: Boolean,
      default: false
    },
    activeMenu: {
      type: String,
      default: ""
    },
    selectArray: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  setup(props) {
    const getSelectData = (item) => {
      const selectDataArray = ref([]);
      selectDataArray.value = findArrayTreePath(menuLists, item).clump;
      return getRoutePath(selectDataArray.value);
    };
    const findSelectAllPath = (item) => {
      if (!props.selectArray.length)
        return;
      const getSelectArray = props.selectArray.filter((item2) => {
        if (item2) {
          return item2;
        }
      });
      return getSelectArray[getSelectArray.length - 1].includes(item);
    };
    return {
      findSelectAllPath,
      getSelectData
    };
  }
});
const _hoisted_1$1 = ["currentPath", "selectArr", "activePath"];
const _hoisted_2$1 = {
  key: 1,
  class: "title-menu-item"
};
const _hoisted_3$1 = { class: "title-menu-item" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconFont = resolveComponent("IconFont");
  const _component_PublicMenuChildren = resolveComponent("PublicMenuChildren", true);
  const _component_el_sub_menu = resolveComponent("el-sub-menu");
  const _component_el_menu_item = resolveComponent("el-menu-item");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["menu-chlldren-box", {
      "is-active-current-menu": _ctx.findSelectAllPath(_ctx.menuChildData.path),
      "is-not-active-menu": !_ctx.findSelectAllPath(_ctx.menuChildData.path),
      "is-show-put-away-icon": _ctx.isCollapse
    }]),
    currentPath: _ctx.menuChildData.path,
    selectArr: _ctx.selectArray,
    activePath: _ctx.activeMenu
  }, [
    _ctx.menuChildData.children ? (openBlock(), createBlock(_component_el_sub_menu, {
      key: 0,
      index: _ctx.menuChildData.path,
      title: _ctx.menuChildData.title
    }, {
      title: withCtx(() => [
        _ctx.menuChildData.icon ? (openBlock(), createBlock(_component_IconFont, {
          key: 0,
          icon: _ctx.menuChildData.icon,
          class: "icon-item-title"
        }, null, 8, ["icon"])) : createCommentVNode("v-if", true),
        !_ctx.isCollapse ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(_ctx.menuChildData.title), 1)) : createCommentVNode("v-if", true)
      ]),
      default: withCtx(() => {
        var _a;
        return [
          (openBlock(true), createElementBlock(Fragment, null, renderList((_a = _ctx.menuChildData) == null ? void 0 : _a.children, (value, valIndex) => {
            return openBlock(), createBlock(_component_PublicMenuChildren, {
              key: valIndex,
              "menu-child-data": value,
              "active-menu": _ctx.activeMenu,
              "select-array": _ctx.selectArray
            }, null, 8, ["menu-child-data", "active-menu", "select-array"]);
          }), 128))
        ];
      }),
      _: 1
    }, 8, ["index", "title"])) : (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(["last-child-menu-item", {
        "is-active-last-child-menu-item": _ctx.findSelectAllPath(_ctx.menuChildData.path),
        "is-not-last-child-active-menu": !_ctx.findSelectAllPath(_ctx.menuChildData.path)
      }])
    }, [
      createVNode(_component_el_menu_item, {
        index: _ctx.menuChildData.path,
        title: _ctx.menuChildData.title
      }, {
        title: withCtx(() => [
          createElementVNode("span", _hoisted_3$1, toDisplayString(_ctx.menuChildData.title), 1)
        ]),
        default: withCtx(() => [
          _ctx.menuChildData.icon ? (openBlock(), createBlock(_component_IconFont, {
            key: 0,
            icon: _ctx.menuChildData.icon,
            class: "icon-item-title"
          }, null, 8, ["icon"])) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["index", "title"])
    ], 2))
  ], 10, _hoisted_1$1);
}
var PublicMenuChildren = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-33de7f24"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".icon-font[data-v-d34f362e]{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}.icon-font.middle[data-v-d34f362e]{vertical-align:middle}.icon-font.cursor[data-v-d34f362e]{cursor:pointer}.icon-font.disabled[data-v-d34f362e]{color:#c0c4cc;cursor:not-allowed}\n")();
const _withScopeId = (n) => (pushScopeId("data-v-d34f362e"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  id: "drop-shadow",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = {
  key: 0,
  in: "SourceAlpha",
  stdDeviation: "2"
};
const _hoisted_3 = {
  key: 1,
  dx: "1",
  dy: "1",
  result: "offsetblur"
};
const _hoisted_4 = { key: 2 };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("feFuncA", {
  type: "linear",
  slope: "0.2"
}, null, -1));
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("feMerge", null, [
  /* @__PURE__ */ createElementVNode("feMergeNode"),
  /* @__PURE__ */ createElementVNode("feMergeNode", { in: "SourceGraphic" })
], -1));
const _hoisted_8 = ["xlink:href"];
const __default__ = defineComponent({
  name: "IconFont"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    icon: {
      type: String,
      default: ""
    },
    shadow: {
      type: Boolean,
      default: false
    },
    verticalCenter: {
      type: Boolean,
      default: false
    },
    cursor: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isShowShadow: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const {
      verticalCenter,
      cursor,
      shadow,
      disabled
    } = toRefs(props);
    const getClassName = computed(() => {
      const className = [];
      if (verticalCenter.value) {
        className.push("middle");
      }
      if (cursor.value) {
        className.push("cursor");
      }
      if (disabled.value) {
        className.push("disabled");
      }
      return className;
    });
    const handleClick = () => {
      !disabled.value && emit("click");
    };
    const getAttrs = () => {
      const attrs = {};
      shadow && (attrs.filter = "url(#drop-shadow)");
      return attrs;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        class: normalizeClass(["icon-font", unref(getClassName)]),
        "aria-hidden": "true",
        onClick: _cache[0] || (_cache[0] = ($event) => handleClick())
      }, [
        createElementVNode("filter", _hoisted_1, [
          __props.isShowShadow ? (openBlock(), createElementBlock("feGaussianBlur", _hoisted_2)) : createCommentVNode("v-if", true),
          __props.isShowShadow ? (openBlock(), createElementBlock("feOffset", _hoisted_3)) : createCommentVNode("v-if", true),
          __props.isShowShadow ? (openBlock(), createElementBlock("feComponentTransfer", _hoisted_4, _hoisted_6)) : createCommentVNode("v-if", true),
          _hoisted_7
        ]),
        createElementVNode("g", normalizeProps(guardReactiveProps(getAttrs())), [
          createElementVNode("use", {
            "xlink:href": "#" + __props.icon
          }, null, 8, _hoisted_8)
        ], 16)
      ], 2);
    };
  }
});
var IconFont = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d34f362e"]]);
const componentList = [
  IconFont,
  LayoutArea,
  LayoutSection,
  PublicSideLogo,
  PublicMenuChildren
];
const component = {
  install(app) {
    componentList.forEach((item) => {
      app.component(item.name, item);
    });
  }
};
export { component as default };
