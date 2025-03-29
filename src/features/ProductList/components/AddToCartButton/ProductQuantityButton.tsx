import { ButtonHTMLAttributes } from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "@/features/Cart/cartSlice";
import decreaseIcon from "@/assets/images/icon-decrement-quantity.svg";
import increaseIcon from "@/assets/images/icon-increment-quantity.svg";
import "./ProductQuantityButton.scss";

type ProductQuantityButtonProps = ButtonHTMLAttributes<HTMLButtonElement>&{
    item: string;
    quantity: number;
}

export default function ProductQuantityButton({item, quantity, ...props}: ProductQuantityButtonProps) {
    const dispatch = useDispatch();

    return (
        <button
            className="add-to-cart-button"
            {...props}
        >
            <img
                src={decreaseIcon}
                alt=""
                role="presentation"
                onClick={() => dispatch(decreaseQuantity(item))}
            />

            <p>{quantity}</p>


            <img
                src={increaseIcon}
                alt=""
                role="presentation"
                onClick={() => dispatch(increaseQuantity(item))}
            />
        </button>
    );
}