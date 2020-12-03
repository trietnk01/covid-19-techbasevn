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
		this.props.goSearch("");
		this.setState({country_name:""});
	}				
	render(){				
		let str_search=this.state.country_name;				
		return (
			<form className="form-search">					
              <div className="form-group">						
                <input name="country_name" value={str_search} onChange={this.handleChange} type="text" className="form-control" placeholder="Enter artist name ..." />
                <div className="input-group-btn btn-click">
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
