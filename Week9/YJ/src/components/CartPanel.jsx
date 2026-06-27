import { useMutation } from "@tanstack/react-query";
import CartItem from "./CartItem";
import CategoryStats from "./CategoryStats";
import { createOrder } from "../api/orders";
import useShopStore from "../store/useShopStore";

function CartPanel({ items, totalPrice, onOrderSuccess }) {
  const increase = useShopStore((state) => state.increase);
  const decrease = useShopStore((state) => state.decrease);
  const removeFromCart = useShopStore((state) => state.removeFromCart);
  const clearCart = useShopStore((state) => state.clearCart);

  const orderMutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      clearCart();
      onOrderSuccess();
    },
  });

  return (
    <aside className="cart-panel">
      <h2>장바구니</h2>

      {items.length === 0 ? (
        <p className="empty">장바구니가 비어 있어요.</p>
      ) : (
        <ul className="cart-list">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={increase}
              onDecrease={decrease}
              onRemove={removeFromCart}
            />
          ))}
        </ul>
      )}

      <div className="cart-panel__total">
        <span>총 합계</span>
        <strong>{totalPrice.toLocaleString()}원</strong>
      </div>

      <CategoryStats items={items} />

      <button
        className="checkout-btn"
        disabled={items.length === 0 || orderMutation.isPending}
        onClick={() => orderMutation.mutate(items)}
      >
        {orderMutation.isPending ? "주문 처리 중..." : "주문하기"}
      </button>
    </aside>
  );
}

export default CartPanel;
