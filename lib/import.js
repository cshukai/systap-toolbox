var request=require("request");


module.exports = new function() {
  // filepath --server side
  this.importOWL=function(filepath,sparql_endpoint){
    request.post(sparql_endpoint,function optionalCallback (err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log('Upload successful!  Server responded with:', body);
        }).form({uri:filepath});
  }
  
}