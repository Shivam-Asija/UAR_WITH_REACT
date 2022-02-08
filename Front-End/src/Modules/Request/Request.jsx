import React from 'react'
import { variables } from '../../Routes/Variables';
import TimAdminNav from '../Nav/Tim/Admin/TimAdminNav';
import TimManagerNav from '../Nav/Tim/Manager/TimManagerNav';
import { useEffect, useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

export default function Request(data){

    const [userArray, setUserArray] = useState([]);
    const [accessArray, setAccessArray] = useState([]);
    const [filteredUserData, setFilteredUserData] = useState([]);
    const [filteredAccessData, setFilteredAccessData] = useState([]);
    console.log("state: ",data.location.state.path);

    useEffect(()=>{
        fetch(variables.API_URL + "users")
        .then((request) => request.json())
        .then((users) => setUserArray(users)
        )
    },[]);
    useEffect(()=>{
        fetch(variables.API_URL + "accesses")
        .then((request) => request.json())
        .then((accesses) => setAccessArray(accesses)
        )
    },[])    
    console.log(userArray);

    const handleUserFilter =(e) =>{
        const searchWord = e.target.value;
        const newFilter = userArray.filter((value) => {
            if (value.FullName != null) {
                return value.FullName.toLowerCase().includes(searchWord.toLowerCase());
            }
        });
        if (searchWord === "") {
            setFilteredUserData([])
        }else{
            setFilteredUserData(newFilter);
        }
    }


    const handleAccessFilter =(e) =>{
        const searchWord = e.target.value;
        const newFilter = accessArray.filter((value) => {
            if (value.Id != null) {
                return value.Id.toLowerCase().includes(searchWord.toLowerCase());
            }
        });
        if (searchWord === "") {
            setFilteredAccessData([])
        }else{
            setFilteredAccessData(newFilter);
        }
    }

    const selectAccess = (accessType) => {
        $(".search-access-input").val(accessType);
        setFilteredAccessData([]);
        console.log(accessType);;
    }

    const selectManager = (manager) => {
        $(".search-manager-input").val(manager);
        setFilteredUserData([]);
        console.log(manager);;
    }

    console.log("path: ", data.location.state);

    return(
        <div className="container-fluid">
        <><TimAdminNav/>
            <div class="cardd">
                <div class="card-header title-request p-0">
                    <h3 class="card-title text-light px-5 pt-4 pb-3 bg-secondary">REQUEST</h3>
                </div>
                <div class="status-card card-header shadow p-0 py-3 px-5 pb-4">
                    <h3 class="card-title">Current Status:</h3>
                    <div class="card-body p-0">
                        <div class="col-lg-12 col-9">
                            <form class="text-left status-data-form">
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <b class="">UAR ID</b>
                                </div>
                                <div class="col-md-6">
                                    <b class="ml-3">{data.location.state.requestData.Id || data.location.state.requestData.UserAccessRequestId}</b>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <b class="">Employee Name</b>
                                </div>
                                <div class="col-md-6">
                                    <b class="ml-3">{data.location.state.requestData.FullName ? data.location.state.requestData.FullName : "Cunningham, John"}</b>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <b class="">Current Tim System</b>
                                </div>
                                <div class="col-md-6">
                                    <b class="ml-3">Central</b>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <b class="">Current Access</b>
                                </div>
                                <div class="col-md-6">
                                    <b class="ml-3">Admins</b>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <NavLink className="btn btn-secondary text-center shadow" to={data.location.state.path}>Return To Records</NavLink>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div class="accordian-card card-header shadow p-0 py-3 px-5 pb-4">
                        <div class="accordion-wrapper">
                            <div class="accordion">
                                <input className='accordian-input' type="radio" name="radio-a" id="check1"/>
                                <label class="accordion-label" for="check1">CHANGE ACCESS</label>
                                <div class="accordion-content">
                                    <h2>Destination Access</h2>
                                    <div className="search">
                                        <div className="searchInputs">
                                            <input className='search-access-input' type="text" placeholder='Search Access Type' onChange={handleAccessFilter}/>
                                            {/* <div className="searchIcon"><SearchIcon/></div> */}
                                            
                                        </div>
                                        {
                                            filteredAccessData.length != 0 && 
                                            (
                                            <div className="dataResult">{filteredAccessData.slice(0,7).map((val,key)=>{
                                                return (<span onClick={() => selectAccess(val.Id)} className='accessItem'>{val.Id}</span>)
                                            })}</div>
                                            )
                                        }   
                                    </div>
                                    <button type="button" class="btn btn-info change-access-btn color-white">Submit</button>

                                </div>
                            </div>
                            <div class="accordion">
                                <input className='accordian-input' type="radio" name="radio-a" id="check2"/>
                                <label class="accordion-label" for="check2">REMOVE ACCESS</label>
                                <div class="accordion-content">
                                    <div className="remove-access">
                                        <button type="button" class="btn btn-info btn-lg color-white">Remove Access</button>
                                    </div>
                                    <div className="remove-access-all">
                                        <button type="button" class="btn btn-info btn-lg color-white">Remove Access All</button>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion">
                                <input className='accordian-input' type="radio" name="radio-a" id="check3"/>
                                <label class="accordion-label" for="check3">NOT MY EMPLOYEE</label>
                                <div class="accordion-content">
                                    <h2>Destination Supervisor</h2>
                                    <div className="search">
                                        <div className="searchInputs">
                                            <input className='search-manager-input' type="text" placeholder='Search Manager' onChange={handleUserFilter}/>
                                            <div className="searchIcon"><SearchIcon/></div>
                                        </div>
                                        {
                                            filteredUserData.length != 0 && 
                                            (
                                            <div className="dataResult">{filteredUserData.slice(0,7).map((val,key)=>{
                                                return (<span onClick={() => selectManager(val.FullName)} className='managerItem'>{val.FullName} &ensp;({val.Title})</span>)
                                            })}</div>
                                            )
                                        }   
                                    </div>
                                    <button type="button" class="btn btn-info change-access-btn color-white">Submit</button>
                                </div>
                            </div>
                            <div class="accordion">
                                <input className='accordian-input' type="radio" name="radio-a" id="check4"/>
                                <label class="accordion-label" for="check4">TERMINATED</label>
                                <div class="accordion-content">
                                    <h2>Terminate Employee</h2>
                                    <button type="button" class="btn btn-info btn-lg color-white">Terminate</button>                                    
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>

            </div>
        </>
            </div>

    )
}

