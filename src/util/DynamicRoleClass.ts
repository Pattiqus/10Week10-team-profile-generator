import { Employee } from "../models/Employee";

export class DynamicRoleClass extends Employee{
    constructor( name: string, id: number, email: string, ...opts) {
        super( name, id, email );

        let dynamicProperties = opts["dynamicProperties"];
        let dynamicFunctions = opts["dynamicFunctions"];

        dynamicProperties.forEach( ( propertyKey, propertyValue ) => {
            
        });

    }


}