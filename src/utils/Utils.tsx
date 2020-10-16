export const formatPrice = (price: number, currency: string): string => price.toLocaleString("en-US", { style: "currency", currency });
