import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
        <div className="bg-slate-100">
            <div className="px-4 xl:max-w-6xl mx-auto flex justify-between flex-col gap-2 md:gap-0 font-bold md:font-normal text-gray-500 md:flex-row md:px-6 lg:px-6 md:max-w-xl lg:max-w-5xl py-4">
            <p className="text-xs md:text-base">Proudly Implemented by <a href="twitter.com/frontendninja" className="font-medium underline text-slate-500">@frontendninja</a>&nbsp; 🇨🇲</p>
            <p className="text-xs md:text-base">Frontendmentor.io</p>
            </div>
        </div>
    </Fragment>
  )
}

export default Footer