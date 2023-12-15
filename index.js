const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const {pinFileToIPFS} = require('./pinFileToIPFS.js');

app.get('/', async (req, res) => {

  const pinataResponse = await pinFileToIPFS();
  res.send(pinataResponse)
  
});

app.listen(PORT, function(err) {
  if(err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
