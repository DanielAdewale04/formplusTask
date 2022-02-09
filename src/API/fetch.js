export default { 
    get_request : async (url) => {
        return await new Promise((resolve, reject)=>{
            const options = {
                method : "GET",
                // mode:'no-cors',
                credentials:"same-origin",
                headers : {
                    "content-type" : "application/json",
                    Accept : 'application/json',
                },
            }
            fetch(`http://127.0.0.1:4513/https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/${url}`, options).then((res)=>{
                res.json().then((json)=>{
                        resolve(json);
                }).catch(err=>{reject("Please check your internet connection!")})
            }).catch(err=>{reject("Please check your internet connection!")})

            setTimeout(()=>{reject("Connection Timeout, Please check your Internet connection!")}, 30000);
        });
    },
}
