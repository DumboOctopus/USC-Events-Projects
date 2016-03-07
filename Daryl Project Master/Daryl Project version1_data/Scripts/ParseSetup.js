var parseData;

parseData = {
    applicationId:"eQhFjYnC5HEpp6gieq9WQzJ6aKPabmt1dYOI8DRF",
    restApiKey:"cZ9d2n6we3gzxFcCJrs1e3kYkhEXOwMvpnGMcHC2",
    urls:{
        usersURL:"https://api.parse.com/1/users",
        mapPointObjectPrefix: "https://api.parse.com/1/classes/MapPoint",
    },
    
};
parseData.requestHeaders = [
    "X-Parse-Application-Id: " + parseData.applicationId,
    "X-Parse-REST-API-Key: " + parseData.restApiKey
];
parseData.minPasswordSize = 6;

parseData.createMapPoint = function( in_name, in_location, in_date, in_address, in_isOnCampus, in_price, in_description){
    

    var createMapPointReq = new SMF.Net.WebClient({
        url: parseData.urls.mapPointObjectPrefix,
        httpMethod: "POST",
        requestHeaders : parseData.requestHeaders,
        requestString : JSON.stringify({
            location: in_location,
            eDescription: in_description,
            address: in_address,
            date: in_date,
            name: in_name,
            isOnCampus: in_isOnCampus,
            price: in_price,
            clicks: 0,
            comments: [],
            createdBy: {
                objectId: parseData.sessionInfo.objectId,
                className: "_User",
                __type: "Pointer"
            }
        }),
        onSyndicationSuccess : function (e) {
            alert("obj created");
            
        },
        onServerError: function(e){
            alert(e);
        }
    }); 
    createMapPointReq.run(true);
}
parseData.getAllMapPoints = function (callback){
    var mapPointReq = new SMF.Net.WebClient({
        url: parseData.urls.mapPointObjectPrefix,
        httpMethod: "GET",
        requestHeaders : parseData.requestHeaders,
        
        onSyndicationSuccess : function (e) {
            //return (JSON.parse(mapPointReq.responseText)).results;
            //alert( JSON.parse(mapPointReq.responseText).results);
            //return (JSON.parse(mapPointReq.responseText)).results;
            callback((JSON.parse(mapPointReq.responseText)).results);
        },
        onServerError: function(e){
            alert("Please try again later" );
        }
    }); 
    mapPointReq.run(true);
}
parseData.logout = function (callback)
{
    var logoutRequest = new SMF.Net.WebClient({
        url: "https://api.parse.com/1/logout",
        httpMethod: "POST",
        requestHeaders : [
            parseData.requestHeaders[0],
            parseData.requestHeaders[1],
            "X-Parse-Session-Token: " + parseData.sessionInfo.sessionToken
        ],
        onSyndicationSuccess : function (e) {
            Dialogs.dGenericLoading.close();
            alert("ehe");
            callback();
        },
        onServerError: function(e){
            alert(e);
            Dialogs.dGenericLoading.close();
            
        }
    });
    logoutRequest.run(true);
    Dialogs.dGenericLoading.show();
}

//
parseData.sessionInfo = {};