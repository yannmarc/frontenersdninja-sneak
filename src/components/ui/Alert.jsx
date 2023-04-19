import React, { Fragment, useEffect, useState } from 'react'

const Alert = ({ isStored, setStore }) => {
    const [isVisible, setVisible] = useState(false);
    
    useEffect(() => {
        if (isStored) {
            setVisible(true)
        } else { setVisible(false) }
    }, [isStored])
  return (
    <Fragment>
        <div onMouseOver={() => setStore(false)} className={isVisible ? "animated-modal py-3 fixed top-[150px] right-[80px] mb-4 px-4 w-[20%] border-2 border-green-500 bg-green-50 text-green-500 font-bold flex items-center gap-3 rounded-md" : "py-3 fixed top-[150px] right-[-100vw] mb-4 px-4 w-[20%] border-2 border-green-500 bg-green-50 text-green-500 font-bold flex items-center gap-3 rounded-md transition-all"}>
            <span className="bg-green-500 w-[20px] h-[20px] rounded-full block"></span>
            <p>Product added successfully</p>
        </div>
    </Fragment>
  )
}

export default Alert