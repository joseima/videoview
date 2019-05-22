import axios from 'axios'

const KEY = 'AIzaSyBbdKy7e_EYP9pv-cCg-9qKV6wvBIl4itg';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});

