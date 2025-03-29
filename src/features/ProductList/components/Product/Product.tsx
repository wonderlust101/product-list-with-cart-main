import { useDispatch } from "react-redux";
import Button from "@/components/Button";
import AddToCartIcon from "@/components/Icons/AddToCartIcon";
import "./Product.scss";
import { addToCart } from "@/features/Cart/cartSlice";
import ProductQuantityButton from "@/features/ProductList/components/AddToCartButton";
import { useSelector } from "@/app/store";

type ProductData = {
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

type ProductProps = {
    product: ProductData;
}

export default function Product({product}: ProductProps) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    const item = cart.filter(item => item.name === product.name)[0];

    return (
        <section className="product">
            <div className="product__image">
                <img className={`product__image-highlight${item ? "--active" : ""}`} src={product.image.mobile} alt={product.name}/>

                {item ? (
                    <ProductQuantityButton item={item.name} quantity={item.quantity}/>
                ) : (
                    <Button size="med" color="white" onClick={() => dispatch(addToCart(product))}>
                        <AddToCartIcon/>
                        Add to Cart
                    </Button>
                )}
            </div>

            <div className="product__description">
                <h3 className="text-sm normal text-rose-500">{product.category}</h3>
                <p className="text-md semi-bold text-rose-900">{product.name}</p>
                <p className="text-md semi-bold text-red">${product.price.toFixed(2)}</p>
            </div>
        </section>
    );
}