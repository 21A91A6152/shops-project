import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { connect } from "react-redux";
import { setBreadcrumbItems } from "../../store/actions";
import { Link } from "react-router-dom";
import { MDBDataTable } from 'mdbreact';

const ResponsiveTables = (props) => {
  document.title = "Responsive Table | Lexa - Responsive Bootstrap 5 Admin Dashboard";

  const breadcrumbItems = [];

  useEffect(() => {
    props.setBreadcrumbItems('Stall bill Information', breadcrumbItems);
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/get-stallsbill-data");
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
console.log(data)

const handleDelete = async (id) => {
  try {
    const shouldDelete = window.confirm("Are you sure you want to delete this record?");
    // Send a DELETE request to your backend API
    if (shouldDelete){
    const response = await fetch(`http://localhost:5000/api/delete-stallsbill-data/${id}`,
     {
      method: "DELETE"
    });

    // Check if the request was successful
    if (response.ok) {
      // Update the data state to remove the deleted record
      setData(data.filter(stall => stall._id !== id));
      window.alert("Record deleted successfully!");
    } else {
      // Log an error message if the request fails
      console.error("Failed to delete record:", response.statusText);
    }
  }
  else {
    // Handle cancel action
    console.log("Deletion canceled by user");
  }
  } catch (error) {
    console.error("Error deleting record:", error);
  }
};




  const dataTable = {
    columns: [
      // { label: "S.No", field: "sno", sort: "asc", width: 150 },
      { label: "Name", field: "name", sort: "asc", width: 270 },
      { label: "Stall Area", field: "stallArea", sort: "asc", width: 200 },
      { label: "Stall Id", field: "stallId", sort: "asc", width: 100 },
      { label: "CurrentMeter Reading", field: "CurrentMeterReading1", sort: "asc", width: 150 },
      { label: "Units Consumed", field: "UnitsConsumed1", sort: "asc", width: 100 },
      { label: "Rs./Unit", field: "RsUnit1", sort: "asc", width: 100 },
      { label: "Total Amount", field: "TotalAmount1", sort: "asc", width: 100 }, 
      { label: "Amount Paid", field: "AmountPaidst", sort: "asc", width: 100 },
      { label: "Receipt Number", field: "ReceiptNumberst", sort: "asc", width: 100 },
      { label: "Remarks", field: "Remarks", sort: "asc", width: 100 },
      { label: "Actions", field: "actions", sort: "asc", width: 100 },

    ],
    rows: data.map((stall, index) => ({
      sno: index + 1,
      name: stall.name,
      stallArea: stall.stallArea,
      stallId: stall.stallId,
      CurrentMeterReading1: stall.CurrentMeterReading1,
      UnitsConsumed1: stall.UnitsConsumed1,
      RsUnit1: stall.RsUnit1,
      TotalAmount1: stall.TotalAmount1,
      AmountPaidst: stall.AmountPaidst,
      ReceiptNumberst: stall.ReceiptNumberst,
      Remarks: stall.Remarks,
      actions: (
        <React.Fragment>
          <Link to="\editshopform"><Button className="mb-2" color="info">Edit</Button></Link>
          <Button onClick={() => handleDelete(stall._id)} color="danger">Delete</Button>
        </React.Fragment>
      ) // You can customize the actions column as needed
    }))
  };

  return (
    <React.Fragment>
      <Row>
        <Col className="col-12">
          <Card>
            <CardBody>
              <Link to='/stallbillform'><Button type="button" color="warning" className="mb-2">Check Bills</Button></Link>
              <MDBDataTable responsive striped bordered data={dataTable} noBottomColumns/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default connect(null, { setBreadcrumbItems })(ResponsiveTables);