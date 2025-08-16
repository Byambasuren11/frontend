import { InfoCards } from "./components/card";

const Information = () => {
  return (
    <>
      <div className="flex justify-center text-sm sm:text-lg lg:text-xl xl:text-3xl  text-semibold mt-24 text-amber-400">
        Мэдээ Мэдээлэл
      </div>
      <div className="grid gap-5 justify-center mt-9 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <InfoCards />
        <InfoCards />
        <InfoCards />
        <InfoCards />
      </div>
    </>
  );
};
export default Information;
