import { Clock9Icon } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
const Id = () => {
  const relatedPosts = [
    { title: "мэдээ 1 гарчиг", img: "/IMG_0488.jfif" },
    { title: "мэдээ 2 гарчиг", img: "/IMG_0488.jfif" },
    { title: "мэдээ 3 гарчиг", img: "/IMG_0488.jfif" },
  ];
  return (
    <>
      <div>medeenii heseg</div>
      <div>
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
          <div>
            <h1 className="text-2xl font-bold mb-6">Гарчиг</h1>
            <div className="flex items-center gap-2 text-sm mb-2">
              <Clock9Icon size={16} />
              <p>2025-08-14</p>
            </div>
            <img
              src="/IMG_0488.jfif"
              alt="Detail"
              className="w-full h-96 object-cover rounded-xl shadow-md"
            />
            <p className="text-gray-700 mt-4 leading-relaxed">
              Газар зохион байгуулалт, геодези зураг зүйн газрын дарга
              А.Энхманлай “Газар зохион байгуулалт, геодези зураг зүйн газрын
              2022 оны гүйцэтгэлийн төлөвлөгөө”-г Барилга, хот байгуулалтын
              Сайдаар хянуулан 2022 оны 1 дүгээр сарын 24-ний өдөр баталлаа. Уг
              төлөвлөгөөг 9 үндсэн чиглэл буюу Геодези, зураг зүй, Суурь
              судалгаа, мониторинг, Газар зохион байгуулалт, Кадастр, Орон зайн
              мэдээллийн технологи, Архив, Хот байгуулалт, Хот байгуулалтын
              кадастр, Төрийн захиргааны удирдлагын чиглэлээр боловсруулсан.
              Барилга, хот байгуулалтын Сайд Б.Мөнхбаатар 2022 онд Газрын багц
              хуулийн төслийг хэлэлцүүлэн батлуулах, цахим шилжилтийг иргэдэд
              илүү ойртуулан эрчимжүүлэх, төрийн байгууллагын шат бүр дээр
              бодлого, хууль тогтоомж хэрхэн хэрэгжиж байгааг уялдуулан,
              ялангуяа нийслэл хотын төлөвлөлт болон газар чөлөөлөлт дээр илүү
              анхаарч ажиллахыг онцоллоо.
            </p>
          </div>

          <aside>
            <h2 className="text-lg font-semibold mb-4">Бусад мэдээ мэдээлэл</h2>
            <div className="space-y-4">
              {relatedPosts.map((post) => (
                <div
                  key={post.title}
                  className="bg-gray-100 rounded-lg overflow-hidden flex shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="p-2">
                    <p className="font-medium text-sm">{post.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};
export default Id;
