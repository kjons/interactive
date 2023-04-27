function floatSymbols(className) {
  var symbols = document.getElementsByClassName(className);
  for (var i = 0; i < symbols.length; i++) {
    var symbol = symbols[i];
    var top = Math.random() * window.innerHeight;
    var left = Math.random() * window.innerWidth;
    symbol.style.transform = "translate(" + left + "px, " + top + "px)";
  }
}

setInterval(function() {
  floatSymbols("symbol");
  floatSymbols("symbol2");
  floatSymbols("symbol3");
  floatSymbols("symbol4");
  floatSymbols("symbol5");
  floatSymbols("symbol6");
  floatSymbols("symbol7");
  floatSymbols("symbol8");
  floatSymbols("symbol9");
  floatSymbols("symbol10");
  floatSymbols("symbol11");
  floatSymbols("symbol12");
  floatSymbols("symbol13");
  floatSymbols("symbol14");
  floatSymbols("symbol15");
  floatSymbols("symbol16");
  floatSymbols("symbol17");
  floatSymbols("symbol18");
  floatSymbols("symbol19");
  floatSymbols("symbol20");
  // Add as many class names as needed here
}, 2000);