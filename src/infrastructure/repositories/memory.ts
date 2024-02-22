import { TaskEntity } from "../../domain/entities/task-entity";
import { TaskRepository } from "../../domain/repository/task-repository";
import { tasks } from "../memories/db";

export class InMemoryTaskRepository implements TaskRepository {
    createTask(task: TaskEntity): Promise<TaskEntity> {
        throw new Error("Method not implemented.");
    }
    getTasks(id: string): Promise<TaskEntity> {
        throw new Error("Method not implemented.");
    }
    updateTask(task: TaskEntity): Promise<TaskEntity> {
        throw new Error("Method not implemented.");
    }
    deleteTask(id: string): Promise<TaskEntity> {
        throw new Error("Method not implemented.");
    }
    listTasks(): Promise<TaskEntity[]> {
        throw new Error("Method not implemented.");
    }
   

}