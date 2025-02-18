import React from "react";
import { useSelector } from "react-redux";

type Props = {};

export const SubscribeData = (props: Props) => {
  const selector=useSelector((state:any)=>state.subscriber.users);
  return (
    <div className="w-96 border-2 border-gray-300 p-2">
      <div>
      {selector?.map((user:string)=>(
        <ul>
          <li>{user}</li>
        </ul>
      ))}
      </div>
    </div>
  );
};
