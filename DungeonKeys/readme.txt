JSON use:
I decided that could use JSON as a level loading tool for each level if I wanted.
Each property could be the map, the items, keys, doors etc.  All that I would have
to do is read them in, one json file per level.  That way my code doesn't get
overly messy trying to handle the files in code.

For this assignment (6), I made a json file that holds the tilemap for drawing
out the game grid.  I placed the file in a json folder, and the file is named
test.json.  The javascript that reads in the json is index.js at the bottom.
It builds a table from the json that it receives, and outputs it on the index
page at the bottom.  There is a heading that says "Loaded and Parsed JSON File".