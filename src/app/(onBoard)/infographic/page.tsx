import { ChartBarMultiple } from "./_components/barChart";
import EduGraphic from "./_components/eduGraphic";
import PyramidGraphic from "./_components/Graphic";

const Infographic = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center text-3xl text-semibold mt-24 text-amber-400">
        Инфографик
      </div>
      <div className="flex justify-between">
        <ChartBarMultiple />
        <EduGraphic />
      </div>
      <PyramidGraphic />
      {/* <MongoliaMapCanvas /> */}
    </div>
  );
};
export default Infographic;
