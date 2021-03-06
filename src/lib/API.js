
const API = async (_route, _method, _data) => {

    try{
        let host = "http://192.168.1.97:2299"
        host = "http://192.162.71.184:2299"
        
        let _url = host + "/" +_route;

        console.log("API CALL: "+_url + "  "+_method+"  "+"  ..");

        if(_method.toUpperCase()=="GET"||_method.toUpperCase()=="HEAD"){
            
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
                })
            }
    catch(e){
        return [];
    }
}
            
export default API;
  
