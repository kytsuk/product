export interface Description{
    color: string;
    amount: number;
    category: string;
}
export  class Product {
    id: number;
    name: string;
    code: string;
    price: number;
    rating: number;
    img_url: string;
    description: Description[];


    constructor ( id, name, code, price, rating, img_url, description) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.price = price;
        this.rating = rating;
        this.img_url = img_url;
        this.description = description;
    }


}