import { TaskRepository } from "../domain/repository/task-repository";

export class DeleteTaskUseCase{

    constructor(private readonly taskRepository: TaskRepository){}

    async execute(id: string): Promise<void>{

        await this.taskRepository.delete(id);
        return;
    }
}