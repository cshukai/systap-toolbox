var fs=require("fs");

module.exports = new function() {

  this.escapeBackSlash= function(filepath,outputPath,replacement){
      /*
      read file line by line
      
      replace the unescaped backslash
      output to a new file
      */
      
      fs.readFile(filepath, function (err, data) {
        if (err) throw err;
        console.log(data.toString().replace(/\'/g,replacement));
      }).pipe(fs.createWriteStream(outputPath));;
      
  }
  
}