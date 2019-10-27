import axios from 'axios';

const API_KEY = '32607b235b42290996beb502863409b6';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: '32607b235b42290996beb502863409b6',
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
	upcoming: () => api.get(`movie/upcoming?api_key=${API_KEY}`),
	popular: () => api.get(`movie/popular?api_key=${API_KEY}`),
	movieDetail: id =>
		api.get(`movie/${id}`, {
			params: {
				append_to_response: 'videos'
			}
		}),
	search: term =>
		api.get('search/movie', {
			params: {
				query: encodeURIComponent(term)
			}
		})
};

export const tvApi = {
	topRated: () => api.get('tv/top_rated'),
	popular: () => api.get('tv/popular'),
	airingToday: () => api.get('tv/airing_today'),
	showDetail: id =>
		api.get(`tv/${id}`, {
			params: {
				append_to_response: 'videos'
			}
		}),
	search: term =>
		api.get(`search/tv`, {
			params: {
				query: encodeURIComponent(term)
			}
		})
};

export default api;
