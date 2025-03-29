import "./CartModal.scss";
import { useSelector } from "@/app/store";
import Button from "@/components/Button";
import { useDispatch } from "react-redux";
import { newOrder } from "@/features/Cart/cartSlice";
import confirmIcon from "@/assets/images/icon-order-confirmed.svg";
import { useEffect } from "react";
import { CartModalItem } from "@/features/Cart/components/CartModal/CartModalItem";

export default function CartModal() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    const totalCost = useSelector(state => state.cart.totalCost);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div className="cart-modal__background">
            <section className="cart-modal">
                <div className="cart-modal__header">
                    <img src={confirmIcon} alt="" role="presentation"/>

                    <div className="cart-modal__header-text">
                        <h2 className="heading-lg">Order Confirmed</h2>
                        <p className="text-md text-rose-500">We hope you enjoy your food!</p>
                    </div>
                </div>

                <div className="cart-modal__product-list-container">
                    <div className="cart-modal__product-list">
                        {cart.map((item) => (
                            <CartModalItem key={item.name} item={item}/>
                        ))}
                    </div>

                    <div className="cart-modal__order-total">
                        <h3 className="text-md normal text-rose-900">Order Total</h3>
                        <p className="heading-md bold text-rose-900">${totalCost.toFixed(2)}</p>
                    </div>
                </div>

                <Button size="lrg" color="red" onClick={() => dispatch(newOrder())}>
                    Start New Order
                </Button>
            </section>
        </div>
    );
}