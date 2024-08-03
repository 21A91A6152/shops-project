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
    props.setBreadcrumbItems('Shops bill Information', breadcrumbItems);
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/get-shopsbill-data");
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
    const response = await fetch(`http://localhost:5000/api/delete-shopsbill-data/${id}`,
     {
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
      // { label: "S.No", field: "sno", sort: "asc", width: 150 },
      { label: "Name", field: "name", sort: "asc", width: 270 },
      { label: "Shop Area", field: "shopArea", sort: "asc", width: 200 },
      { label: "Shop Id", field: "shopId", sort: "asc", width: 100 },
      { label: "CurrentMeter Reading", field: "CurrentMeterReading", sort: "asc", width: 150 },
      { label: "Units Consumed", field: "UnitsConsumed", sort: "asc", width: 100 },
      { label: "Rs./Unit", field: "RsUnit", sort: "asc", width: 100 },
      { label: "Total Amount", field: "TotalAmount", sort: "asc", width: 100 }, 
      { label: "Amount Paid", field: "AmountPaidsb", sort: "asc", width: 100 },
      { label: "Receipt Number", field: "ReceiptNumbersb", sort: "asc", width: 100 },
      { label: "Remarks", field: "Remarks", sort: "asc", width: 100 },
      { label: "Actions", field: "actions", sort: "asc", width: 100 },

    ],
    rows: data.map((shop, index) => ({
      sno: index + 1,
      name: shop.name,
      shopArea: shop.shopArea,
      shopId: shop.shopId,
      CurrentMeterReading: shop.CurrentMeterReading,
      UnitsConsumed: shop.UnitsConsumed,
      RsUnit: shop.RsUnit,
      TotalAmount: shop.TotalAmount,
      AmountPaidsb: shop.AmountPaidsb,
      ReceiptNumbersb: shop.ReceiptNumbersb,
      Remarks: shop.Remarks,
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
              <Link to='/shopbillform'><Button type="button" color="warning" className="mb-2">Check Bills</Button></Link>
              <MDBDataTable responsive striped bordered data={dataTable} noBottomColumns/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default connect(null, { setBreadcrumbItems })(ResponsiveTables);