
const API = async (_route, _method, _data) => {
    let host = "http://192.168.1.97:2299"
    let _url = host + "/" +_route;

    console.log("API CALL: "+_url + "  "+_method+"  "+"  ..");
    //console.log(_data);

    if(_method.toUpperCase()=="GET"||_method.toUpperCase()=="HEAD"){
        
        // loop through object and assemble the url
        let url = _url + '?';
        let params = _data;
        let isNotFirst = false;
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
            url += (isNotFirst ? '&' : '') + key + "=" + params[key].replace('#', '');
            }
            isNotFirst = true;
        }
        return fetch(
            url,
                {
                    method: _method,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': "*",
                    },
                },
            )
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error - 404 Not Found')
                }
                return response.json();
            })
            .catch((error) => {
                console.log(">> FETCH GET ERROR: "+error)
            })
    }

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
                console.log(">> FETCH ERROR: "+error)
                //dispatch(requestTodosError(error))
            })
}
            
export default API;
  
