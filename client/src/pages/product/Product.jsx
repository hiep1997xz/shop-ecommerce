import React, { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = () => {
  const images = [
    'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ]

  const [quantity, setQuantity] = useState(1)
  const [selectedImg, setSelectedImg] = useState(images[0]);
 

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(images[0])} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(images[1])} />
        </div>
        <div className="mainImg">
          <img src={selectedImg} alt=""  />
        </div>
      </div>
      <div className="right">
        {/* <h1>{data?.attributes?.title}</h1> */}
        {/* <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p> */}
        <h1>Example</h1>
        <span>$200</span>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className="add"
          // onClick={() =>
          //   dispatch(
          //     addToCart({
          //       id: data.id,
          //       title: data.attributes.title,
          //       desc: data.attributes.desc,
          //       price: data.attributes.price,
          //       img: data.attributes.img.data.attributes.url,
          //       quantity,
          //     })
          //   )
          // }
        >
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product
