import { TaskRepository } from "../domain/repository/task-repository";

export class ListTaskUseCase{
    constructor(private readonly taskRepository: TaskRepository){}

    async execute(id: string){
        return await this.taskRepository.listTasks();
    }
}