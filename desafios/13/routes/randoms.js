import { Router } from "express";
import { args } from "../server.js";
import { fork } from "child_process";
import { PORT } from "../server.js";

const randomsRouter =  Router();

randomsRouter.get("/randoms/:cant?", (req, res) => {
    const cantidad = Number(req.query.cant) || 300000;

    function calculoFork(cantidad) {
        const numeros = [];
        for (let index = 0; index < cantidad; index++) {
          numeros[index] = Math.floor(Math.random() * 1000) + 1;
          //console.log(numeros[index])
        }
        let objNumeros = numeros.reduce((randomCount, currentValue) => {
          return (randomCount[currentValue] ? ++randomCount[currentValue] : (randomCount[currentValue] = 1), randomCount);
        }, {})
        return objNumeros;
      }

      res.send(calculoFork(cantidad));
      //res.send(`API RANDOM EN ${PORT}`)
});

export default randomsRouter