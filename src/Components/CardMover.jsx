import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCard, removeFromCard } from '../store/slices/card-slice';

export default function CardMover({ cardItem, updateCardTotal }) {
  const [counter, setCounter] = useState(1);
  const [totalAmount, setTotalAmount] = useState(cardItem.price);
  const dispatch = useDispatch();

  const handleAddCard = () => {
    dispatch(addToCard(cardItem));
    setCounter(counter + 1);
  };

  const handleRemoveCard = () => {
    dispatch(removeFromCard(cardItem.id));
    setCounter(0);
  };

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    setCounter(count => (count > 1 ? count - 1 : 1));
  };

  useEffect(() => {
    const newTotal = counter * cardItem.price;
    setTotalAmount(newTotal);
    updateCardTotal(cardItem.id, newTotal); // Update parent component
  }, [counter, cardItem.price]);

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-6">
      <img
        className="w-full h-60 object-cover rounded-t-lg"
        src={cardItem.image}
        alt={cardItem.title}
      />
      <div className="p-4 flex flex-col">
        <h2 className="text-2xl font-semibold mb-2">{cardItem.title}</h2>
        <span className="text-2xl font-bold text-gray-800 dark:text-white mb-2">${cardItem.price}</span>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          {cardItem.description}
        </p>
        <div className="flex justify-between items-center mt-auto space-x-4">
          <div className="flex-1 flex justify-center">
            <button
              onClick={handleRemoveCard}
              className="w-full max-w-xs bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
            >
              Remove from Card
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="flex items-center justify-center space-x-2">
              <button
                className="control__btn bg-gray-300 dark:bg-gray-600 p-2 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500"
                onClick={increase}
              >
                +
              </button>
              <span className="text-2xl font-bold mx-4">{counter}</span>
              <button
                className="control__btn bg-gray-300 dark:bg-gray-600 p-2 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500"
                onClick={decrease}
              >
                -
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Total: ${totalAmount.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
