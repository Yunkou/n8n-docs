(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1476:function(e,t,o){e.exports=o.p+"assets/img/workflow.20bdd47f.png"},1477:function(e,t,o){e.exports=o.p+"assets/img/TypeformTrigger_node.62c6fe89.png"},1478:function(e,t,o){e.exports=o.p+"assets/img/Set_node.97992763.png"},1479:function(e,t,o){e.exports=o.p+"assets/img/Airtable_node.a58cb125.png"},1480:function(e,t,o){e.exports=o.p+"assets/img/Slack_node.2249b770.png"},2135:function(e,t,o){"use strict";o.r(t);var r=o(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"typeform-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#typeform-trigger"}},[e._v("#")]),e._v(" Typeform Trigger")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.typeform.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Typeform"),r("OutboundLink")],1),e._v(" is an online software as a service company that specializes in online form building and online surveys. Its main software creates dynamic forms based on user needs.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Typeform/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to store the response of a form submission to Airtable and send a message to a channel on Slack. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/916",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on the website. This example usage workflow would use the following nodes.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:""}},[e._v("Typeform Trigger")])]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Airtable/"}},[e._v("Airtable")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Slack/"}},[e._v("Slack")])],1)]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1476),alt:"A workflow with the Typeform Trigger node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-typeform-trigger-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-typeform-trigger-node"}},[e._v("#")]),e._v(" 1. Typeform Trigger node")]),e._v(" "),r("p",[e._v("This node will trigger the workflow when a form response is submitted.")]),e._v(" "),r("p",[e._v("This example workflow uses a Typeform to collect name and email address. Create a form exactly like "),r("a",{attrs:{href:"https://n8ndocsburner.typeform.com/to/dpr2kxSL",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),r("OutboundLink")],1),e._v(" for the example workflow. Here are the questions and their question types for the form.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Question")]),e._v(" "),r("th",[e._v("Type")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Let's start with your name.")]),e._v(" "),r("td",[e._v("Short Text")])]),e._v(" "),r("tr",[r("td",[e._v("What's your email address?")]),e._v(" "),r("td",[e._v("Email")])])])]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Typeform Trigger node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Typeform/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select your form from the "),r("em",[r("strong",[e._v("Form")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the Typeform Trigger node triggers the workflow and returns the response submitted by a user.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1477),alt:"Using the Typeform Trigger node to trigger the workflow"}})]),e._v(" "),r("h3",{attrs:{id:"_2-set-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-node"}},[e._v("#")]),e._v(" 2. Set node")]),e._v(" "),r("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow. We will set the value of "),r("code",[e._v("Name")]),e._v(" and "),r("code",[e._v("Email")]),e._v(" in this node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("Name")]),e._v(" in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > Let's start with your name.. You can also add the following expression: "),r("code",[e._v('{{$json["Let\'s start with your name."]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("Email")]),e._v(" in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > What's your email address?. You can also add the following expression: "),r("code",[e._v('{{$json["What\'s your email address?"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Toggle "),r("em",[r("strong",[e._v("Keep Only Set")])]),e._v(" to "),r("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node sets the values of "),r("code",[e._v("Name")]),e._v(" and "),r("code",[e._v("Email")]),e._v(". These values are passed to the next node in the workflow.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1478),alt:"Using the Set node to set the values"}})]),e._v(" "),r("h3",{attrs:{id:"_3-airtable-node-append"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-airtable-node-append"}},[e._v("#")]),e._v(" 3. Airtable node (Append)")]),e._v(" "),r("p",[e._v("This node will append the data that we set in the previous node to a table. Create a table like "),r("a",{attrs:{href:"https://airtable.com/shreoj1AmTE6S6Eep",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),r("OutboundLink")],1),e._v(" in your Airtable base.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Airtable node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Append' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter the Base ID in the "),r("em",[r("strong",[e._v("Base ID")])]),e._v(" field. For obtaining the Base ID, head over to their "),r("a",{attrs:{href:"https://airtable.com/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("API page"),r("OutboundLink")],1),e._v(" and select the correct base. You’ll find the Base ID there.")]),e._v(" "),r("li",[e._v("Enter the name of your table in the "),r("em",[r("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node appends the data that we had set in the previous node.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1479),alt:"Using the Airtable node to insert data into an Airtable table"}})]),e._v(" "),r("h3",{attrs:{id:"_4-slack-node-post-message"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-slack-node-post-message"}},[e._v("#")]),e._v(" 4. Slack node (post: message)")]),e._v(" "),r("p",[e._v("This node will send a message about the new form submission to a channel in a Slack workspace.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Slack node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Slack/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Enter the name of a channel in the "),r("em",[r("strong",[e._v("Channel")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Text")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Enter the following text in the "),r("em",[r("strong",[e._v("Expression Editor")])])])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('*New Submission* 🙌\nName: {{$node["Set"].json["Name"]}}\nEmail: {{$node["Set"].json["Email"]}}\n')])])]),r("ol",{attrs:{start:"5"}},[r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node sends a message with the new form response on Slack.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1480),alt:"Using the Slack node to send a message to channel"}})]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),r("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Typeform Trigger node.")])]),e._v(" "),r("h2",{attrs:{id:"further-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),r("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=n.exports}}]);