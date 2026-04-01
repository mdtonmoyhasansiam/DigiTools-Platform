import React, { useState } from 'react'
import { MdVerified } from 'react-icons/md'
import { toast } from 'react-toastify'

export default function Cards({ card, isBuyed, setIsBuyed, isAdded, setIsAdded }) {
  // console.log(card)
  const [buyed, setBuyed] = useState(false)
  const buyButton = () => {
    setBuyed(true)
    setIsBuyed([...isBuyed, card])
    setIsAdded([...isAdded, card])
    toast.success(`${card.name} has added to the cart`);

  }
  return (
    <div className='border border-gray-300 rounded-2xl p-10 max-w-[450px] mx-auto space-y-4 '>

      <div className='flex justify-between'>

        <img src={card.image} alt="" className='h-[50px] w-fit' />
        <span
          style={{
            backgroundColor: card.tagStyle?.bgColor,
            color: card.tagStyle?.textColor,
            borderRadius: card.tagStyle?.borderRadius,
            padding: "4px 12px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "500"
          }}
        >
          {card.tag}
        </span>
      </div>
      <h1 className='text-3xl'>{card.name}</h1>
      <p className='min-h-15'>{card.description}</p>
      <p>{card.price}/month</p>
      <p className='flex items-center'> <span className='text-green-500'><MdVerified /></span> {card.features[0]}</p>
      <p className='flex items-center'> <span className='text-green-500'><MdVerified /></span> {card.features[1]}</p>
      <p className='flex items-center'> <span className='text-green-500'><MdVerified /></span> {card.features[2]}</p>

      <button onClick={buyButton} className='btn w-full btn-primary'> {buyed === true ? 'Added to cart' : 'Buy Now'}</button>

    </div>
  )
}
