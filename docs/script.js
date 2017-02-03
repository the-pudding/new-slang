

var slang = {2016:["Triggered","Shook","Juju","Broccoli","Woke","Holosexual","Shill","Gaslighting","Bigly","SJW","Dank Memes","Vexing","Bough","Boolin","Wavy"],
             2015:["Blase","Netflix and Chill","Glock","Lowkey","Pleb","Quan","Pepe","Stoop","Burnt","Simmer"],
             2014:["Fleek","Fam","Felicia","Anaconda","Slay","Yeet","Silt","Calvary","Becky","Hawking"],
             2013:["Selfie","Bae","Turn Up","Red Nose","Emoji","Turnt","Sapiosexual","Sus"]
            };

console.log(slang[2016]);

var topSection = d3.select(".top-slang-section");

var slangItemsCurrent = topSection.select(".top-slang-section-table-current-items")
  .selectAll("p")
  .data(slang[2016])
  .enter()
  .append("p")
  .attr("class","top-slang-section-table-current-item")
  .html(function(d,i){
    return "<span class='top-slang-section-table-current-item-num'>"+(i+1)+".</span> "+d;
  })
  ;

var years = [2015,2014,2013];

var slangItemsPastColumn = topSection.select(".top-slang-section-table-past")
  .selectAll("div")
  .data(years)
  .enter()
  .append("div")
  .attr("class","top-slang-section-table-past-column")
  ;

slangItemsPastColumn.append("p")
  .attr("class","top-slang-section-table-past-column-year")
  .text(function(d){
    return d;
  })
  ;

slangItemsPastColumn.append("div")
  .attr("class","top-slang-section-table-past-column-items")
  .selectAll("p")
  .data(function(d){
    return slang[d];
  })
  .enter()
  .append("p")
  .attr("class","top-slang-section-table-past-column-item")
  .html(function(d,i){
    return "<span class='top-slang-section-table-current-item-num'>"+(i+1)+".</span> "+d;
  })
  ;
