import React, { Fragment, useState } from 'react';

import thumbnail1 from '../assets/imgs/jpgs/image-product-1-thumbnail.jpg';
import thumbnail2 from '../assets/imgs/jpgs/image-product-2-thumbnail.jpg';
import thumbnail3 from '../assets/imgs/jpgs/image-product-3-thumbnail.jpg';
import thumbnail4 from '../assets/imgs/jpgs/image-product-4-thumbnail.jpg';

import productImg1 from '../assets/imgs/jpgs/image-product-1.jpg';
import productImg2 from '../assets/imgs/jpgs/image-product-2.jpg';
import productImg3 from '../assets/imgs/jpgs/image-product-3.jpg';
import productImg4 from '../assets/imgs/jpgs/image-product-4.jpg';

import iconMinus from '../assets/imgs/svgs/icon-minus.svg';
import iconPlus from '../assets/imgs/svgs/icon-plus.svg';



const Shopping = () => {

    const [imageIndex, setImageIndex] = useState(0);
    const [counter, setCounter] = useState(0);
    const [isDisabled, setDisable] = useState(false);

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
    
    const products = [
        {
            src: productImg1,
            alt: "product image 1"
        },
        {
            src: productImg2,
            alt: "product image 2"
        },
        {
            src: productImg3,
            alt: "product image 3"
        },
        {
            src: productImg4,
            alt: "product image 4"
        }
    ]

    const handleImageSwap = (imageIndex) => {
        const result = products[imageIndex];
        return result;
    }

    const IncrementCounter = () => {
        setCounter((prevState) => prevState + 1);
        setDisable(false);
    }
    const DecrementCounter = () => {
        if (counter === 0) {
            setCounter(0);
            setDisable(true);
            return;
        }
        setCounter((prevState) => prevState - 1);
    }

    const ComputerPrice = () => {
        const price = 125.00;
        let result = price * counter;
        return result;
    }

    const cartItems = [];

    const AddToCart = () => {
        if(counter === 0) {
            return;
        }

        cartItems.push({
            src: productImg1,
            productName: "Fall Limited Edition Sneakers",
            total: ComputerPrice(),
            quantity: counter,
            unitPrice: 125.00
        })
        return cartItems;
    }

    console.log(ComputerPrice())
    console.log(cartItems)


  return (
    <Fragment>
        <div className="lg:px-6 lg:max-w-[1024px] mx-auto xl:px-0 py-[90px] flex gap-20 items-center">
            <div className="">
                <div className="rounded-[14px] overflow-hidden w-[445px] h-[445px]"><img className="object-cover w-full" src={handleImageSwap(imageIndex).src} alt={handleImageSwap(imageIndex).alt} /></div>
                <div className="flex gap-8 mt-8">
                    {thumbnails.map((item, index) => (
                        <div className=" border-[3px] border-transparent hover:border-orange-400 rounded-[10px] overflow-hidden w-[90px] h-[90px]" key={item.src}><img className=" object-cover hover:opacity-40 transition-all" src={item.src} alt={item.alt} 
                        onMouseEnter={() => setImageIndex(index)}
                        /></div>
                    ))}
                </div>
            </div>
            <div className="">
                <div className="">
                    <h5 className="text-sm font-bold uppercase text-orange-400">SNEAKER COMPANY</h5>
                    <h1 className="text-5xl font-bold leading-[49.64px] pt-5 pb-9">Fall Limited Edition Sneakers</h1>
                    <p className="text-gray-400">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                </div>
                <div className="flex gap-4 mt-6">
                    <div className="flex flex-col">
                        <span className="font-bold text-2xl">$125.00</span>
                        <span className="text-gray-200 line-through">$250.00</span>
                    </div>
                    <span className="h-fit py-[5px] px-[11.5px] bg-[#FFEDE0] text-orange-500 font-bold text-sm rounded-md">50%</span>
                </div>
                <div className="flex gap-4 mt-8">
                    <div className="py-4 px-4 rounded-[10px] bg-[#b6bcc836] flex justify-between items-center w-[40%]">
                        <span onClick={DecrementCounter} className={isDisabled ? "cursor-not-allowed" : "cursor-pointer"}><img src={iconMinus} alt="icon minus" /></span>
                        <span className="font-bold text-base">{counter}</span>
                        <span onClick={IncrementCounter} className="cursor-pointer"><img src={iconPlus} alt="icon plus" /></span>
                    </div>
                    <div className={`py-4 px-[74px] add-to-cart bg-[#FF7D1A] text-white flex justify-center items-center gap-4 rounded-lg w-[60%] ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={AddToCart}>
                        <span><svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#FFFFFF" fill-rule="nonzero"/></svg></span>
                        <span className="font-bold">Add to cart</span>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Shopping