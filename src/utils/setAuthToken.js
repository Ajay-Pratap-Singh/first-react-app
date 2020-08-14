import request from './requests'

const setAuthToken = token => {
    if (token) {
        request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        console.log(token,'set to header');
    } else {
        delete request.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken