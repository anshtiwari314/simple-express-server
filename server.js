const express = require("express");
const path = require("path");
const dotenv = require('dotenv')

const app = express();

dotenv.config()
const PORT = process.env.PORT || 3008;


app.use(express.json())
app.use(express.urlencoded({extended:true}))


// Serve static files (e.g., HTML, CSS, JS) from the 'public' directory

//app.use(express.static(path.join(__dirname, "public")))

console.log(path.join(__dirname, "dist"))

// Route to serve the HTML file
app.get("/", (req, res) => {
   // console.log('req is coming to server',req)
  res.sendFile(path.join(__dirname, "dist", "index.html"));
})

app.get("/getPage", (req, res) => {
    //console.log('req is coming to server',req)
  res.sendFile(path.join(__dirname, "dist", "index2.html"));
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


