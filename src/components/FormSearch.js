import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actSearch} from "./../actions/index";
class FormSearch extends Component {
	constructor(props){
		super(props);
		this.state={
			country_name:"",			
		}		
	}
	handleChange=(event)=>{		
		this.setState({country_name:event.target.value});
	}
	handleSearch=()=>{		
	  this.props.goSearch(this.state.country_name);
	}
	handleClear=()=>{
		console.log("handleClear");
	}		
	componentDidUpdate(){
        console.log("componentDidUpdate");
    }	
	render(){		
		let str_search="";
		if(this.state.country_name !==""){
			str_search=this.state.country_name;
		}else{
			str_search=this.props.query_country_name;
		}			
		return (
			<form >					
              <div className="form-group">						
                <input name="country_name" value={str_search} onChange={this.handleChange} type="text" className="form-control" placeholder="Enter artist name ..." />
                <div className="input-group-btn">
                  <button type="button" className="btn btn-danger" onClick={this.handleSearch}>Search</button>
                  <button type="button" className="btn btn-warning" onClick={this.handleClear}>Clear</button>
                </div>
              </div>
            </form>	
			);
		}
}
const mapStateToProps = state => {
    return {
        query_country_name: state.search
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {	
    return {		
        goSearch: (query_country_name) => {			
            dispatch(actSearch(query_country_name)) ;
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FormSearch);
