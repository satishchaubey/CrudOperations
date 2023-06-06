import React,{Component} from 'react';
import './styles/CreateUsers.css';
import {route,redirect} from '../Router';


export default class Create extends Component{

    // lifeCycle :mounting state

    constructor(props){
        super(props)
        this.state={
            name:"",
            mobile:"",
            email:"",
            password:"",
            users:[],
            msg:"",
       }
    }


    render(){
       //console.log(this.state)
        return(
        <React.Fragment>
        <div className="container-fluid mt-4">
            <div className="col-sm-4 mx-auto">
                <h1 className="text-secondary text-center mb-4">Register Here !</h1>
                <hr/>
                {this.state.msg}
                <form>
                    NAME: <input type="text" className="form-control " placeholder="Please Enter Your Name...."
                     value={this.state.name} onChange={(event)=>{this.setState({name:event.target.value})}} />
                    MOBILE :<input type="mobile" className="form-control" placeholder="Please Enter Your Mobile Number...." 
                     value={this.state.mobile} onChange={(event)=>{this.setState({mobile:event.target.value})}}/>
                    EMAIL: <input type="email" className="form-control " placeholder="Please Enter Your Email...."
                      value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/>           
                    Password: <input type="password" className="form-control " placeholder="Please Enter Your Password...." 
                     value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}}/>           
                    <input type="button" className="btn btn-warning w-25 text-light mt-3" value="Save" id="btn" onClick={this.saveData}/>
                </form>
            </div>
        </div>
        </React.Fragment>
        );
    }
    saveData=()=>{
        //console.clear()
        //console.log(this.state)
        let newObject ={
            name:this.state.name,
            mobile:this.state.mobile,
            email:this.state.email,
            password:this.state.password
        }

        const url='http://localhost:5001/users/'

        let promise = fetch(url,{
            headers:{
                "Content-Type":"application/json",
            },
            method:"POST",
            body:JSON.stringify(newObject)
        });
        promise.then((response)=>{
            // return response.json();// GET jb bi chlate h tb aise likhte h
            if(response.ok){    // response.ok ==true
                this.setState({
                    name:"",
                    mobile:"",
                    email:"",
                    password:"",
                    msg:<span className='success'>User Created Successfully.</span>
                });

                // let ID1=setTimeOut(()=>{
                //     this.setState({
                //         msg:"",
                //     });
                // },5000)

                return redirect('show');

            }
        }).then((data)=>{
            console.log(data);
        }).catch((error)=>{
            console.log(error);
            this.setState({
                msg:<span className='error'>OOPS Try Again Later</span>
            });

            let ID1=setTimeout(()=>{
                this.setState({
                    msg:"",
                })
            },5000);
        });
    }
   
}