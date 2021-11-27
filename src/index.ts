import express, { Application, NextFunction, Request, Response } from "express";

const app: Application= express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.route("/")
  .get((req, res) => {

  })