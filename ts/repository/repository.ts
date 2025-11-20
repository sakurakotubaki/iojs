import { Service } from "../domain/service.js";

abstract class ServiceRepository {
    abstract getServiceName(msg: string): string;
}

export class ServiceRepositoryImpl implements ServiceRepository {
    private _service: Service;

    constructor() {
        this._service = new Service();
    }

    getServiceName(msg: string): string {
        return this._service.doSomething(msg);
    }
}