"use client";

import  {
  FC,
  ChangeEvent,
  useRef,
} from 'react';
import { ProductCard } from '../ui/ProductCard/ProductCard';
import { products } from '../lib/constants';
import { useProductStore } from '../store/productStore';
import { useFormStore } from '../store/formStore';
import Image from 'next/image';
import { useThemeStore } from '@/store/themeStore';
import clsx from 'clsx';

const Home: FC = () => {
  const { form, setForm } = useFormStore();
  const { filteredProducts } = useProductStore();
  const { theme, toggleTheme } = useThemeStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    let numVal = Number.parseFloat(value);
    
    if(Number.isNaN(numVal)) {
      numVal = 0;
    }
    
    setForm({ ...form, [name]: numVal });
  };

  const handleToggleTheme = () => toggleTheme(theme);
  
  return (
    <>
      <form className="container__filter">
        <button
          className='header-toggle-theme__toggle-theme'
          type='button'
          onClick={handleToggleTheme}
        >
          <Image
            src={clsx(theme === "dark" ? "assets/moon.svg" : "assets/sun.svg")}
            alt='Sun Icon'
            width={50}
            height={50}
          /> 
        </button>
        <label className="container__label">
          <input
            className="container__input"
            type="number"
            placeholder="Max Price"
            onChange={handleChange}
          />
          {/* <input 
            className="container__input" 
            type="number" 
            placeholder="Raiting" 
            onChange={handleChange}
          /> */}
        </label>
      </form>
      <div className='container'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  )
}

export default Home;