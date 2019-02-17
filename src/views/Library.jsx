import React from "react";
import { Link  } from 'react-router-dom';
import LibraryData from 'Data/LibraryData.js';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  Button
} from "reactstrap";

class Library extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sampleData : LibraryData
    };
    
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Library</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Titile</th>
                        <th>Section</th>
                        <th>FilePath</th>
                        <th className="text-right">Edit</th>
                        <th className="text-right">Remove</th>   
                      </tr>
                    </thead>
                    <tbody>
                      {                       
                        this.state.sampleData.map( data => {
                        return <tr>
                        <td> <p className={"title" + (data.isfeatured ? ' featured':'')}>{data.title}</p></td>
                        <td>{data.section}</td>
                        <td>                          
                            <u><a href={data.url} target="_blank"> {(data.url).substring(0,30) + '. . .'} </a></u>                          
                        </td>
                        <td className="td-actions text-right">      
                          <Link to={{ pathname:'/admin/edit-form',
                                      state: {
                                        
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

export default Library;
