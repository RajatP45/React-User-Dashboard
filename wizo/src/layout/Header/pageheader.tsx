import React, { Fragment } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
export default function PageHeader(Props) {
  return (
    <Fragment>
      <div className='page-header'>
        <div className="page-leftheader">
          <h4 className="page-title mb-0">{Props.title}</h4>
        </div>
        <div className="page-rightheader">
          <div className='d-flex align-items-center'>
            <Button className='border-primary' variant='outline-primary'><i className="fe fe-download me-2"></i>
              Import</Button>
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle type="button" className="btn btn-primary  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-calendar me-2"></i>Search By Date
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Today</Dropdown.Item>
                <Dropdown.Item>Yesterday</Dropdown.Item>
                <Dropdown.Item>Last 7 days</Dropdown.Item>
                <Dropdown.Item>Last 30 days</Dropdown.Item>
                <Dropdown.Item>Last Month</Dropdown.Item>
                <Dropdown.Item>Last 6 months</Dropdown.Item>
                <Dropdown.Item>Last year</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </Fragment>
  )
};


