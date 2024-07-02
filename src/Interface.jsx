import React, { useRef, useEffect, useState } from 'react';
import { useKeyboardControls } from '@react-three/drei';
import useGame from './useGame.jsx';
import { addEffect } from '@react-three/fiber';

export default function Interface() {

  const isMobile = window.innerWidth <= 768; // Assuming mobile devices have a width less than or equal to 768px


  const time = useRef();
  const restart = useGame((state) => state.restart);
  const phase = useGame((state) => state.phase);

  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const left = useKeyboardControls((state) => state.left);
  const right = useKeyboardControls((state) => state.right);
  const jump = useKeyboardControls((state) => state.jump);

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState();

      let elapsedTime = 0;

      if (state.phase === 'playing') {
        elapsedTime = Date.now() - state.startTime;
      } else if (state.phase === 'ended') {
        elapsedTime = state.endTime - state.startTime;
      }
      elapsedTime /= 1000;
      elapsedTime = elapsedTime.toFixed(2);

      if (time.current) {
        time.current.textContent = elapsedTime;
      }
    });
    return () => {
      unsubscribeEffect();
    };
  }, []);



  return (
    <>
      <div className="interface">


       {isMobile ?

       <div className='mobile-interface'>
        <i class="left-move bi bi-chevron-left"></i>
      <button className='jump-button'>Jump</button>
      <i class="right-move bi bi-chevron-right"></i>
      </div>
       :

        <div className='desktop-interface'>

       <h1 className='click-button'>Press J TO JUMP</h1>
       <h1>|</h1>
       <h1>Use {`< >`} TO MOVE</h1>
       </div>

       }
      

      

      
      </div>
    </>
  );
}
