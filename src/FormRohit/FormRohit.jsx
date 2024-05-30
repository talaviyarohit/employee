import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import generateUniqueId from 'generate-unique-id';
import 'bootstrap-icons/font/bootstrap-icons.css'



function FormRohit() {

  const [inputData, setInputData] = useState({
    id: '',
    fname: '',
    lname: '',
    email: '',
    address: '',
    contact: ''
  });



  const [viewData, setViewData] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputData({
      ...inputData, [name]: value
    })

  }
  const handleSubmit = (e) => {

    e.preventDefault();

    if (inputData.id) {
      let record = viewData;
      let newrec = record.map((rec) => {
        if (rec.id === inputData.id) {
          return rec = inputData;
        }
        return rec;
      })

      setViewData(newrec);
    } else {

      const obj = {
        ...inputData,
        id: generateUniqueId({
          length: 2,
          useLetters: false,
        }),
      }
      setViewData([...viewData, obj]);
    }

    setInputData(
      {
        id: '',
        fname: '',
        lname: '',
        email: '',
        address: '',
        contact: ''
      }
    );
  }

  const handleEdit = (id) => {

    // console.log(id);
    let record = viewData;
    let updateRecord = viewData.filter((rec) => {
      return rec;
    })
    setInputData(updateRecord[0]);
  }

  const handleDelete = (id) => {

    let record = viewData;
    let deleteRecord = record.filter((rec) => {
      return rec.id !== id;
    })
    setViewData(deleteRecord);
  };

  return (
    <Container>
      <h1 className='text-center display-1x '>
        Employee Management CRUD
      </h1>
      <div className='box d-flex justify-content-between p-2'>
        <div className='fs-3 text-white'>
          <i class="bi bi-house-door-fill"></i>
        </div>
        <div className='text-white fs-3'>
          <span className='me-1'><i class="bi bi-person-fill"></i></span>
          Employee Management
        </div>
      </div>
      <div className=' col p-4'>
        <div className='mx-auto col-6 box-2  shadow  mb-5 bg-body-tertiary rounded'>
          <div className=''>
            <div className='text-white fs-3x p-3 box'>
              New Employee
            </div>
            <div className='p-4'>
              <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                  <Form.Label column sm={3}>
                    First Name
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control type="text" name='fname' value={inputData.fname} onChange={handleInput} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                  <Form.Label column sm={3}>
                    Last Name
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control type="text" name='lname' value={inputData.lname} onChange={handleInput} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                  <Form.Label column sm={3}>
                    Email
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control type="email" name='email' value={inputData.email} onChange={handleInput} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                  <Form.Label column sm={3}>
                    Address
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control type=" " name='address' value={inputData.address} onChange={handleInput} as={'textarea'} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                  <Form.Label column sm={3}>
                    Phone
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control type="number" name='contact' value={inputData.contact} onChange={handleInput} />
                  </Col>
                </Form.Group>
                <div className='d-flex justify-content-center'>
                  <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Button type="submit" className='btn btn-success'>Submit</Button>
                    </Col>
                  </Form.Group>

                </div>
              </Form>
            </div>
          </div>

        </div>
      </div>
      <div className='blank'>

      </div>

      <div className='shadow  mb-5 bg-body-tertiary rounded'>
        <div className='box '>
          <h1 className='display-3x p-2 text-white'>
            Manage Empolyees
          </h1>
        </div>
        <div className='p-2'>
          <Table striped bordered hover size="sm">
            <thead className=''>
              <tr className='text-center bor '>
                <th>Id</th>
                <th>First Name</th>
                <th>Last name</th>
                <th> Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                viewData.map((data) => {
                  return (
                    <>

                      <tr className='text-dark text-center'>
                        <td>{data.id}</td>
                        <td>{data.fname}</td>
                        <td>{data.lname}</td>
                        <td>{data.email}</td>
                        <td>{data.address}</td>
                        <td>{data.contact}</td>

                        <td>
                          <div className='d-flex justify-content-evenly'>
                            <div>
                              <button className='border border-0' onClick={() => handleEdit(data.id)}><i class="bi bi-pencil-square"></i></button>

                            </div>
                            <div>
                              <button className='border border-0' onClick={() => handleDelete(data.id)}><i class="bi bi-trash-fill"></i></button>

                            </div>
                            <div>
                              <button className='border border-0' onClick={() => handleDelete(data.id)}><i class="bi bi-eye-fill"></i></button>

                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  )
                })
              }
            </tbody>
          </Table>

        </div>
      </div>








    </Container>


  );
}

export default FormRohit;