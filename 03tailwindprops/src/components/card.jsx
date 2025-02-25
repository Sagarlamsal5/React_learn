import React from 'react'

function Card(props){
  return (
    <>
 <div className="w-60  flex-col rounded-xl min-h-[19rem] ">
        <div>
          <img
            src={props.img}
            alt="test"
            className="object-cover object-center rounded-t-xl"/>
        </div>
        <div className="flex flex-col py-3 px-0.5 pb-10">
          <div className="flex justify-between ">
          <b>Full Name</b>
            <b>Age</b>
          </div>
          <div className="flex  justify-between">
            <p>{props.username}</p>
            <p>{props.age}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card