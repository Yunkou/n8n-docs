(window.webpackJsonp=window.webpackJsonp||[]).push([[503],{1587:function(t,e,n){"use strict";n.r(e);var a=n(26),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"nodelinter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodelinter"}},[t._v("#")]),t._v(" Nodelinter")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/n8n-io/nodelinter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nodelinter"),n("OutboundLink")],1),t._v(" is an extensible static analysis tool for checking your n8n node files to ensure n8n recommended best practices are followed when developing new nodes.")]),t._v(" "),n("p",[t._v("This includes rules for:")]),t._v(" "),n("ul",[n("li",[t._v("Alphabetization of node parameters and options")]),t._v(" "),n("li",[t._v("Casing for display names and descriptions")]),t._v(" "),n("li",[t._v("Default values per parameter type")]),t._v(" "),n("li",[t._v("Required and optional key-value pairs")])]),t._v(" "),n("p",[t._v("See the full linting list "),n("a",{attrs:{href:"https://github.com/n8n-io/nodelinter/blob/master/src/lintings.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(" for more details.")]),t._v(" "),n("h2",{attrs:{id:"installation-and-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-usage"}},[t._v("#")]),t._v(" Installation and Usage")]),t._v(" "),n("p",[t._v("Nodelinter is a dependency of the "),n("code",[t._v("nodes-base")]),t._v(" package and available upon "),n("RouterLink",{attrs:{to:"/getting-started/installation/"}},[t._v("installing")]),t._v(" n8n.")],1),t._v(" "),n("p",[t._v("You can run Nodelinter from the "),n("code",[t._v("packages/nodes-base")]),t._v(" directory as follows:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run nodelinter -- --"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("💡 Keep in mind")]),t._v(" "),n("p",[t._v("Be sure to run Nodelinter and verify your code before submitting a pull request.")])]),t._v(" "),n("h2",{attrs:{id:"options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Option")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Example")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("--target")])]),t._v(" "),n("td",[t._v("Path of the file or directory to lint")]),t._v(" "),n("td",[t._v("Lint a single file:"),n("br"),n("code",[t._v("--target=nodes/Stripe/Stripe.node.ts")]),t._v(" "),n("br"),n("br"),t._v("Lint all files in a directory:"),n("br"),n("code",[t._v("--target=nodes/Stripe")])])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("--config")])]),t._v(" "),n("td",[t._v("Path of the "),n("a",{attrs:{href:"#custom-config"}},[t._v("custom config")]),t._v(" to use")]),t._v(" "),n("td",[n("code",[t._v("--config=/Users/john/Documents/myConfig.json")])])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("--patterns")])]),t._v(" "),n("td",[t._v("Lintable file patterns")]),t._v(" "),n("td",[n("code",[t._v("--patterns:.node.ts,Description.ts")])])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("--print")])]),t._v(" "),n("td",[t._v("Print output to JSON"),n("br"),n("br"),t._v("A custom filename can optionally be specified.")]),t._v(" "),n("td",[n("code",[t._v("--print=myLintOutput")])])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("--errors-only")])]),t._v(" "),n("td",[t._v("Enable error logs only")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[n("code",[t._v("--warnings-only")])]),t._v(" "),n("td",[t._v("Enable warning logs only")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[n("code",[t._v("--infos-only")])]),t._v(" "),n("td",[t._v("Enable info logs only")]),t._v(" "),n("td")])])]),t._v(" "),n("h3",{attrs:{id:"custom-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#custom-config"}},[t._v("#")]),t._v(" Custom config")]),t._v(" "),n("p",[t._v("The Nodelinter "),n("a",{attrs:{href:"https://github.com/n8n-io/nodelinter/blob/master/src/defaultConfig.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("default config"),n("OutboundLink")],1),t._v(" can be overridden to, for example, change the areas and issues linted.")]),t._v(" "),n("p",[t._v("To do so create a JSON file containing the key values you want to override. For example:")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/john/n8n/packages/nodes-base/nodes/Notion/Notion.node.ts"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"patterns"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('".node.ts"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sortMethod"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lineNumber"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lintings"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PARAM_DESCRIPTION_MISSING_WHERE_OPTIONAL"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"NAME_WITH_NO_CAMELCASE"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Name this file "),n("code",[t._v("nodelinter.config.json")]),t._v(" and place it anywhere in your "),n("code",[t._v("nodes-base")]),t._v(" directory and it will be automatically detected. Alternatively, you can specify the custom config file and location using the "),n("code",[t._v("--config")]),t._v(" option.")]),t._v(" "),n("h2",{attrs:{id:"lint-exceptions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lint-exceptions"}},[t._v("#")]),t._v(" Lint exceptions")]),t._v(" "),n("p",[t._v("You can create exceptions for individual lines of code from any or all linting rules as follows:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// nodelinter-ignore-next-line <LINTING_NAME> <LINTING_NAME>\n")])])]),n("p",[t._v("If no specific linting name is provided that line will be excepted from all rules. For example:")]),t._v(" "),n("p",[t._v("Exception for one rule:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// nodelinter-ignore-next-line PARAM_DESCRIPTION_WITH_EXCESS_WHITESPACE\ndescription: 'Time zone used in the response.    The default is the time zone of the calendar.',\n")])])]),n("p",[t._v("Exception for all rules:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// nodelinter-ignore-next-line\ndescription: 'Time zone used in the response.    The default is the time zone of the calendar.',\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);