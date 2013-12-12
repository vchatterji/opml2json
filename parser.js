var expat = require('node-expat');
var fs = require('fs');
var parser;

var inputFile = process.argv[2];
var outputFile = process.argv[3];

function writeTree(tree) {
	fs.appendFileSync(outputFile, "{");
	fs.appendFileSync(outputFile,"\"name\":\"" + tree.text + "\"");
	if(tree.children.length > 0) {
		fs.appendFileSync(outputFile, ",")
		fs.appendFileSync(outputFile, "\"children\":[");
		for(var i=0; i<tree.children.length; i++) {
			writeTree(tree.children[i]);
			if(i != tree.children.length - 1) {
				fs.appendFileSync(outputFile, ",");
			}
		}
		fs.appendFileSync(outputFile, "]");
	}	
	fs.appendFileSync(outputFile, "}");
}

if (!inputFile || !outputFile) {
	console.log("Usage:node parser.js inputfile.opml outputfile.json\nYou might need to use sudo node if you do not have enough permissions.")
}
else
{	
	//Check if input file exists
	try {
	    // Query the entry
	    var stats = fs.lstatSync(inputFile);

	    // Is it a directory?
	    if (stats.isDirectory()) {
	        console.log("The specified path:" + inputFile + " is a directory not file.")
	    }
		else
		{
			var tree;
			var currentNode;
			
			parser = expat.createParser();
			parser.on('startElement', function (name, attrs) {
			  	if(name=="outline") {
					if(tree === undefined) {
						tree = {
							parent:null,
							text: attrs.text,
							children: []
						}
						currentNode = tree;
					}
					else {
						var node = {
							parent:currentNode,
							text: attrs.text,
							children: []
						}
						currentNode.children.push(node);
						currentNode = node;
					}
				}
			});
			parser.on('endElement', function (name) {
				if(name=="outline") {
			  		currentNode = currentNode.parent;
				}
			});

			parser.on('error', function (err) {
			  console.error(err); 
			});
			parser.on('close', function() {
				try
				{
					writeTree(tree);
				}
				catch(err) {
					console.log("Error writing to:" + outputFile);
					console.log(err);
				}
			});

			var inpStream = fs.createReadStream(inputFile);
			inpStream.pipe(parser);
		}
	}
	catch (e) {
	    console.log("Error loading file:" + inputFile);
	}
}



