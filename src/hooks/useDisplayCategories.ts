import React, { useEffect, useState } from 'react'
import axiosInstance from '../services/axiosInstance';

const baseUrl = `api_category.php`;

const useDisplayCategories = () => {
  const [data, setData] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosInstance.get(baseUrl);
        const categories = data.trivia_categories;
        setData(categories);
        console.log(categories, data);
        return categories;
      } catch (error) {
        console.error(error);
        return error;
      }
    }

    fetchCategories();
  
    
  }, [])

  return { data };
}

export default useDisplayCategories;