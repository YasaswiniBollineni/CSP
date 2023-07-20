const express = require("express");
const signup = require("../Database");
//const Mapping=require("./Operokations");
const Router = express.Router();
Router.get("/", (req, res) => {
  res.send("Hello World");
});


Router.post("/Insert", (req, res) => {
    let Details = req.body;
    console.log(Details);
    signup.signup("signup", "Insert", Details)
      .then((result) => {
        res.send(result);
        console.log(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });

Router.get("/Read:ID", (req, res) => {
  const Details = req.params.ID;
  signup.signup("signup", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message,Result:result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

module.exports = Router;
