import { useEffect, useState } from "react";
import WordInputField from "./WordInputField";
import { findWords } from "../utils/wordFinder";

function Hero() {
  const [letters, setLetters] = useState("");
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validWords = await findWords(letters);
      setWords(validWords);
    } catch (error) {
      console.error("Errore: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="min-h-screen" id="Hero">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center min-h-screen pt-10 pb-24">
            <img
              src="/src/image/bookwormIMG-Photoroom.png"
              alt="bookworm"
              className="object-cover size-100"
            />
            <h1 className="text-gray-200 text-6xl font-extrabold mb-16">
              Inserisci le lettere <span className="underline">NEGRO</span>!
            </h1>
            <form onSubmit={handleSubmit} className="mb-16">
              <div className="flex flex-row ">
                <WordInputField
                  value={letters}
                  onChange={(e) => setLetters(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-2xl font-semibold px-6 rounded-r-lg hover:cursor-pointer hover:bg-blue-500 hover:text-gray-200 duration-200 shadow-md shadow-black"
                >
                  {isLoading ? "Sto cercando... " : "Invia"}
                </button>
              </div>
            </form>
            <div
              className="max-w-4xl"
              style={{ display: words.length === 0 ? "none" : "" }}
            >
              <ul className="flex flex-wrap bg-white gap-2 px-10 py-5 font-semibold text-xl rounded-lg shadow-lg shadow-black">
                {words.map((word) => (
                  <li key={word}>{word}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
