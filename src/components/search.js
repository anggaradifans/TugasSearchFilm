import React from 'react'
import axios from 'axios'
import {ApiMovie , ApiKey} from './../support/urlApi'



class Search extends React.Component {
    state = {listMovie : []}

    onBtnSearchClick = () => {
        var searchValue = this.refs.searchBook.value
        axios.get(ApiMovie+searchValue+'&apikey='+ApiKey) 
        .then((res)=> this.setState({listMovie : res.data.Search}))
        .catch((err)=> console.log(err))
    }

    renderMovieJsx = () => {
        var jsx = this.state.listMovie.map((val) => {
            return <div className="card col-md-3" style={{width: '18rem' ,margin:'10px'}}>
                        <img src={val.Poster} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>{val.Title}</h4>
                                <h5>{val.Type}</h5>
                                <h5>{val.Year}</h5>
                            </div>
                    </div>
        })
        return jsx
    }

    render(){
        return (
            <div className="container">
                <h2>Selamat Datang di Movie</h2>
                <div className="row">
                    <div className="col-lg-3 mt-4">
                        <div className="input-group mb-2">
                                <input type="text" ref="searchBook" className="form-control" placeholder="Masukkan nama film ... "  />
                            <div className="input-group-append">
                                <button className="btn btn-info" type="button" id="button-addon2"  onClick= {this.onBtnSearchClick} ><i className="fas fa-search" /></button>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="row justify-content-center">
                    {this.renderMovieJsx()}
                </div> 
            </div>
        )
    }
}

export default Search