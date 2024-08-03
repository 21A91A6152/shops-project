import React, { useEffect, useState } from "react"

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
    props.setBreadcrumbItems('', breadcrumbItems)
  })


	const onButtonClick = () => {
		const pdfUrl = "Sample.pdf";
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = "document.pdf"; // specify the filename
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card style={{width:"80%", height:"100%"}}>
            <CardBody>
              {/* <p className="card-title-desc">
                Here are examples of <code>.form-control</code> applied to
                    each textual HTML5 <code>&lt;input&gt;</code>{" "}
                <code>type</code>.
                  </p> */}
              <Button type="button" color="danger" onClick={onButtonClick}>PDF</Button>{" "}
              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-2 col-form-label"
                >
                  Month
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="date"
                    // defaultValue="Artisanal kale"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-search-input"
                  className="col-md-2 col-form-label"
                >
                  Shop / stall info:
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="text"
                    
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-email-input"
                  className="col-md-2 col-form-label"
                >
                  Report for:
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="text"
                    
                  />
                </div>
              </Row>
              
              <Button type="button" color="success" className="waves-effect waves-light">Submit</Button>{" "}
            </CardBody>
          </Card>
        </Col>
      </Row>
     
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(FormElements);