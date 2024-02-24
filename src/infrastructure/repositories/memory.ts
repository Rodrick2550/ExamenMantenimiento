import { TaskEntity } from "../../domain/entities/task-entity";
import { TaskRepository } from "../../domain/repository/task-repository";
import { tasks } from "../memories/db";

export class InMemoryTaskRepository implements TaskRepository {
    create(task: TaskEntity): Promise<TaskEntity> {
        throw new Error("Method not implemented.");
    }
    get(id: string): Promise<TaskEntity> {
        throw new Error("Method not implemented.");
    }
    update(task: TaskEntity): Promise<TaskEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<TaskEntity> {
        throw new Error("Method not implemented.");
    }
    list(): Promise<TaskEntity[]> {
        throw new Error("Method not implemented.");
    }
    
    
   

}