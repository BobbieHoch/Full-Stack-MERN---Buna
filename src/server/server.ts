import express from "express";
import os from "node:os";
import config from "config";
const server = express();

//ADD MIDDLEWARE LAYERS
server.use(express.static("dist"));

//Tell server we want to use EJS
server.set("view engine", "ejs");

//Root path other middleware
server.use("/", (req, res) => {
   res.render("index", {
      content: "EJS is <em>cool</em>!",
   });
});

//method take Port, machine host IP, function is third argument
server.listen(config.PORT, config.HOST, () => {
   
   console.info(
      `Express server is listening at ${config.SERVER_URL}`,
      `Free Mem: ${os.freemem() / 1024 / 1024}`,
   );
});



//We need EJS we need a templating language that allows us to avoid manually constructing strings. EMBEDDED JAVA SCRIPT. response.render instead of response.send.