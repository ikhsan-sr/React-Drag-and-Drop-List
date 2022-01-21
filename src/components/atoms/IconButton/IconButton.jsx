import React from 'react';

export default function IconButton(props) {
  return (
    <>
      <img src={props.img} alt={`icon-${props.name}`} />
    </>
  );
}
