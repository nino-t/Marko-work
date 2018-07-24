$_mod.def("/marko-learn$1.0.0/components/color-box/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.12.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.12.2/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {
        onInput: function() {
          this.state = {
              width: 200,
              height: 100
            };
        },
        handleClick: function(event) {
          this.state.width += 25;

          this.state.height += 25;
        }
      },
    components_helpers = require('/marko$4.12.2/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-learn$1.0.0/components/color-box/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_styleAttr = require('/marko$4.12.2/src/runtime/vdom/helper-styleAttr'/*"marko/src/runtime/vdom/helper-styleAttr"*/);

function render(input, out, __component, component, state) {
  var data = input;

  out.e("DIV", {
      "class": "color-box",
      style: marko_styleAttr({
          width: state.width + "px",
          height: state.height + "px",
          backgroundColor: input.color
        })
    }, "0", component, 1, 4, {
      onclick: __component.d("handleClick", false)
    })
    .t(input.color);
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});