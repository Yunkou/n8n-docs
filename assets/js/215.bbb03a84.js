(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{1842:function(e,t,o){"use strict";o.r(t);var r=o(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"write-binary-file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#write-binary-file"}},[e._v("#")]),e._v(" Write Binary File")]),e._v(" "),r("p",[e._v("The Write Binary File node is used to write a file to the host machine that runs n8n.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),r("ol",[r("li",[e._v("If you are running n8n in Docker, your command will run on the n8n container and not the Docker host.")]),e._v(" "),r("li",[e._v("This node will look for files relative to the n8n install path. It is recommended to use absolute file paths to prevent any errors.")])])]),e._v(" "),r("h2",{attrs:{id:"node-reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),r("ol",[r("li",[r("em",[r("strong",[e._v("File Name")])]),e._v(" field: This field specifies the path to which the file should be written, along with the file name.")]),e._v(" "),r("li",[r("em",[r("strong",[e._v("Property Name")])]),e._v(" field: Name of the binary property to which to write the data of the read file.")])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to write a file to the host machine using the Write Binary File node. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/590",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on the website. This example usage workflow would use the following three nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Write Binary File")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(756),alt:"A workflow with the Write Binary File node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-http-request-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node"}},[e._v("#")]),e._v(" 2. HTTP Request node")]),e._v(" "),r("ol",[r("li",[e._v("Enter "),r("code",[e._v("https://docs.n8n.io/assets/img/n8n-logo.png")]),e._v(" in the "),r("em",[r("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Select the 'File' option from the "),r("em",[r("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(757),alt:"Using the HTTP Request node to get an image"}})]),e._v(" "),r("h3",{attrs:{id:"_3-write-binary-file-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-write-binary-file-node"}},[e._v("#")]),e._v(" 3. Write Binary File node")]),e._v(" "),r("ol",[r("li",[e._v("Enter the path to which the file should be written along with the file name in the "),r("em",[r("strong",[e._v("File Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])])}),[],!1,null,null,null);t.default=n.exports},756:function(e,t,o){e.exports=o.p+"assets/img/workflow.33879f8a.png"},757:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.e6fb212b.png"}}]);