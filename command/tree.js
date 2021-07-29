let path = require("path");
let fs = require("fs");

function fn(fpath){
    
    let folderName = path.basename(fpath);
    console.log("|__", folderName);

    let fileArr = fs.readdirSync(fpath);
    // console.log(fileArr.length);
    for(let i=0; i<fileArr.length; i++){
        let fileName = path.basename(fileArr[i]);
        console.log("\t", "|__", fileName);
    }
    console.log("tree command executed with path:"+ fpath);
}

module.exports={
    fxn: fn
}