import cakeImg from "@/assets/images/illustration-empty-cart.svg";
import "./EmptyCart.scss";

export default function EmptyCart() {
    return (
        <div className="empty-cart">
            <img src={cakeImg} alt=""/>

            <p className="text-sm semi-bold text-rose-500">Your added items will appear here</p>
        </div>
    );
}