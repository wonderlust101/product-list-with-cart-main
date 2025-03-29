import carbonNeutralIcon from "@/assets/images/icon-carbon-neutral.svg";
import Button from "@/components/Button";
import { orderConfirmedToggle } from "@/features/Cart/cartSlice";
import CartItem from "@/features/Cart/components/CartList/CartItem";
import { useDispatch } from "react-redux";
import { useSelector } from "@/app/store";
import "./CartList.scss";

export default function CartList() {
    const dispatch = useDispatch();
    const {cart, totalCost} = useSelector(state => state.cart);

    return (
        <>
            <div className="cart-list">
                {cart.map((item) => (
                    <CartItem key={item.name} item={item}/>
                ))}
            </div>

            <div className="cart-list__order-total">
                <h3 className="text-md normal text-rose-900">Order Total</h3>
                <p className="heading-md bold text-rose-900">${totalCost.toFixed(2)}</p>
            </div>

            <div className="cart-list__carbon-neutral">
                <img src={carbonNeutralIcon} alt="" role="presentation"/>
                <p className="text-md text-rose-900">This is a <span className="semi-bold">carbon-neutral</span> delivery</p>
            </div>

            <Button size="lrg" color="red" onClick={() => dispatch(orderConfirmedToggle())}>
                Confirm Order
            </Button>
        </>
    );
}