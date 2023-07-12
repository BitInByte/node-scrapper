const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

// const url = "https://www.theguardian.com/uk";
const url = "https://www.linkedin.com/jobs/view/3661925888";

axios(url)
  .then((response) => {
    const html = response.data;
    // console.log(html);
    const $ = cheerio.load(html);
    const articles = [];

    const title = $(".topcard__title").text();
    const companyName = $(".topcard__org-name-link").text();
    const companyLinkedinUrl = $(".topcard__org-name-link")
      // .find("a")
      .attr("href");
    // console.log(title);
    articles.push({
      title,
      companyName,
      companyLinkedinUrl,
    });
    console.log(articles);

    // $(".topcard__title", html).each(function () {
    // $(".details", html).each(function () {
    //   const title = $(this).text();
    //   articles.push(title);
    //   // const url = $(this).find("a").attr("href");
    //   // articles.push({
    //   //   title,
    //   //   url,
    //   // });
    // });
    // console.log(articles);
  })
  .catch((error) => console.log(error));

// app.listen(PORT, () => {
//   console.log(`server running on port: ${PORT}`);
// });
