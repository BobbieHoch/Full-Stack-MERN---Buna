import express from "express";
import os from "node:os";
import config from "config";
const server = express();
import IConfig from "config";

//ADD MIDDLEWARE LAYERS
server.use(express.static("dist"));

//Tell server we want to use EJS
server.set("view engine", "ejs");

//Root path other middleware
server.use("/", (req, res) => {
   res.render("index", {
      initialContent: "Loading...",
   });
});

//method take Port, machine host IP, function is third argument
server.listen(IConfig.PORT,IConfig.HOST, () => {
   
   console.info(
      `Express server is listening at ${IConfig.SERVER_URL}`,
      `Free Mem: ${os.freemem() / 1024 / 1024}`,
   )
});



//We need EJS we need a templating language that allows us to avoid manually constructing strings. EMBEDDED JAVA SCRIPT. response.render instead of response.send.