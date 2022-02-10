export class Product {
    id: string;
    name: string;
    createdDate: Date;
    expireDate: Date;
    proteins: Nutrients;
    carbohydrates: Nutrients;
    types: Types;
    description: string;
    image: string;


    constructor({id, name, createdDate, expireDate, proteins, carbohydrates ,types, description, image}: Partial<Product> = {}) {
        this.id = id || '';
        this.name = name || 'Unknown name';
        this.createdDate = createdDate || new Date();
        this.expireDate = expireDate || new Date();
        this.carbohydrates = carbohydrates || Nutrients.Carbohydrates;
        this.proteins = proteins || Nutrients.Proteins;
        this.types = types || Types.Groats;
        this.description = description || '';
        this.image = image || '';
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
