// Created by iWeb 3.0.4 local-build-20120823

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:1.00}),stroke_1:new IWEmptyStroke(),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,29),url:'Developer_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Developer_files/stroke_1.png'},{rect:new IWRect(1,-1,619,2),url:'Developer_files/stroke_2.png'},{rect:new IWRect(620,-1,2,2),url:'Developer_files/stroke_3.png'},{rect:new IWRect(620,1,2,29),url:'Developer_files/stroke_4.png'},{rect:new IWRect(620,30,2,2),url:'Developer_files/stroke_5.png'},{rect:new IWRect(1,30,619,2),url:'Developer_files/stroke_6.png'},{rect:new IWRect(-1,30,2,2),url:'Developer_files/stroke_7.png'}],new IWSize(621,31))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Developer_files/DeveloperMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
