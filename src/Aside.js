import React, { useState, useEffect } from 'react';

const Aside = (props) => {
  const [selectedSize, setSelectedSize] = useState([]);
  const [allSizes, setAllSizes] = useState([]);

  const handleSize = (size) => {
    const index = selectedSize.indexOf(size);
    const all = selectedSize;
    if (index > -1) {
      // Remove size from selectedSize
      all.splice(index, 1);
      setSelectedSize([...all]);
    } else {
      // Add new size to selectedSize
      all.push(size);
      setSelectedSize([...all]);
    }
    props.setSelectedSize([...all]);
  };

  const aside = (data) => {
    return data.reduce((acc, cv) => {
      acc.push(cv.availableSizes);
      return acc;
    }, []).flat(Infinity).filter((value, index, arr) =>
      arr.indexOf(value) === index);
  }

  useEffect(() => {
    setAllSizes(aside(props.data));
  }, [selectedSize])

  return (
    <aside className="size-container">
      <div className="size-btn">
        {allSizes.map((size) =>
          <button
            key={size}
            className={selectedSize.includes(size) ? 'active' : ''}
            onClick={() => handleSize(size)}>
            {size}
          </button>)}
      </div>
    </aside>
  );
}

export default Aside;