import React from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody  } from 'reactstrap';
import {Link} from 'react-router-dom'
import Carousel from './carousel'

class Homepage extends React.Component{
    render (){
        return (
        <div className="container">    
          <div className="row justify-content-center">
            <Carousel/>
          </div>
          
          <CardGroup>
            <Card>
                <CardImg top height="260px" width="200px" src="https://store.playstation.com/store/api/chihiro/00_09_000/container/ID/en/19/UP0102-CUSA08216_00-ASIAFULLGAME0000/1552021784000/image?w=360&h=360&bg_color=000000&opacity=100&_version=00_09_000" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Produk Kami</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <Link to='/products'><Button>Check Our Product</Button></Link>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Movie Database</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                  <Link to='/search'><Button>Go to Our Movie Database</Button></Link>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                  <Button>Button</Button>
                </CardBody>
            </Card>
          </CardGroup>
        </div>
        )
    }
}


export default Homepage;