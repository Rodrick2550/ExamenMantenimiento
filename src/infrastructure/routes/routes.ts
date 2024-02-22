import express from "express";
import { TaskController } from "../../infrastructure/controllers/task-controller";

export const taskRouter = express.Router();

taskRouter.post(
    "/",
    TaskController.create.bind(TaskController)
);

taskRouter.get(
    "/",
    TaskController.list.bind(TaskController)
);

taskRouter.get(
    "/:id",
    TaskController.get.bind(TaskController)
);

taskRouter.put(
    "/:id",
    TaskController.update.bind(TaskController)
);

taskRouter.delete(
    "/:id",
    TaskController.delete.bind(TaskController)
);