$("document").ready(function() {
  var colors = [
     {
      "title": "#4a148c",
      "date": "#7b1fa2",
      "content": "#9c27b0",
      "footer": "#7b1fa2"
    },
     {
      "title": "#1a237e",
      "date": "#283593",
      "content": "#3f51b5",
      "footer": "#283593"
    },
    {
      "title": "#004d40",
      "date": "#00695c",
      "content": "#009688",
      "footer": "#00695c"
    },
    {
      "title": "#e65100",
      "date": "#ef6c00",
      "content": "#ff9800",
      "footer": "#ef6c00"
    }
  ];

  var data = [
     {
      "head": "THINKOPOLITAN",
      "date": "August 2015",
      "content": "Web Development Lead. Used Wordpress CMS to make the Student run blog. ",
      "footer": "www.thinkopolitan.com"
    },

     {
      "head": "FOODLOCATR",
      "date": "OCTOBER 2015",
      "content": "Web Developer. Used Bootstrap to make the website ",
      "footer": "www.foodlocatr.com"
    },

     {
      "head": "NORTH CAMPUS FOOTBALL LEAGUE",
      "date": "NOVEMBER 2015",
      "content": "Web Developer. Used Bootstrap to make the website ",
      "footer": "www.ncfl.in"
    },

    {
      "head": "TECHNOCULOUS",
      "date": "JUNE 2015",
      "content": "Web Developer. Used lots of frameworks to make lot of websites ",
      "footer": "www.technoculous.com"
    }

  ];
html="";
htmlTwo="";
padding="0px";
for(var i=0;i<data.length;i++){
if(i%2==0){
    html+='<div class="row"><div class="row"><div class="time-line-box" ><div style="background:' + colors[i].title+ '!important" class="time-line-head">'+ data[i].head + '</div><div style="background:' + colors[i].date+ '!important;text-align: right;"class="time-line-date">' + data[i].date + '</div><div style="background:' + colors[i].content+ '!important"class="time-line-content">'+ data[i].content + '</div><div style="background:' + colors[i].footer+ '!important"class="time-line-footer">' + data[i].footer +'</div></div></div></div>';

}
else{
   html+='<div style="visibility:hidden; "class="row"><div class="row"><div class="time-line-box" ><div style="background:' + colors[i].title+ '!important" class="time-line-head">'+ data[i].head + '</div><div style="background:' + colors[i].date+ '!important;text-align: right;"class="time-line-date">' + data[i].date + '</div><div style="background:' + colors[i].content+ '!important"class="time-line-content">'+ data[i].content + '</div><div style="background:' + colors[i].footer+ '!important"class="time-line-footer">' + data[i].footer +'</div></div></div></div>';
}


}
console.log(html);
for(var i=0;i<data.length;i++){
if(i%2!==0){
    htmlTwo+='<div class="row"><div class="row"><div class="time-line-box" ><div style="background:' + colors[i].title+ '!important" class="time-line-head">'+ data[i].head + '</div><div style="background:' + colors[i].date+ '!important;text-align: left;"class="time-line-date">' + data[i].date + '</div><div style="background:' + colors[i].content+ '!important"class="time-line-content">'+ data[i].content + '</div><div style="background:' + colors[i].footer+ '!important"class="time-line-footer">' + data[i].footer +'</div></div></div></div>';

}
else{
   htmlTwo+='<div style="visibility:hidden;"class="row"><div class="row"><div class="time-line-box" ><div style="background:' + colors[i].title+ '!important" class="time-line-head">'+ data[i].head + '</div><div style="background:' + colors[i].date+ '!important;text-align: left;"class="time-line-date">' + data[i].date + '</div><div style="background:' + colors[i].content+ '!important"class="time-line-content">'+ data[i].content + '</div><div style="background:' + colors[i].footer+ '!important"class="time-line-footer">' + data[i].footer +'</div></div></div></div>';
}


}
$(".left-hand-stuff").html(html);
$(".right-hand-stuff").html(htmlTwo);
console.log($(".left-hand-stuff").height()+"px");
$(".vertical-line").css({"height":'+'+$(".left-hand-stuff").height()+"'px"});
});

