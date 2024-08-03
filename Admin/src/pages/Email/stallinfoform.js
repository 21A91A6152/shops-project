import React, { useEffect, useState } from "react"
import axios from "axios";
import {
  Card,
  CardBody,
  Col,
  Row,
  Button
} from "reactstrap"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const FormElements = (props) => {
  document.title = "Form Elements | Lexa - Responsive Bootstrap 5 Admin Dashboard";

  
  const breadcrumbItems = [
    // { title: "Lexa", link: "#" },
    // { title: "Forms", link: "#" },
    // { title: "Form Elements", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Stalls Information', breadcrumbItems)
  })
  const [stalls,setFormdata]=useState({ // emp array

    'stallName':'',
    'stallArea':'',
    'stallId':'',
    'stallmobileNumber':'',
    'stallrentPerMonth':'',
    'stallagreement':'',
  })

  const handleSubmit1 = (e) =>{
    
    const Inputfields = new FormData();
    Inputfields.append('stallName', stalls.stallName)
    Inputfields.append('stallArea',stalls.stallArea)
    Inputfields.append('stallId',stalls.stallId)
    Inputfields.append('stallmobileNumber',stalls.stallmobileNumber)
    Inputfields.append('stallrentPerMonth',stalls.stallrentPerMonth)
    Inputfields.append('stallagreement',stalls.stallagreement);


    axios.post('http://localhost:5000/api/add-stalls-data',Inputfields)
    
    .then((res)=> {
      alert("success");
      window.location.href = '/stallinfolist';
    })
}


  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card style={{width:"80%", height:"100%"}}>
            <CardBody  onSubmit={handleSubmit1}>
              {/* <p className="card-title-desc">
                Here are examples of <code>.form-control</code> applied to
                    each textual HTML5 <code>&lt;input&gt;</code>{" "}
                <code>type</code>.
                  </p> */}
  
              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-2 col-form-label"
                >
                  Name of the Person
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="text" name="stallName" onChange={(e)=>setFormdata({...stalls,stallName:e.target.value})} required
                    // defaultValue="Artisanal kale"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-search-input"
                  className="col-md-2 col-form-label"
                >
                  Stall Area
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="text" name="stallArea" onChange={(e)=>setFormdata({...stalls,stallArea:e.target.value})} required
                    
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-email-input"
                  className="col-md-2 col-form-label"
                >
                  Stall ID
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="text" name="stallId" onChange={(e)=>setFormdata({...stalls,stallId:e.target.value})} required
                    
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-url-input"
                  className="col-md-2 col-form-label"
                >
                  Mobile Number
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="number" name="stallmobileNumber" onChange={(e)=>setFormdata({...stalls,stallmobileNumber:e.target.value})} required
                    
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-tel-input"
                  className="col-md-2 col-form-label"
                >
                  Rent per month
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="number" name="stallrentPerMonth" onChange={(e)=>setFormdata({...stalls,stallrentPerMonth:e.target.value})} required
                    
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-password-input"
                  className="col-md-2 col-form-label"
                >
                  Latest Agreement Copy
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="file" name="stallagreement" onChange={(e)=>setFormdata({...stalls,stallagreement:e.target.files[0]})} required
                  />
                </div>
              </Row>
              <Button onClick={handleSubmit1} type="button" color="success" className="waves-effect waves-light">Submit</Button>{" "}
            </CardBody>
          </Card>
        </Col>
      </Row>
     
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(FormElements);