import React from 'react'

export default function PizzaCard({ pizza, quantity = 0, onAdd, onRemove }) {
  return (
    <article className="card domino">
      <div className="thumb" aria-hidden>🍕</div>
      <div className="content">
        <h4>{pizza.name} <span className="price">- {pizza.price.toFixed(2)}€</span></h4>
        <p className="desc">{pizza.desc}</p>
      </div>
      <div className="controls">
        <button aria-label={`Retirer ${pizza.name}`} onClick={onRemove} disabled={quantity <= 0}>−</button>
        <span className="qty">{quantity}</span>
        <button aria-label={`Ajouter ${pizza.name}`} onClick={onAdd}>+</button>
      </div>
    </article>
  )
}
