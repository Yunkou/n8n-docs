(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{1268:function(e,t,o){e.exports=o.p+"assets/img/workflow.bd0a2c94.png"},1269:function(e,t,o){e.exports=o.p+"assets/img/Cron_node.6856124c.png"},1270:function(e,t,o){e.exports=o.p+"assets/img/OpenWeatherMap_node.1e00aa7b.png"},1271:function(e,t,o){e.exports=o.p+"assets/img/Spontit_node.c1ff6f34.png"},2032:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"spontit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spontit"}},[e._v("#")]),e._v(" Spontit")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.spontit.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spontit"),n("OutboundLink")],1),e._v(" enables you to send push notifications without your app or website. You can create different channels and send push notifications to specific followers.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Spontit/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.spontit"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to send daily weather updates via a push notification using the Spontit node. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/796",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Cron/"}},[e._v("Cron")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/OpenWeatherMap/"}},[e._v("OpenWeatherMap")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Spontit")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1268),alt:"A workflow with the Spontit node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-cron-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-cron-node"}},[e._v("#")]),e._v(" 1. Cron node")]),e._v(" "),n("p",[e._v("The Cron node will trigger the workflow daily at 9 AM.")]),e._v(" "),n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Cron Time")])]),e._v(".")]),e._v(" "),n("li",[e._v("Set hours to 9 in the "),n("em",[n("strong",[e._v("Hour")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the Cron node is configured to trigger the workflow every day at 9 AM.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1269),alt:"Using the Cron node to trigger the workflow daily at 9 am"}})]),e._v(" "),n("h3",{attrs:{id:"_2-openweathermap-node-current-weather"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-openweathermap-node-current-weather"}},[e._v("#")]),e._v(" 2. OpenWeatherMap node (Current Weather)")]),e._v(" "),n("p",[e._v("This node will return data about the current weather in Berlin. To get the weather updates for your city, you can enter the name of your city instead.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the OpenWeatherMap node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/OpenWeatherMap/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("berlin")]),e._v(" in the "),n("em",[n("strong",[e._v("City")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node returns data about the current weather in Berlin.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1270),alt:"Using the OpenWeatherMap node to get weather updates for Berlin"}})]),e._v(" "),n("h3",{attrs:{id:"_3-spontit-node-create-push"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-spontit-node-create-push"}},[e._v("#")]),e._v(" 3. Spontit node (create: push)")]),e._v(" "),n("p",[e._v("This node will send a push notification with the weather update.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Spontit node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Spontit/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'Title' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Today's Weather Update")]),e._v(" in the "),n("em",[n("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Content")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"5"}},[n("li",[e._v("Enter the following message in the "),n("em",[n("strong",[e._v("Expression")])]),e._v(" field: "),n("code",[e._v('Hey! The temperature outside is {{$node["OpenWeatherMap"].json["main"]["temp"]}}°C.')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sends a push notification with the weather update.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1271),alt:"Using the Spontit node to send weather updates via a push notification"}})]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),n("p",[e._v("This example workflow uses the Cron node, which is a Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Cron node.")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);