const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('Tree');


router.post('/addtree', (req, res) => {
	Tree.insertOne({
		"left": null,
		"right": null,
		"data": "root"
	  })
		.then((result) => {
			res.json(result);
		});
});


//breadth first search api
router.get("/bfs/:startNodeId", async (req, res) => {
	const startNodeId = req.params.startNodeId;
	const queue = [startNodeId];
	const visited = new Set();
  
	while (queue.length > 0) {
	  const currentNodeId = queue.shift();
	  const currentNode = await db.binary_tree.findOne({ "_id": currentNodeId });
  
	  if (currentNode && !visited.has(currentNodeId)) {
		visited.add(currentNodeId);
		console.log(currentNode.data);  // process the node data here
		if (currentNode.left) queue.push(currentNode.left);
		if (currentNode.right) queue.push(currentNode.right);
	  }
	}
  
	res.send("BFS completed");
  });
  
  
  

module.exports = router;
