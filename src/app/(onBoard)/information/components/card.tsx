/* eslint-disable @next/next/no-img-element */
"use client";
import { Badge } from "@/components/ui/badge";
import { Clock9Icon } from "lucide-react";
import { useRouter } from "next/navigation";

export const InfoCards = () => {
  const router = useRouter();
  return (
    <div
      className="bg-gray-100 rounded-xl w-full  h-[400px] overflow-hidden shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-lg group cursor-pointer"
      onClick={() => router.push("/information/id")}
    >
      <div className="overflow-hidden h-48 rounded-t-xl">
        <img
          alt="Information card"
          src="./IMG_0488.jfif"
          className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2 text-sm justify-end">
          <Clock9Icon size={16} />
          <p>2025-08-14</p>
        </div>
        <h2 className="text-xs font-semibold">
          “ГАЗАР ЗОХИОН БАЙГУУЛАЛТ, ГЕОДЕЗИ ЗУРАГ ЗҮЙН ГАЗРЫН 2022 ОНЫ
          ГҮЙЦЭТГЭЛИЙН ТӨЛӨВЛӨГӨӨ” БАТЛАГДЛАА
        </h2>
        <div className="flex w-full flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600"
          >
            Verified
          </Badge>
          <Badge variant="outline">Outline</Badge>
        </div>

        <p className="text-gray-600 mt-2 text-[12px]">
          Газар зохион байгуулалт, геодези зураг зүйн газрын дарга А.Энхманлай
          “Газар зохион байгуулалт, геодези зураг зүйн газрын 2022...
        </p>
      </div>
    </div>
  );
};
