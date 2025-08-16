"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LabelList,
} from "recharts";

const data = [
  { age: "66+", zuwluh: -432, mer: 383 },
  { age: "61-65", zuwluh: -1211, mer: 1401 },
  { age: "56-60", zuwluh: -5344, mer: 4859 },
  { age: "51-55", zuwluh: -6037, mer: 15453 },
  { age: "46-50", zuwluh: -6976, mer: 20807 },
  { age: "41-45", zuwluh: -8117, mer: 20590 },
  { age: "36-40", zuwluh: -14926, mer: 25475 },
  { age: "31-35", zuwluh: -12671, mer: 24000 },
  { age: "26-30", zuwluh: -14777, mer: 20418 },
  { age: "19-25", zuwluh: -10394, mer: 12018 },
  { age: "≤18", zuwluh: -80, mer: 126 },
];

export default function PyramidGraphic() {
  return (
    <div className="w-full  h-[500px] bg-white rounded-2xl shadow-md p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="zuwluhColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4F86F7" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#82b1ff" stopOpacity={0.8} />
            </linearGradient>
            <linearGradient id="merColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F76FA6" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#ffa0c4" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            domain={[-30000, 30000]}
            tickFormatter={(value) => Math.abs(value).toLocaleString()}
            tick={{ fontSize: 12, fill: "#555" }}
          />
          <YAxis
            type="category"
            dataKey="age"
            tick={{ fontSize: 14, fill: "#333" }}
          />
          <Tooltip
            formatter={(value: number) => Math.abs(value).toLocaleString()}
            contentStyle={{ borderRadius: 8, backgroundColor: "#f9f9f9" }}
          />
          <Legend
            verticalAlign="top"
            align="center"
            wrapperStyle={{ marginTop: -8 }}
            content={() => (
              <div className="text-lg lg:text-xl font-semibold">
                Мэргэшлийн зэрэгтэй мэргэжилтнүүдийн насны бүлэг
              </div>
            )}
          />
          <Bar
            dataKey="zuwluh"
            fill="url(#zuwluhColor)"
            name="Зөвлөх"
            radius={[10, 10, 10, 10]}
          >
            <LabelList
              dataKey="zuwluh"
              position="insideLeft"
              formatter={(value: string | number) =>
                Math.abs(Number(value)).toLocaleString()
              }
              fill="#fff"
              fontSize={12}
            />
          </Bar>
          <Bar
            dataKey="mer"
            fill="url(#merColor)"
            name="Мэргэшсэн"
            radius={[10, 10, 10, 10]}
          >
            <LabelList
              dataKey="mer"
              position="insideRight"
              formatter={(value: string | number) =>
                Math.abs(Number(value)).toLocaleString()
              }
              fill="#fff"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
