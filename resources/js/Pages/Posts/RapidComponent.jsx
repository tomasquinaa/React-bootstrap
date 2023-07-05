import React, { Component } from 'react';
import { Navbar, Nav, Table } from 'react-bootstrap';

export default class RapidComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.datas.data; // Array de dados

    return (
      <div>
        <Navbar bg="dark" variant="dark" className="mb-4">
          <Navbar.Brand href="#home">QuinaSoft</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Recursos</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav>
        </Navbar>

       
        <h1 className="text-center">Dados Provenientes da Rapid API</h1>
        <br /><br />

        <div className="col-md-8 mx-auto">
            <div className="table-responsive">
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Abreviatura</th>
                    <th>Nome</th>
                    <th>Nome Completo</th>
                    <th>Cidade</th>
                    <th>Conferencia</th>
                    <th>Divisao</th>
                    {/* Adicione outras colunas conforme necessário */}
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                    <td>{item.abbreviation}</td>
                    <td>{item.name}</td>
                    <td>{item.full_name}</td>
                    <td>{item.city}</td>
                    <td>{item.conference}</td>
                    <td>{item.division}</td>
                    {/* Adicione outras células de dados conforme necessário */}
                    </tr>
                ))}
                </tbody>
            </Table>
            </div>
        </div>
      

        <button type="button">Clique aqui!</button>
      </div>
    );
  }
}
