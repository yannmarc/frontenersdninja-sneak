import React, { Fragment } from 'react'

const CartDropdown = () => {
  return (
    <Fragment>
        <div className="absolute cart-box right-[-89px] top-[69px] w-[358px] bg-white shadow-xl rounded-lg">
            <div className="py-5 border-b-2 px-6"><h3 className="font-bold text-md">Cart</h3></div>
            <div className="flex justify-center items-center w-full h-[200px] font-bold"><p>Your cart is empty</p></div>
        </div>
    </Fragment>
  )
}

export default CartDropdown