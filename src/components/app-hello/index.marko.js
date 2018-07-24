// Compiled using marko@4.12.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
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
    marko_componentType = "/marko-learn$1.0.0/src/components/app-hello/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<p>Hello " +
    marko_escapeXml(input.name) +
    "</p><div class=\"count\">" +
    marko_escapeXml(state.count) +
    "</div><button type=\"button\" class=\"example-button\"" +
    marko_attr("data-marko", {
      onclick: __component.d("increment", false)
    }, false) +
    ">Click me</button>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: ".count {\n        color:#09c;\n        font-size:3em;\n    }\n    .example-button {\n        font-size:1em;\n        padding:0.5em;\n    }",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/marko-learn$1.0.0/src/components/app-hello/index.marko",
    component: "./"
  };
