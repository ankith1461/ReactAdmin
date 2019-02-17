import React from "react";
import { Link  } from 'react-router-dom';
import MonthWordData from "Data/MonthWordData.js";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  NavLink
} from "reactstrap";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleData : MonthWordData,
      checkedItems: new Map(),
      allChecked : false
    };
    this.handleSingleCheck = this.handleSingleCheck.bind(this);
  }
  

  handleSingleCheck = e => {
    //e.preventDefault()   
    const item = e.target.name;
    const isChecked = e.target.checked;
    if(!isChecked && this.state.allChecked)
    {
      this.setState({allChecked : false});
    }
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    console.log(this.state.checkedItems);
  }

  deleteTask={
    
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="12" md="12">
              <Card className="card-tasks">
                <CardHeader>
                 <FormGroup check>
                    <Label check>
                      {/*<Input type="checkbox" onClick={this.handleAllChecked}  value="checkAll" checked={this.state.allChecked}/>
                      <span className="form-check-sign">                     
                        <span className="check" />
                        Select All / UnSelect All
                      </span>
                    </Label> */}
                    <Link to={{ pathname:'/admin/edit-form',
                                state: {
                                  formName: 'Add new : Word Of The Month',
                                  actionType: 'ADD'                          
                                }
                              }} 
                                className="nav-link" id="" onClick={this.props.toggleSidebar}
                      >
                        <i className="tim-icons icon-simple-add" /> Add New
                    </Link>   
                    </Label>                   
                    <UncontrolledDropdown>
                      <DropdownToggle caret className="btn-icon"  color="link" data-toggle="dropdown"  type="button">
                        <i className="tim-icons icon-settings-gear-63" />
                      </DropdownToggle>
                      <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                        <DropdownItem href="#" onClick={e => e.preventDefault()} >
                          Remove Selected
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </FormGroup> 
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th></th>
                          <th>Titile</th>
                          <th className="text-right">Edit</th>
                          <th className="text-right">Remove</th>                        
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.sampleData.map( data => {
                            return <tr>
                                <td>
                                  <FormGroup check>
                                    <Label check>
                                      <Input type="checkbox" onClick={this.handleSingleCheck}  name={"checkbox" + data.id } checked={this.state.checkedItems.get("checkbox" + data.id )}/>
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </Label>
                                  </FormGroup>
                                </td>
                                <td>
                                 <p className={"title" + (data.isfeatured ? ' featured':'')}>{data.title}</p>
                                  <p className="text-muted">
                                    {data.summary}
                                  </p>
                                </td>
                                <td className="td-actions text-right">
                                 
                                  <Link to={{ pathname:'/admin/edit-form',
                                              state: {
                                                formName:'Edit form : Word Of The Month',
                                                formTitle: data.title,
                                                formSummary: data.summary,
                                                formDescription: data.description,
                                                formfeatured: data.isfeatured,
                                                actionType: 'EDIT' 
                                              }
                                            }} 
                                              className="nav-link" id="tooltip636901683" onClick={this.props.toggleSidebar}
                                    >
                                      <i className="tim-icons icon-pencil" />
                                  </Link>                                                                    
                                  <UncontrolledTooltip delay={0} target="tooltip636901683" placement="right">
                                    Edit Task
                                  </UncontrolledTooltip>
                                  </td>
                                  <td className="td-actions text-right">
                                  <Button color="link"id="tooltip636901684" title="" type="button" onClick={this.deleteTask}>
                                  <i className="tim-icons icon-simple-remove" />
                                  </Button>
                                  <UncontrolledTooltip delay={0} target="tooltip636901684" placement="right">
                                    Remove Task
                                  </UncontrolledTooltip>
                                </td>
                              </tr>
                            })
                        }
                      </tbody>
                    </Table>
                  </div>
                  <div><p className='featuredNote'> Featured articles for User pages</p></div>
                </CardBody>
              </Card>
            </Col>
          
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
