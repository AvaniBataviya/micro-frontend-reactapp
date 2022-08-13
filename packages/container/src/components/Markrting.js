import React, { useEffect, useRef } from 'react';
import { mount } from 'marketingApp/MaretingIndex';

const Markrting = () => {
  const ref = useRef(null);

  useEffect(() => {
   mount(ref.current)
  }, []);
  

  return <div ref={ref} />
}

export default Markrting;