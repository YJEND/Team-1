export const createOrder = async (items) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    id: crypto.randomUUID(),
    items,
    orderedAt: new Date().toISOString(),
  };
};
