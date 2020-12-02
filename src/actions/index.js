import * as types from './../constants/ActionType';
export const actSearch = (query_country_name) => {
	return {
		type : types.CHANGE_SEARCH,
		query_country_name
	}
}
