import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardMover from '../Components/CardMover';

export default function Cards() {
  const [totalCard, setTotalCard] = useState(0);
  const card = useSelector((state) => state.card);
  const [cardTotals, setCardTotals] = useState({});

  const updateCardTotal = (id, total) => {
    setCardTotals(prev => ({ ...prev, [id]: total }));
  };

  useEffect(() => {
    const total = Object.values(cardTotals).reduce((acc, curr) => acc + curr, 0);
    setTotalCard(total);
  }, [cardTotals]);

  return (
    <>
      <div className="grid gap-4 p-4">
        {card.length > 0 ? (
          card.map((cardItem) => (
            <CardMover 
              key={cardItem.id} 
              cardItem={cardItem} 
              updateCardTotal={updateCardTotal} 
            />
          ))
        ) : (
          <div className="text-center mt-56 h-40">
            <h1>Card is Empty</h1>
          </div>
        )}
      </div>

      {card.length > 0 && (
        <div className="text-center mt-8">
          <h2 className="text-xl font-bold mb-4">Total: ${totalCard.toFixed(2)}</h2>
          <Link to="/">
            <button className="w-52 bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
              Go to Homepage
            </button>
          </Link>
        </div>
      )}

      <div className="container mx-auto p-6 mt-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center p-4 border-r border-gray-300 dark:border-gray-700">
            <h1 className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2">Total Items</h1>
            <p className="text-3xl font-semibold text-gray-900 dark:text-white">{card.length}</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <h1 className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2">Total Amount</h1>
            <p className="text-3xl font-semibold text-gray-900 dark:text-white">${totalCard.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
