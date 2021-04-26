
const express = require("express");
const app = express();
var router = express.Router();              // get an instance of the express Router
var bodyParser = require('body-parser');
const Singleton = require('./dist/singleton').default;
// const database = require('./setup/database');
const service = require('./dist').default;
const PORT = 3000;


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log("server running on port " + PORT);

})


router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });   
});

router.post("/getSearchFormConfig", async (req, res) => {
  console.log("working fine");
  const data = await service.getPostSearchConfig();
  res.status(200);
  console.log(JSON.stringify(Singleton));
  res.json({ data });
  // next();
})

// const mongoDb = new database({});

// Singleton.addToSingleton('mongoConnection', mongoDb);
app.use(router);
