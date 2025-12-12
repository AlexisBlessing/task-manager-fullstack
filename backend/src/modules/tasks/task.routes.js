import { Router } from "express";
import { auth } from "../../middlewares/auth.js";
import {
    listTasks,
    addTask,
    editTask,
    removeTask,
} from "./task.controller.js";

const router = Router();

router.get("/", auth, listTasks);
router.post("/", auth, addTask);
router.put("/:id", auth, editTask);
router.delete("/:id", auth, removeTask);

export default router;

