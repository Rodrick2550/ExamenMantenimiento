import { TaskInterface } from "./interfaces/task-interface";

export class TaskEntity implements TaskInterface{
    _id: string;
    _title: string;
    _description: string;
    _status: boolean;

    constructor(id: string, title: string, description: string, status: boolean){
        this._id = id;
        this._title = title;
        this._description = description;
        this._status = status;
    }

    get id(): string{
        return this._id;
    }

    get title(): string{
        return this._title;
    }

    get description(): string{
        return this._description;
    }

    get status(): boolean{      
        return this._status;
    }

    set title(title: string){
        this._title = title;
    }

    set description(description: string){
        this._description = description;
    }

    set status(status: boolean){
        this._status = status;
    }
}