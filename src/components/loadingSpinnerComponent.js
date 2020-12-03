import React, {Component} from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
class loadingSpinnerComponent extends Component {
  constructor(props){
    super(props);
  }  
	render(){ 
    const { promiseInProgress } = usePromiseTracker();
  return (    
    promiseInProgress && (
      <div className="spinner">
        <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
      </div>
    )
  );
  }
}
export default loadingSpinnerComponent;
