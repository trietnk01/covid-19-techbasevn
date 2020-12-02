import React, {Component} from 'react';
import Covid19DetailItem from "./../components/Covid19DetailItem";
class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[]
    }
  }
  componentWillMount(){
      let data=[];
      let url ='https://api.covid19api.com/country/south-africa/status/confirmed';
      fetch(url)
      .then((response)=>response.json())
      .then((responseData)=>{
      responseData.map((item,index)=>{
        data.push({item});
      });
      this.setState({items:data});
    });
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

export default HomePage;
