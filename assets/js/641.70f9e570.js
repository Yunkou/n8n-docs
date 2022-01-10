(window.webpackJsonp=window.webpackJsonp||[]).push([[641],{2157:function(s,e,t){"use strict";t.r(e);var a=t(26),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[s._v("#")]),s._v(" Troubleshooting")]),s._v(" "),t("h2",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" Windows")]),s._v(" "),t("p",[s._v("If you are experiencing issues running n8n with the typical flow of:")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("npx n8n\n")])])]),t("h3",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[s._v("#")]),s._v(" Requirements")]),s._v(" "),t("p",[s._v("Please ensure that you have the following requirements fulfilled:")]),s._v(" "),t("ul",[t("li",[s._v("Install latest version of "),t("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("NodeJS"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("Install "),t("a",{attrs:{href:"https://www.python.org/downloads/release/python-2717/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Python 2.7"),t("OutboundLink")],1),s._v(" (It is okay to have multiple versions installed on the machine)")]),s._v(" "),t("li",[s._v("Windows SDK")]),s._v(" "),t("li",[s._v("C++ Desktop Development Tools")]),s._v(" "),t("li",[s._v("Windows Build Tools")])]),s._v(" "),t("h4",{attrs:{id:"install-build-tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-build-tools"}},[s._v("#")]),s._v(" Install build tools")]),s._v(" "),t("p",[s._v("If you haven't satisfied the above, follow this procedure through your PowerShell (run with administrative privileges).\nThis command installs the build tools, windows SDK and the C++ development tools in one package.")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("npm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("global "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("production windows"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("build"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("tools\n")])])]),t("h4",{attrs:{id:"configure-npm-to-use-python-version-2-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-npm-to-use-python-version-2-7"}},[s._v("#")]),s._v(" Configure npm to use Python version 2.7")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("npm config "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),s._v(" python python2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("7\n")])])]),t("h4",{attrs:{id:"configure-npm-to-use-correct-msvs-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-npm-to-use-correct-msvs-version"}},[s._v("#")]),s._v(" Configure npm to use correct msvs version")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("npm config "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),s._v(" msvs_version 2017 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("global\n")])])]),t("h3",{attrs:{id:"lesser-known-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lesser-known-issues"}},[s._v("#")]),s._v(" Lesser known issues:")]),s._v(" "),t("h4",{attrs:{id:"mmmagic-npm-package-when-using-msbuild-tools-with-visual-studio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mmmagic-npm-package-when-using-msbuild-tools-with-visual-studio"}},[s._v("#")]),s._v(" mmmagic npm package when using MSbuild tools with Visual Studio")]),s._v(" "),t("p",[s._v("While installing this package, "),t("code",[s._v("node-gyp")]),s._v(" is run and it might fail to install it with an error appearing in the ballpark of:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("gyp ERR! stack Error: spawn C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\**Enterprise**\\MSBuild\\Current\\Bin\\MSBuild.exe ENOENT\n")])])]),t("p",[s._v("It is seeking the "),t("code",[s._v("MSBuild.exe")]),s._v(" in a directory that does not exist. If you are using Visual Studio Community or vice versa, you can change the path of MSBuild with command:")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("npm config "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),s._v(" msbuild_path "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\**Community**\\MSBuild\\Current\\Bin\\MSBuild.exe"')]),s._v("\n")])])]),t("p",[s._v("Attempt to install package again after running the command above.")])])}),[],!1,null,null,null);e.default=n.exports}}]);