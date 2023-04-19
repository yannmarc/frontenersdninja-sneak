import React, { Fragment, useEffect, useState } from 'react'
import iconDelete from '../../assets/imgs/svgs/icon-delete.svg';

const CartDropdown = ({cart, setCart, setCounter, setOpen}) => {
  const [isEmpty, setEmpty] = useState(false);

  const checkIfArrayEmpty = () => {
    if (cart.length <= 0){
      setEmpty(true);
    }
  }

  const emptyCart = () => {
    const newCart = [...cart];
    setCart(newCart.slice(1, 1));
    checkIfArrayEmpty();
    setCounter(0);
    setOpen(false)
  }

  useEffect(() => {
    checkIfArrayEmpty()
  }, [isEmpty])

  
  return (
    <Fragment>
        <div className="absolute cart-box right-[-140px] top-[69px] w-[358px] bg-white shadow-xl rounded-lg">
            <div className="py-5 border-b-2 px-6"><h3 className="font-bold text-md">Cart</h3></div>
            <div className={isEmpty ? "h-[180px] py-8 relative px-6 flex items-center justify-center" : "h-auto py-8 relative px-5"}>
              
                <div className="flex flex-col gap-4">
                  {
                    cart.map((item) => (
                      <>
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between" key={item}>
                            <div className="flex gap-3">
                              <div className="w-[50px] rounded-sm overflow-hidden"><img src={item.prodImage} alt={item.prodName} /></div>
                              <div className="">
                                <h6 className="text-slate-400">{item.prodName}</h6>
                                <span className="text-slate-400">${item.price} x {item.prodQty} &nbsp; <strong>${item.total}</strong></span>
                              </div>
                            </div>
                            <div className="cursor-pointer" onClick={emptyCart}><img src={iconDelete} alt="delete" /></div>
                          </div>
                          <span className='py-4 flex w-full font-bold cursor-pointer hover:opacity-80 transition-all justify-center text-white bg-orange-400 rounded-lg'>Checkout</span> 
                        </div>
                      </>
                    ))
                  }
                  { isEmpty && <div className=""><p className="text-center font-bold">Your cart is empty</p></div> }
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default CartDropdown