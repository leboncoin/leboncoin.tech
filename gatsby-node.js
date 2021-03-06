const axios = require("axios");
const crypto = require("crypto");
const report = require(`gatsby-cli/lib/reporter`);

exports.sourceNodes = ({ actions }) => {
  const { createNode } = actions;

  let activity = report.activityTimer(
    `Github: fetch repos data from the Github API`
  );
  activity.start();

  const instance = axios.create({
    baseURL: "https://api.github.com/",
    timeout: 2000,
    headers: {
      Authorization: "token " + process.env.GITHUB_TOKEN,
      Accept: "application/vnd.github.mercy-preview+json"
    }
  });

  return instance
    .get(`orgs/leboncoin/repos`)
    .then(res => {
      res.data.forEach(item => {
        if (item.topics.includes("leboncoin")) {
          var filtered = item.topics.filter(function(value, index, arr) {
            return value != "leboncoin";
          });
          createNode({
            id: item.url,
            url: item.html_url,
            name: item.name,
            description: item.description,
            stars: item.stargazers_count,
            topics: filtered,
            parent: null,
            children: [],
            internal: {
              type: "GithubRepos",
              contentDigest: crypto
                .createHash(`md5`)
                .update(JSON.stringify(item))
                .digest(`hex`)
            }
          });
        }
      });

      activity.end();
    })
    .catch(error => {
      console.timeEnd(error);
    });
};
