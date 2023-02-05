
import Image from 'next/image';
import workouts from '../public/Group 3892.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Workout = () => {
    return (
        <div className='px-20 mt-20 lg:flex justify-between gap-5 workout  '>
            <div className='sm:order-first	 workImg'>
            <Image src={workouts} width='400' height='400' alt='work'></Image>
            </div>
        <div className=' worktext'>
        <h3 className='text-5xl text-[#262524] font-semibold'>Best full body <br/> workout to lose fat</h3>
        <p className='text-xs mt-6 text-[#928F91] leading-5'>Exercise is a very important need for our body. Health and fitness <br/>will be obtained if you can do regular exercise and run a healthy <br/>routine. Even at home we still have to be diligent in exercising, either <br/> alone or with your friends at home. </p>
        <div className='mt-6 sm:order-last'>
                        <button className="btn mb-2 lg:mb-0 gap-2 bg-[#264373] w-60 flex justify-between">
                            Get Started
                            <span className='bg-white w-6 rounded-2xl p-1 text-[#264373]'><FontAwesomeIcon icon={faArrowRight}/></span>
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Workout;