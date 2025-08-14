import { Input } from "@/components/ui/input";
import { Carousels } from "./components/carousel";
import { Rules } from "../rule/components/rules";
import { InfoCards } from "../information/components/card";

const HomePage = () => {
  return (
    <>
      <Carousels />
      <div>
        <div className="flex justify-center text-3xl text-semibold mt-24">
          Мэдээ Мэдээлэл
        </div>
        <div className="flex gap-5 justify-center mt-9">
          <InfoCards />
          <InfoCards />
          <InfoCards />
          <InfoCards />
        </div>
      </div>
      <div>
        <div className="flex justify-center text-3xl text-semibold mt-24">
          Дүрэм журам
        </div>
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
      </div>
    </>
  );
};
export default HomePage;
