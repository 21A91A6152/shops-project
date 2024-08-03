import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { connect } from "react-redux";
import { setBreadcrumbItems } from "../../store/actions";
import { Link } from "react-router-dom";
import { MDBDataTable } from 'mdbreact';

import "./list.scss"
const ResponsiveTables = (props) => {
  document.title = "Responsive Table | Lexa - Responsive Bootstrap 5 Admin Dashboard";

  const breadcrumbItems = [];

  useEffect(() => {
    props.setBreadcrumbItems('Shops Rent Info', breadcrumbItems);
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/get-shopsrent-data");
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
    if (shouldDelete) {
    // Send a DELETE request to your backend API
    const response = await fetch(`http://localhost:5000/api/delete-shopsrent-data/${id}`, {
      method: "DELETE"
    });

    // Check if the request was successful
    if (response.ok) {
      // Update the data state to remove the deleted record
      setData(data.filter(shop => shop._id !== id));
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
      { label: "S.No", field: "sno", sort: "asc", width: 150 },
      { label: "Name", field: "rentname", sort: "asc", width: 270 },
      { label: "Shop Area", field: "rentshopArea", sort: "asc", width: 200 },
      { label: "Shop Id", field: "rentshopId", sort: "asc", width: 100 },
      { label: "Rent Per Month", field: "rentPerMonth", sort: "asc", width: 100 },
      { label: "Rent Paid on", field: "rentpaidon", sort: "asc", width: 100 },
      { label: "Amount Paid", field: "amountpaid", sort: "asc", width: 100 },
      { label: "Receipt number", field: "receiptnumber", sort: "asc", width: 100 },
      { label: "Remarks", field: "remarks", sort: "asc", width: 100 },
      { label: "Actions", field: "actions", sort: "asc", width: 100 },
    ],
    rows: data.map((shop, index) => ({
      sno: index + 1,
      rentname: shop.rentname,
      rentshopArea: shop.rentshopArea,
      rentshopId: shop.rentshopId,
      rentPerMonth: shop.rentPerMonth,
      rentpaidon: shop.rentpaidon,
      amountpaid: shop.amountpaid,
      receiptnumber: shop.receiptnumber,
      remarks: shop.remarks,
      actions: (
        <React.Fragment>
          <Link to="\editshopform"><Button className="mb-2" color="info">Edit</Button></Link>
          <Button onClick={() => handleDelete(shop._id)} color="danger">Delete</Button>
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
              <Link to='/shoprentform'><Button type="button" color="warning" className="mb-2">Add Rent</Button></Link>
              <MDBDataTable responsive striped bordered data={dataTable} noBottomColumns/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default connect(null, { setBreadcrumbItems })(ResponsiveTables);