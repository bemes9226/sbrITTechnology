import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../../store/subscribeReducer";

type Props = {};

export const SubscribeForm = (props: Props) => {
  const [subscriber, setSubscriber] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addUsers(subscriber));
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSubscriber(e.target.value);

  return (
    <div>
      <form
        className="w-96 border-2 border-gray-300 p-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="subscriber"
          placeholder="Enter user"
          className="border-2 border-gray-300 p-2"
          value={subscriber}
          onChange={onChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};
function setSubscriber(value: any) {
  throw new Error("Function not implemented.");
}
