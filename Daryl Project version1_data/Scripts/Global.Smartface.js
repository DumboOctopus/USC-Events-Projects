var parseData;

parseData.requestHeaders = [
    "X-Parse-Application-Id: " + parseData.applicationId,
    "X-Parse-REST-API-Key: " + parseData.restApiKey
];
parseData.createMapPoint = function(in_location, in_description, in_address, in_date){
    var createMapPointReq = new SMF.Net.WebClient({
        url: parseData.urls.mapPointObjectPrefix,
        httpMethod: "POST",
        requestHeaders : parseData.requestHeaders,
        requestString : JSON.stringify({
            location: in_location,
            description: in_description,
            address: in_address,
            date: in_date
        }),
        onSyndicationSuccess : function (e) {
            alert("obj created");

        }
    }); 
    createMapPointReq.run(true);
}
parseData.getAllMapPoints = function (){
    var mapPointReq = new SMF.Net.WebClient({
        url: parseData.urls.mapPointObjectPrefix,
        httpMethod: "GET",
        requestHeaders : parseData.requestHeaders,
        
        onSyndicationSuccess : function (e) {
            var response = (JSON.parse(mapPointReq.responseText)).results;
            return response;
        },
        onServerError: function(e){
            alert("Please try again later");
        }
    }); 
    mapPointReq.run(true);
}
/**
* Triggered when application is started.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this Application
*/
function Global_Events_OnStart(e) {
    changeLang(Device.language, true);
    include("BC.js"); //included for future BC support. Removing is not advised.
//      Comment following block for navigationbar/actionbar sample. Read the JS code file for usage.
//      Also there is a part of code block in Page1, which should be copied to every page for HeaderBar usage

    load("HeaderBar.js");
    header = new HeaderBar();

    //parse
    parseData = {
        applicationId:"eQhFjYnC5HEpp6gieq9WQzJ6aKPabmt1dYOI8DRF",
        restApiKey:"cZ9d2n6we3gzxFcCJrs1e3kYkhEXOwMvpnGMcHC2",
        urls:{
            usersURL:"https://api.parse.com/1/users",
            mapPointObjectPrefix: "https://api.parse.com/1/classes/MapPoint",
        },
        
    };
    
    Data.execute("insert into eventsNearby values('heh');");
    Data.dynamicDS = new Data.Dataset({
        selectQuery: "select * from eventsNearby"
    });
    Data.dynamicDS.refresh();


    //      Uncomment following block for menu sample. Read the JS code file for usage.
    /*
    load("Menu.js");
    */
    
}
function Global_Events_OnError(e) {
    switch (e.type) {
    case "Server Error":
    case "Size Overflow":
        alert(lang.networkError);
        break;
   default:
    //change the following code for desired generic error messsage
        alert({
            title : lang.applicationError,
            message : e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
        });
        break;
    }
}