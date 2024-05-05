export default function Navbar() {
  const handleScroll = (e: any) => {
    e.preventDefault();
    const elem = document.getElementById(e.target.value);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-around  bg-black text-white text-2xl">
      <button value="schedule" onClick={handleScroll}>
        Schedule
      </button>
      <button value="bio" onClick={handleScroll}>
        Bio
      </button>
      <button value="blog" onClick={handleScroll}>
        Blog
      </button>
    </div>
  );
}
