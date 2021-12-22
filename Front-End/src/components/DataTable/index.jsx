import React, { useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import "jquery/dist/jquery.min.js";
import $ from "jquery"
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"

let selectedRows = [];

export default function DataTable({data}) {

    const columns = data[0] && Object.keys(data[0]);
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

            $('#example tbody').on( 'click', 'tr', function () {
                $(this).toggleClass('selected');
            } );
        
            $('#button').click( function () {
                selectedRows = table.rows('.selected').data();
                $("#row-count").html(" : " + table.rows('.selected').data().length);
            } );            
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
            }, 2500);

        return () => clearTimeout(timer);
    },[]);


    useEffect(() => {
    const timer = setTimeout(() => {
        $(".table-container").css("display","block");
        $(".spinner-container").css("display","none");
        }, 2500);
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
                        <tr  className="th-sm"><th>Select</th>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
                        </thead>
                    <tfoot style={{ display: "table-header-group" }}>
                        <tr><th className="checkbox-header">Select</th>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
                    </tfoot>
                    <tbody>
                        {data.map(row => <tr><td></td>{
                                columns.map(column => <td>{row[column]}</td>)
                            }
                            </tr>)}
                    </tbody>
                </table>
                <button id="button">Rows Selected </button>
                <span id="row-count"></span>
            </div>
        </div>
    )
}
