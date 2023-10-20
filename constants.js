const backendUrl = "http://localhost:8000"

const getUrl = (path)=>{
    return backendUrl+"/"+path
}

module.exports = getUrl