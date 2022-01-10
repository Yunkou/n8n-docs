(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1274:function(e,t,a){e.exports=a.p+"assets/img/workflow.2cf7047c.png"},1275:function(e,t,a){e.exports=a.p+"assets/img/Set_node.e4395c3a.png"},1276:function(e,t,a){e.exports=a.p+"assets/img/Stackby_node.25ce1d1a.png"},1277:function(e,t,a){e.exports=a.p+"assets/img/Stackby1_node.339be22c.png"},2034:function(e,t,a){"use strict";a.r(t);var o=a(26),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"stackby"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stackby"}},[e._v("#")]),e._v(" Stackby")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://stackby.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stackby"),o("OutboundLink")],1),e._v(" is a real-time database and team collaboration platform.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),o("p",[e._v("You can find authentication information for this node "),o("RouterLink",{attrs:{to:"/nodes/credentials/Stackby/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"basic-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),o("ul",[o("li",[e._v("Append")]),e._v(" "),o("li",[e._v("Delete")]),e._v(" "),o("li",[e._v("List")]),e._v(" "),o("li",[e._v("Read")])]),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow allows you to insert and retrieve data from a table in Stackby. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/934",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),o("li",[o("a",{attrs:{href:""}},[e._v("Stackby")])])]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(1274),alt:"A workflow with the Stackby node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),o("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),o("h3",{attrs:{id:"_2-set-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-node"}},[e._v("#")]),e._v(" 2. Set node")]),e._v(" "),o("p",[e._v("We will use the Set node to set the values for the name and id fields for a new record.")]),e._v(" "),o("ol",[o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Add Value")])]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("ID")]),e._v(" in the "),o("em",[o("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter an id in the "),o("em",[o("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("Name")]),e._v(" in the "),o("em",[o("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter a name in the "),o("em",[o("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[e._v("In the screenshot below, you will notice that the node sets the value for "),o("code",[e._v("ID")]),e._v(" and "),o("code",[e._v("Name")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:a(1275),alt:"Using the Set node to set data"}})]),e._v(" "),o("h3",{attrs:{id:"_3-stackby-node-append"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-stackby-node-append"}},[e._v("#")]),e._v(" 3. Stackby node (Append)")]),e._v(" "),o("p",[e._v("This node will append the data that we set in the previous node to a table. Create a table like "),o("a",{attrs:{href:"https://stackby.com/embed/shr161295766228627eec5",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),o("OutboundLink")],1),e._v(" in your Stackby stack.")]),e._v(" "),o("p",[e._v("Copy the string of characters located after "),o("code",[e._v("/stack/")]),e._v(" in your Stackby URL. This is your Stack ID. For example, if the URL is "),o("code",[e._v("https://stackby.com/stack/stabdcat4234324/")]),e._v(", the Stack ID will be "),o("code",[e._v("stabdcat4234324")]),e._v(".")]),e._v(" "),o("ol",[o("li",[e._v("First of all, you'll have to enter credentials for the Stackby node. You can find out how to do that "),o("RouterLink",{attrs:{to:"/nodes/credentials/Stackby/"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("li",[e._v("Paste the Stack ID in the "),o("em",[o("strong",[e._v("Stack ID")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter the name of your table in the "),o("em",[o("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("ID, Name")]),e._v(" in the "),o("em",[o("strong",[e._v("Columns")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[e._v("In the screenshot below, you will notice that the node appends the data that we had set in the previous node.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(1276),alt:"Using the Stackby node to insert data into a Stackby table"}})]),e._v(" "),o("h3",{attrs:{id:"_4-stackby1-node-list"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-stackby1-node-list"}},[e._v("#")]),e._v(" 4. Stackby1 node (List)")]),e._v(" "),o("p",[e._v("This node will list all the records from a table.")]),e._v(" "),o("div",{pre:!0},[o("ol",[o("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),o("li",[e._v("Select 'List' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Stack ID")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Stackby > Parameters > stackId. You can also add the following expression: "),o("code",[e._v('{{$node["Stackby"].parameter["stackId"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Table")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Stackby > Parameters > table. You can also add the following expression: "),o("code",[e._v('{{$node["Stackby"].parameter["table"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),o("p",[e._v("In the screenshot below, you will notice that the node returns all the entries that are stored in the table.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(1277),alt:"Using the Stackby node to read data from a Stackby table"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);