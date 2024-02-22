export class CreateTaskResponse{
    private _title: string;
    private _description: string;
    private _status: boolean;
    

    constructor(title: string, description: string, status: boolean){
        this._title = title;
        this._description = description;
        this._status = status;
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

}