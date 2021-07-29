let treeObj= require("./command/tree");
let helpObj= require("./command/help");
let organizeObj= require("./command/organize");


let inputArr = process.argv.slice(2);
let command = inputArr[0];
let npath=inputArr[1];

switch(command){
   case "tree":
       treeObj.fxn(npath);
       break;
    case "help":
        helpObj.fxn(npath);
        break;
    case "organize":
        organizeObj.fxn(npath);
       break;
    default:
        console.log("enter correct input");
        break;
}


