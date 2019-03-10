import React from 'react'
import axios from 'axios'
import {urlApi} from './../support/urlApi'
import './../support/css/product.css'

class ProductList extends React.Component{
    state = {listProduct : []}

    componentDidMount(){
        this.getDataProduct()
    }

    getDataProduct = () => {
        axios.get( urlApi + '/products')
        .then((res) => this.setState({listProduct : res.data}))
        .catch((err)=> console.log(err))
    }

    renderProdukJsx = () => {
        var jsx = this.state.listProduct.map((val) => {
            if (val.discount > 0){
                return <div className="card col-md-3" style={{width: '18rem', margin: '20px'}}>
                        <img src={val.img} style={{width :'250px', height :'250px'}} className="card-img-top img" alt="Card cap" />
                        <div className="discount">{val.discount}%</div>
                        <div className="kategori mb-2">{val.kategori}</div>
                            <div className="card-body">
                                <h4>{val.nama}</h4>
                                <p className="card-text mr-5" style={{textDecoration:'line-through', color:'red', display:'inline'}}>Rp. {val.harga}</p>
                                <p style={{display:'inline', fontWeight:'500'}}>Rp. {val.harga - (val.harga*(val.discount/100))}</p>
                                <p>{val.deskripsi}</p>
                                <input type='button' className="btn btn-primary" value="Add to Cart"/>
                            </div>
                    </div>
                    
            } else {
                return <div className="card col-md-3" style={{width: '18rem', margin: '20px'}}>
                        <img src={val.img} style={{width :'250px', height :'250px'}} className="card-img-top img" alt="Card cap" />
                            <div className="kategori mb-2">{val.kategori}</div>
                                <div className="card-body">
                                    <h4>{val.nama}</h4>
                                    <p className="card-text mr-5" style={{display:'inline', fontWeight:'500'}}>Rp. {val.harga}</p>
                                    <p>{val.deskripsi}</p>
                                    <input type='button' className="btn btn-primary" value="Add to Cart"/>
                                </div>
                    </div>
            }
            
        })
        return jsx
    }

    render(){
        return (
        <div className="container">
            <div className="row justify-content-center">
            {this.renderProdukJsx()}
            </div>
        </div>
        )
    }
}

export default ProductList