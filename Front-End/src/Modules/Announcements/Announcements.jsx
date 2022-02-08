import React from 'react';
import Uarlogo from "../../Shared/Images/UARlogo.svg";
import "./AnnouncementsComponent.css";

function Announcements() {
  return (
        <div class="container">
            <div class="row">
                <div  class="col-md-12 announcements-outer-div">
                    <h3 class="pl-4 mt-3"><br/></h3>
                    <div class="py-1">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <img class="img-fluid d-block" src={Uarlogo} width="400" />
                                </div>
                            </div>
                            <div class="row announcement-section-bar">
                                <div class="col-md-6 border mt-2 color-blue" ></div>
                                <div class="col-md-6 mt-2 py-3 color-grey" ></div>
                            </div>
                            <div class="row bg-light">
                                <div class="col m-2 align-left">
                                    <div class="row">

                                        <div class="col-md ">
                                            <h2 class="mt-2 font-bold color-navy">Announcements</h2>
                                        </div>
                                    </div>
                                        <div class="row">
                                            <div class="col-md">
                                                <hr/>
                                                <h4 class="font-large color-navy">Eclipse Test</h4>
                                                <p class="mb-0">If you can see this, thanks</p>
                                                <p class="font-italic font-12px">Created By Orekoya, Midey - 7/8/2020 12:21:46 PM</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md">
                                                <hr/>
                                                <h4 class="color-navy">Eclipse UAR Test</h4>
                                                <p class="mb-0">Trying out another</p>
                                                <p class="font-italic font-12px">Created By Orekoya, Midey - 10/22/2019 2:37:44 PM</p>
                                            </div>
                                        </div>
                                    <div class="row  mt-4 mb-4">
                                        <div class="col-md">
                                            <div class="p-1">
                                                <div class="col">
                                                    <div class="pagination-container"><ul class="pagination"><li class="active"><a>1</a></li></ul></div>
                                                </div>
                                            </div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
  );
}

export default Announcements;
