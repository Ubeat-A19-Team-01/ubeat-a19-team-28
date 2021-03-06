class Users {

    signupUsers = async (url, data) => {
        const response = await fetch(url + 'signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password
            })
        });
        const json = await response.json();
        return {
            id: json.id,
            name: json.name,
            email: json.email,
            follows: json.following
        }
    };

    loginUsers = async (url, data) => {
        const response = await fetch(url + `login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        });
        return await response.json()
    };

    logoutUsers = async (url) => {
        const response = await fetch(url + 'logout', {
            method: 'POST'
        });
        alert(await response.json());
        return await response.json();
    };

    getUser = async(url, id, token) => {
        const response = await fetch(`url/users/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        });
        const json = await response.json();
        return {
            id: json.id,
            name: json.name,
            email: json.email,
            following: json.following
        }
    };
    getConnectedUser = async (url,token) => {
        const response = await fetch(url + 'tokenInfo', {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        });
        const json = await response.json();
        return {
            id: json.id,
            name: json.name,
            email: json.email,
            following: json.following
        }
    };

    flowUser = async(url,token,id) => {
        const response = await fetch(url + 'follow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 'Authorization': token
            },
            body: JSON.stringify({
                id: id                
            })
        });
        return await response.json() ;

    } ; 
      
    unfollowUser=async(url,token,id) => {
        const response = await fetch(url + 'follow/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                 'Authorization': token
            }
          
        });
        return await response.json() ;

    } ; 

}

export default Users;