import React from 'react';

export default function ProductPage({ params: { id } }: { params: { id: string } }) {
  return <div>page {id}</div>;
}
