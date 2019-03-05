import React from 'react'
import { Jumbotron, Container } from 'reactstrap';

class Homepage extends React.Component{
    render (){
        return (
            <div>
            <Jumbotron fluid>
              <Container fluid>
                <h2 className="display-3">Selamat Datang di Website, Selamat Belanja</h2>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </Container>
            </Jumbotron>
          </div>
        )
    }
}


export default Homepage;