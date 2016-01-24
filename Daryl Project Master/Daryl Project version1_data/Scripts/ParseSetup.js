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
parseData.createMapPoint = function(in_location, in_description, in_address, in_date, in_name){
    var createMapPointReq = new SMF.Net.WebClient({
        url: parseData.urls.mapPointObjectPrefix,
        httpMethod: "POST",
        requestHeaders : parseData.requestHeaders,
        requestString : JSON.stringify({
            location: in_location,
            description: in_description,
            address: in_address,
            date: in_date,
            name: in_name
        }),
        onSyndicationSuccess : function (e) {
            alert("obj created");

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