export type ProductData = {
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    category: string;
    price: number;
}

export type CartItemType = ProductData&{
    quantity: number;
}