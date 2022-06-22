const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const port = 4000;
app.listen(port, () => {
  console.log("Server Listening on port", port);
});

app.use(express.static(path.join(__dirname,'view/build')))
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'view/build/index.html'))
})
//프론트에서 밑에 주소로 통신을 보냈을때 rotes/customerRouter 파일로 넘김
app.use("/api/customer", require("./routes/customerRouter"));
