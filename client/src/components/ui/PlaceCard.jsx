import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
const PlaceCard = ({ place }) => {
  const { _id: placeId, photos, address, title, price } = place;
  return (
    <Link to={`/place/${placeId}`} className="m-4 flex flex-col md:m-2 xl:m-0">
      <div className="card relative overflow-hidden hover:shadow-lg transition duration-300 transform hover:scale-105">
        {photos?.[0] && (
          <>
            <img
              src={`${photos?.[0]}`}
              className="h-4/5 w-full rounded-xl object-cover"
              alt={title}
            />
           
            <div className="absolute top-0 right-0 p-2">
              <AiOutlineHeart size={24} color="red" />
            </div>
          </>
        )}
        <div className="p-4 absolute bottom-0 left-0 w-full bg-white bg-opacity-80">
          <h2 className="truncate font-bold">{address}</h2>
          <h3 className="truncate text-sm text-gray-500">{title}</h3>
          <div className="mt-1">
            <span className="font-semibold">₹{price} </span>
            per night
          </div>
        </div>
      </div>
    </Link>
  );
};
export default PlaceCard;
