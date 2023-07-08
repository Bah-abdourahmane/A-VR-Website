import Logo from "../assets/logo.svg";
import { HiMenu } from "react-icons/hi";
import Navbar from "./Navbar";

const Header = ({ setNavMobile }) => {
  return (
    <header
      data-aos='fade-down'
      data-aos-duration='2000'
      data-aos-delay='200'
      className="sticky top-0 z-50 bg-body/50 py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-5">
          <a href="#">
            <img src={Logo} alt="" className="h-[30px] " />
          </a>
          <Navbar />
          <HiMenu
            className="lg:hidden text-3xl text-white cursor-pointer "
            onClick={() => setNavMobile(true)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
