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
    props.setBreadcrumbItems('Stalls Information', breadcrumbItems);
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/get-stalls-data");
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } 
      catch (error) {
        // console.error("Error fetching data:", error);
        console.log(error)
      }
    };

    fetchData();
  }, []);
console.log(data)

const handleDelete = async (id) => {
  try {
    // Show confirmation dialog before deleting
    const shouldDelete = window.confirm("Are you sure you want to delete this record?");

    // Check if the user confirmed the deletion
    if (shouldDelete) {
      // Send a DELETE request to your backend API
      const response = await fetch(`http://localhost:5000/api/delete-stalls-data/${id}`, {
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
    } else {
      // Handle cancel action
      console.log("Deletion canceled by user");
    }
  } catch (error) {
    console.error("Error deleting record:", error);
  }
};

  const dataTable = {
    columns: [
      { label: "S.No", field: "sno", sort: "asc", width: 150 },
      { label: "Name", field: "stallName", sort: "asc", width: 270 },
      { label: "Stall Area", field: "stallArea", sort: "asc", width: 200 },
      { label: "Stall Id", field: "stallId", sort: "asc", width: 100 },
      { label: "Mobile Number", field: "stallmobileNumber", sort: "asc", width: 150 },
      { label: "Rent Per Month", field: "stallrentPerMonth", sort: "asc", width: 100 },
      { label: "Agreement", field: "stallagreement", sort: "asc", width: 100 },
      { label: "Actions", field: "actions", sort: "asc", width: 100 },
    ],
    rows: data.map((stall, index) => ({
      sno: index + 1,
      stallName: stall.stallName,
      stallArea: stall.stallArea,
      stallId: stall.stallId,
      stallmobileNumber: stall.stallmobileNumber,
      stallrentPerMonth: stall.stallrentPerMonth,
      stallagreement: stall.stallagreement,
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
              <Link to='/stallinfoform'><Button type="button" color="warning">Add Stall</Button></Link>
              <MDBDataTable responsive striped bordered data={dataTable} noBottomColumns/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default connect(null, { setBreadcrumbItems })(ResponsiveTables);