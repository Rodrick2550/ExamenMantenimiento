import { TaskEntity } from "../domain/entities/task-entity";
import { TaskRepository } from "../domain/repository/task-repository";
import { v4 as uuid4} from "uuid";

export class CreateTaskUseCase{

    constructor(private readonly taskRepository: TaskRepository){}

    async execute(title: string, description: string): Promise<TaskEntity>{
        const id = uuid4();
        const task = new TaskEntity(id, title, description, false); // Pass all four required arguments
        return this.taskRepository.createTask(task);
        
    }

}