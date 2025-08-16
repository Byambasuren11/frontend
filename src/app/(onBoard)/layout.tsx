import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

export default function RootLayout1({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex justify-center items-center flex-col ">
      <Header />
      <div className="max-w-[1440px] min-w-[1280px] flex flex-col ">
        {children}
      </div>
      <Footer />
    </div>
  );
}
