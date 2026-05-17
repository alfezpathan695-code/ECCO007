import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrums from '../components/BreadCrums/BreadCrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Description from '../components/Description/Description';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
 
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
const product = all_product.find((e) => e.id === parseInt(productId));
  return (
    <div>
      <>
        <BreadCrums product={product ? product : {}} />
        <ProductDisplay product={product ? product : {}} />
        <Description/>
        <RelatedProducts/>
          
      </>
    </div>
  )
}

export default Product;
