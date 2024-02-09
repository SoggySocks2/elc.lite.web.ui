import Axios from '../api/axios';
import React, { useState, useEffect } from 'react';

function Leads() {

  const [leadList, setLeadList] = useState(null);

  const leadDivStyle = {
    display: "flex",
    flexdirection: "row",
    padding: "5px",
  };
  const leadShortDivStyle = {
    width: "100px"
  };
  const leadMediumDivStyle = {
    width: "150px"
  };
  const leadLargeDivStyle = {
    width: "300px"
  };

  try 
  {
    useEffect(() => {

      const getOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      };
      
      Axios.get("/leads/list/44444", getOptions)
        .then((res) => {    
          setLeadList(res.data);
        })
        .catch((err) => {
          alert("Error gettings leads. Not Status 200. Error: " + err + ".");
        });
    }, []);

    /*
      useEffect2(() => {
          Axios.get("/leads/list/44444")          .
          .then((res) => {    
            setLeadList(res.data);
          })
          .catch((err) => {
              alert("Error gettings leads. Not Status 200. Error: " + err + ".");
          });
      }, []);
    */ 
  }
  catch (err) {
      alert("Error getting leads");
  }   


    return (

        <div>
          <div>All Leads</div>
          <hr />
          <div>
              {leadList ? 
                <ul>
                  {
                    (leadList).map((lead) => {
                      return <div key={lead.id} style={leadDivStyle}>
                        <div style={leadShortDivStyle}>{lead.id}</div>
                        <div style={leadMediumDivStyle}>{lead.forenames}</div>
                        <div style={leadMediumDivStyle}>{lead.surname}</div>
                        <div style={leadLargeDivStyle}>{lead.address}</div>
                        <div style={leadShortDivStyle}>{lead.postcode}</div>                        
                        <div style={leadShortDivStyle}>
                          <a href={'./updateLead/' + lead.id}>Edit</a>
                        </div>                     
                        <div style={leadShortDivStyle}>
                          <a href={'./deleteLead/' + lead.id}>Delete</a>
                        </div>
                      </div>
                    })
                  }
                </ul>
              : <div>&nbsp;</div>}
          </div>
        </div>
    );
}
    
export default Leads;