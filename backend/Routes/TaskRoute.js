// const { Router } = require ("express");
// const {createTask , getTasks} = require("../controllers/control.js");

// const router = new Router();



// router.post("/tasks",createTask);

// router.get("/",getTasks);



// module.exports = router;


const { Router } = require("express");
const { createTask, getTasks } = require("../controllers/control");

const router = new Router();

router.post("/", createTask);
router.get("/", getTasks);

module.exports = router;
