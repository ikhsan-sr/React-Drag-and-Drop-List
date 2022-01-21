import React, { useState, useRef } from 'react';

// Drag and Drop Level 1

export default function Sessions(props) {
  const [list, setList] = useState(props.data.sessions);

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
            {item.title}
          </h1>
        ))}
    </>
  );
}
