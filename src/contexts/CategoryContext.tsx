import React, { useState } from 'react'
import { createContext } from 'react';
import { CategoryContextProps } from '../types/CategoriesContextPropTypes';

export const CategoryContextDefaultValue: CategoryContextProps = {
  category: null,
  setCategory: () => {}
}

export const CategoryContext = createContext<CategoryContextProps>(CategoryContextDefaultValue);

const CategoryContextProvider = ( { children } : any ) => {
    const [category, setCategory] = useState<number | null>(null);

  return (
    <>
      <CategoryContext.Provider value={{ category, setCategory }}>
        {children}
      </CategoryContext.Provider>
    </>
  )
}

export default CategoryContextProvider;