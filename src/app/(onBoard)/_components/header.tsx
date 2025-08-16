"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Carousels } from "./carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export const Header = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between items-center h-[20%] py-2 border mb-2 mt-2 p-2 rounded-xl bg-opacity-20 bg-white w-full">
        <div className="w-[150px] sm:w-[250px]">
          <img
            alt="logo"
            src="https://www.egazar.gov.mn/assets_new/img/logo_index.png"
          />
        </div>
        <div className="flex gap-2 xl:gap-10 items-center">
          <div className="xl:flex gap-5 text-xl font-semibold text-white hidden">
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
            <div className="cursor-pointer">
              <a href="https://support.gosmart.mn/">Гарийн авлага</a>
            </div>
          </div>
          <div className="flex items-center xl:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="border p-1 rounded-lg text-white">
                  <Menu />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuLabel>
                  {" "}
                  <div
                    onClick={() => {
                      router.push("/home");
                    }}
                    className="cursor-pointer"
                  >
                    Нүүр
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  {" "}
                  <div
                    onClick={() => {
                      router.push("/rule");
                    }}
                    className="cursor-pointer"
                  >
                    Дүрэм журам
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <div
                    onClick={() => {
                      router.push("/information");
                    }}
                    className="cursor-pointer"
                  >
                    Мэдээ мэдээлэл
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <div
                    onClick={() => {
                      router.push("/infographic");
                    }}
                    className="cursor-pointer"
                  >
                    Инфографик
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <div className="cursor-pointer">
                    <a href="https://support.gosmart.mn/">Гарийн авлага</a>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button variant="secondary" className=" bg-amber-400">
            НЭВТРЭХ
          </Button>
        </div>
      </div>
      <Carousels />
    </div>
  );
};
