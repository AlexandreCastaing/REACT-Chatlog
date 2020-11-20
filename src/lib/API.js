const API = async (_route, _method, _data, _successMethod, _addressAPI) => {
 
    let addressAPI = "http://localhost:2299/";




    if(_addressAPI!==null&&_addressAPI!==undefined) addressAPI = _addressAPI;

    let request = (_route, _method, _data, _successMethod)=>{

        let _url = addressAPI+_route;
        
        if(_method != "GET"){
            var XHR = new XMLHttpRequest();

            XHR.addEventListener('load', function(res) {
                let resData = res.srcElement.response;
                let ret = _successMethod(resData);
                console.log(ret)
                return ret;
            });
            XHR.addEventListener('error', function(err) {
                console.log(err)
            });
            XHR.open(_method, _url);
            
            XHR.setRequestHeader('Content-Type', 'application/json');
            XHR.setRequestHeader('Access-Control-Allow-Origin', "*");
            
            XHR.send(JSON.stringify(_data));
        }
        else{

            let url = _url + '?';
            let params = _data;

            var notFirst = false;
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                url += (notFirst ? '&' : '') + key + "=" + params[key].replace('#', '');
                }
                notFirst = true;
            }
            
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    let resData = xmlhttp.responseText;
                    let ret = _successMethod(resData);
                    console.log(ret)
                    return ret;
                }
            };
            xmlhttp.open('GET', url, true);
            xmlhttp.send();
            
        }
    }
    return request(_route, _method, _data, _successMethod);

}
export default API;
  

