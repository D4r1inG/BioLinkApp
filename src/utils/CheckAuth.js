

const checkAuth = {
    getToken() {
        return localStorage.getItem('accessToken');
    }
}

export default checkAuth