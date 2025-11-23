import  { FC } from 'react';
import { Product } from '../../lib/types';
import Image from 'next/image';
import clsx from 'clsx';

export const ProductCard: FC<Partial<Product>> = ({
  id,
  name,
  description,
  price,
  raiting,
  imageSrc,
  status,
}) => {
  return (
    <>
      <a key={id} className={`container__link ${clsx(status, {
        "is-on-sale": status === 'is-on-sale' ? 'is-on-sale' : '',
        "is-popular": status === 'is-popular' ? 'is-popular' : '',
        "is-best-seller": status === 'is-best-seller' ? 'is-best-seller' : '',
        "is-out-of-stock": status === 'is-out-of-stock' ? 'is-out-of-stock' : '', 
      })}`}>
        <h2 className="container__title">{name}</h2>
        <p className="container__description">{description}</p>
        <p className="container__description">Raiting: {raiting}</p>
        <p className="container__price">{price?.toFixed(2)}$</p>
        <Image
          className="container__image"
          src={imageSrc || 'https://randomuser.me/api/portraits/men/1.jpg'}
          alt={name || 'Product Image'}
          width={300}
          height={400}
          priority
        />
      </a>
    </>
  )
};
