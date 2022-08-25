import React, { useEffect, useRef } from 'react';
import { mount } from 'marketingApp/MaretingIndex';
import { useHistory } from 'react-router-dom';

const Markrting = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      }
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default Markrting;
