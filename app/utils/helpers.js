// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// This variable will be pre-programmed with our authentication key (the one we received when we registered)
var authKey = "159df7a0ef7748f482425129c491ff9d";

// SETUP VARIABLES
// ==========================================================

// This variable will be pre-programmed with our authentication key (the one we received when we registered)
// var authKey = "159df7a0ef7748f482425129c491ff9d";
//
// // These variables will hold the results we get from the user's inputs via HTML
// var queryTerm 	= "Iraq";
// //var numArticles 	= 5;
// var startYear 	= 1990;
// var endYear		= 2000;
//
// // Based on the queryTerm we will create a queryURL
// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + queryTerm + "&begin_date=" + startYear + "&end_date=" + endYear;
//
// //"https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=159df7a0ef7748f482425129c491ff9d&q=Iraq?begin_date=1999?end_date=2000";
//
// // Array to hold the various article info
// var articleCounter = 0;

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	runQuery: function(queryTerm, startYear, endYear){
          // Based on the queryTerm we will create a queryURL
          var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + queryTerm + "&begin_date=" + startYear + "&end_date=" + endYear;

		//console.log("The article limit is" + numArticles + "and the query url is: " + queryURL);
          //console.log("The query url is: " + queryURL);

		//Figure out the geolocation

		return axios.get(queryURL)
			.then(function(response){
                    console.log(response);
                    var sendThisData =[];
				// for(var i=0;i<response.data.response.docs.length;i++){
                    //      sendThisData.push(response.data.response.docs[i].headline.main);
				// 	//sendThisData+=response.data.response.docs[i].headline.main;
				// }
                    // for(var i=0;i<response.data.response.docs.length;i++){
                    //      sendThisData.push(response.data.response.docs[i].headline.main);
				// 	//sendThisData+=response.data.response.docs[i].headline.main;
				// }
                    // for(var i=0;i<response.data.response.docs.length;i++){
                    //      sendThisData.push(response.data.response.docs[i].pub_main);
				// 	//sendThisData+=response.data.response.docs[i].headline.main;
				// }
                    //
                    // /////////////////////////////////////////////////////////////
                    // console.log(response.data.response.docs[0].pub_date);
                    //console.log(response.data);
                    // var doc = response.data.response.docs
                    // var returnData = [];
                    // for (var i = 0; i < doc.length; i++) {
                    //      if(i < 5) {
                    //     returnData.push({title: doc[i].headline.main, url: doc[i].web_url, date:  doc[i].pub_date});
                    //      }
                    // }
                    // console.log("returnData")
                    // var doc = response.data.response.docs;
                    // var returnData = [];
                    // for (var i = 0; i < doc.length; i++) {
                    //      if(i < 5) {
                    //     returnData.push({title: doc[i].headline.main, url: doc[i].web_url, date:  doc[i].pub_date});
                    //      }
                    // }
                    // console.log("returnData");

                    var doc = response.data.response.docs;
                    var returnData = [[],[],[],[],[]];
                    for (var i = 0; i < returnData.length; i++) {
                         returnData[i].push(doc[i].headline.main);
                         returnData[i].push(doc[i].web_url);
                         returnData[i].push(doc[i].pub_date);
                    }
                    
                    /////////////////////////////////////////////////////////////
				//return JSON.stringify(response);
				// return sendThisData;
                    return returnData;
		});

	}

};


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
