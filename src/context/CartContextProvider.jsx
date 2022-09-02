import React, { useState, useReducer, createContext } from 'react';

const initialState = {
    selectedItems: []
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
                return {
                    ...state,
                    selectedItems: [...state.selectedItems]
                }
            }
        case 'REMOVE_ITEM':
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems]
            }
    }
}

export const CartContext = createContext();


function CartContextProvider({ children }) {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;