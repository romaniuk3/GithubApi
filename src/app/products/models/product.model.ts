export class Product {
    id: number;
    name: string;
    createdDate: Date;
    expireDate: Date;
    nutrients: Nutrients;

    constructor({id, name, createdDate, expireDate, nutrients}: Partial<Product> = {}) {
        this.id = id || Math.random() * 100;
        this.name = name || 'Unknown name';
        this.createdDate = createdDate || new Date();
        this.expireDate = expireDate || new Date();
        this.nutrients = nutrients || Nutrients.Carbohydrates;
    }

}

export enum Nutrients {
    Proteins = 'Proteins',
    Carbohydrates = 'Carbohydrates'    
}