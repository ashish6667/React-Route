import React from 'react';

const Card = ({ user }) => {
    const { name, city, age, profession, profile_photo } = user;

    return (
        <div className="bg-white text-black inline-block p-6 text-center rounded shadow-lg">
            <img className="h-32 w-32 rounded-full mb-3 mx-auto" src={profile_photo} alt={`${name}'s profile`} />
            <h1 className="text-2xl font-semibold mb-2">{name}</h1>
            <h2 className="text-gray-700">{city}, {age} years old</h2>
            <h3 className="text-gray-500 mb-4">{profession}</h3>
            <button className="mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium hover:bg-emerald-800 transition">
                Add Friend
            </button>
        </div>
    );
};

export default Card;
