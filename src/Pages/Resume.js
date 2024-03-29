import React,{ useState, useEffect} from "react";
import './Common.css';

const Resume= ({id})=>{
    const [mainerror, setMainerror] = useState('');
    const [candidateName, setCandidateName] = useState('');//candidateName
    useEffect(() => {
      const pageLoad = async () => {
              try {
                  const response = await fetch(`https://fastapi-app-427j.onrender.com/resumeData/${encodeURIComponent(id)}`);
                  const data = await response.json();

                  if (response.ok) {
                      console.log(data);
                      setCandidateName(data[0].candidateFirstName + ' ' + data[0].candidateMiddleName+ ' ' + data[0].candidateLastName);
                  } else {
                      setMainerror(data.error || 'Please enter valid credentials');
                  }
              } catch (error) {
                  setMainerror('An error occurred');
              }
          };

          pageLoad(); // Call pageLoad function when component mounts

      }, []); 
      return (
          <div>
              {mainerror ?
                  <p>{mainerror}</p>
                  :
                  <div className="container p-2">                      
                      <div className="row">
                      <div className="col-md-5 bg-primary rounded-start">
                        {candidateName}
                      </div>
                      <div className="col-md-7 bg-danger rounded-end">

                      </div>
                    </div>
                  </div>                  
              }
          </div>
      );
};

export default Resume;