import React from 'react';
import { StoreContextProvider } from './src/context/StoreContext';

// console.log('hello from gatsby-browser!');
export const wrapRootElement = ({ element }) => (
	<StoreContextProvider>{element}</StoreContextProvider>
);
