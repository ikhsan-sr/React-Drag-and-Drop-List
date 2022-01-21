import React, { useState, useRef } from 'react';

export default function Courses() {
  const [list, setList] = useState([
    'Chicken Biriyani',
    'Mutton Pulao',
    'Paneer Masala',
    'Tandoori Chicken',
    'Dal Makhana',
    'Malai Kofta',
  ]);

  const draggingItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;

    const listCopy = [...list];
    const draggingItemContent = listCopy[draggingItem.current];

    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;

    setList(listCopy);
  };

  return (
    <>
      {list &&
        list.map((item, index) => (
          <h1
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => handleDragEnter(e, index)}
            key={index}
            draggable
          >
            {item}
          </h1>
        ))}
    </>
  );
}
