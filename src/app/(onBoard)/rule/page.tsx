import { Input } from "@/components/ui/input";
import { Rules } from "./components/rules";

const Rule = () => {
  return (
    <>
      <div>Rule</div>
      <Input placeholder="Search..." className="mb-9 mt-6" />
      <div className="flex justify-between items-center text-sm p-2">
        <div className="flex gap-5">
          <p>№</p>
          <p>Нэр</p>
        </div>
        <div className="flex gap-10">
          <p>Он сар</p>
          <p>Хавсралт</p>
        </div>
      </div>
      <Rules />
      <Rules />
      <Rules />
      <Rules />
    </>
  );
};
export default Rule;
