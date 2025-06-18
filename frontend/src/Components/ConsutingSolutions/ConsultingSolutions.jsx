import React from 'react'
import salesforce from '../../assets/SALESFORCE.png'
import qualityassurance from '../../assets/QUALITY.png'  ;
import cloudservices from '../../assets/CLOUD.png';
import managedservices from '../../assets/MANAGEDSERVICE.png';   
import './ConsultingSolutions.css'; 
const ConsultingSolutions = () => {
    const consultingsolutions=[
  {
    "title": "Salesforce",
    "image": salesforce,
    "description": "Harness the power of Salesforce with our expert consulting services. Whether you're looking to implement.",
    "buttonText": "READ MORE"
  },
  {
    "title": "Quality Assurance",
    "image": qualityassurance,                                      
    "description": "Quality is paramount in today's competitive landscape. Our quality assurance consulting services.",
    "buttonText": "READ MORE"
  },
  {
    "title": "Cloud Services",
    "image": cloudservices,
    "description": "Unlock the full potential of cloud technology with our comprehensive consulting services.",
    "buttonText": "READ MORE"
  },
  {
    "title": "Managed Services",
    "image": managedservices,
    "description": "Outsource the management of your IT infrastructure and operations to our team of experienced professionals.",
    "buttonText": "READ MORE"
  }
]

  return (
    <div className='fidesconsulting-solutions'>
      <div className="fidesconsulting-solutions-container">
        <h2 className="outfit fidespath-mainheader consutinghrad">Comprehensive Consulting Solutions
for Business Success</h2>
        <p className=" fidespath-paragraph sanserif consutingpara">
        At FidesPath, we offer extensive consulting services tailored to empower businesses across various domains. From conceptualization to execution
and beyond, our proficient teams are equipped to address a multitude of project requirements and technological challenges.
Below are some of the primary areas where we excel:
        </p>
         <div className="fidespathcconsulting-crads">
            {consultingsolutions.map((solution, index) => (
                <div className="fidespathconsulting-card" key={index}>
                <div className="fidespathconsulting-card-image">
                    <img src={solution.image} alt={solution.title} />
                </div>
                <div className="fidespathconsulting-card-details">
                    <h3 className="fidespathconsulting-card-title outfit fidespath-mainheader"
              style={{ fontSize: "24px" }}>{solution.title}</h3>
                    <p className="fidespathconsulting-card-description fidespath-paragraph sanserif" style={{textAlign:'unset'}}>
                    {solution.description}
                    </p>
                    <button className='fidespathconsulting-card-button'>{solution.buttonText}<svg class="industry-card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button>
                </div>
                </div>
            ))}
         </div>
      </div>
      
    </div>
  )
}

export default ConsultingSolutions
