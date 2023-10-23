const backendUrl = "http://localhost:8000"

const getUrl = (path)=>{
    return backendUrl+"/"+path
}

const dummyImgUrl = "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVXBb2OIJF5kpOGVZ5TNjIydKyVReN6qd6UC2BJGpHfU1KGl1eaCApGzqcdP6LzCYI1Vt2P8UYL2d7FTP4of0zggLAC7i8TlmTI.webp?r=841"
const dummyDescription = "This is a description"

const getContentTemplateFromMetadataList = (list)=>{
    let returnList = []

    if(list===undefined)
        return returnList
    
    list.map((data)=>{
        let dataDict = {}
        if (data["_source"]["title"] !== undefined)
            dataDict["name"] = data["_source"]["title"]

        if (data["_source"]["image_url"]!==undefined)
            dataDict["image"] = data["_source"]["image_url"]

        else
            dataDict["image"] = dummyImgUrl

        if(data["_source"]["description"]!==undefined)
            dataDict["description"] = data["_source"]["description"]

        else
            dataDict["description"] = dummyDescription

        if(data["_source"]["platform"]!==undefined)
            dataDict["platform"] = data["_source"]["platform"]

        if(data["_source"]["genre"]!==undefined)
            dataDict["genre"] = data["_source"]["genre"].split(',')
        
        dataDict["key"] = data["_id"]
        returnList.push(dataDict)
    })

    return returnList
}

module.exports = getUrl
module.exports.getContentTemplateFromMetadataList = getContentTemplateFromMetadataList