import React, { useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "jquery/dist/jquery.min.js";
import $ from "jquery"
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"

let selectedRows = [];

export default function DataTable({loaded, data, submitButton}) {

    const [requestData, setRequestData] = useState({})

    const columns = data[0] && Object.keys(data[0]);
    if (columns && columns.length > 6) {
        $("table").css("display", "block");
    }        
    useEffect(() => {

        const timer = setTimeout(() => {
            $("#example tfoot th").each(function () {
                // var title = $("#example thead th").eq($(this).index()).text();
            // var title = $(this).text();
            $(this).html(
                '<input style="text-align: center" type="text" placeholder="Search" />'
            );
            });

            // DataTable
                var table = $("#example").DataTable({

                    columnDefs: [{
                    orderable: false,
                    className: 'select-checkbox',
                                targets: 0
                    }],
                    select: {
                        style: 'multi',
                        selector: 'td:first-child'
                        },
                    order: [[1, 'asc']],
                    dom: 'plBfrtip',
                    buttons: [
                        'copy', 'csv', 'excel', 'pdf', 'print'
                    ],
                
                });
            // }

            $('#example tbody').on( 'click', '.edit-button', function () {
                $(this).closest("tr").addClass('edit-row');
                let editRow = table.rows('.edit-row').data()[0];
                let tableHead =  [];

                $('#example > thead > tr > th').each(function(){
                    tableHead.push($(this).text())
                })
                editRow.shift();
                editRow.pop();
                tableHead.shift();
                tableHead.pop();
                let editData = [];
                editData.push(tableHead);
                editData.push(editRow);
                let finalData = {}
                for (let i = 0; i < editData[0].length; i++) {
                    let key = editData[0][i];
                    let value = editData[1][i];
                    finalData[key] = value;

                }            
                                    
                setRequestData(finalData);
            });
            $('td').click( function () {
                selectedRows = table.rows('.selected').data();
                $("#row-count").html(" : " + table.rows('.selected').data().length);
                
            } );      
            $('#example tbody').on( 'click', 'td.select-checkbox', function () {
                $(this).parent("tr").toggleClass('selected');
            });
            // Apply the search
            table
            .columns()
            .eq(0)
            .each(function (colIdx) {
                $("input", table.column(colIdx).footer()).on(
                "keyup change",
                function () {
                    table.column(colIdx).search(this.value).draw();
                }
                );
            });
            }, 2000);

        return () => clearTimeout(timer);
    },[]);

    

    useEffect(() => {
        const timer = setTimeout(() => {
            $(".table-container").css("display","block");
            $(".spinner-container").css("display","none");

            }, 2000);
        return () => clearTimeout(timer);
    },[]);


    return (
        <div className="table-data-container">
            <div className="spinner-container">
            <ReactBootStrap.Spinner animation="border" role="status">
                <span id="spinner" className="visually-hidden">
                Loading...
                </span>
            </ReactBootStrap.Spinner>
            </div>
            <div className="table-container">
                <table id="example" className="table table-light table-striped">
                    <thead>
                        <tr  className="th-sm"><th>Select</th>{data[0] && columns.map((heading) => <th>{heading}</th>)}<th>Action</th></tr>
                        </thead>
                    <tfoot style={{ display: "table-header-group" }}>
                        <tr><th className="checkbox-header">Select</th>{data[0] && columns.map((heading) => <th>{heading}</th>)}<th className="edit-column"></th></tr>
                    </tfoot>
                    <tbody>
                        {data.map(row => <tr><td></td>{
                                columns.map(column => <td>{row[column]}</td>)
                            }<td><NavLink className="edit-button" to={{
                                pathname:"Request",
                                state:requestData
                            }}>Edit</NavLink></td>
                            </tr>)}
                    </tbody>
                </table>
                {
                    submitButton === "Reset Records" ? (
                        <div class="d-md-flex justify-content-between text-right col-md-12 align-items-center flex-row-reverse py-0 my-4 submit-approval-div">
                            <p class="text-light py-0 my-0 w-25">
                                <input type="submit" name="SubmitApprovals" value="Reset Record" class=" submit-approval reset-records btn btn-warning text-center w-75 my-2 shadow" id="resetRecords"/>
                            </p>
                        </div>  
                    ) : (
                        <div class="d-md-flex justify-content-between text-right col-md-12 align-items-center flex-row-reverse py-0 my-4 submit-approval-div">
                            <p class="text-light py-0 my-0 w-25">
                                <input type="submit" name="SubmitApprovals" value="Submit Approvals" class="submit-approval reset-records btn btn-warning text-center w-75 my-2 shadow" id="submitApprovals"/>
                            </p>
                        </div>                    
                    )         
                }                
            </div>
        </div>
    )
}
