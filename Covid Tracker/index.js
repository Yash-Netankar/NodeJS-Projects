const express = require("express");
const hbs = require("hbs");
const covid = require("novelcovid");
const app = express();

const port = process.env.PORT || 4000;

// middleware
app.use(express.static(__dirname + "/public"));

// engine
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

// partials
hbs.registerPartials(__dirname + "/views/partials");


/**********
 Routing
***********/
// all data
app.get("/", (req, res) => {
    covid.countries({ sort: 'cases' }).then(data => {
        res.render("home", { data: data, single: false });
    })
        .catch(err => {
            console.log(err);
        });
});


// yesterday data
app.get("/yesterday", (req, res) => {
    covid.yesterday.countries({ sort: 'cases' }).then(data => {
        res.render("home", { data: data, single: false });
    })
        .catch(err => {
            console.log(err);
        });
});

// specific countries
app.get("/search", (req, res) => {

    let arr = req.query.value.split(",");
    if (arr.length === 1) {
        covid.countries({ country: arr[0] }).then(data => {
            res.render("home", { data: data, single: true });
        }).catch(err => {
            console.log(err);
        });
    }
    else {
        covid.countries({ country: req.query.value }).then(data => {
            res.render("home", { data: data, single: false });
        }).catch(err => {
            console.log(err);
        });
    }
});

// News page
app.get("/news", (req, res) => {
    res.render("news");
});


// about page
app.get("/about", (req, res) => {
    res.render("about");
});



// running
app.listen(port, () => {
    console.log(`Running on Port ${port}`);
});