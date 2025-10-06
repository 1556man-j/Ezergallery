import { writable } from "svelte/store";

export const toast = writable(null);

// helpers
export function showAddedToCart(product) {
  toast.set({
    type: "success",
    name: product.title,
    image: product.image,
    message: "Added to cart ✅"
  });
}

export function showAlreadyInCart(product) {
  toast.set({
    type: "error",
    name: product.title,
    image: product.image,
    message: "Already in cart"
  });
}
