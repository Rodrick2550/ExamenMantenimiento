import express from "express";
import { TaskController } from "../../infrastructure/controllers/task-controller";
import { taskController } from "../dependencies";

export const taskRouter = express.Router();

taskRouter.post(
    "/",
    taskController.create.bind(taskController)
);

taskRouter.get(
    "/",
    taskController.list.bind(TaskController)
);

taskRouter.get(
    "/:id",
    taskController.get.bind(TaskController)
);

taskRouter.put(
    "/:id",
    taskController.update.bind(TaskController)
);

taskRouter.delete(
    "/:id",
    taskController.delete.bind(TaskController)
);