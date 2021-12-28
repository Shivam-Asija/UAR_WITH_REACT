import React from 'react'
import { variables } from '../../Variables';
import TimAdminNav from '../Nav/Tim/Admin/TimAdminNav';
import TimManagerNav from '../Nav/Tim/Manager/TimManagerNav';
import { useEffect, useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";

export default function Request(data){

    const [userArray, setUserArray] = useState([]);
    const [filteredData, setFilteredData] = useState([]);


    useEffect(()=>{
        fetch(variables.API_URL + "users")
        .then((request) => request.json())
        .then((users) => setUserArray(users)
        )
    },[])
    console.log(userArray);

    const handleFilter =(e) =>{
        const searchWord = e.target.value;
        const newFilter = userArray.filter((value) => {
            if (value.FullName != null) {
                return value.FullName.toLowerCase().includes(searchWord.toLowerCase());
            }
        });
        if (searchWord === "") {
            setFilteredData([])
        }else{
            setFilteredData(newFilter);
        }
    }

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
                                    <b class="ml-3">{data.location.state.UserAccessRequestId}</b>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <b class="">Employee Name</b>
                                </div>
                                <div class="col-md-6">
                                    <b class="ml-3">Cunningham, John</b>
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
                                    <a class="btn btn-secondary text-center shadow" href="/TimUser/Records?page=1&amp;pageSize=10&amp;sort=TblUser.Fullname%20ASC">Return To Records</a>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="accordian-card card-header shadow p-0 py-3 px-5 pb-4">
                    <div class="accordion-wrapper">
                        <div class="accordion">
                            <input className='accordian-input' type="radio" name="radio-a" id="check1"/>
                            <label class="accordion-label" for="check1">Accordion 1</label>
                            <div class="accordion-content">
                                <div className="search">
                                    <div className="searchInputs">
                                        <input type="text" placeholder='Search Manager' onChange={handleFilter}/>
                                        <div className="searchIcon"><SearchIcon/></div>
                                    </div>
                                    {
                                        filteredData.length != 0 && 
                                        (
                                        <div className="dataResult">{filteredData.slice(0,15).map((val,key)=>{
                                            return (<span className='managerItem'>{val.FullName}</span>)
                                        })}</div>
                                        )
                                    }   
                                </div>
                            <p>Hey there, you are watching codiesbugs &#128522;</p>
                            </div>
                        </div>
                        <div class="accordion">
                            <input className='accordian-input' type="radio" name="radio-a" id="check2"/>
                            <label class="accordion-label" for="check2">Accordion 2</label>
                            <div class="accordion-content">
                            <p>I hope you are enjoing the video, don't forget to give your feedback in comment section</p>
                            </div>
                        </div>
                        <div class="accordion">
                            <input className='accordian-input' type="radio" name="radio-a" id="check3"/>
                            <label class="accordion-label" for="check3">Accordion 3</label>
                            <div class="accordion-content">
                            <p>If you liked then don't forget to subscribe the channel for latest videos. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
            </div>

    )
}

