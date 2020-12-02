import * as types from './../constants/ActionType';

let defaultState = {
	isShow:false,		
	style: 'info',
	title: '',
	content: ''
};

const notify = (state = defaultState, action) => {
	let {style = 'info', title, content} = action;

	switch(action.type){

		
			
		default:			
			return state;
	}
}

export default notify;