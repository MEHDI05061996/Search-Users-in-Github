import React, { Component } from 'react';
import axios  from 'axios';
import User from './User';
import SearchUser from './SearchUser'
export class Users extends Component {

constructor(props) {
    super(props)

    this.state = {
         users:[
        
                /*{
                    login: "mojombo",
                    id: 1,
                    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                    html_url: "https://github.com/mojombo",
                    repos_url: "https://api.github.com/users/mojombo/repos",
                
                  },
                  {
                    login: "defunkt",
                    id: 2, 
                   avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                   html_url: "https://github.com/defunkt",
                   repos_url: "https://api.github.com/users/defunkt/repos",
                   
                  },
                  {
                   login: "pjhyett",
                   id: 3,
                   avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                   html_url: "https://github.com/pjhyett",
                   repos_url: "https://api.github.com/users/pjhyett/repos",
                   
                  }*/,
                  
             
         ]
    }
}
                      getUsers = () =>{
                             axios.get('https://api.github.com/users')
                             .then(respense =>{
                                 this.setState({
                                     users:respense.data    })
                             })

                 }
                
                 componentDidMount(){
                     this.getUsers();
                 }

                 searchUserGit=(data)=>{
                     if (data !=''){
                         axios.get(`https://api.github.com/search/users?q=${data}`)
                         .then(respense =>{
                            this.setState({
                                users:respense.data.items    })
                         })
                    }
                 }

    render() {
        return (
            <div>

                <div className="row my-2">
                    <div className="col-md-12">
                        <SearchUser getSearchUser={this.searchUserGit}></SearchUser>

                    </div>
                </div>


                <div className="row">
                {this.state.users.map(user=>(

                <div className="col-md-4" key={user.id} >
                 <User user={user}  />
                    {/*<div class="card">
                        <img class="card-img-top" src={user.avatar_url} alt=""/>
                        <div class="card-body">
                <h4 class="card-title">{user.login}</h4>
                            <p class="card-text">
                                <a href={user.html_url} className="btn btn-success">schow more</a>
                                <a href={user.repos_url} className="btn btn-warning">Repositoies</a>
                            </p>
                        </div>
                    </div>*/}

                </div>
        
                ))}
                </div>
            </div>
        )
    }
}

export default Users;
