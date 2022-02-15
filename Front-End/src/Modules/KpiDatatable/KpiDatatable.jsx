import React, {useEffect, useState } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import "../KpiDatatable/KpiDatatable.css"

let selectedRows = [];

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function KpiDataTable({data, setPending, setChange, setApproved}) {

    const columns = data[0] && Object.keys(data[0]);
    if (columns && columns.length > 6) {
        $("table").css("display", "block");
    }        
    useEffect(() => {

        const timer = setTimeout(() => {
            $("#example tfoot th").each(function () {
            $(this).html(
                '<input style="text-align: center" type="text" placeholder="Search" />'
            );
            });


            // DataTable
                var table = $("#example").DataTable({

                    columnDefs: [{
                        orderable: false,
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

        if (data.length > 0) {
            console.log("data: ",data);
            let pendingCount = 0;
            let changeCount = 0;
            let approvedCount = 0; 
       
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                pendingCount += parseInt(element.QuantityPending);
                changeCount += parseInt(element.QuantityChanged);
                approvedCount += parseInt(element.QuantityApproved);            
            }
            setPending(pendingCount);
            setChange(changeCount);
            setApproved(approvedCount);
            console.log("pending: ",pendingCount, "change: ",changeCount, "approved: ",approvedCount);
        }            

        return () => clearTimeout(timer);
    },[data]);

    useEffect(() => {
        const timer = setTimeout(() => {
            $(".table-container").css("display","block");
            $(".spinner-container").css("display","none");
            }, 2000);
        return () => clearTimeout(timer);
    },[data]);


    return (
        <div className="table-data-container kpi-datatable">
            <div className="spinner-container">
            <RingLoader id="spinner" color="#2CD1BE" loading={true} css={override} size={150} />
            </div>
            <div className="table-container kpi-table-container">
                <table id="example" className="table table-light table-striped kpi-table-data">
                    <thead>
                        <tr  className="th-sm">{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
                        </thead>
                    <tfoot style={{ display: "table-header-group" }}>
                        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
                    </tfoot>
                    <tbody>
                        {data.map(row => <tr>{
                                columns.map(column => <td>{row[column]}</td>)
                            }
                            </tr>)}
                    </tbody>
                </table>
                                         
            </div>
        </div>
    )
}
