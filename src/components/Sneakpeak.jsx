import React, { Fragment } from 'react'

const Sneakpeak = ({ src, alt }) => {
  return (
    <Fragment>
        <div className="rounded-[10px] overflow-hidden w-[90px] h-[90px]"><img className=" object-cover rounded-[10px] border-4 border-transparent hover:border-orange-400 hover:opacity-40 transition-all" src={src} alt={alt} /></div>
    </Fragment>
  )
}

export default Sneakpeak