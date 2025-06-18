
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import { Navigation, Pagination, A11y,Autoplay } from 'swiper/modules'; 
import'./IndustryCardSwiper.css';
import IndustryCard from '../../Components/IndustryCard/IndustryCard';
import { industryCards } from '../../Utils/Data/InduistryCards'; 

const IndustryCardSwipper = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto py-12 px-4 bg-gray-50 rounded-lg shadow-inner my-8">
        <h2 className="outfit fidespath-mainheader consutinghrad">Your Industry-Specific Software Partner</h2>
        <p className=" fidespath-paragraph sanserif swprpara">
      While FidesPath possesses expertise across various software development domains,
we also delve deeper by focusing on specific industries.
        </p>
         <div className='fidespath-industry-card-swipper'>
           <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20} 
        slidesPerView={1} 
        pagination={false} 
        navigation={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        loop={true} 
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
       
        {industryCards.map((card) => (
          <SwiperSlide key={card.id}>
            <IndustryCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>


        </div>
        <div className="engage">
          <p className="fidespath-paragraph sanserif">
             Engage with Us, Let's Create Together!
            </p>
        <button className='swipper-button sanserif'>
         Reach Out to Us
          <svg className="industry-card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </button>
        </div>
      
    </div>
  );
};

export default IndustryCardSwipper;
