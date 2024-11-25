// import React from "react";
// import "./Navbar.css";
// import HomeIcon from "@mui/icons-material/Home";
// import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
// import InsertCommentRoundedIcon from '@mui/icons-material/InsertCommentRounded';
// import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import tabler from "./img/tabler.png"
// import avatar from "./img/avatar.jpg"
// import Dashboard from '../dashboard/Dashboard';

// const Navbar = () => {
//   return (
//     <div className="navbar_container">
//       <div className="navbar_math_div">
//         <div className="home_icon_div">
//          <img src={tabler} alt="tabler icon" />
//         </div>
//         <div className="navbar_link_div">
//             <div className="navbar_link_icon_div">
//             <img src={tabler} alt="tabler icon" width={30} />
//             <a className="navbar_link" href="">Dashboard</a>  
//             </div>
//             <div className="navbar_link_icon_div">
//             <HomeIcon  />
//             <a className="navbar_link" href="#">Properties</a>  
//             </div>
//             <div className="navbar_link_icon_div">
//             <SyncAltRoundedIcon />
//             <a className="navbar_link" href="#">Transaction</a>  
//             </div>
//             <div className="navbar_link_icon_div">
//             <InsertCommentRoundedIcon />
//             <a className="navbar_link" href="#">Messages</a>  
//             </div>
//             <div className="navbar_link_icon_div">
//             <AssessmentRoundedIcon />
//             <a className="navbar_link" href="#">Report</a>  
//             </div>
//         </div>
//         <div className="navbar_btn-div">
//             <button className="search_btn">
//                 <SearchRoundedIcon/>
//             </button>
//             <button className="search_btn">
//                 <NotificationsNoneRoundedIcon/>
//             </button>
//             <button className="search_btn">
//             <Stack className="avatar"  direction="row" spacing={2}>
//       <Avatar  alt="Remy Sharp" src={avatar}  />
      
//     </Stack>
//             </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom"; // Link komponentini import qilamiz
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import tabler from "./img/tabler.png";
import avatar from "./img/avatar.jpg";
import { PATH } from "../Types/path";

const Navbar: React.FC = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_math_div">
        <div className="home_icon_div">
          <img src={tabler} alt="tabler icon" />
        </div>
        <div className="navbar_link_div">
          <div className="navbar_link_icon_div">
            <img src={tabler} alt="tabler icon" width={30} />
            <Link className="navbar_link" to={PATH.DASHBORD}>Dashboard</Link>
          </div>
          <div className="navbar_link_icon_div">
            <HomeIcon />
            <Link className="navbar_link" to={PATH.PROPERTIESOAGE}>Properties</Link>
          </div>
          <div className="navbar_link_icon_div">
            <SyncAltRoundedIcon />
            <Link className="navbar_link" to={PATH.TRANSACTION}>Transactions</Link>
          </div>
          <div className="navbar_link_icon_div">
            <InsertCommentRoundedIcon />
            <Link className="navbar_link" to="/messages">Messages</Link>
          </div>
          <div className="navbar_link_icon_div">
            <AssessmentRoundedIcon />
            <Link className="navbar_link" to={PATH.PROPERTIESOAGE}>Reports</Link>
          </div>
        </div>
        <div className="navbar_btn-div">
          <button className="search_btn">
            <SearchRoundedIcon />
          </button>
          <button className="search_btn">
            <NotificationsNoneRoundedIcon />
          </button>
          <button className="search_btn">
            <Stack className="avatar" direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={avatar} />
            </Stack>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
