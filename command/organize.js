let path = require("path");
let fs = require("fs");

let types = {
    media: [".mp4", ".mkv"],
    archives: ['.zip', '.7z', '.rar', '.tar', '.gz', '.ar', '.iso', ".xz"],
    documents: ['.docx', '.doc', '.pdf', '.xlsx', '.xls', '.odt', '.ods', '.odp', '.odg', '.odf', '.txt', '.ps', '.tex'],
    app: ['.exe', '.dmg', '.pkg', ".deb"]
}

function fn(fpath){
    let fileArr = fs.readdirSync(fpath);
    
    for(let i=0; i<fileArr.length; i++){
        let file= fileArr[i];
        let ext = path.extname(file);
        //let fileName = path.basename(filePath);
        for(let x in types){
            let type=x;
            let typeArr=types[x];
            for(let j=0; j<typeArr.length; j++){
                // console.log(typeArr[i]);
                if(ext==typeArr[i]){
                    let folderPath = path.join(fpath, type);// will typeArr be considered as string or array?
                    // console.log(folderPath);
                    let newFilePath = path.join(folderPath, file);
                    let isDirPresent = fs.existsSync(folderPath);
                    if(isDirPresent){  
                        fs.writeFileSync(newFilePath);
                    }else{
                        fs.mkdirSync(folderPath);
                        fs.writeFileSync(newFilePath);
                    }    
                        
                }
            }
        }
    }
    console.log("organize command executed with path:", fpath);
}

module.exports={
    fxn:fn
}