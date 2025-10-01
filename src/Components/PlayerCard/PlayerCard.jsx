import React, { useState } from "react";
import userIcon from "../../assets/Group.png";
import flagImg from "../../assets/Flag.png";
import { toast } from "react-toastify";

const PlayerCard = ({player, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers}) => {
    const [isSelected, setIsSelected] = useState(false);
    const handelSelect = (playerData) => {
      setIsSelected(true);
    const priceNumber = parseInt(playerData.price.toString().replace(/[^\d]/g, ""));
    if(availableBalance < priceNumber){
        toast("Not Enough Coins.")
        return;
      };

    if(purchasedPlayers.length === 6){
        toast("6 Players already selected.")
        return;
    };

    toast("Player Purchased!");

      setAvailableBalance(availableBalance - priceNumber);

      setPurchasedPlayers([...purchasedPlayers, playerData])
};

  return (
    <div className="card bg-base-100 shadow-sm p-4 mt-5">
      <figure>
        <img
          src={player.player_img}
          alt="Shoes"
          className="w-full h-[300px] object-cover rounded-xl"
        />
      </figure>
      <div className="mt-4">
        <div className="flex gap-3 items-center">
          <img src={userIcon} alt="" />
          <h2 className="card-title">{player.player_name}</h2>
        </div>
        <div className="border-b-1 pb-2 border-gray-400 flex gap-4 items-center justify-between mt-4">
          <div className="flex gap-4 items-center">
            <img className="w-[20px] h-[20px]" src={flagImg} alt="" />
            <span>{player.player_country}</span>
          </div>
          <button className="btn">{player.playing_role}</button>
        </div>

        <div className="flex justify-between font-bold mt-4">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>

        <div className="flex justify-between mt-4">
          <span className="font-bold">{player.batting_style}</span>
          <span>{player.bowling_style}</span>
        </div>

        <div className="card-actions flex justify-between items-center mt-4">
          <p className="font-bold">Price: {player.price}</p>
          <button disabled={isSelected} onClick={() => {handelSelect(player)}} 
            className="btn">
              {isSelected===true?"Selected":"Choose Player"}
            </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
