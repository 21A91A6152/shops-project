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
    props.setBreadcrumbItems('Shopbill Information', breadcrumbItems)
  })
  const [shops,setFormdata]=useState({ // emp array

    'name':'',
    'shopArea':'',
    'shopId':'',
    'CurrentMeter Reading':'',
    'Units Consumed':'',
    'Rs./Unit':'',
    'Total Amount':'',
    'Amount Paidsb':'',
    'Receipt Numbersb':'',
    'Remarks':'',
  })

  const handleSubmit1 = (e) =>{
    e.preventDefault();
    
    console.log(shops)
    axios.post('http://localhost:5000/api/add-shopsbill-data',shops)
    .then((result)=>window.location.href='/shopbilllist')
}

// const handleSubmit2 = (e)=>{
//   window.location.href = '/shopinfolist';
// }

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
                    type="text" name="name" onChange={(e)=>setFormdata({...shops,name:e.target.value})} required
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
                    type="text" name="shopArea" onChange={(e)=>setFormdata({...shops,shopArea:e.target.value})} required
                    
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
                    type="text" name="shopId" onChange={(e)=>setFormdata({...shops,shopId:e.target.value})} required
                    
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-url-input"
                  className="col-md-2 col-form-label"
                >
                  CurrentMeter Reading
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="number" name="currentmetereading" onChange={(e)=>setFormdata({...shops,CurrentMeterReading:e.target.value})} required
                    
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-tel-input"
                  className="col-md-2 col-form-label"
                >
                  Units Consumed
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="number" name="unitsconsumed" onChange={(e)=>setFormdata({...shops,UnitsConsumed:e.target.value})} required
                    
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-password-input"
                  className="col-md-2 col-form-label"
                >
                  Rs./Unit
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="number" name="rsunit" onChange={(e)=>setFormdata({...shops,RsUnit:e.target.value})} required 
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-password-input"
                  className="col-md-2 col-form-label"
                >
                  Total Amount
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="number" name="totalamount" onChange={(e)=>setFormdata({...shops,TotalAmount:e.target.value})} required
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
                    type="number" name="amountpaid" onChange={(e)=>setFormdata({...shops,AmountPaidsb:e.target.value})} required
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
                    type="number" name="agreement" onChange={(e)=>setFormdata({...shops,ReceiptNumbersb:e.target.value})} required
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
                    type="text" name="agreement" onChange={(e)=>setFormdata({...shops,Remarks:e.target.value})} required
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