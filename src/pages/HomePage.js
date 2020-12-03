import React, {Component} from 'react';
import Covid19DetailItem from "./../components/Covid19DetailItem";
import {connect} from 'react-redux';
class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      strDemo:""           
    }
  }  
  showElementBody(items){
    let xhtml=null;
    if(items.length > 0){
      xhtml=items.map((phantu,index)=>{
        return (
          <Covid19DetailItem key={index} phantu={phantu} index={index} />
        );
      });
    }
    return xhtml;
  }
  setCovid19data(ctSlug){  
    let data=[];         
    if(ctSlug !== ""){       
      let url ='https://api.covid19api.com/country/'+ctSlug+'/status/confirmed';      
      fetch(url)
      .then((response)=>response.json())
      .then((responseData)=>{
      responseData.map((item,index)=>{
        data.push({item});
      });        
      this.setState({items:data});
    }); 
    }else{
      this.setState({items:[]});
    }   
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
      let {items}=this.state;                                 
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
        {this.showElementBody(items)}
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
export default connect(mapStateToProps,null)(HomePage);
