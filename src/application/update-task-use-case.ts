import { TaskRepository } from "../domain/repository/task-repository";
import { TaskEntity } from "../domain/entities/task-entity";
import { TaskInterface } from "../domain/entities/interfaces/task-interface";

export class UpdateTaskUseCase{
    constructor(private readonly taskRepository: TaskRepository){}

    async execute(id: string, task: TaskInterface): Promise<TaskEntity| null>{
        // Add a return statement here
        const foundTask = await this.taskRepository.getTasks(id);
        if(!foundTask) return null;


        foundTask.title = task.title;
        foundTask.description = task.description;
        foundTask.status = task.status;

        return await this.taskRepository.updateTask(foundTask);
    }
}