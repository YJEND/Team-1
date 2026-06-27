import { useCallback, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import CartPanel from "./components/CartPanel";
import useShopStore from "./store/useShopStore";
import { fetchProducts } from "./api/products";
import "./App.scss";

function App() {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const cart = useShopStore((state) => state.cart);
  const selectedCategory = useShopStore((state) => state.selectedCategory);
  const addToCart = useShopStore((state) => state.addToCart);

  const {
    data: products = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
  });

  const handleAddToCart = useCallback(
    (productId) => {
      addToCart(productId);
    },
    [addToCart],
  );

  const cartItems = useMemo(() => {
    return cart
      .map((item) => {
        const product = products.find((p) => p.id === item.id);
        return product ? { ...product, quantity: item.quantity } : null;
      })
      .filter(Boolean);
  }, [cart, products]);

  const totalCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      ),
    [cartItems],
  );

  const filteredProducts = useMemo(() => {
    return selectedCategory === "전체"
      ? products
      : products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  if (isOrderComplete) {
    return (
      <div className="app">
        <section className="order-complete">
          <h1>주문 완료</h1>
          <p>주문이 정상적으로 접수되었어요.</p>
          <button onClick={() => setIsOrderComplete(false)}>
            쇼핑 계속하기
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="app">
      <Header totalCount={totalCount} totalPrice={totalPrice} />

      <div className="app__body">
        <main className="app__main">
          <CategoryFilter />
          {isPending && <p className="empty">상품을 불러오는 중이에요.</p>}
          {isError && <p className="empty">상품 목록을 불러오지 못했어요.</p>}
          {!isPending && !isError && (
            <ProductList
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          )}
        </main>

        <CartPanel
          items={cartItems}
          totalPrice={totalPrice}
          onOrderSuccess={() => setIsOrderComplete(true)}
        />
      </div>
    </div>
  );
}

export default App;
