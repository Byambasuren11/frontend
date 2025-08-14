"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center h-[20%] py-4">
      <div className="w-[300px]">
        <img alt="logo" src="./logo.webp" />
      </div>
      <div className="flex gap-10 items-center">
        <div className="flex gap-5 text-sm font-semibold">
          <div
            onClick={() => {
              router.push("/home");
            }}
            className="cursor-pointer"
          >
            Нүүр
          </div>
          <div
            onClick={() => {
              router.push("/rule");
            }}
            className="cursor-pointer"
          >
            Дүрэм журам
          </div>
          <div
            onClick={() => {
              router.push("/information");
            }}
            className="cursor-pointer"
          >
            Мэдээ мэдээлэл
          </div>
          <div
            onClick={() => {
              router.push("/infographic");
            }}
            className="cursor-pointer"
          >
            Инфографик
          </div>
          <div
            onClick={() => {
              router.push("/contact_us");
            }}
            className="cursor-pointer"
          >
            Холбоо барих
          </div>
          <div
            onClick={() => {
              router.push("/manual");
            }}
            className="cursor-pointer"
          >
            Гарийн авлага
          </div>
        </div>
        <Button variant="secondary" className=" bg-amber-400">
          НЭВТРЭХ
        </Button>
      </div>
    </div>
  );
};
