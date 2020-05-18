import React from 'react';

const Recipe = ({ name, image, calories, ingredients }) => {
    return (
        <div className="max-w-sm bg-white my-6 mx-2 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt="" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <ul>
                    {ingredients.map(ingredient => (
                        <li className="text-gray-700 text-base">{ingredient.text}</li>
                    ))}
                </ul>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{calories}</span>
            </div>
        </div>
    );
}

export default Recipe;