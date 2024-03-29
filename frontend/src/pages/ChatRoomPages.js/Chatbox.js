// Chatbox.js
import React from 'react';

function Chatbox({ name, message, time, user }) {
  console.log('Chatbox mein');
  console.log('name:', name);
  console.log('message:', message);
  console.log('time:', time);
  console.log('user:', user);

  return (
    <div className={`w-full flex items-center ${user ? 'justify-end' : 'justify-start'}`}>
      <div className={`bg-white w-fit m-2 rounded-md p-2`}>
        <p className='font-bold'>{name}</p>
        <div className='flex justify-center items-center'>
          <p className='flex-1'>{message}</p>
        </div>
        <p className='text-xs h-6 text-right p-1'>{time}</p>
      </div>
    </div>
  );
}

export default Chatbox;
