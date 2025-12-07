import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import PizzaCard from './components/PizzaCard'
import Cart from './components/Cart'
import { loadCart, saveCart } from './utils/storage'
import pizzasData from './data/pizzas'
import './global.css'

function App() {
  const [cart, setCart] = useState({})

  // load cart from storage once
  useEffect(() => {
    let mounted = true
    loadCart().then((saved) => {
      if (mounted && saved) setCart(saved)
    })
    return () => {
      mounted = false
    }
  }, [])

  // persist cart whenever it changes
  useEffect(() => {
    saveCart(cart)
  }, [cart])

  const add = (id) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
  }

  const remove = (id) => {
    setCart((c) => {
      const next = { ...c }
      if (!next[id]) return next
      next[id] = next[id] - 1
      if (next[id] <= 0) delete next[id]
      return next
    })
  }

  const clear = () => setCart({})

  const items = useMemo(() => {
    return Object.entries(cart).map(([id, qty]) => {
      const p = pizzasData.find((x) => x.id === id)
      return { ...p, qty }
    })
  }, [cart])

  const total = useMemo(() => {
    return items.reduce((s, it) => s + it.price * it.qty, 0)
  }, [items])

  return (
    <div className="app">
      <Header count={items.reduce((s, it) => s + it.qty, 0)} />

      <main>
        <section className="hero">
          <h2>ACCUEIL</h2>
          <p>Bienvenue sur PizzaShop — choisissez votre pizza et ajoutez-la au panier.</p>
        </section>

        <section className="menu">
          <h3>Carte</h3>
          <div className="grid">
            {pizzasData.map((p) => (
              <PizzaCard
                key={p.id}
                pizza={p}
                quantity={cart[p.id] || 0}
                onAdd={() => add(p.id)}
                onRemove={() => remove(p.id)}
              />
            ))}
          </div>
        </section>

        <aside className="cart-panel">
          <Cart items={items} total={total} onAdd={add} onRemove={remove} onClear={clear} />
        </aside>
      </main>
    </div>
  )
}

export default App
