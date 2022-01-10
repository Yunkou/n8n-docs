(window.webpackJsonp=window.webpackJsonp||[]).push([[601],{1799:function(e,t,a){"use strict";a.r(t);var n=a(26),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"node-basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-basics"}},[e._v("#")]),e._v(" Node Basics")]),e._v(" "),a("h2",{attrs:{id:"types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[e._v("#")]),e._v(" Types")]),e._v(" "),a("p",[e._v("There are two main node types in n8n: Trigger nodes and Regular nodes.")]),e._v(" "),a("h3",{attrs:{id:"trigger-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trigger-nodes"}},[e._v("#")]),e._v(" Trigger Nodes")]),e._v(" "),a("p",[e._v("The Trigger nodes start a workflow and supply the initial data. A workflow can contain multiple trigger nodes but with each execution, only one of them will execute. This is because the other trigger nodes would not have any input as they are the nodes from which the execution of the workflow starts.")]),e._v(" "),a("h3",{attrs:{id:"regular-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regular-nodes"}},[e._v("#")]),e._v(" Regular Nodes")]),e._v(" "),a("p",[e._v("These nodes do the actual work. They can add, remove, and edit the data in the flow as well as request and send data to external APIs. They can do everything possible with Node.js in general.")]),e._v(" "),a("h2",{attrs:{id:"credentials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#credentials"}},[e._v("#")]),e._v(" Credentials")]),e._v(" "),a("p",[e._v("External services need a way to identify and authenticate users. This data can range from an API key over an email/password combination to a very long multi-line private key and can be saved in n8n as credentials.")]),e._v(" "),a("p",[e._v("Nodes in n8n can then request that credential information. As an additional layer of security credentials can only be accessed by node types which specifically have the right to do so.")]),e._v(" "),a("p",[e._v("To make sure that the data is secure, it gets saved to the database encrypted. A random personal encryption key is used which gets automatically generated on the first run of n8n and then saved under "),a("code",[e._v("~/.n8n/config")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"pausing-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pausing-node"}},[e._v("#")]),e._v(" Pausing Node")]),e._v(" "),a("p",[e._v("Sometimes when creating and debugging a workflow, it is helpful to not execute specific nodes. To do that without disconnecting each node, you can pause them. When a node gets paused, the data passes through the node without being changed.")]),e._v(" "),a("p",[e._v("There are two ways to pause a node. You can either press the pause button which gets displayed above the node when hovering over it or select the node and press “d”.")])])}),[],!1,null,null,null);t.default=s.exports}}]);