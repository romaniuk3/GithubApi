export class Product {
    id: number;
    name: string;
    createdDate: Date;
    expireDate: Date;
    nutrients: Nutrients;
    milk: string;
    groats: string;

    constructor({id, name, createdDate, expireDate, nutrients, milk, groats}: Partial<Product> = {}) {
        this.id = id || Math.random() * 100;
        this.name = name || 'Unknown name';
        this.createdDate = createdDate || new Date();
        this.expireDate = expireDate || new Date();
        this.nutrients = nutrients || Nutrients.Carbohydrates;
        this.milk = milk || 'Milk';
        this.groats = groats || 'Groats';
    }

}

export enum Nutrients {
    Proteins = 'Proteins',
    Carbohydrates = 'Carbohydrates'    
}