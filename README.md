opml2json
=========

A simple tool to convert [opml](https://en.wikipedia.org/wiki/OPML) files exported by [Mindnode Pro](https://mindnode.com/) to JSON consumable by [D3](http://d3js.org/) Javascript library.

Usage
=====
You can use the tool from the command line in the following way

	sudo node parser.js inputfile.opml outputfile.json

Or from Windows, open a command prompt as Administraotr and then

	node parser.js inputfile.opml outputfile.json

Testing
=======
A sample Mindnode file is included with this project. We have used this file with Mindnode Pro and exported to OPML.

The exported OPML file is also provided with the project. Go ahead try out this tool on the file.

A zip archive is also included with includes a sample of the HTML required to use the generated file using D3.

If you run the sample on a server, it will look like the following:

![Screenshot](/screenshot.png )

Scenarios
=========

You can create a Mindmap using [Mindnode Pro](https://mindnode.com/), then press

	Command + Shift + E

Select OPML as the output format and save your file.

Then you can use this tool to convert the OPML to JSON.

Prerequisites
=============

You need [Node.js](http://nodejs.org/) installed on your computer

Other Projects
==============

I am also working on another project called [dataflick](https://github.com/vchatterji/dataflick) which is just starting out. That project will enable you to use JSON files exported by this tool to visualise data using [D3](http://d3js.org/) in interesting ways. Stay tuned...