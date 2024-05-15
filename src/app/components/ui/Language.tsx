export default function Language({ onLanguageChange }: any) {
  const languageHandler = (e: any) => {
    e.preventDefault();
    onLanguageChange(e.target.value);
  };
  return (
    <div className="flex justify-end gap-2 lg:gap-6 text-lg text-white mt-auto p-4 lg:text-4xl lg:pr-8">
      <button
        className="border border-white hover:bg-white/50 transition duration-200 rounded-md w-10 lg:w-fit lg:px-3"
        value={"english"}
        onClick={languageHandler}
      >
        EN
      </button>
      <button
        className="border border-white hover:bg-white/50 transition duration-200 rounded-md w-10 lg:w-fit lg:px-4"
        value={"japanese"}
        onClick={languageHandler}
      >
        JP
      </button>
    </div>
  );
}
