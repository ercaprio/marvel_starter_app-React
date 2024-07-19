import { useState, useEffect } from 'react';

function useVisibleItems(charList) {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    let timer;

    charList.forEach((item, i) => {
      timer = setTimeout(() => {
        setVisibleItems(prevVisibleItems => [...prevVisibleItems, item]);
      }, i * 300); 
    });

    return () => clearTimeout(timer);
  }, [charList]);

  return visibleItems;
}

export default useVisibleItems;
