import { TaskRepository } from "../domain/repository/task-repository";
import { TaskEntity } from "../domain/entities/task-entity";

export class GetTaskUseCase{

    constructor(private readonly taskRepository: TaskRepository){}

    async execute(id: string): Promise<TaskEntity>{

        return await this.taskRepository.get(id);
    }
}