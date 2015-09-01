function runGather()
{
var noun1 = document.getElementById("noun1").value;
var collective_noun = document.getElementsByClassName("collective_noun");
for(var i=0; i<noun1.length; i++)
 {
  collective_noun[i].innerHTML = noun1;
 }
}

function runGather2()
{
var noun3 = document.getElementById("noun3").value;
var noun_3 = document.getElementsByClassName("noun_3");
for(var i=0; i<noun3.length; i++)
 {
  noun_3[i].innerHTML = noun3;
 }
}

function runGather3()
{
var adj3 = document.getElementById("adj3").value;
document.getElementById("adj_3").innerHTML= adj3;
}


function getValues()
{
var fruit = document.getElementById("fruit").value;
var newspaper = document.getElementById("newspaper").value;
var noun1 = document.getElementById("noun1").value;
var noun2 = document.getElementById("noun2").value;
var adj = document.getElementById("adj").value;
var verb = document.getElementById("verb").value;
var pluralnoun = document.getElementById("pluralnoun").value;

var noun3 = document.getElementById("noun3").value;
var adj2 = document.getElementById("adj2").value;
var pluralnoun2 = document.getElementById("pluralnoun2").value;


var adj3 = document.getElementById("adj3").value;
var adj4 = document.getElementById("adj4").value;

var noun5 = document.getElementById("noun5").value;
var newspaper2 = document.getElementById("newspaper2").value;
var adj5 = document.getElementById("adj5").value;
var adj6 = document.getElementById("adj6").value;
var verb2 = document.getElementById("verb2").value;
var noun6 = document.getElementById("noun6").value;

document.getElementById("result").innerHTML = '<center><h4>An Anti-Feminist Rant</h4></center><p>Looky here what I happen to be holding in my formerly ' + fruit + '-stained fingers. It is a story from the ' + newspaper + ', and the date is today. \"Should We Care That Smart ' + noun1.charAt(0).toUpperCase() + noun1.substring(1) + ' are Not Having ' + noun2.charAt(0).toUpperCase() + noun2.substring(1) + '?\" It\'s not should we care that \"stupid ' + noun1 + '\" are not having ' + noun2 + '.' + ' It\'s \"Should We Care That Smart ' + noun1.charAt(0).toUpperCase() + noun1.substring(1) + ' are Not Having ' + noun2.charAt(0).toUpperCase() + noun2.substring(1) + '?\" --It seems that ' + noun1 + ' these days are too ' + adj + ' for their own good, at least when it comes to ' + verb + ' ' + pluralnoun + '. </p>' + '<p> \"Research emerging from the London School of Economics examining the links between ' + noun3 + ' and  ' + adj2 + ' ' +  pluralnoun2  + ' in ' + noun1 + ' claims that more of the former means less of the latter. In an ideal world, such findings might be interpreted as smart ' + noun1 + ' making smart choices, but instead it seems that this research is just adding fuel ' + ' to the argument that ' + noun1 + ' who don\'t have ' + noun2 + ', regardless of the reason, are not just ' + adj3 + ' losers but ' + adj4 + ' ones as well. </p>' + '<p> If liberalism is a religion, ' + noun5 + ' is the sacrament, and then this ' + newspaper + ' story and this story from the ' + newspaper2 + ' reporting that \"smart ' + noun1 +'\" are the ones not having ' + noun2 + '. Well, of course!  Of course ' + adj5 + ', ' + adj6 + " " + noun1 + ' are. What else have they got?  They don\'t have the money or whatever to ' + verb2 + ', but the smart ' + noun1 + ' know that a ' + noun2 +' is just nothing but ' + noun6 + '! </p> <p align="right">--Rush Limbaugh</p>';


document.getElementById("view_original").innerHTML = '<p align="center"><input type="button" value="View Original Rant" onClick="getOriginal()" /></p>';

}

function getOriginal()
{
document.getElementById("result").innerHTML = '<center><h4>An Anti-Feminist Rant</h4></center><p> Looky here what I happen to be holding in my formerly nicotine-stained fingers.  It is a story from the UK Guardian, and the date is today. \"Should We Care That Smart Women are Not Having Kids?\"  It\'s not should we care that \"stupid women\" are not having kids.  It\'s \"Should We Care That Smart Women are Not Having Kids? -- \"It seems that women these days are too clever for their own good, at least when it comes to making babies.</p> <p>\"Research emerging from the London School of Economics examining the links between intelligence and maternal urges in women claims that more of the former means less of the latter. In an ideal world, such findings might be interpreted as smart women making smart choices, but instead it seems that this research is just adding fuel to the argument that women who don\'t have children, regardless of the reason, are not just selfish losers but dumb ones as well.\"</p><p>If liberalism is a religion, abortion is the sacrament, and then this TIME Magazine story and this story from the UK Guardian reporting that \"smart women\" are the ones not having kids.  Well, of course!  Of course dumb, stupid women are.  What else have they got?  They don\'t have the money or whatever to abort, but the smart women know that a kid is just nothing but an albatross!</p><p align="right">--Rush Limbaugh</p>';

document.getElementById("view_original").innerHTML = ' ';

}


