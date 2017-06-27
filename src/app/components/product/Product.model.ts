export  class Product {
    id: number;
    name: string;
    code: string;
    price: number;
    rating: number;
    img_url: string;

    constructor ( id, name, code, price, rating, img_url ) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.price = price;
        this.rating = rating;
        this.img_url = img_url;
    }
}