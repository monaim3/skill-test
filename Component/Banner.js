import bannerimg from '../public/Group 4227.png'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import brands from '../public/Group 3888.png'
const Banner = () => {
    return (
        <div className="lg:flex justify-between lg:px-14 pb-0">
            <div className="banner-text">
                <h1 className="text-4xl lg:text-6xl font-bold px-12 mt-6">Healthy in side <br></br> <span className="text-[#8382EB]">fresh</span> out side</h1>
                <p className='text-xs mt-6 px-12 leading-7'>
                    Exercise is a very important need for our body. Health and <br />fitness will be obtained if you can do regular exercise and <br />run a healthy routine.
                </p>
                <div className="btn-wrapper px-12 mt-6 flex gap-5">
                    <div>
                        <button className="btn gap-2 shadow-md  bg-[#264373] w-60 flex justify-between">
                            Get Started
                            <span className='bg-white w-6 rounded-2xl p-1 text-[#264373]'><FontAwesomeIcon icon={faGreaterThan}/></span>
                        </button>
                    </div>
                    <div>
                        <button className="btn gap-2 shadow-md border-none bg-[#FFFFFF] w-40 flex justify-between">
                             <span className='bg-[#264373] w-6 rounded-2xl p-1 text-[#FFFFFF]'><FontAwesomeIcon icon={faPlay}/></span>
                           <span className='text-[#264373]'> Learn more</span>
                           
                        </button>
                    </div>
                </div>
                <div className="brands px-12 mt-6">
                    <h3 className='text-base'>Brands:</h3>
                    <Image className='mt-4' src={brands} alt="brands" width='400' height='400' />
                </div>
            </div>
            <div className="banner-img">
                <Image className='mt-6 lg:mt-2' src={bannerimg} alt="banner" width='600' height='600' />
            </div>
        </div>
    );
};

export default Banner;