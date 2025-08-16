/* eslint-disable @next/next/no-img-element */
import { Mail, MapPin, Phone, Printer } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-200 w-full m-4 bg-opacity-20 text-gray-200 p-8 mt-10 rounded-xl border-white ml-4 lg:flex  lg:justify-between">
      <div>
        <h3 className="text-sm sm:text-lg font-semibold mb-4">Холбоо барих</h3>
        <div className="space-y-2 text-xs sm:text-sm">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone size={12} />{" "}
              <span className="font-medium">1800-0101,56-262582</span>
            </div>
            <div className="flex items-center gap-2">
              <Printer size={12} />{" "}
              <span className="font-medium">+976-11-322683</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={12} />
            <a href="mailto:info@gazar.gov.mn" className="hover:underdivne">
              info@gazar.gov.mn
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={12} />
            <p>
              Засгийн газрын 12-р байр 15170 Барилгачдын талбай 3, Улаанбаатар
              хот
            </p>
          </div>
          <p className="text-gray-400 leading-relaxed font-sm">
            © Газар Зохион Байгуулалт, Геодези, Зураг Зүйн Ерөнхий Газар | Бүх
            эрх хуулиар хамгаалагдсан. 2025 он.
          </p>
        </div>
      </div>

      <div className="flex items-center md:justify-end text-sm">
        <img
          alt="1"
          src="http://www.egazar.gov.mn/assets_new/img/google_a.png"
        />
        <img
          alt="2"
          src="https://www.egazar.gov.mn/assets_new/img/egazar_analytics.png"
        />
      </div>
    </footer>
  );
};
