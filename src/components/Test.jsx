import { useState } from "react";

function Test() {

    const [number, setNumber] = useState(0)
    const [finalData, setFinalData] = useState(0)


    const checkPalindrome = (x) => {
        setFinalData(x)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        checkPalindrome(number)
        setNumber(0)
    };

    const handleChange = (e) => {
        setNumber(e.target.value)
    } 


  return (
    <form className="py-10 px-10 text-2xl" onSubmit={handleSubmit}>
      <div className="mx-5 my-5">
        <label>NUMBER : </label>
        <input
          type="number"
          value={number}
          placeholder="TYPE A NUMBER"
          onChange={handleChange}
        />
      </div>
      <button className="mx-5 my-5 bg-red-50 rounded-2xl px-5" type="submit">Submit</button>
      <div className="my-5 text-red-300">{finalData}</div>
      <div className="mt-15 text-red-300">THIS IS A VALID PALINDROME</div>
    </form>
  );
}

export default Test;
