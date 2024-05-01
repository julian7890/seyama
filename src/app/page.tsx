import Animation from "./components/ui/Animation";
import NameAnimation from "./components/ui/NameAnimation";

export default function Home() {
  return (
    <div className="flex h-full relative justify-center items-center bg-white overflow-hidden">
      <NameAnimation />
      <Animation />
    </div>
  );
}
