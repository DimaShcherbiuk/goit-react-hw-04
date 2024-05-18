import { Circles } from "react-loader-spinner";

const Loader = () => (
  <div className="loader-container">
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    <p>Loading data, please wait...</p>
  </div>
);

export default Loader;
