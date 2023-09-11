import React, { useContext, useState } from 'react';
import useDisplayCategories from '../../hooks/useDisplayCategories';
import { CategoryContext } from '../../contexts/CategoryContext';
import { CategoryContextProps } from '../../types/CategoriesContextPropTypes';
import '../../styles/selection/selection.scss';

const SelectCategory = () => {

    const { data } = useDisplayCategories();
    const { setCategory } = useContext<CategoryContextProps>(CategoryContext);
    const categories = data;

    const handleSelectCategory = (e: any) => {
      e.preventDefault();
      setCategory(e.target.value);
    }


  return (
    <>
      <select onChange={handleSelectCategory}>
        <option value="" disabled selected>Select a Category</option>
        {categories?.map((c: any) => (
          <option value={c.id}>{c.name}</option>
        ))}
      </select>
    </>
  )
}

export default SelectCategory;