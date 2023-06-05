import React from 'react';
import 'dotenv/config';

export const Hello: React.FC = () => {
    console.log('variable de entorno', process.env.API_BASE);
  return (
    <div> Hello desde React con typescript</div>
  )
}
