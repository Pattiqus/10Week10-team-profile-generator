import { ClassStore } from "./ClassStore";

export class DynamicClass {
    constructor(className: string, opts: any) {
        if (ClassStore[className] === undefined || ClassStore[className] === null) {
            throw new Error(`Class type of \'${className}\' is not in the store`);
        }
        return new ClassStore[className](...opts);
    }
}