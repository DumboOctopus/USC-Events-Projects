
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

   Data.execute("DROP TABLE IF EXISTS events;");
    Data.execute("Create table events (col1 string)");
    Data.execute("insert into events values('My first row');");
    Data.execute("insert into events values('Smartface.Inc');");
    Data.execute("insert into events values('Smartface App Studio');");
    
    Data.execute("insert into events values(?);", 'SmarStudio');
    //var tmp;
    parseData.getAllMapPoints(function(mapPoints){
        tmp = mapPoints;
       for(var i = 0; i < mapPoints.length; i++)
       {
          Data.execute('insert into events values(?);', mapPoints[i].name);
          //Data.execute("insert into events values('"+mapPoints[i].address+"');");
          //Data.execute("insert into events (col1) values(?);",  mapPoints[i].address); //Values are passed as it is
          alert("ran");
          alert(mapPoints[i].address);
       }
       
        Data.dynamicDS.refresh();
   });
   //Data.execute("insert into events values(?);", tmp[0].address);
    Data.dynamicDS = new Data.Dataset({
            selectQuery : "select * from events"
        });
    Data.dynamicDS.refresh();
    
    var lbl = new SMF.UI.Label({
        top : "0%",
        left : "0%",
        width : "100%",
        height : "100%",
        fillColor : "#FFFFFF",
        textAlignment : SMF.UI.TextAlignment.center
    });
    var repeatBox1 = new SMF.UI.RepeatBox({
        name : "repeatBox1",
        width : "100%",
        height : "100%",
        left : "0%",
        top : "0%",
        dataSource : Data.dynamicDS,
        showScrollbar : true,
        fillColor : "white",
        backgroundTransparent : false,
        onRowRender : function (e) {
            Data.dynamicDS.seek(e.rowIndex);
            this.controls[0].text = Data.dynamicDS.col1;
        }
    });
    repeatBox1.itemTemplate.height = Device.screenHeight / 7;
    repeatBox1.itemTemplate.imageFillType = SMF.UI.ImageFillType.stretch;
    repeatBox1.enablePullDownToRefresh = true;
    //Adding label to repeatBox object
    repeatBox1.itemTemplate.add(lbl);
    Pages.Page1.Events_Pane.add(repeatBox1);
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