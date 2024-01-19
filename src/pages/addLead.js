import Axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddLead()
{
    const addLeadUrl = "https://localhost:7299/api/Leads";
    //const [Id, setId] = useState(0);
    const [Created, setCreated] = useState(null);
    const [Budget, setBudget] = useState(0.00);
    const [Forenames, setForenames] = useState("");
    const [Surname, setSurname] = useState("");
    const [TelNo, setTelNo] = useState("");
    const [Postcode, setPostcode] = useState("");
    const [Address, setAddress] = useState("");
    const [Email, setEmail] = useState("");
    const [CurrentMake, setCurrentMake] = useState("");
    const [CurrentModel, setCurrentModel] = useState("");
    const [CurrentYear, setCurrentYear] = useState(0);
    const [InterestedInMake, setInterestedInMake] = useState("");
    const [InterestedInModel, setInterestedInModel] = useState("");

    const saveLead = () => {
        Axios.post(addLeadUrl, {
            Budget: Budget,
            Forenames: Forenames,
            Surname: Surname,
            TelNo: TelNo,
            Postcode: Postcode,
            Address: Address,
            Email: Email,
            CurrentVehicleMake: CurrentMake,
            CurrentVehicleModel: CurrentModel,
            CurrentVehicleYear: CurrentYear,
            InterestedInVehicleMake: InterestedInMake,
            InterestedInVehicleModel: InterestedInModel
        })
        .then((res) => {
            //setId(res.data.id);
            //setCreated(res.data.Created);
            //setBudget(res.data.Budget);
            //setForenames(res.data.Forenames);
            //setSurname(res.data.Surname);
            //setTelNo(res.data.TelNo);
            //setPostcode(res.data.Postcode);
            //setAddress(res.data.Address);
            //setEmail(res.data.Email);            
            //setCurrentMake(res.data.CurrentVehicleMake);
            //setCurrentModel(res.data.CurrentVehicleModel);
            //setCurrentYear(res.data.CurrentVehicleYear);
            //setInterestedInMake(res.data.InterestedInVehicleMake);
            //setInterestedInModel(res.data.InterestedInVehicleModel);
            window.location = "/Leads";
      }); 
    };

    return(
		<div>
            <div className="container">
    <           div className="row">
                    <div className="col-12 mb-3 mb-lg-5">
                        <div className="overflow-hidden card table-nowrap table-card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h5 className="mb-0">All Leads</h5>
                            </div>
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <tbody>
                                    <tr>
                                        <td>Forenames:</td><td><input type="text" value={Forenames} onChange={(event) => setForenames(event.target.value)} /></td>
                                        <td>Surname:</td><td colSpan={2}><input type="text" value={Surname} onChange={(event) => setSurname(event.target.value)} /></td>
                                    </tr>
                                    <tr>
                                        <td>Tel No:</td><td><input type="text" value={TelNo} onChange={(event) => setTelNo(event.target.value)} /></td>
                                        <td>Email:</td><td colSpan={2}><input type="text" value={Email} onChange={(event) => setEmail(event.target.value)} /></td>
                                    </tr>
                                    <tr>
                                        <td>Address:</td><td><input type="text" value={Address} onChange={(event) => setAddress(event.target.value)} /></td>
                                        <td>Postcode:</td><td colSpan={2}><input type="text" value={Postcode} onChange={(event) => setPostcode(event.target.value)} /></td>
                                    </tr>
                                    <tr>
                                        <td>Current Make:</td><td><input type="text" value={CurrentMake} onChange={(event) => setCurrentMake(event.target.value)} /></td>
                                        <td>Current Model:</td><td><input type="text" value={CurrentModel} onChange={(event) => setCurrentModel(event.target.value)} /></td>
                                        <td>Current Year:</td><td><input type="text" value={CurrentYear} onChange={(event) => setCurrentYear(event.target.value)} /></td>
                                    </tr>
                                    <tr>
                                        <td>Interested In Make:</td><td><input type="text" value={InterestedInMake} onChange={(event) => setInterestedInMake(event.target.value)} /></td>
                                        <td>Interested In Model:</td><td><input type="text" value={InterestedInModel} onChange={(event) => setInterestedInModel(event.target.value)} /></td>
                                        <td>Budget:</td><td><input type="text" value={Budget} onChange={(event) => setBudget(event.target.value)} /></td>
                                    </tr>

                                    <tr><td colSpan={6} className='text-end'><button type="button" className="btn btn-primary" onClick={saveLead}>Save</button></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
    )
}
export default AddLead;