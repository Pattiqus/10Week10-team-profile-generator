import { ClassStore } from "./ClassStore";

export class DynamicClass {
    constructor(className: string, opts: any) {
        if (ClassStore[className] === undefined || ClassStore[className] === null) {
            
            // # Create: A new class to add to store
            // return new  ClassStore[ new createClass( className )(...opts) ];

            throw new Error(`Class type of \'${className}\' is not in the store`);

        }
        return new ClassStore[className](...opts);
    }
}


// type ClassMap = typeof ClassStore;

// const createClass = <Key extends keyof ClassMap>(key: Key) =>
//     new ClassStore[key] as InstanceType<ClassMap[Key]>;