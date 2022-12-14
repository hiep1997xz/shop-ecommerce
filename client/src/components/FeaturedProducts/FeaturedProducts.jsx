import React from 'react'
import Card from '../Card/Card';
import "./FeaturedProducts.scss";

const FeaturedProducts = ({type}) => {
  const data = [
    {
      id: 1,
      img: 'https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg',
      img2: 'https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg',
      title: "Hat",
      isNew: true,
      oldPrice: 20,
      price: 10
    },
    {
      id: 2,
      img: 'https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg',
      title: "Skirt",
      isNew: false,
      oldPrice: 15,
      price: 8
    },
    {
      id: 3,
      img: 'https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg',
      title: "Hw",
      isNew: true,
      oldPrice: 30,
      price: 20
    },
    {
      id: 4,
      img: 'https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg',
      img2: 'https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg',
      title: "Hat",
      isNew: true,
      oldPrice: 20,
      price: 10
    },
    {
      id: 5,
      img: 'https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg',
      img2: 'https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg',
      title: "Hat",
      isNew: true,
      oldPrice: 20,
      price: 10
    },
  ]

  return (
    <div className='featuredProducts'>
       <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className='bottom'>
        {
          data.map((item) => (
            <Card item={item} key={item.id} />
          ))
        }
      </div>
    </div>
  )
}

export default FeaturedProducts