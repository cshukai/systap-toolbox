var fs=require("fs");

module.exports = new function() {

  this.replaceString= function(filepath,outputPath,pattern,replacement){

      
      fs.readFile(filepath, function (err, data) {
        if (err) throw err;
        fs.writeFile(outputPath, data.toString().replace(pattern,replacement), function (err) {
  			if (err) throw err;
  			console.log('replaced');
		});
      });
      
  }
  
}