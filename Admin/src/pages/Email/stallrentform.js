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
    props.setBreadcrumbItems('Stalls Rent Information', breadcrumbItems)
  })
  const [stalls,setFormdata]=useState({ // emp array

    'rentname':'',
    'rentstallArea':'',
    'rentstallId':'',
    'rentPerMonth1':'',
    'rentpaidon1':'',
    'amountpaid1':'',
    'receiptnumber1':'',
    'remarks':''
  })

  const handleSubmit1 = (e) =>{
    e.preventDefault();
    
    console.log(stalls)
    axios.post('http://localhost:5000/api/add-stallsrent-data',stalls)
    .then((result)=>window.location.href='/stallrentlist')
}

// const handleSubmit2 = (e)=>{
//   window.location.href = '/shopinfolist';
// }

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card style={{width:"100%", height:"100%"}}>
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
                    type="text" name="name" onChange={(e)=>setFormdata({...stalls,rentname:e.target.value})} required
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
                    type="text" name="stallArea" onChange={(e)=>setFormdata({...stalls,rentstallArea:e.target.value})} required
                    
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
                    type="text" name="stallId" onChange={(e)=>setFormdata({...stalls,rentstallId:e.target.value})} required
                    
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
                    type="number" name="rentPerMonth1" onChange={(e)=>setFormdata({...stalls,rentPerMonth1:e.target.value})} required
                    
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-password-input"
                  className="col-md-2 col-form-label"
                >
                  Rent Paid On
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="date" name="rentpaidon1" onChange={(e)=>setFormdata({...stalls,rentpaidon1:e.target.value})} required
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-password-input"
                  className="col-md-2 col-form-label"
                >
                  Amount Paid
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="number" name="amountpaid1" onChange={(e)=>setFormdata({...stalls,amountpaid1:e.target.value})} required
                  />
                </div>
              </Row>
              
              <Row className="mb-3">
                <label
                  htmlFor="example-password-input"
                  className="col-md-2 col-form-label"
                >
                  Receipt Number
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="text" name="receiptnumber1" onChange={(e)=>setFormdata({...stalls,receiptnumber1:e.target.value})} required
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-password-input"
                  className="col-md-2 col-form-label"
                >
                  Remarks
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="text" name="remarks" onChange={(e)=>setFormdata({...stalls,remarks:e.target.value})} required
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