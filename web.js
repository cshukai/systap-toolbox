var importer=require("./lib/import");
var reformatter=require("./lib/reformat");

//data preprocessing for omim file
var patt=/\\'/g;
var replacement=' ';
reformatter.replaceString('omim.nt','omim.parsed.nt',patt,replacement);

