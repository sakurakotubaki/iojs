import { Service } from "../domain/service.js";
import { ServiceRepositoryImpl } from "../repository/repository.js";

export class Controller {
    private serviceRepository: ServiceRepositoryImpl;

    constructor() {
        // 別ファイルのクラスをnewしてthisに保持
        this.serviceRepository = new ServiceRepositoryImpl();
    }

    public execute(message: string): void {
        // 内部でthis.serviceを使っている
        // thisが正しくbindされていないと、ここでエラーになる
        const result = this.serviceRepository.getServiceName(message);
        console.log(`Controller -> Repository->: ${result}`);
    }
}
