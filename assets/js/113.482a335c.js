(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1177:function(e,t,o){e.exports=o.p+"assets/img/workflow.8a75a442.png"},1178:function(e,t,o){e.exports=o.p+"assets/img/Postgres_node.236e3ed7.png"},1179:function(e,t,o){e.exports=o.p+"assets/img/Set_node.1b6671f4.png"},1180:function(e,t,o){e.exports=o.p+"assets/img/Postgres1_node.250ad892.png"},2003:function(e,t,o){"use strict";o.r(t);var s=o(26),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"postgres"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postgres"}},[e._v("#")]),e._v(" Postgres")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PostgreSQL"),s("OutboundLink")],1),e._v(", also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),s("p",[e._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/Postgres/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),s("Resource",{attrs:{node:"n8n-nodes-base.postgres"}}),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to run an SQL query on a Postgres instance. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/599",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("Postgres")])])]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(1177),alt:"A workflow with the Postgres node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),s("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),s("h3",{attrs:{id:"_2-postgres-node-execute-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-postgres-node-execute-query"}},[e._v("#")]),e._v(" 2. Postgres node (Execute Query)")]),e._v(" "),s("ol",[s("li",[e._v("First of all, you'll have to enter credentials for the Postgres node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/Postgres/"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("li",[e._v("Select 'Execute Query' from the "),s("em",[s("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Enter the following SQL query in the "),s("em",[s("strong",[e._v("Query")])]),e._v(" field: "),s("code",[e._v("CREATE TABLE test (id INT, name VARCHAR(255), PRIMARY KEY (id));")]),e._v(".")]),e._v(" "),s("li",[e._v("Click on the "),s("em",[s("strong",[e._v("Node")])]),e._v(" tab and toggle "),s("em",[s("strong",[e._v("Always Output Data")])]),e._v(" to true.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(1178),alt:"Using the Postgres node to create a table"}})]),e._v(" "),s("h3",{attrs:{id:"_3-set-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),s("ol",[s("li",[e._v("Click on the "),s("em",[s("strong",[e._v("Add Value")])]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("id")]),e._v(" in the "),s("em",[s("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on the "),s("em",[s("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("name")]),e._v(" in the "),s("em",[s("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Enter the value for the name in the "),s("em",[s("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(1179),alt:"Using the Set node to set data to be inserted by the Postgres node"}})]),e._v(" "),s("h3",{attrs:{id:"_4-postgres1-node-insert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-postgres1-node-insert"}},[e._v("#")]),e._v(" 4. Postgres1 node (Insert)")]),e._v(" "),s("ol",[s("li",[e._v("Select the credentials that you entered in the previous Postgres node.")]),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("test")]),e._v(" in the "),s("em",[s("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("id, name")]),e._v(" in the "),s("em",[s("strong",[e._v("Columns")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(1180),alt:"Using the Postgres node to insert data into a table"}})]),e._v(" "),s("h2",{attrs:{id:"faqs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),s("h3",{attrs:{id:"how-to-specify-the-data-type-of-a-column"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-specify-the-data-type-of-a-column"}},[e._v("#")]),e._v(" How to specify the data type of a column?")]),e._v(" "),s("p",[e._v("To specify the data type of a column, append the column name with "),s("code",[e._v(":type")]),e._v(", where "),s("code",[e._v("type")]),e._v(" is the data type of that column. For example, if you want to specify the type "),s("code",[e._v("int")]),e._v(" for the column "),s("em",[e._v("id")]),e._v(" and type "),s("code",[e._v("text")]),e._v(" for the column "),s("em",[e._v("name")]),e._v(", you can use the following snippet in the "),s("em",[s("strong",[e._v("Columns")])]),e._v(" field: "),s("code",[e._v("id:init,name:text")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),s("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=r.exports}}]);