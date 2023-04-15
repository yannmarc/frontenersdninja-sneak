import React, { Fragment } from 'react';
import thumbnail1 from '../assets/imgs/jpgs/image-product-1-thumbnail.jpg';
import thumbnail2 from '../assets/imgs/jpgs/image-product-2-thumbnail.jpg';
import thumbnail3 from '../assets/imgs/jpgs/image-product-3-thumbnail.jpg';
import thumbnail4 from '../assets/imgs/jpgs/image-product-4-thumbnail.jpg';


const Showcase = () => {
    const thumbnails = [
        {
            src: thumbnail1,
            alt: "thumbnail-product-1"
        },
        {
            src: thumbnail2,
            alt: "thumbnail-product-2"
        },
        {
            src: thumbnail3,
            alt: "thumbnail-product-3"
        },
        {
            src: thumbnail4,
            alt: "thumbnail-product-4"
        }
    ]
  return (
    <Fragment>
        <div className="">

        </div>
    </Fragment>
  )
}

export default Showcase