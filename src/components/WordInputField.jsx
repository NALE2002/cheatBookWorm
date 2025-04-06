function WordInputField({ value, onChange }) {
  return (
    <>
      <input
        type="text"
        className="bg-white outline-none p-2 text-4xl text-black text-center leading-none shadow-md shadow-black"
        minLength={3}
        maxLength={16}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default WordInputField;
