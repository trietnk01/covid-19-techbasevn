import React, {Component} from 'react';
class Covid19DetailItem extends Component {
	constructor(props){
		super(props);
		
	}	
	render(){
		let {phantu}=this.props;
		let item=phantu.item;				
		return (
			<tr>
          <td >{item.Cases}</td>
          <td >{item.City}</td>
          <td >{item.CityCode}</td>
          <td >{item.Country}</td>
          <td >{item.CountryCode}</td>
          <td >{item.Date}</td>
          <td >{item.Lat}</td>
          <td >{item.Lon}</td>
          <td >{item.Province}</td>
          <td >{item.Status}</td>
        </tr>
			);
		}
}
export default (Covid19DetailItem);
