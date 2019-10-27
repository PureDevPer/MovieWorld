import axios from 'axios';

const API_KEY = '32607b235b42290996beb502863409b6';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: API_KEY,
		language: 'en-US'
	}
});

export const moviesApi = {
	nowPlaying: () =>
		api.get(`movie/now_playing`, {
			params: {
				api_key: API_KEY,
				language: 'en-US'
			}
		}),
	upcoming: () =>
		api.get(`movie/upcoming`, {
			params: {
				api_key: API_KEY,
				language: 'en-US'
			}
		}),
	popular: () =>
		api.get(`movie/popular`, {
			params: {
				api_key: API_KEY,
				language: 'en-US'
			}
		}),
	movieDetail: id =>
		api.get(`movie/${id}`, {
			params: {
				append_to_response: 'videos',
				api_key: API_KEY
			}
		}),
	search: term =>
		api.get('search/movie', {
			params: {
				query: encodeURIComponent(term),
				api_key: API_KEY
			}
		})
};

export const tvApi = {
	topRated: () =>
		api.get('tv/top_rated', {
			params: {
				api_key: API_KEY,
				language: 'en-US'
			}
		}),
	popular: () =>
		api.get('tv/popular', {
			params: {
				api_key: API_KEY,
				language: 'en-US'
			}
		}),
	airingToday: () =>
		api.get('tv/airing_today', {
			params: {
				api_key: API_KEY,
				language: 'en-US'
			}
		}),
	showDetail: id =>
		api.get(`tv/${id}`, {
			params: {
				append_to_response: 'videos',
				api_key: API_KEY
			}
		}),
	search: term =>
		api.get(`search/tv`, {
			params: {
				query: encodeURIComponent(term),
				api_key: API_KEY
			}
		})
};

export default api;
