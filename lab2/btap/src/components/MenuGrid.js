import React from 'react';
import PizzaCard from './PizzaCard';

const sampleMenu = [
  { 
    id: 1, 
    name: 'Margherita', 
    desc: 'Cà chua, phô mai, húng quế', 
    price: '120.000', 
    img: '/assets/images/pizza1.jpg' 
  },
  { 
    id: 2, 
    name: 'Pepperoni', 
    desc: 'Pepperoni, phô mai', 
    price: '150.000', 
    img: '/assets/images/pizza2.jpg' 
  },
  { 
    id: 3, 
    name: 'BBQ Chicken', 
    desc: 'Gà BBQ, hành tây', 
    price: '160.000', 
    img: '/assets/images/pizza3.jpg' 
  },
];

export default function MenuGrid() {
  return (
    <section id="menu" className="my-5">
      <h2 className="mb-4">Menu</h2>
      <div className="row g-3">
        {sampleMenu.map(item => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4">
            <PizzaCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
