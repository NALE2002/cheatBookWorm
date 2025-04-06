import WordInputField from "./WordInputField";

function Hero() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  
  return (
    <>
      <section className="h-screen" id="Hero">
        <div className="mx-auto max-w-6xl h-full">
          <div className="flex flex-col items-center justify-center h-full space-y-20">
            <h1 className="text-gray-200 text-6xl font-extrabold">
              Inserisci le lettere <span className="underline">NEGRO</span>!
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row mb-30">
                <WordInputField />
                <button
                  type="submit"
                  className="bg-blue-600 text-2xl font-semibold px-6 rounded-r-lg hover:cursor-pointer hover:bg-blue-500 hover:text-gray-200 duration-200"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
