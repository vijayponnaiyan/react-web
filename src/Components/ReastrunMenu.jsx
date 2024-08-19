import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../Components/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { addToCard, removeFromCard } from '../store/slices/card-slice'; // Import action from the correct path

const ReastrunMenu = () => {
    const { productId } = useParams();
    const [rescard, setRescard] = useState(null);

    const dispatch = useDispatch();
    const card = useSelector((state) => state.card);

    const handleAddCard = () => {
        if (rescard) {
            dispatch(addToCard(rescard));
        }
    };

    const handleRemoveCard = () => {
        if (rescard) {
            dispatch(removeFromCard(rescard.id));
        }
    };

    useEffect(() => {
        console.log('Fetching data for productId:', productId); // Debug log
        getReastcardinfo();
    }, [productId]);

    const getReastcardinfo = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product data');
            }
            const data = await response.json();
            setRescard(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const images = [
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/af1914220f55ee30.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a81653ffec97986c.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/89f8eeb28f03fe04.jpg?q=20',
    ];

    return (
        <>
            <div className="App">
                <Carousel images={images} />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            {rescard ? (
                                <>
                                    <h1>Restaurant ID: {productId}</h1>
                                    <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                        <img className="w-full h-full object-cover" src={rescard.image} alt={rescard.title} />
                                    </div>
                                    <div className="flex -mx-2 mb-4">
                                        <div className="w-1/2 px-2">
                                            <button
                                                onClick={card.some(item => item.id === rescard.id) ? handleRemoveCard : handleAddCard}
                                                className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                                            >
                                                {card.some(item => item.id === rescard.id) ? 'Remove from Card' : 'Add to Card'}
                                            </button>
                                        </div>
                                        <div className="w-1/2 px-2">
                                            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                                                Add to Wishlist
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                        <div className="md:flex-1 px-4">
                            {rescard && (
                                <>
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{rescard.title}</h2>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{rescard.description}</p>
                                    <div className="flex mb-4">
                                        <div className="mr-4">
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                            <span className="text-gray-600 dark:text-gray-300">${rescard.price}</span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                            <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                                        <div className="flex items-center mt-2">
                                            <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                                            <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                                            <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                                            <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                                        <div className="flex items-center mt-2">
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                            {rescard.description}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReastrunMenu;
