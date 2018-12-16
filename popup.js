function setup(){
    userInput = select('#userinput');
    userInput.changed(goWiki);
    goWiki();
}