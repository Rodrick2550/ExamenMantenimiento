import {CreateTaskUseCase} from "../application/create-task-use-case";
import {GetTaskUseCase} from "../application/get-task-use-case";
import {UpdateTaskUseCase} from "../application/update-task-use-case";
import {InMemoryTaskRepository} from "./repositories/memory";
import {DeleteTaskUseCase} from "../application/delete-task-use-case";
import {ListTaskUseCase} from "../application/list-task-use-case";
import {TaskController} from "./controllers/task-controller";
import { TaskEntity } from "../domain/entities/task-entity";

const inMemoryRepository = new InMemoryTaskRepository();

const createTaskUseCase = new CreateTaskUseCase(inMemoryRepository);
const getTaskUseCase = new GetTaskUseCase(inMemoryRepository);
const listTaskUseCase = new ListTaskUseCase(inMemoryRepository);
const updateTaskUseCase = new UpdateTaskUseCase(inMemoryRepository);
const deleteTaskUseCase = new DeleteTaskUseCase(inMemoryRepository);

export const taskController = new TaskController(createTaskUseCase, getTaskUseCase, listTaskUseCase, updateTaskUseCase, deleteTaskUseCase);