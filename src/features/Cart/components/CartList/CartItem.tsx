import { useDispatch } from "react-redux";
import { CartItemType } from "@/types/types";
import RemoveItemIcon from "@/components/Icons/RemoveItemIcon";
import { removeFromCart } from "@/features/Cart/cartSlice";
import "./CartItem.scss";

type CartItemProps = {
    item: CartItemType;
}

export default function CartItem({item}: CartItemProps) {
    const dispatch = useDispatch();

    return (
        <>
            <div className="cart-item">
                <div className="cart-item__description">
                    <h3 className="text-rose-900 semi-bold">{item.name}</h3>

                    <div className="cart-item__cost">
                        <p className="text-red semi-bold">{item.quantity}x</p>
                        <p className="text-rose-500">@ ${item.price.toFixed(2)}</p>
                        <p className="text-rose-500 semi-bold">${(item.quantity * item.price).toFixed(2)}</p>
                    </div>
                </div>

                <RemoveItemIcon className="cart-item__remove-icon" onClick={() => dispatch(removeFromCart(item.name))}/>
            </div>

            <hr className="cart-item__item-divider"/>
        </>
    );
}