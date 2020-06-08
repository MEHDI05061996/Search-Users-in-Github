import React, { Component } from 'react'

export class SearchUser extends Component {
    state = {
        search:'mehdi'
    }
   
    handleForm = (e) =>{
        this.setState({
            search: e.target.value
        })
    }
    SearchUser =(e) =>{
        e.preventDefault();
        this.props.getSearchUser(this.state.search)
    
    }



    render() {
        const {search} = this.state;
        return (
            
                <form onSubmit={this.SearchUser}>
                    <div className="form-group">
                        
                        <input onChange={this.handleForm} value={search} placeholder="Search Users..."   
                        id="search" type="text" className="form-control"/>
                        </div>
                        <button className="btn btn-success bnt-block" >Search</button> 
                        
                </form>
                 
        
        )
    }
}

export default SearchUser
