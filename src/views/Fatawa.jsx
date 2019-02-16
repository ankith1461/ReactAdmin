import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader className="mb-5">
                  <h5 className="card-category">Black Table Heading</h5>
                  <CardTitle tag="h3">
                    Created using Poppins Font Family
                  </CardTitle>
                </CardHeader>
                <CardBody>
                 
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Typography;
