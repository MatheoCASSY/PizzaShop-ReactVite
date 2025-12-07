import React from 'react'

function Line({ item, onAdd, onRemove }) {
  return (
    <div className="cart-line">
      <div className="left">
        <div className="name">{item.name}</div>
        <div className="price">{item.price.toFixed(2)}€</div>
      </div>
      <div className="right">
        <button onClick={() => onRemove(item.id)} disabled={item.qty <= 0}>−</button>
        <span className="qty">{item.qty}</span>
        <button onClick={() => onAdd(item.id)}>+</button>
      </div>
    </div>
  )
}

export default function Cart({ items = [], total = 0, onAdd, onRemove, onClear }) {
  return (
    <div className="cart">
      <h4>Panier</h4>
      {items.length === 0 ? (
        <p className="empty">Panier vide</p>
      ) : (
        <div className="lines">
          {items.map((it) => (
            <Line key={it.id} item={it} onAdd={onAdd} onRemove={onRemove} />
          ))}
        </div>
      )}

      <div className="total">Montant: <strong>{total.toFixed(2)}€</strong></div>
      <div className="cart-actions">
        <button onClick={onClear} className="clear">Vider le panier</button>
        <button className="pay">Payer ({total.toFixed(2)}€)</button>
      </div>
    </div>
  )
}
