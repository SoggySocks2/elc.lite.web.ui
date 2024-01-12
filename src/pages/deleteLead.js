import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeleteLead() {      
    const url = window.location.pathname;
    const id = url.split("/").pop();

    const deleteLeadUrl = "https://localhost:7299/api/Leads/" + id;
    const getLeadUrl = "https://localhost:7299/api/Leads/" + id;;
    const [Id, setId] = useState(0);
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

    useEffect(() => {
        Axios.get(getLeadUrl)
          .then((res) => {
            setId(res.data.id);
            setCreated(res.data.created);
            setBudget(res.data.budget);
            setForenames(res.data.forenames);
            setSurname(res.data.surname);
            setTelNo(res.data.telNo);
            setPostcode(res.data.postcode);
            setAddress(res.data.address);
            setEmail(res.data.email);            
            setCurrentMake(res.data.currentVehicleMake);
            setCurrentModel(res.data.currentVehicleModel);
            setCurrentYear(res.data.currentVehicleYear);
            setInterestedInMake(res.data.interestedInVehicleMake);
            setInterestedInModel(res.data.interestedInVehicleModel);
        });   
      }, []);


    const deleteLead = () => {
        Axios.delete(deleteLeadUrl, {
            Id: Id
        })
        .then((res) => {
            window.location = "/Leads";
      }); 
    };

    const cancelDeleteLead = () => {
        window.location = "/Leads";
    };


    return (
		<div>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

            <div class="container">
                <div class="row">
                    <div class="col-12 mb-3 mb-lg-5">
                        <div class="overflow-hidden card table-nowrap table-card">
                            <div class="card-header d-flex justify-content-between align-items-center">
                                <h5 class="mb-0">Delete Lead</h5>
                            </div>
                            <div class="table-responsive">
                                <table class="table mb-0">
                                    <tr><td>Id:</td><td><label>{Id}</label></td><td>Created:</td><td colSpan={2}><label>{Created}</label></td></tr>
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

                                    <tr>
                                        <td colSpan={3} className='text-start'><button type="button" class="btn btn-primary" onClick={cancelDeleteLead}>Cancel</button></td>
                                        <td colSpan={3} className='text-end'><button type="button" class="btn btn-primary" onClick={deleteLead}>Delete</button></td>
                                        </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
    );
}

export default DeleteLead;