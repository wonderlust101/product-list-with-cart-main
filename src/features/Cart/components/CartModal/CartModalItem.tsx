import { CartItemType } from "@/types/types";
import "./CartModalItem.scss";

type CartModalItemProps = {
    item: CartItemType;
}

export function CartModalItem({item}: CartModalItemProps) {
    return (
        <>
            <section className="cart-modal-item">
                <div className="cart-modal-item__main-content">
                    <img className="cart-modal-item__image" src={item.image.thumbnail} alt=""/>

                    <div className="cart-modal-item__item-description">
                        <h3 className="text-sm semi-bold text-rose-900">{item.name}</h3>

                        <div className="cart-modal-item__cost">
                            <p className="text-sm text-red semi-bold">{item.quantity}x</p>
                            <p className="text-sm text-rose-500">@ ${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                </div>

                <p className="text-md semi-bold text-rose-900">${(item.quantity * item.price).toFixed(2)}</p>
            </section>

            <hr className="cart-modal-item__item-divider"/>
        </>
    );
}