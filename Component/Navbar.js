import Link from "next/link";
import logo from '../public/logo (2).png'
import Image from "next/image";
import Banner from "./Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <>
           <div className="navwrap ">
            <div className="navbar bg-white shadow-lg lg:bg-transparent lg:shadow-none">
                <div className="navbar-start ">
                <div className="mt-5 lg:mt-0">
                <Link href="/" className=""><Image className='mt-2' src={logo} alt="logo" width='141' height='38' /></Link>
                </div>
                 <div className="dropdown ">
                       
                       <ul tabIndex={0} className="hover:bg-transparent menu menu-compact dropdown-content mt-12 p-2 shadow bg-base-100 rounded-box w-52">
                           <li><Link href='/'>Home</Link></li>
                           <li><Link href='/'>Program</Link></li>
                           <li><Link href='/'>Blog</Link></li>
                           <li><Link href='/'>About Us</Link></li>
                           <button className="btn bg-[#264373]">Log in</button>
                       </ul>
                      <div className="ml-56">
                      <label tabIndex={0} className="btn btn-ghost w-8 lg:hidden">
                       <FontAwesomeIcon icon={faBars} className='h-6 ' />
                       </label>
                      </div>
                   </div>
                </div>
                <div className="navbar-center hidden lg:flex justify-between items-center	">
                    <ul className="menu menu-horizontal px-1 hover:bg-transparent">
                    <li className="	"><Link href='/'>Home</Link></li>
                            <li><Link href='/'>Program</Link></li>
                            <li><Link href='/'>Blog</Link></li>
                            <li><Link href='/'>About Us</Link></li>
                            <button className="btn bg-[#264373]">Log in</button>
                    </ul>
                </div>
            </div>
            <div className="mt-6 ">
                 <Banner></Banner>
                 </div>
                 </div>
        </>
    );
};

export default Navbar;