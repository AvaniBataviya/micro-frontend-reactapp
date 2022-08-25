import React, { useEffect, useRef } from 'react';
import { mount } from 'marketingApp/MaretingIndex';
import { useHistory } from 'react-router-dom';

const Markrting = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      }
    });
  });

  return <div ref={ref} />;
};

export default Markrting;
