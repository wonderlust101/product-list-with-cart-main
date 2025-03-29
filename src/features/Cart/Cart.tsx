import "./Cart.scss";
import CartList from "@/features/Cart/components/CartList";
import { useSelector } from "@/app/store";
import EmptyCart from "@/features/Cart/components/EmptyCart";

export default function Cart() {
    const cart = useSelector(state => state.cart.cart);

    return (
        <div className="cart">
            <h2 className="heading-md text-red">Your Cart (7<span className="sr-only">products</span>)</h2>

            {cart.length <= 0 ? (
                <EmptyCart/>
            ) : (
                <CartList/>
            )}
        </div>
    );
}