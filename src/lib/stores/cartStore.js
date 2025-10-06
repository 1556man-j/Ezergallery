// src/lib/stores/cartStore.js
import { writable, derived } from "svelte/store";

export const isCartOpen = writable(false);

// --- Load cart items from localStorage if available ---
const stored = typeof localStorage !== "undefined"
  ? JSON.parse(localStorage.getItem("cartItems")) || []
  : [];

export const cartItems = writable(stored);

// --- Keep localStorage in sync whenever cartItems changes ---
cartItems.subscribe((items) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }
});

// --- Helpers ---
export const addToCart = (product) => {
  let wasAdded = false; // for showing toast message
  cartItems.update((items) => {
    const existing = items.find((i) => i.id === product.id);
    if (existing) {
      return items.map((i) =>
        i.id === product.id ? { ...i, qty: i.qty + 1 } : i
      );
    }
    wasAdded = true;
    return [...items, { ...product, qty: 1 }];
  });
  return wasAdded; // true if new item, false if updated
};

export const removeFromCart = (id) => {
  cartItems.update((items) => items.filter((i) => i.id !== id));
};

export function increaseQty(id) {
	cartItems.update((items) =>
		items.map((i) =>
			i.id === id ? { ...i, qty: i.qty + 1 } : i
		)
	);
}

export function decreaseQty(id) {
	cartItems.update((items) =>
		items.map((i) =>
			i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
		)
	);
}

export const clearCart = () => {
  cartItems.set([]);
};

// --- Derived store for total item count ---
export const cartCount = derived(cartItems, ($items) =>
  $items.reduce((sum, i) => sum + i.qty, 0)
);

// --- Derived store for total price (optional but useful) ---
export const cartTotal = derived(cartItems, ($items) =>
  $items.reduce((sum, i) => sum + i.price * i.qty, 0)
);
