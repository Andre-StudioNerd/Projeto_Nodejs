import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
<<<<<<< HEAD
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js !!"));
=======
  app
    .route("/")
    .get((req, res) => res.status(200).send("Curso de Node.js"));
>>>>>>> c52afbd22712b5f5b093f526c7133077acd02d03

  app.use(express.json(), livros, autores);
};

export default routes;
