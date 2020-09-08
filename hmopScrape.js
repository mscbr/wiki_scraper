const axios = require("axios");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const url = "https://en.wikipedia.org/wiki/Ministry_of_Health_(Poland)";

const getNames = () => {
  console.log("getNames");
  axios
    .get(url)
    .then((resp) => {
      const dom = new JSDOM(resp.data);
      let template = [];
      for (let i of dom.window.document.querySelectorAll("li > a")) {
        if (i.href.match(/^\/w\/index.+link=1/)) template.push(i.innerHTML);
      }
      return template;
    })
    .catch((err) =>
      err ? console.log(err.message) : console.log("Something went wrong")
    );
};

module.exports = {
  getNames: () => getNames(),
};
