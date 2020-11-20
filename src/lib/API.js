const API = async (_route, _method, _data, _host) => {
    let host = "localhost:2299"
    let _url = host + "/" +_route;
    return fetch(
        _url,
            {
            method: _method,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*",
            },
            body: JSON.stringify(_data),
            },
            )
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error - 404 Not Found')
                }
                
                return response.json();
            })
            .catch((error) => {
                console.log(error)
                dispatch(requestTodosError(error))
            })
}
            
export default API;
  
