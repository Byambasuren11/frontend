import { Input } from "@/components/ui/input";
import { Rules } from "./components/rules";

const Rule = () => {
  return (
    <>
      <div className="flex justify-center text-3xl text-semibold mt-24 text-amber-400">
        Дүрэм журам
      </div>
      <Input placeholder="Search..." className="mb-9 mt-6 w-full" />
      {/* <div className="flex justify-between items-center text-sm p-2 text-white">
        <div className="flex gap-5">
          <p>№</p>
          <p>Нэр</p>
        </div>
        <div className="flex gap-10">
          <p>Он сар</p>
          <p>Хавсралт</p>
        </div>
      </div> */}
      {/* <Rules />
      <Rules />
      <Rules />
      <Rules /> */}
    </>
  );
};
export default Rule;
