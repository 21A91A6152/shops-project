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
    props.setBreadcrumbItems('Shops Information', breadcrumbItems)
  })
  const [shops,setFormdata]=useState({ // emp array

    'name':'',
    'shopArea':'',
    'shopId':'',
    'date':'',
    'mobileNumber':'',
    'rentPerMonth':'',
    'agreement':'',
  })

  const handleSubmit1 = (e) =>{
    
    const Inputfields = new FormData();
    Inputfields.append('name', shops.name)
    Inputfields.append('shopArea',shops.shopArea)
    Inputfields.append('shopId',shops.shopId)
    Inputfields.append('date',shops.date)
    Inputfields.append('mobileNumber',shops.mobileNumber)
    Inputfields.append('rentPerMonth',shops.rentPerMonth)
    Inputfields.append('agreement',shops.agreement);
    console.log(shops)
    axios.post('http://localhost:5000/api/add-shops-data',Inputfields)
    
    .then((res)=> {
      alert("success");
      // ((res)=>window.location.href='/shopinfolist')
      window.location.href = '/shopinfolist';
    })
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
              <label htmlFor="shopArea" className="col-md-2 col-form-label">
                Shop Area
              </label>
              <div className="col-md-10">
                <select
                  className="form-select"
                  name="shopArea"
                  onChange={(e) => setFormdata({...shops, shopArea: e.target.value})}
                  required
                >
                  <option value="">Select Shop Area</option>
                  <option value="Ball Canteen 1">Ball Canteen 1</option>
                  <option value="Ball Canteen 2">Ball Canteen 2</option>
                  <option value="Cake of the day">Cake of the day</option>
                  {/* Add more options as needed */}
                </select>
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
                    type="text" name="shopType" onChange={(e)=>setFormdata({...shops,shopId:e.target.value})} required
                    
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-email-input"
                  className="col-md-2 col-form-label"
                >
                  Date
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="date" name="shopType" onChange={(e)=>setFormdata({...shops,date:e.target.value})} required
                    
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
                    type="number" name="mobileNumber" onChange={(e)=>setFormdata({...shops,mobileNumber:e.target.value})} required
                    
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
                  Latest Agreement Copy
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="file" name="agreement" onChange={(e)=>setFormdata({...shops,agreement:e.target.files[0]})} required
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