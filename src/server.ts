import "dotenv/config";
import express from "express";
import path from "path";
import cors from "cors";

import "express-async-errors";

import "./database/connection";
// import "./services/geocoder.ts";

import routes from "./routes";
import errorHandler from "./errors/handler";

const app = express();

app.use(cors()); //inicialmente o node não permite integrar requisições de diferentes domínios. Exemplo porta 3333 backend e porta 3000 front end. O cors resolve esse problema.
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);
app.listen(process.env.PORT || 3333);

// Rota - Conjunto
//Recurso - usuário
//Métodos  HTTP
//Parâmetros
// -> Query
// -> Route params: (identificar um recurso.) Geralmente para deletar/editar.
// -> Body: Geralmenete proveniente de formulários.

//Driver Nativo, Query builder, ORM.
//Driver Nativo: é necessário escrever igual ao programa SQL. "SELECT * FROM TABLE"
//Query builder: escrever as querys com o javascript. (knex)
//ORM - Object Relational Mapping: para cada tabela tem uma classe.
