import { FaSpotify, FaHome, FaSearch } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { Input } from "antd";
import "./header.css";

const { Search } = Input;

const Header = () => {
  const onSearch = (e) => {
    console.log(e);
  };

  return (
    <div className="container">
      <FaSpotify size={20} color="#1DB954" />

      <div>
        <Search
          placeholder="What do you want to play??"
          enterButton="Search"
          onSearch={onSearch}
          suffix={<FaSearch color="#000000" />}
          className="input" 
        />
      </div>

      <div className="profile">
        <AiFillBell size={20} color="#ffffff" />
        <VscAccount size={20} color="#fff" />
      </div>
    </div>
  );
};

export default Header;
