opml2json
=========

A simple tool to convert [opml](https://en.wikipedia.org/wiki/OPML) files exported by [Mindnode Pro](https://mindnode.com/) to JSON consumable by [D3](http://d3js.org/) Javascript library.

What can I do with D3?
======================

Look at some of the amazing stuff you can do with D3: [examples are here](https://github.com/mbostock/d3/wiki/Gallery)

Why is this useful?
===================

Mindnode makes it extremely simple to create trees of information. However, if you want to share that map with anyone, they need Mindnode too which is rather Apple device oriented and expensive. Using this tool, you can export your Mindnode tree to JSON. Then you can use D3 to create an interactive tree which users can see in their browsers. 

This is what your Mindnode tree will look like in the browser: [see example](http://mbostock.github.io/d3/talk/20111018/tree.html)

Usage
=====
You can use the tool from the command line in the following way

	sudo node parser.js inputfile.opml outputfile.json

Or from Windows, open a command prompt as Administrator and then

	node parser.js inputfile.opml outputfile.json

Testing
=======
A sample Mindnode "file" (it is actually a folder) is included with this project. We have used this file with Mindnode Pro and exported to OPML.

The exported OPML file is also provided with the project. Go ahead try out this tool on the OPML file.

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