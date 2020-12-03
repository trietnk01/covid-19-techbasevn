import React, {Component} from 'react';
import {connect} from 'react-redux';
import { trackPromise } from 'react-promise-tracker';
import {actShowNotify,actHideNotify} from "./../actions/index";
import {covid19API} from "./../api/covid19API";
class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      covid19Items:[],                
    }
  }  
  showCovid19List(items){
    let xhtml=null;
    if(items.length > 0){
      xhtml=items.map((covid19Item,index)=>{
        return (                   
          <tr key={index}>
          <td >{covid19Item.Cases}</td>
          <td >{covid19Item.City}</td>
          <td >{covid19Item.CityCode}</td>
          <td >{covid19Item.Country}</td>
          <td >{covid19Item.CountryCode}</td>
          <td >{covid19Item.Date}</td>
          <td >{covid19Item.Lat}</td>
          <td >{covid19Item.Lon}</td>
          <td >{covid19Item.Province}</td>
          <td >{covid19Item.Status}</td>
        </tr>
        );
      });
    }
    return xhtml;
  }
  setCovid19data(countrySlug){      
    let data=[];
    let url="https://api.covid19api.com/country/"+countrySlug+"/status/confirmed";
    trackPromise(
      covid19API.fetchCovid19(url)
        .then((covid19DataResponse) => {
          data =covid19DataResponse.map((item,index)=>{            
            return item;
          });
          this.setState({covid19Items:data});                    
        })
    );           
  }
  componentWillMount(){    
    let {query_country_name}=this.props;
    this.setCovid19data(query_country_name);     
  }
  componentWillReceiveProps(nextProps) {     
    let {query_country_name}=nextProps; 
     
    this.setCovid19data(query_country_name);  
  }

	render(){      
      let {covid19Items}=this.state;              
  return (    
    <div>                               
            <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Cases</th>
            <th scope="col">City</th>
            <th scope="col">CityCode</th>
            <th scope="col">Country</th>
            <th scope="col">CountryCode</th>
            <th scope="col">Date</th>
            <th scope="col">Lat</th>
            <th scope="col">Lon</th>
            <th scope="col">Province</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>          
        {this.showCovid19List(covid19Items)}
        </tbody>
      </table>
    </div>
  );
  }
}
const mapStateToProps = state => {
  return {
      query_country_name: state.search,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {	
  return {		      	
    showNotify:()=>{			
      dispatch(actShowNotify());
    },
    hideNotify:()=>{
      dispatch(actHideNotify());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
