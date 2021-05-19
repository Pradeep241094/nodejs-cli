#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .option("s", { alias: "sleepTime", describe: "Sleep time", type: "integer", demandOption: true })
 .argv;

const greeting = `Hello, ${options.name}!`;
console.log(greeting);
console.log(options.sleepTime);

var waitTill = new Date(new Date().getTime() + options.sleepTime * 1000);
while(waitTill > new Date()){};

console.log("Here's a random joke for you:");

const url = "https://icanhazdadjoke.com/";

axios.get(url, { headers: { Accept: "application/json" } })
 .then(res => {
   console.log(res.data.joke);
 });
