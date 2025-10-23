const { defineConfig } = require("cypress");
const fs = require("fs");

const envConfig = JSON.parse(
  fs.readFileSync("./cypress/config/env/prod.env.json"));

module.exports = defineConfig({
  e2e: {
    baseUrl: envConfig.API_HOST || "https://api.trello.com",
    env: envConfig,
  },
});
