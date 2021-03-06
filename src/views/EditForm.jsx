import React from "react";
import { Editor } from '@tinymce/tinymce-react';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Label,
  Row,
  Col
} from "reactstrap";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {  
       formType: this.props.location.state.formName,    
       title: this.props.location.state.formTitle,
       summary: this.props.location.state.formSummary,
       description: this.props.location.state.formDescription,
       featured: this.props.location.state.formfeatured ? this.props.location.state.formfeatured : false,
       actionType: this.props.location.state.actionType
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  };

  handleCheckBoxChange = e => {
    if (e.target.checked){
      e.target.removeAttribute('checked');
      this.setState({featured: true});
   } else {
      e.target.setAttribute('checked', true);
      this.setState({featured: false});
   }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value});
  }

  handleFormSubmit = e => {
    e.preventDefault()
    console.log("Type: " + this.state.formType);
    console.log("Title: " + this.state.title);
    console.log("Summary: " + this.state.summary);
    console.log("Featured: " + this.state.featured);
    console.log("Description: " + this.state.description);
    console.log("Action: " + this.state.actionType);
  }

  handleEditorChange = (content) => {
    this.setState({ description: content });;
  }

  render() {
    // const { ...data } = this.props.location.state;
    return (
      <>
        <div className="content">
          
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">{this.state.formType}</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Title</label>
                          <Input
                            // defaultValue="Enter Title"
                            // disabled
                            placeholder="title"
                            type="text"
                            name="title"
                            value= {this.state.title}
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="4">
                      <FormGroup check>
                        <Label check>
                        <Input type="checkbox" name="featured" onClick={this.handleCheckBoxChange} checked={this.state.featured}/>
                           <span className="form-check-sign"> 
                             Feature
                          <span className="check" />
                          </span>
                        </Label>
                      </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Summary</label>
                          <Input
                            // defaultValue="Mike"
                            placeholder="summary"
                            type="text"
                            name="summary"
                            value= {this.state.summary}
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                   
                    <Row>
                      <Col md="10">
                        <FormGroup>
                          <label>Description</label>
                          
                          <Editor
                            initialValue="<p>This is the placeholder content of the editor</p>"
                            init={{
                              plugins: 'link image code media table paste',
                              toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | media | paste',
                              height: "480px"
                            }}
                            name="description"
                            onEditorChange={this.handleEditorChange}
                            value ={this.state.description}                            
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" onClick={this.handleFormSubmit}>
                      {this.state.actionType === 'ADD' ? "Add" : "Update" }
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
