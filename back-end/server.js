const express = require("express");
const cors = require("cors");
const { Sequelize, sequelize } = require("./db");

const User = require("./models/user.model");
const Ticket = require("./models/ticket.model");
const Project = require("./models/project.model");

const ticketsRouter = require("./routers/tickets.router");
const projectRouter = require("./routers/project.router");
const userRouter = require("./routers/user.router");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/tickets", ticketsRouter);
app.use("/projects", projectRouter);
app.use("/users", userRouter);

app.listen(5000, async () => {
    try {
        await sequelize.authenticate();
        console.warn("connected to server");
    } catch(error) {
        console.warn("error occured");
        console.warn(error);
    }
});