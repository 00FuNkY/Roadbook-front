import CitiesList from "./CitiesList";
import FileUploadPage from "./FileUploadPage";

const Home = ({ x, y }) => {
  return (
    <>
      <CitiesList x={x} y={y} />
      {/* <Map/> */}
      <FileUploadPage />
    </>
  );
};

export default Home;
