import React, { useState } from "react";
import { TopHead } from "./TopHead";
import { SubscribeData } from "./SubscribeData";
import { Comments } from "./Comments";
import { useDispatch } from "react-redux";
import { increment } from "../../store/likeReducer";
import { SubscribeForm } from "./SubscribeForm";

type Props = {};

export const ImageStore = (props: Props) => {
  const dispatch = useDispatch();
  const [subscribe, setSubscribe] = useState(false);
  const handleLike = () => {
    dispatch(increment());
    console.log("Like button clicked");
  };
  const handleSubscriber = () => {
    setSubscribe(true);
  };
  return (
    <div>
      <TopHead />
      <div className="flex items-center ">
        <SubscribeData />
        <div className="flex justify-center p-6 items-center">
          <img
            src="https://www.w3schools.com/w3images/fjords.jpg"
            alt="Fjords"
            style={{ width: "30%", height: "30%" }}
          />
        </div>
        <Comments />
      </div>

      <div>
        <div className="flex justify-center gap-6 p-6 items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLike}
          >
            Like
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Comment
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubscriber}
          >
            Subscribe
          </button>
        </div>
        <div className="flex items-center justify-center">{subscribe ? <SubscribeForm /> : null}</div>
      </div>
    </div>
  );
};
