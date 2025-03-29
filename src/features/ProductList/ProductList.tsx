import { ProductData } from "@/types/types";
import { useSelector } from "@/app/store";
import Product from "@/features/ProductList/components/Product";
import Cart from "@/features/Cart";
import products from "@/data/data.json";
import "./ProductList.scss";
import CartModal from "@/features/Cart/components/CartModal";

export default function ProductList() {
    const orderConfirmed = useSelector(state => state.cart.orderConfirmed);

    return (
        <div className="product-list grid-bleed">
            <main className="product-list__contents">
                <section className="product-list__header">
                    <h1 className="heading-lg text-rose-900">Desserts</h1>
                </section>

                <section className="product-list__products-container">
                    <h2 className="sr-only">Dessert List</h2>

                    <div className="product-list__products">
                        {products.map((product: ProductData) => (
                            <Product key={product.name} product={product}/>
                        ))}
                    </div>
                </section>

                <section className="product-list__cart">
                    <Cart/>
                </section>

                {orderConfirmed && (
                    <CartModal/>
                )}
            </main>
        </div>
    );
}