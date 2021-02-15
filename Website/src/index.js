const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

//setting port variable
const port = process.env.PORT || 3000;


// setting template engine and more
app.set("view engine", "hbs")

const templatePath = path.join(__dirname, "../temp/views");
app.set("views", templatePath);

// registering partials folder
const partialPath = path.join(__dirname, "../temp/partials");
hbs.registerPartials(partialPath)



// serving static files to express
const staticFilesPath = path.join(__dirname, "../public");
app.use(express.static(staticFilesPath));


//ROUTING
app.get("", (req,res)=>{
    res.render("index.hbs")
})

app.get("/about", (req,res)=>{
    res.render("about")
})

app.get("/weather", (req,res)=>{
    res.render("weather")
})



// LISTNING
app.listen(port, (err)=>{
    console.log(`Listning to port ${port}`);
})