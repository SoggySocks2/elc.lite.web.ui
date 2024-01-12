import Axios from 'axios';
import React, { useState, useEffect } from 'react';

function Leads() {

  const leadListUrl = "https://localhost:7299/api/Leads";
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


  useEffect(() => {
    Axios.get(leadListUrl)
      .then((res) => {
        setLeadList(res.data);
    });   
  }, []);

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