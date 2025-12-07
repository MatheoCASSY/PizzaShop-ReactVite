import React from 'react'

export default function Header({ count = 0 }) {
  return (
    <header className="header">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <img src="/logo.png" alt="logo" style={{width:56,height:56,objectFit:'contain',borderRadius:8}} />
        <div className="brand">PizzaShop</div>
      </div>

      <nav className="nav">
        <button className="nav-btn">Accueil</button>
        <button className="nav-btn">Panier ({count})</button>
        <button className="nav-btn">Paiement</button>
      </nav>
    </header>
  )
}
