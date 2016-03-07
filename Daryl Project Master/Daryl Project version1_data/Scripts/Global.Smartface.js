
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
    load("ParseSetup.js");
    

    
//    load("HeaderBar.js");
//    header = new HeaderBar();

    //current: change eDescription on Parse to just description?
    //later: When there is a banner at the top of the scren, how to reposition bvttons?
   /*
   parseData.getAllMapPoints(function(mapPoints){
       for(var i = 0; i < mapPoints.length; i++)
       {
           //responseObject.push(mapPoints[i].address);
      //     Data.dynamicDS.add();
      //     Data.dynamicDS[i] = mapPoints[i].address;
      //     alert(Data.dynamicDS[i]);
      //     Data.dynamicDS.commit();
          Data.execute('insert into events values (?)', mapPoints[i].address);
       }
   });
   */
    
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
/**
* Triggered before exiting applicaiton.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.Net.Events
*/
function Global_Events_OnExit(e){
    parseData.logout(function(){});
}