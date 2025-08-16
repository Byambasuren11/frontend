"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description =
  "Хүйс болон мэргэшлийн зэрэгтэй мэргэжилтнүүдийн харьцаа";

const chartData = [
  { Level: "Мэргэшсэн", Male: 186, Female: 305 },
  { Level: "Зөвлөх", Male: 80, Female: 200 },
];

const chartConfig = {
  Male: { label: "Эрэгтэй", color: "var(--chart-1)" },
  Female: { label: "Эмэгтэй", color: "var(--chart-2)" },
} satisfies ChartConfig;

export function ChartBarMultiple() {
  return (
    <Card className="w-full lg:w-[49%] rounded-3xl shadow-xl bg-white">
      <CardHeader>
        <CardTitle className="text-lg lg:text-xl font-semibold">
          Мэргэшлийн зэрэгтэй мэргэжилтнүүдийн хүйсийн харьцаа
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ChartContainer config={chartConfig} className="h-[350px]">
          <BarChart
            data={chartData}
            barGap={10}
            barCategoryGap="20%"
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            <defs>
              <linearGradient id="gradMale" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#99a8f5ff" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#a7b5efff" stopOpacity={0.6} />
              </linearGradient>
              <linearGradient id="gradFemale" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f62b9aff" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#f77fc3ff" stopOpacity={0.6} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
              stroke="#E5E7EB"
              opacity={0.5}
            />
            <XAxis
              dataKey="Level"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tick={{ fontSize: 14, fill: "#333", fontWeight: 500 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#555" }}
            />
            <ChartTooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Legend
              verticalAlign="top"
              height={30}
              iconType="circle"
              wrapperStyle={{ fontSize: 12, fontWeight: 500 }}
            />
            <Bar
              dataKey="Male"
              fill="url(#gradMale)"
              radius={[6, 6, 0, 0]}
              barSize={30}
              isAnimationActive={true}
              animationDuration={1200}
            />
            <Bar
              dataKey="Female"
              fill="url(#gradFemale)"
              radius={[6, 6, 0, 0]}
              barSize={30}
              isAnimationActive={true}
              animationDuration={1200}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
