import { useMemo } from "react";

function CategoryStats({ items }) {
  const categoryTotals = useMemo(() => {
    return items.reduce((totals, item) => {
      const currentTotal = totals[item.category] ?? { count: 0, price: 0 };
      return {
        ...totals,
        [item.category]: {
          count: currentTotal.count + item.quantity,
          price: currentTotal.price + item.price * item.quantity,
        },
      };
    }, {});
  }, [items]);

  const stats = Object.entries(categoryTotals);

  return (
    <section className="category-stats">
      <h3>카테고리별 합계</h3>
      {stats.length === 0 ? (
        <p className="empty">담긴 상품 기준으로 합계가 표시돼요.</p>
      ) : (
        <ul>
          {stats.map(([category, total]) => (
            <li key={category}>
              <span>{category}</span>
              <strong>
                {total.count}개 · {total.price.toLocaleString()}원
              </strong>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CategoryStats;
