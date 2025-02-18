import React from "react";
import { useSelector } from "react-redux";

type Props = {};

export const TopHead = (props: Props) => {
  const selector = useSelector((state: any) => state.likes.value);
  return (
    <div className="flex border-b gap-20 border-gray-300 p-2">
      <div>Subscribe:</div>
      <div>Comments:</div>
      <div>Likes:{selector}</div>
    </div>
  );
};
