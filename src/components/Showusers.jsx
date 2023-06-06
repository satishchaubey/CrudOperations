import React,{Component} from 'react';
import { route,redirect } from '../Router';
export default class Show extends Component{
    
    constructor(props){
		
		console.log('This is mouting state : 1st Cycle');
		super(props);
		this.state = {
            name:"",
            email:"",
            mobile:"",
            password:"",
            users:[],
			msg:""
		}
		
	}
	/************Start of Promise Fetch Api ***************/

	componentDidMount(){
		
		console.log('This is Update state : 2nd Cycle');
		
		const url = 'http://localhost:5001/users/';
		
		let promise = fetch(url);
		promise.then((response)=>{
			return response.json();
		}).then((data)=>{
			//Object Json
			if(Array.isArray(data)){
				console.log('chal rha hai');
				
				this.setState({
					users:data	
				})
			}

		}).catch((error)=>{
			console.log(error);
		})
	}
	
	componentWillMount(){		
		console.log("Unmounted is 3rd cycle");
	}
	
    render(){
        return(
            <React.Fragment>
               <table className="table">
				{this.state.msg}
                    <thead className="table-dark">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">MOBILE NUMBER</th>
                        <th scope="col">EDIT</th>
                        <th scope="col">DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.generateData()}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
    generateData =()=>{
        return this.state.users.map((item,index)=>{
			return (
			<tr key={item.id}>
				<td>{item.id}</td>
				<td>{item.name}</td>
				<td>{item.email}</td>
				<td>{item.mobile}</td>

				{/* <td><a href={"#edit/"+item.id}>EDIT</a></td>
				<td><a href={"#delete"+item.id}>DELETE</a></td> */}

				<td><button type="button" className='btn btn-success' onClick={()=>{this.editUser(item.id)}}>EDIT</button></td>
				<td><button type="button" className='btn btn-danger' onClick={()=>{this.deleteUser(item.id,index)}}>DELETE</button></td>
			</tr>
			)
		})
    }
	deleteUser = (id) =>{
		if(window.confirm('Are you Sure to delete?')){
			//console.log(id)
			//fetch Api
			const url='http://localhost:5001/users/'+id;

			let promise = fetch(url,{
				headers:{
					"Content-Type":"application/json",
				},
				method:"DELETE",
				//body:JSON.stringify(newObject)
			});
			promise.then((response)=>{
				// return response.json();
				if(response.ok){

					let userData =[...this.state.users];
					userData.splice(index,1);

					this.setState({
						msg:<span className='success'>User Deleted Successfully.</span>
					});
	
					// let ID1=setTimeOut(()=>{
					//     this.setState({
					//         msg:"",
					//     });
					// },5000)n
	
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
	editUser=(id)=>{
		//console.log(id)
		
	}
}