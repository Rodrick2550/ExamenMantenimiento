import { TaskEntity } from "../entities/task-entity";

export interface TaskRepository{
    create(task: TaskEntity): Promise<TaskEntity>;
    get(id: string): Promise<TaskEntity>;
    update(task: TaskEntity): Promise<TaskEntity>;
    delete(id: string): Promise<TaskEntity>;
    list(): Promise<TaskEntity[]>;
    
}