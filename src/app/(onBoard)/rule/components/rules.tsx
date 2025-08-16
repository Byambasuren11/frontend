import { Button } from "@/components/ui/button";

export const Rules = () => {
  return (
    <div className="flex justify-between items-center border border-gray-200 p-2 rounded-lg mb-2 bg-opacity-20 bg-white text-white ">
      <div className="flex gap-4 items-center">
        <p>1</p>
        <p className="p-1">
          Газар зохион байгуулалт, геодези зураг зүйн газрын дарга А.Энхманлай
          “Газар зохион байгуулалт, геодези зураг зүйн газрын 2022 оны
          гүйцэтгэлийн төлөвлөгөө”-г Барилга, хот байгуулалтын Сайдаар хянуулан
          2022 оны 1 дүгээр сарын 24-ний өдөр баталлаа.
        </p>
      </div>
      <div className="flex gap-10 items-center">
        <p>2025-08-14</p>
        <Button className="bg-amber-400 text-white">Үзэх</Button>
      </div>
    </div>
  );
};
