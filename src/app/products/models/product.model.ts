export class Product {
    id: number;
    name: string;
    createdDate: Date;
    expireDate: Date;
    nutrients: Nutrients;
    types: Types;
    description: string;

    constructor({id, name, createdDate, expireDate, nutrients, types, description}: Partial<Product> = {}) {
        this.id = id || Math.random() * 100;
        this.name = name || 'Unknown name';
        this.createdDate = createdDate || new Date();
        this.expireDate = expireDate || new Date();
        this.nutrients = nutrients || Nutrients.Carbohydrates;
        this.types = types || Types.Groats;
        this.description = description || '';
    }

}

export enum Nutrients {
    Proteins = 'Proteins',
    Carbohydrates = 'Carbohydrates'    
}
export enum Types {
    Milk = 'Milk',
    Groats = 'Groats'
}