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
  { edu: "Доктор", zuwluh: 432, mer: 383 },
  { edu: "Магистр", zuwluh: 1211, mer: 1401 },
  { edu: "Баклавар", zuwluh: 5344, mer: 4859 },
];

export default function EduGraphic() {
  return (
    <div className="lg:w-[49%] h-[500px] bg-white rounded-3xl shadow-xl p-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="zuwluhGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4F86F7" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#82b1ff" stopOpacity={0.7} />
            </linearGradient>
            <linearGradient id="merGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F76FA6" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#ffa0c4" stopOpacity={0.7} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 4" opacity={0.3} />
          <XAxis
            type="number"
            tickFormatter={(value) => value.toLocaleString()}
            tick={{ fontSize: 12, fill: "#555" }}
          />
          <YAxis
            type="category"
            dataKey="edu"
            tick={{ fontSize: 14, fill: "#333" }}
          />
          <Tooltip
            formatter={(value: number) => value.toLocaleString()}
            contentStyle={{
              borderRadius: 12,
              backgroundColor: "#fefefe",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          />
          <Legend
            verticalAlign="top"
            align="center"
            wrapperStyle={{ marginTop: -8 }}
            content={() => (
              <div className="text-lg lg:text-xl font-semibold">
                Мэргэшлийн зэрэгтэй мэргэжилтнүүдийн боловсролын түвшин
              </div>
            )}
          />
          <Bar
            dataKey="zuwluh"
            name="Зөвлөх"
            fill="url(#zuwluhGrad)"
            radius={[10, 10, 10, 10]}
            barSize={30}
            isAnimationActive={true}
            animationDuration={1500}
          >
            <LabelList
              dataKey="zuwluh"
              position="insideLeft"
              formatter={(value: string) => value.toLocaleString()}
              fill="#fff"
              fontSize={12}
            />
          </Bar>
          <Bar
            dataKey="mer"
            name="Мэргэшсэн"
            fill="url(#merGrad)"
            radius={[10, 10, 10, 10]}
            barSize={30}
            isAnimationActive={true}
            animationDuration={1500}
          >
            <LabelList
              dataKey="mer"
              position="insideRight"
              formatter={(value: string) => value.toLocaleString()}
              fill="#fff"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
