import React from 'react'
import './List.scss'
import Card from '../Card/Card';

const List = () => {
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
    <div className='list'>
      {
        data.map(item => (
          <Card item={item} key={item.id} />
        ))
      }
    </div>
  )
}

export default List