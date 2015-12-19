// Run command: webpack ./entry.js bundle.js --module-bind "css=style\!css"
require("./style.css");
document.write(require("./content.js"));