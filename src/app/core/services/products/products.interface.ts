export interface Review {
    author: string;
    text: string;
    rating: number;
}

export interface Product {
    id: number;
    imgUrl: string;
    price: number;
    discount: number;
    main: boolean;
    shop: string;
    name: string;
    description: string;
    shipping: any;
    discountUntil: string;
    isNew: boolean;
    color: string[];
    size: string[];
    review: Review[];
}
