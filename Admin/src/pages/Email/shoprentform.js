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
    props.setBreadcrumbItems('Shops Rent Information', breadcrumbItems)
  })
  const [shops,setFormdata]=useState({ // emp array

    'rentname':'',
    'rentshopArea':'',
    'rentshopId':'',
    'rentPerMonth':'',
    'rentpaidon':'',
    'amountpaid':'',
    'receiptnumber':'',
    'remarks':''
  })

  const handleSubmit1 = (e) =>{
    e.preventDefault();
    
    console.log(shops)
    axios.post('http://localhost:5000/api/add-shopsrent-data',shops)
    .then((result)=>window.location.href='/shoprentlist')
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
                    type="text" name="name" onChange={(e)=>setFormdata({...shops,rentname:e.target.value})} required
                    // defaultValue="Artisanal kale"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-search-input"
                  className="col-md-2 col-form-label"
                >
                  Shop Area
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="text" name="shopArea" onChange={(e)=>setFormdata({...shops,rentshopArea:e.target.value})} required
                    
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-email-input"
                  className="col-md-2 col-form-label"
                >
                  Shop ID
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="text" name="shopType" onChange={(e)=>setFormdata({...shops,rentshopId:e.target.value})} required
                    
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
                    type="number" name="rentPerMonth" onChange={(e)=>setFormdata({...shops,rentPerMonth:e.target.value})} required
                    
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
                    type="date" name="rentpaidon" onChange={(e)=>setFormdata({...shops,rentpaidon:e.target.value})} required
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
                    type="number" name="amountpaid" onChange={(e)=>setFormdata({...shops,amountpaid:e.target.value})} required
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
                    type="text" name="receiptnumber" onChange={(e)=>setFormdata({...shops,receiptnumber:e.target.value})} required
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
                    type="text" name="remarks" onChange={(e)=>setFormdata({...shops,remarks:e.target.value})} required
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