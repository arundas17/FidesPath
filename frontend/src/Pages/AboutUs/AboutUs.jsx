import React from "react";
import "./AboutUs.css";
import project from "../../assets/safe-and-stable-svgrepo-com.svg";
import mainabout from '../../assets/fidesabout.png'
import DynamicBanner from "../../Components/DynamicBanner/DynamicBanner";
import aboutBanner from '../../assets/aboutBanner.png'
const AboutUs = () => {
  const servicesitems = [
    {
      img: project,
      title: "Project Management",
      description:
        "We ensure smooth project execution, keeping you informed and involved throughout the development cycle.",
    },
    {
      img: project,
      title: "Quality Assurance",
      description:
        "Quality is paramount in todays competitive landscape. Our quality assurance consulting services.",
    },
    {
      img: project,
      title: "Maintenance and Support",
      description:
        "We provide ongoing support to ensure your software remains robust and secure.",
    },
  ];
  return (
    <div className="fidesmainaboutus">
      <DynamicBanner
       title="About Us"
        breadcrumbItems={[
          { text: 'Home', link: '/' },
          { text: 'About Us', link: '/about' },
        ]}
        
        backgroundImage={aboutBanner}
        
      />
      
       
      <div className="mainaboutus-container">
        <div className="fidesdeatlcards-wrapper">
                <div className="fidesaboutcards">
                   <div className="cardimageabouts"><img src={mainabout} alt="" /></div>
                   <div className="carddetailsaboutus">
                    <h3 className="fidespath-mainheader outfit" style={{ fontSize: '40px' }}>About FidesPath</h3>
                    <p className="fidespath-paragraph sanserif">Welcome to FidesPath, your trusted partner in consulting services. As a premier consulting firm, we specialize in providing unparalleled onshore and offshore consulting solutions. With a commitment to excellence and innovation, we help businesses navigate the digital landscape, delivering bespoke consulting services tailored to their unique needs</p>
                     <p className="fidespath-paragraph sanserif">Whether you're looking to enhance your existing systems or embark on a new journey, FidesPath is here to guide you every step of the way. Our team of experienced professionals combines technical expertise with strategic insights to drive success for your projects. Explore the path to excellence with Fides Path – where innovation meets reliability.</p>
                   </div>
                </div>  
              </div>



        <div className="mainaboutus-detailedreview">
          <h3
            className="fidespath-mainheader outfit"
            style={{ fontSize: "30px" }}
          >
            Unveiling Your Vision :
          </h3>
          <p className="fidespath-paragraph sanserif">
            Embark on a journey with us as we collaborate closely to grasp the essence of your project's objectives, hurdles, and financial parameters. Our seasoned consultants adeptly translate your vision into a structured roadmap, offering meticulous guidance throughout the consulting process.
          </p>
          <div className="beyondlinesofcode" style={{marginTop:'60px'}}>
            <h3
              className="fidespath-mainheader outfit aboutheader"
              style={{ fontSize: "30px" }}
            >
              Beyond Lines of Code
            </h3>
            <p className="fidespath-paragraph sanserif aboutpara">
             Our consulting services transcend mere code implementation. We provide comprehensive support across the entire
spectrum of your project needs, including:
            </p>
          </div>
          <div className="fidesmainaboutus-services">
            <div className="wrapper">
              {servicesitems.map((servicesitems, key) => {
                return (
                  <div className="seviceitem">
                    <div className="serviceitemimage">
                      <img src={servicesitems.img} alt="" />
                    </div>
                    <div className="servicedetails">
                      <h3
                        className="fidespath-mainheader outfit"
                        style={{ fontSize: "20px", marginBottom: "14px" }}
                      >
                        {servicesitems.title}
                      </h3>
                      <p
                        className="fidespath-paragraph sanserif"
                        style={{ fontSize: "14px" }}
                      >
                        {servicesitems.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="fidesaboutus-overal">
            <h3
              className="fidespath-mainheader outfit"
              style={{ fontSize: "30px" }}
            >
              FidesPath :
            </h3>
            <ol className="specilaity">
              <li>
                <div className="specialityitems">
                  <span
                    className="fidespath-mainheader sanserif"
                    style={{ fontSize: "18px" }}
                  >
                    Trustworthy:
                  </span>
                  <p
                    className="fidespath-paragraph sanserif"
                    style={{ fontSize: "14px" }}
                  >
                    We build lasting relationships based on open communication
                    and integrity.
                  </p>
                </div>
              </li>
              <li>
                <div className="specialityitems">
                  <span
                    className="fidespath-mainheader sanserif"
                    style={{ fontSize: "18px" }}
                  >
                    Agile:{" "}
                  </span>
                  <p
                    className="fidespath-paragraph sanserif"
                    style={{ fontSize: "14px" }}
                  >
                    We adapt to your needs and the ever-changing tech landscape.
                  </p>
                </div>
              </li>
              <li>
                <div className="specialityitems">
                  <span
                    className="fidespath-mainheader sanserif"
                    style={{ fontSize: "18px" }}
                  >
                    Experienced:{" "}
                  </span>
                  <p
                    className="fidespath-paragraph sanserif"
                    style={{ fontSize: "14px" }}
                  >
                    Our team boasts a proven track record of successful
                    projects.
                  </p>
                </div>
              </li>
              <li>
                <div className="specialityitems">
                  <span
                    className="fidespath-mainheader sanserif"
                    style={{ fontSize: "18px" }}
                  >
                    Cost-Effective:
                  </span>
                  <p
                    className="fidespath-paragraph sanserif"
                    style={{ fontSize: "14px" }}
                  >
                    We offer competitive rates without compromising quality.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div className="guidemessage" style={{textAlign:'center'}}>
              <h3
                        className="fidespath-mainheader outfit"
                        style={{ fontSize: "20px", marginBottom: "14px" ,textAlign:'center'}}
                      >
                       Ready to embark on your digital journey? Contact Fides Path today and let us be your guide 
to successful software development.
                      </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
