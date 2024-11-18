import { useState } from "react";

import { booksModel } from "../models/BooksModel";

import SingleBook from "../components/singleBook/SingleBook";

const Books = () => {
  const [ cartItems,setCartItems ] = useState([])

  const [numberOfCartItems,setNumberOfCartItems] = useState(0);

  const [ price,setPrice ] = useState(0)

  const addToCart = (bookItem) =>{

    if(cartItems.length == 0){

        setCartItems([...bookItem])
        
    }else{
        setCartItems([...cartItems,bookItem])
    }

   

    setNumberOfCartItems(cartItems.length + 1)

    console.log(cartItems)

    const customPrices = cartItems.map((item)=>item.price)


    if(customPrices.length === 0){
        setPrice(bookItem.price)
    }else{
        var sumPrices = customPrices.reduce((a,b)=> a+b,0)
    }
    setPrice(sumPrices)

  }

  return (
    <div className="p-[2rem]">
      <div className="text-center">
        <p>
          CART ITEMS {""} {numberOfCartItems}
        </p>
        <p>Total Charge: {""} sh.{price}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-5 ">
        {booksModel.map((book, index) => (
        <SingleBook book={book} index={index} addToCart={addToCart}/>
        ))}
      </div>
    </div>
  );
};

export default Books;
