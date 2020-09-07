const axios = require("axios");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const url = "https://en.wikipedia.org/wiki/Ministry_of_Health_(Poland)";

const documentRoot = window.document.getElementById("root");

const render = function (template, node) {
  node.innerHTML = template;
};

axios
  .get(url)
  .then((resp) => {
    const dom = new JSDOM(resp.data);
    let template;
    for (let i of dom.window.document.querySelectorAll("li > a")) {
      if (i.href.match(/^\/w\/index.+link=1/)) template.push(i.innerHTML);
    }
    render(template, documentRoot);
  })
  .catch((err) =>
    err ? console.log(err.message) : console.log("Something went wrong")
  );
fetch(url).then((resp) => console.log(resp));
