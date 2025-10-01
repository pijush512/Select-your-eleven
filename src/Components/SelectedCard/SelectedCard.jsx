import React from 'react';

const SelectedCard = ({player, removePlayer}) => {
    const handelRemove = () => {
        removePlayer(player);
    }
    return (
        <div className='mt-6 mb-4 border-2 border-gray-300 p-3 flex justify-between items-center rounded-lg'>
                <div className='flex items-center gap-4'>
                    <img className='h-[50px] w-[50px] rounded-lg object-cover' src={player.player_img} alt="" />
                    <div>
                        <h1 className='font-bold'>{player.player_name}</h1>
                        <p className='text-xs'>{player.playing_role}</p>
                    </div>
                </div>
                <div onClick={handelRemove}>
                    <img src="https://i.ibb.co.com/27sLPkPR/dlete.png" alt="" />
                </div>
            </div>
    );
};

export default SelectedCard;