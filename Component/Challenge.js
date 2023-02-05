import Image from "next/image";
import icon1 from '../public/Group.png'
import icon2 from '../public/Group (1).png'
import icon3 from '../public/Group (2).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Challenge=()=>{
    return(
        <div className="px-12 ml-12 mt-20">
        <div className="p-2 lg:p-0 lg:grid grid-cols-3 gap-5 challenge items-center ">
           <div className="flex justify-evenly px-6 ">
              <div className="bg-[#8886F2] p-4 rounded-lg">
                <Image src={icon2} width='30' height='30' alt='icon'></Image>
              </div>
              <div className="text-white">
                <h4 className="font-bold ">
                Get that 11 line<br/> in 30 days
                </h4>
               <div className="flex gap-4 items-center mt-2">
               <p>Learn more</p>
               <FontAwesomeIcon icon={faArrowRight} />
               </div>
              </div>
           </div>
           <div className="flex justify-evenly px-6 mt-4 lg:mt-0">
              <div className="bg-[#8886F2] p-4 rounded-lg">
                <Image src={icon1} width='30' height='30' alt='icon'></Image>
              </div>
              <div className="text-white">
                <h4 className="font-bold ">
                14 Days<br/>
                sherd challenge 
                </h4>
               <div className="flex gap-4 items-center mt-2">
               <p>Learn more</p>
               <FontAwesomeIcon icon={faArrowRight} />
               </div>
              </div>
           </div>
           <div className="flex justify-evenly px-6 mt-4 lg:mt-0">
              <div className="bg-[#9F9DEF] p-4 rounded-lg">
                <Image src={icon3} width='30' height='30' alt='icon'></Image>
              </div>
              <div className="text-white">
                <h4 className="font-bold ">
                Get flat belly <br/> in 30 days
                </h4>
               <div className="flex gap-4 items-center mt-2">
               <p>Learn more</p>
               <FontAwesomeIcon icon={faArrowRight} />
               </div>
              </div>
           </div>
        </div>
        </div>
    )
}
export default Challenge;