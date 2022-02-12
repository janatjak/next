#!/usr/bin/env node

const fs = require("fs");
const path = "./.next/prerender-manifest.json";

const data = JSON.parse(fs.readFileSync(path, "utf8"));
data.notFoundRoutes = []; // cleanup
fs.writeFileSync(path, JSON.stringify(data));

console.log("[notFoundRoutes] Cleanup done");
