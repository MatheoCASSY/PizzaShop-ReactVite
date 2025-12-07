export async function loadCart() {
  try {
    const raw = localStorage.getItem('pizza_cart')
    return raw ? JSON.parse(raw) : {}
  } catch (e) {
    console.error('loadCart error', e)
    return {}
  }
}

export async function saveCart(cart) {
  try {
    localStorage.setItem('pizza_cart', JSON.stringify(cart))
  } catch (e) {
    console.error('saveCart error', e)
  }
}

export async function clearCart() {
  try {
    localStorage.removeItem('pizza_cart')
  } catch (e) {
    console.error('clearCart error', e)
  }
}
