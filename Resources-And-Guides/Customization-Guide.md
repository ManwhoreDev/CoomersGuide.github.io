##AID Customization Guide
***
You need an extension that lets you install userstyles. I recommend Stylus, but there are a couple options available. (Just stay away from Stylish). Alternatively you can use a userscript manager like Greasemonkey or Tampermonkey and add the style sheet content to a <style> tag and the tag to the page.
 
---
Some links and tips:
- Collection of themes for those that just want something pre-made: https://pastebin.com/qFJj9SPn
- If you want to edit something that isn't available in the css below, hit CTRL+SHIFT+C on your browser and click on the element you wanna change. Use selectors (https://www.tutorialrepublic.com/css-tutorial/css-selectors.php) to target the element you found and give it the properties (https://www.tutorialrepublic.com/css-reference/css3-properties.php) you want.
- You can get pretty far just botching CSS because it's really simple, but if you need a more detailed guide for CSS I recommend this https://www.codecademy.com/learn/learn-css
- The old userstyle (do not use this, just here for reference): https://pastebin.com/2z5t4JXf
---
 
Guide for Stylus:
 
1. Go to https://play.aidungeon.io/
2. Click the Stylus button and click "Write style for play.aidungeon.io"
3. Copy the text at the bottom into the window that pops up.
4. Read the comments and edit what you wish and save.
 
Copy this into Stylus:
 
``` css 
* {
    font-family: "Arial" !important;
    color: #87d27f !important; /* ----> Click the box to pick text a color */
    text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000; /* ----> Text outline, remove this line if you don't want an outline */
}
 
a {
    color: #bdf9b7 !important; /* ----> Link colors */
}
 
/* background */
div[style*="padding-left: 90px"], div[style*="display: flex; justify-content: flex-start; padding-bottom: 40px; padding-top: 64px"] {
    background-image: 
        linear-gradient(#0009,#0009) /* Darkens the background image somewhat to make it more readable, remove this line if you don't need it. Play around with the opacity to make it more or less dark. */
        ,url(https://7themes.su/_ph/4/437814529.gif) /* Replace the url with whatever background image you want, delete this line entirely if you just want a solid color background */
        !important;
    background-color: #333 !important; /* ----> Click the box to pick a background color */
    background-size: cover; /* ----> Size of the background, cover will make it fullscreen. Change to a percentage if you want a tiling background image */
    background-position: center ; /* ----> Background position. Other options: top, right, bottom, left */
}
 
body {
    background-color: #111 !important; /* ----> Loading screen background, keep dark so you don't get blinded when loading the page. Shouldn't be visible anywhere else */
}
 
/* Buttons */
 
div[style*="border-radius: 10px; justify-content: flex-start; margin: 2px 5px; padding: 8px;"], div[style*="border-radius: 5px; height: 30px; width: auto;"], .css-901oao[style*="background-image: linear-gradient"] {
    background-color: #0000004d !important; /* ----> Changes the background color of the in-game buttons (And also the "Continue" button) */
    background-image: none !important; /* ----> Removes the gradient from the do/say/story button */
}
 
div[style*="max-width: 450px;"] {
    background-color: #0000004d !important; /* ----> Changes the background color of the main menu buttons (Except for "Continue" button which inherents background color from above) */
}
 
/* Input Box */
 
.css-901oao.r-1d5kdc7.r-18u37iz[style*="border-radius: 8px; border-width: 1.5px; margin-right: 10px; min-height: 45px;"] {
    border-color: #0000004d !important; /* ----> Changes the border color of the input box */
}
 
.css-1cwyjr8.r-1d5kdc7.r-1ag4vb1::placeholder {
    color: #87d27f3b !important; /* ----> Changes the input placeholder text color */
}
 
/* Scrollbar */
 
.css-901oao.r-1d5kdc7[style*="padding-right"] {
    padding-right: 0px !important; /* ----> Removes some padding so the scrollbar is on the edge of the window instead of floating 90 pixels off the edge. */
}
 
/* Scrollbar styling (Chromium) */
 
*::-webkit-scrollbar {
    width: 6px !important; /* ----> Scrollbar width in pixels */
}
*::-webkit-scrollbar-track {
    background: #0000007d !important; /* ----> Scrollbar track color */
}
*::-webkit-scrollbar-thumb {
    background: #87d27f !important; /* ----> Scrollbar color */
}
*::-webkit-scrollbar-thumb:active {
    background: #5a8e54 !important; /* ----> Scrollbar color while in use */
}
 
/* Scrollbar styling (Firefox) */
 
* {
  scrollbar-color: #87d27f #0000007d; /* ----> Scrollbar color followed by track color. */
  scrollbar-width: auto; /* Scrollbar width. Other options: auto, none */
}
 
/* right sidebar */
 
.r-1pi2tsx.css-901oao[style*="width: 256px; z-index: 101;"] {
    background-color: #5a8e5426 !important;
}
 
/* left sidebar */
 
.css-901oao.r-150rngu.r-1d5kdc7.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-1sncvnh[style*="3px 0px 5px;"] {
    background-color :#5a8e5426 !important; /* ----> Background color */
    box-shadow: #5a8e543b 3px 0px 5px !important; /* ----> Drop shadow color */
}
 
.r-1p0dtai.r-u8s1d.r-ipm5af.r-417010.css-901oao[style*="border-right-color"] {
    background-color: #0000 !important; /* ----> Background color again, leave transparant and just use the one above */
    border-right-color: #5a8e5426 !important; /* ----> Border color */
}
 
.css-901oao[style*="border-bottom-width: 1.5px;"] {
    border-bottom-color: #5a8e5426 !important; /* ----> Divider color */
}
 
/* Explore and My Stuff */
 
.css-18t94o4.css-901oao.r-1loqt21.r-1otgn73.r-eafdt9.r-1i6wzkk.r-lrvibr[style*="display: flex;"]
{
    background-color: #0f150e !important; /* ----> Background color of scenarios and adventures. Don't make this transparent, will show the Continue/New game buttons behind it. */
    border-color: #00000061 !important; /* ----> Border color of scenarios and adventures. */
}
 
div[style*="border-radius: 25px; height: 60px; margin-right: 0px; margin-left: 0px; margin-top: 10px; width: auto;"] {
    background-color: #0000006e !important; /* ----> Create Scenario button background */
}
 
/* misc colors */
 
*[style*="background-color: rgb(59, 59, 59)"] {
    background-color: #0000006b !important; /* ----> Replaces all the grey colors (Setting buttons, My stuff/Explore buttons and search bar, maybe some more stuff) */
}
 
*[style*="background-color: rgb(0, 150, 136)"] {
    background-color: #87d27f !important; /* ----> Replaces the settings toggle button colors */
}
 
*[style*="background-color: rgb(163, 211, 207)"] {
    background-color: #0000006e !important; /* ----> Replaces the settings toggle button bar colors */
}
 
/* Don't touch these */
div[style*="border-radius: 5px; height: 30px; width: auto;"] {
    background-color: #0000 !important;
}
 
*[style*="font-family: MaterialCommunityIcons"] {
    font-family: "MaterialCommunityIcons" !important;
} 
 
*[style*="FontAwesome"] {
    font-family: "FontAwesome" !important;
}
 
.r-1d5kdc7 {
    background-color: #0000 !important;
}
```
