import React from 'react';

export default function Icon(props) {
  const { img, name } = props;

  return <img src={img} alt={`icon-${name}`} />;
}
