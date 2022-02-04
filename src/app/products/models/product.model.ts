export class Product {
    id: number;
    name: string;
    createdDate: Date;
    expireDate: Date;
    proteins: Nutrients;
    carbohydrates: Nutrients;
    types: Types;
    description: string;

    constructor({id, name, createdDate, expireDate, proteins, carbohydrates ,types, description}: Partial<Product> = {}) {
        this.id = id || Math.random() * 100;
        this.name = name || 'Unknown name';
        this.createdDate = createdDate || new Date();
        this.expireDate = expireDate || new Date();
        this.carbohydrates = carbohydrates || Nutrients.Carbohydrates;
        this.proteins = proteins || Nutrients.Proteins;
        this.types = types || Types.Groats;
        this.description = description || '';
    }

}

export enum Nutrients {
    Proteins = 1.5,
    Carbohydrates = 11.3    
}
export enum Types {
    Milk = 'Milk',
    Groats = 'Groats'
}