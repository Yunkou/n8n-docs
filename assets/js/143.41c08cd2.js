(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{1555:function(e,t,o){"use strict";o.r(t);var i=o(26),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"_8-activating-and-examining-the-workflow"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_8-activating-and-examining-the-workflow"}},[e._v("#")]),e._v(" 8. Activating and Examining the Workflow")]),e._v(" "),i("p",[e._v("In this step of the workflow you will learn how to activate your workflow and change the default workflow settings.")]),e._v(" "),i("p",[e._v("Activating a workflow means that it will run automatically every time a trigger node receives input or meets a condition. By default, all newly created workflows are deactivated.")]),e._v(" "),i("p",[e._v("To activate your workflow toggle the "),i("em",[e._v("Active")]),e._v(" button on the top right corner of the Editor UI. Nathan’s workflow will now be executed automatically every Monday at 9 am.")]),e._v(" "),i("figure",[i("img",{staticStyle:{width:"100%"},attrs:{src:o(428),alt:"Activated workflow"}}),i("figcaption",{attrs:{align:"center"}},[i("i",[e._v("Activated workflow")])])]),e._v(" "),i("p",[i("strong",[e._v("Workflow Executions")])]),e._v(" "),i("p",[e._v("An execution represents a completed run of a workflow, from the first to the last node. n8n logs workflow executions allowing you to see if the workflow was completed successfully or not. The execution log is useful for debugging your workflow and seeing at what stage it runs into issues.")]),e._v(" "),i("p",[e._v("To see the execution log, click on the icon with three lines in the left panel, which will open the "),i("em",[e._v("Workflow Executions")]),e._v(" window.")]),e._v(" "),i("figure",[i("img",{staticStyle:{width:"100%"},attrs:{src:o(429),alt:"Workflow Execution List"}}),i("figcaption",{attrs:{align:"center"}},[i("i",[e._v("Workflow Execution List")])])]),e._v(" "),i("p",[e._v("The "),i("em",[e._v("Workflow Executions")]),e._v(" window displays a table with the following information:")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("Started At / ID:")]),e._v(" The date and time when the workflow started, followed by the ID of this workflow execution")]),e._v(" "),i("li",[i("em",[e._v("Name:")]),e._v(" The name of the workflow")]),e._v(" "),i("li",[i("em",[e._v("Status:")]),e._v(" The status of the workflow (Error, Running, or Success)")]),e._v(" "),i("li",[i("em",[e._v("Mode:")]),e._v(" How the workflow was triggered (trigger or webhook)")]),e._v(" "),i("li",[i("em",[e._v("Running Time:")]),e._v(" The duration it took the workflow to execute")])]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("💡 Workflow execution status")]),e._v(" "),i("p",[e._v("In the "),i("em",[e._v("Workflow Executions")]),e._v(" window you can filter the displayed executions by workflow and by status ("),i("em",[e._v("All")]),e._v(", "),i("em",[e._v("Error")]),e._v(", "),i("em",[e._v("Running")]),e._v(", or "),i("em",[e._v("Success")]),e._v(")."),i("br"),e._v("\nThe information displayed here depends on what workflows and executions you set up in "),i("em",[e._v("Workflow Settings")]),e._v(" to be saved.")])]),e._v(" "),i("p",[i("strong",[e._v("Workflow Settings")])]),e._v(" "),i("p",[e._v("You can customize your workflows and executions, or overwrite some of the global default settings in "),i("em",[e._v("Workflow Settings")]),e._v(". These settings are located in the left panel, under the "),i("em",[e._v("Workflows")]),e._v(" section.")]),e._v(" "),i("figure",[i("img",{staticStyle:{width:"100%"},attrs:{src:o(430),alt:"Workflow Settings"}}),i("figcaption",{attrs:{align:"center"}},[i("i",[e._v("Workflow Settings")])])]),e._v(" "),i("p",[e._v("In the "),i("em",[e._v("Workflow Settings")]),e._v(" window you can configure six settings:")]),e._v(" "),i("ul",[i("li",[i("em",[i("RouterLink",{attrs:{to:"/getting-started/key-concepts/#error-workflow"}},[e._v("Error Workflow")]),e._v(":")],1),e._v(" A workflow to run in case the execution of the current workflow fails.")]),e._v(" "),i("li",[i("em",[e._v("Timezone:")]),e._v(' The timezone to use in the current workflow. If not set, the global Timezone (by default "New York") is used. This setting is particularly important for the Cron node, as you want to make sure that the workflow gets executed at the right time.')]),e._v(" "),i("li",[i("em",[e._v("Save Data Error Execution:")]),e._v(" If the Execution data of the workflow should be saved when it fails.")]),e._v(" "),i("li",[i("em",[e._v("Save Data Success Execution:")]),e._v(" If the Execution data of the workflow should be saved when it succeeds.")]),e._v(" "),i("li",[i("em",[e._v("Save Manual Executions:")]),e._v(" If executions started from the Editor UI should be saved.")]),e._v(" "),i("li",[i("em",[e._v("Save Execution Progress:")]),e._v(" If the execution data of each node should be saved. If Yes, you can resume the workflow from where it stopped in case of an error, though keep in mind that this might make the execution slower.")])]),e._v(" "),i("h2",{attrs:{id:"what-s-next"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[e._v("#")]),e._v(" What's next?")]),e._v(" "),i("p",[i("strong",[e._v("You 👩‍🔧")]),e._v(": That was it! Now you have a 7-node workflow that will run automatically every Monday morning. You don't have to worry about remembering to wrangle the data. Instead, you can start your week with more meaningful or exciting work.")]),e._v(" "),i("p",[i("strong",[e._v("Nathan 🙋")]),e._v(": This workflow is incredibly helpful, thank you! Now, what's next for you?")]),e._v(" "),i("p",[i("strong",[e._v("You 👩‍🔧")]),e._v(": I'd like to build more workflows, share them with others, and use some workflows built by other people.")])])}),[],!1,null,null,null);t.default=n.exports},428:function(e,t,o){e.exports=o.p+"assets/img/Activated-workflow.b6afca04.png"},429:function(e,t,o){e.exports=o.p+"assets/img/Execution-list.5fb8c2b8.png"},430:function(e,t,o){e.exports=o.p+"assets/img/Workflow-setting.6bfed0f8.png"}}]);