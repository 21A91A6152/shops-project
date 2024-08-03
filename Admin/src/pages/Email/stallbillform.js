// import React, { useEffect, useState } from "react"

// import {
//   Card,
//   CardBody,
//   Col,
//   Row,
//   Button
// } from "reactstrap"

// import { connect } from "react-redux";

// //Import Action to copy breadcrumb items from local state to redux state
// import { setBreadcrumbItems } from "../../store/actions";

// const FormElements = (props) => {
//   document.title = "Form Elements | Lexa - Responsive Bootstrap 5 Admin Dashboard";

  
//   const breadcrumbItems = [
//     // { title: "Lexa", link: "#" },
//     // { title: "Forms", link: "#" },
//     // { title: "Form Elements", link: "#" },
//   ]

//   useEffect(() => {
//     props.setBreadcrumbItems('Stalls Power Bill Info', breadcrumbItems)
//   })

//   return (
//     <React.Fragment>
//       <Row>
//         <Col>
//           <Card style={{width:"80%", height:"100%"}}>
//             <CardBody>
//               {/* <p className="card-title-desc">
//                 Here are examples of <code>.form-control</code> applied to
//                     each textual HTML5 <code>&lt;input&gt;</code>{" "}
//                 <code>type</code>.
//                   </p> */}

//               <Row className="mb-3">
//                 <label
//                   htmlFor="example-text-input"
//                   className="col-md-2 col-form-label"
//                 >
//                   Name of the Person
//                     </label>
//                 <div className="col-md-10">
//                   <input
//                     className="form-control"
//                     type="text"
//                     // defaultValue="Artisanal kale"
//                   />
//                 </div>
//               </Row>
//               <Row className="mb-3">
//                 <label
//                   htmlFor="example-search-input"
//                   className="col-md-2 col-form-label"
//                 >
//                   Stall Area
//                     </label>
//                 <div className="col-md-10">
//                   <input
//                     className="form-control"
//                     type="text"
                    
//                   />
//                 </div>
//               </Row>
//               <Row className="mb-3">
//                 <label
//                   htmlFor="example-email-input"
//                   className="col-md-2 col-form-label"
//                 >
//                   Stall ID
//                     </label>
//                 <div className="col-md-10">
//                   <input
//                     className="form-control"
//                     type="text"
                    
//                   />
//                 </div>
//               </Row>
//               <Row className="mb-3">
//                 <label
//                   htmlFor="example-url-input"
//                   className="col-md-2 col-form-label"
//                 >
//                   Current Meter Reading
//                     </label>
//                 <div className="col-md-10">
//                   <input
//                     className="form-control"
//                     type="number"
                    
//                   />
//                 </div>
//               </Row>
//               <Row className="mb-3">
//                 <label
//                   htmlFor="example-tel-input"
//                   className="col-md-2 col-form-label"
//                 >
//                   Old Meter Reading
//                     </label>
//                 <div className="col-md-10">
//                   <input
//                     className="form-control"
//                     type="number"
                    
//                   />
//                 </div>
//               </Row>
//               <Row className="mb-3">
//                 <label
//                   htmlFor="example-password-input"
//                   className="col-md-2 col-form-label"
//                 >
//                   Units Consumed
//                     </label>
//                 <div className="col-md-10">
//                   <input
//                     className="form-control"
//                     type="number"
//                   />
//                 </div>
//               </Row>

//               <Row className="mb-3">
//                 <label
//                   htmlFor="example-password-input"
//                   className="col-md-2 col-form-label"
//                 >
//                   Rs./Unit
//                     </label>
//                 <div className="col-md-10">
//                   <input
//                     className="form-control"
//                     type="text"
//                   />
//                 </div>
//               </Row>

//               <Row className="mb-3">
//                 <label
//                   htmlFor="example-password-input"
//                   className="col-md-2 col-form-label"
//                 >
//                   Total Amount
//                     </label>
//                 <div className="col-md-10">
//                   <input
//                     className="form-control"
//                     type="number"
//                   />
//                 </div>
//               </Row>

//               <Row className="mb-3">
//                 <label
//                   htmlFor="example-password-input"
//                   className="col-md-2 col-form-label"
//                 >
//                   Amount Paid
//                     </label>
//                 <div className="col-md-10">
//                   <input
//                     className="form-control"
//                     type="number"
//                   />
//                 </div>
//               </Row>

//               <Row className="mb-3">
//                 <label
//                   htmlFor="example-password-input"
//                   className="col-md-2 col-form-label"
//                 >
//                   Receipt Number
//                     </label>
//                 <div className="col-md-10">
//                   <input
//                     className="form-control"
//                     type="number"
//                   />
//                 </div>
//               </Row>

//               <Row className="mb-3">
//                 <label
//                   htmlFor="example-password-input"
//                   className="col-md-2 col-form-label"
//                 >
//                   Remarks
//                     </label>
//                 <div className="col-md-10">
//                   <textarea
//                     className="form-control"
//                     ></textarea>
//                 </div>
//               </Row>


//               <Button type="button" color="warning" className="waves-effect waves-light">Edit</Button>{" "}
//               <Button type="button" color="danger" className="waves-effect waves-light">Delete</Button>{" "}
//               <Button type="button" color="success" className="waves-effect waves-light">Submit</Button>{" "}
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
     
//     </React.Fragment>
//   )
// }

// export default connect(null, { setBreadcrumbItems })(FormElements);




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
    props.setBreadcrumbItems('Stallbill Information', breadcrumbItems)
  })
  const [stalls,setFormdata]=useState({ // emp array

    'name':'',
    'stallArea':'',
    'stallId':'',
    'CurrentMeterReading1':'',
    'UnitsConsumed1':'',
    'RsUnit1':'',
    'TotalAmount1':'',
    'AmountPaidst':'',
    'ReceiptNumberst':'',
    'Remarks':'',
  })

  const handleSubmit1 = (e) =>{
    e.preventDefault();
    
    console.log(stalls)
    axios.post('http://localhost:5000/api/add-stallsbill-data',stalls)
    .then((result)=>window.location.href='/stallbilllist')
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
                    type="text" name="name" onChange={(e)=>setFormdata({...stalls,name:e.target.value})} required
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
                    type="text" name="shopArea" onChange={(e)=>setFormdata({...stalls,stallArea:e.target.value})} required
                    
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
                    type="text" name="shopId" onChange={(e)=>setFormdata({...stalls,stallId:e.target.value})} required
                    
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
                    type="number" name="mobileNumber" onChange={(e)=>setFormdata({...stalls,CurrentMeterReading1:e.target.value})} required
                    
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
                    type="number" name="rentPerMonth" onChange={(e)=>setFormdata({...stalls,UnitsConsumed1:e.target.value})} required
                    
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
                    type="number" name="agreement" onChange={(e)=>setFormdata({...stalls,RsUnit1:e.target.value})} required
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
                    type="number" name="agreement" onChange={(e)=>setFormdata({...stalls,TotalAmount1:e.target.value})} required
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
                    type="number" name="agreement" onChange={(e)=>setFormdata({...stalls,AmountPaidst:e.target.value})} required
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
                    type="number" name="agreement" onChange={(e)=>setFormdata({...stalls,ReceiptNumberst:e.target.value})} required
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
                    type="text" name="agreement" onChange={(e)=>setFormdata({...stalls,Remarks:e.target.value})} required
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