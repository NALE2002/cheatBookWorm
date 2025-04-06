import { useEffect } from "react";
import { useState } from "react";

function WordInputField() {

  const [letters, setLetters] = useState("");

  useEffect(() => {
    console.log("lettere: ",letters);
  })

  return (
    <>
      <input
        type="text"
        className="bg-white outline-none p-2 text-4xl text-black text-center"
        minLength={3}
        maxLength={16}
        onChange={(e) => setLetters(e.target.value)}
        value={letters}
      />
    </>
  );
}

export default WordInputField;
