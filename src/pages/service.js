import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import "bootstrap/dist/css/bootstrap.min.css";

export default function service() {
  return (
    <>
      <Header />
      <div className=" mt-5 pt-5">
        {" "}
        <Services />
      </div>

      <Footer />
    </>
  );
}
