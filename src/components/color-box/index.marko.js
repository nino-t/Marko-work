// Compiled using marko@4.12.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
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
    marko_componentType = "/marko-learn$1.0.0/components/color-box/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_styleAttr = marko_helpers.sa,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"color-box\"" +
    marko_styleAttr({
      width: state.width + "px",
      height: state.height + "px",
      backgroundColor: input.color
    }) +
    marko_attr("data-marko", {
      onclick: __component.d("handleClick", false)
    }, false) +
    ">" +
    marko_escapeXml(input.color) +
    "</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "less",
          code: "@border-color: #000;\n\n  .color-box {\n    border: 2px solid @border-color;\n  }",
          virtualPath: "./index.marko.less",
          path: "./index.marko"
        }
    ],
    id: "/marko-learn$1.0.0/components/color-box/index.marko",
    component: "./"
  };
