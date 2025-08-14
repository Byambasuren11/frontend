import { InfoCards } from "./components/card";

const information = () => {
  return (
    <>
      <div>information</div>
      <div className="flex gap-5 justify-center mt-9">
        <InfoCards />
        <InfoCards />
        <InfoCards />
        <InfoCards />
      </div>
    </>
  );
};
export default information;
