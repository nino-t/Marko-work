$_mod.def("/marko-learn$1.0.0/src/components/app-hello/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.12.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.12.2/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {
        onCreate: function() {
          this.state = {
              count: 0
            };
        },
        onMount: function() {
          console.log("Mounted in the browser!");
        },
        increment: function() {
          this.state.count++;
        }
      },
    components_helpers = require('/marko$4.12.2/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-learn$1.0.0/src/components/app-hello/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_attrs0 = {
        "class": "count"
      },
    marko_attrs1 = {
        type: "button",
        "class": "example-button"
      };

function render(input, out, __component, component, state) {
  var data = input;

  out.e("P", null, "0", component, 2)
    .t("Hello ")
    .t(input.name);

  out.e("DIV", marko_attrs0, "1", component, 1)
    .t(state.count);

  out.e("BUTTON", marko_attrs1, "2", component, 1, 0, {
      onclick: __component.d("increment", false)
    })
    .t("Click me");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});