import { TaskInterface } from "./interfaces/task-interface";

export class TaskEntity implements TaskInterface{
    id: string;
    title: string;
    description: string;
    status: boolean;

    constructor(id: string, title: string, description: string, status: boolean){
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
    
}