/**
 * Store username and password keys and their values
 */

class LoginCredentials {

    static setUsername ( username ){
        localStorage.setItem('username', username)
    }

    static setPassword ( password ){
        localStorage.setItem('password', password);
    }

    static getUsername(){
        return localStorage.getItem('username');
    }

    static getPassword(){
        return localStorage.getItem('password');
    }

}

export {LoginCredentials};