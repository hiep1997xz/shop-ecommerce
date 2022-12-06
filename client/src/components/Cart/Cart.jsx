import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import React from 'react';
import './Cart.scss';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg',
      img2: 'https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg',
      title: 'Hat',
      isNew: true,
      oldPrice: 20,
      price: 10,
      desc: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 2,
      img: 'https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg',
      title: 'Skirt',
      isNew: false,
      oldPrice: 15,
      price: 8,
      desc: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 3,
      img: 'https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg',
      title: 'Hw',
      isNew: true,
      oldPrice: 30,
      price: 20,
      desc: 'Lorem ipsum dolor sit amet',
    },
  ]

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">${item.price}</div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            // onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$100</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart
