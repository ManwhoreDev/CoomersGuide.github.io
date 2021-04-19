// ==UserScript==
// @name         /aidg/ Character Loader
// @namespace    https://github.com/CoomersGuide/CoomersGuide.github.io
// @version      0.1
// @description  Load an encoded character from an image into AI Dungeon
// @author       sink-chan
// @downloadURL  https://github.com/CoomersGuide/CoomersGuide.github.io/tree/main/Tools/scripts/aidg.character.injector.js
// @supportURL   https://github.com/CoomersGuide/CoomersGuide.github.io/issues
// @icon         data:image/png;base64,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
// @match        https://play.aidungeon.io/*
// @require      https://cdn.jsdelivr.net/npm/exifr@6.2.0/dist/full.umd.js
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// @connect      files.catbox.moe
// ==/UserScript==

// Most of this code is shamelessly copied from: https://prompts.aidg.club/aidg.user.js

// To enable logging, set this to true.
const enableLogs = false;

// The URL fragment when navigated to from the Adventure tab
const adventurePlayUrlFragment = 'adventurePlay';
// The URL fragment when navigated to from the Scenario
const mainPlayUrlFragment = 'play';

// The scripts only work in /story mode anyway. We need some way to find the action bar
const actionBarSelector = 'textarea[placeholder="What happens next?"]';

// Data element for the inject character button. Used to remove the button when navigating away.
const injectCharacterButtonQuerySelector = 'div[data-aidg-inject-character-button]'

let timeoutVal = null;

function consoleLog(value) {
    if (enableLogs) {
        console.log(value)
    }
}

/**
 * The meat of the script. It prompts the user for a character image URL and will fetch it.
 * Then it attempts to extract the character information from the image metadata and performs
 * basic validation on it. If the validation passes, it will update the action bar's value
 * with the load command for the character.
 */
function onClickHandler() {
    var value = prompt("Enter the character's image URL");
    if (!value) {
        return;
    }

    GM_xmlhttpRequest({
        method: "GET",
        url: value,
        onload: function(response) {
            if (response.status === 200) {
                window.exifr.parse(response.responseText, true).then((result) => {
                    consoleLog(result);

                    let encodedCharacter;
                    if(result.ImageDescription) { // JPG image
                        encodedCharacter = result.ImageDescription.trim()
                    }
                    else if ( // PNG image
                        result.description
                        && result.description.value
                    ) {
                        encodedCharacter = result.description.value.trim()
                    }

                    if (
                        !encodedCharacter
                    ) {
                        alert("Could not find an encoded character!")
                        return;
                    }

                    // Do some basic validation. Make sure the character can be decoded and has
                    // the expected fields
                    let decodedCharacter = JSON.parse(window.atob(encodedCharacter));
                    if (
                        !decodedCharacter
                        || !decodedCharacter.name
                        || !decodedCharacter.physicalDescription
                        || !decodedCharacter.mentalDescription
                        || !decodedCharacter.dialogExamples
                        || !decodedCharacter.customAN
                    ) {
                        alert("Invalid Saved character loaded.");
                        return;
                    }

                    consoleLog("Found character: " + decodedCharacter);
                    const actionBar = getLastQuerySelector(actionBarSelector);
                    setReactInputValue(actionBar, `/load ${encodedCharacter}`);

                    // Click the play button once the input has been updated.
                    actionBar.parentNode.lastChild.click();
                });
            } else if (response.status === 404) {
                alert("Image not found");
            } else {
                alert("An error occurred");
            }
        },
        responseType: 'blob'
    });
}

/**
 * Sets input value in a way that causes React to update state.
 * See https://github.com/facebook/react/issues/10135#issuecomment-500929024 for more details.
 * @param {Element} input - The input element.
 * @param {string} value - The new value.
 */
function setReactInputValue(input, value) {
    const previousValue = input.value;
    input.value = value;

    const tracker = input._valueTracker;
    if (tracker) {
        tracker.setValue(previousValue);
    }

    // 'change' instead of 'input', see https://github.com/facebook/react/issues/11488#issuecomment-381590324
    input.dispatchEvent(new Event('change', { bubbles: true }));
}

// Determine if we are in either of the Adventure URLs.
function locationIsAdventurePlayPage(location) {
    if (!location || typeof location !== "string") {
        return false;
    }
    var url = location.split('/').pop();
    return url.includes(adventurePlayUrlFragment) || url.includes(mainPlayUrlFragment);
}

/**
 * Like querySelector, but only returns the last element in the list.
 * This is necessary because for some reason, if you load the edit scenario page first, navigate away, and then come back, every element is duplicated (??? what the FUCK Mormon) and we only want the latest one).
 * @param {string} selectors - The query selectors.
 * @returns {Element|null}
 */
function getLastQuerySelector(selectors) {
    if (!selectors) {
        return null;
    }
    var selection = document.querySelectorAll(selectors);
    return selection.length > 0 ? selection[selection.length - 1] : null;
}

/**
 * A timeout loop that checks every second to see if the action bar is loaded yet.
 */
function timeOut() {
    clearTimeout(timeoutVal);
    timeoutVal = setTimeout(function () {
        const actionBarParent = getLastQuerySelector(actionBarSelector).parentNode;
        if (!actionBarParent) {
            consoleLog("Action bar does not exist, restarting loop.");
            timeOut();
            return;
        }
        consoleLog("Action bar found, adding button.");
        if (actionBarParent.firstChild.dataset.aidgInjectCharacterButton) {
            consoleLog("Button already exists, stopping.");
            return;
        }

        // Copy the play button
        const clone = actionBarParent.lastChild.cloneNode();
        clone.innerText = "+";
        // Probably a smarter way to do this. Just trying to make the styling not look horrible.
        clone.style = "display: flex; margin: 4px; padding: 4px; transition-duration: 0s; color: white; font-weight: bold;";
        clone.onclick = onClickHandler;
        clone.dataset.aidgInjectCharacterButton = true;

        // Prepend will put it as the first child in the DOM.
        actionBarParent.prepend(clone);
    }, 1000)
};

/**
 * Either starts the menu bar timeout checker if the url is on the edit page, or cleans up if we have navigated away. If timeoutVal has value we know we need to clean up, otherwise we can skip that step.
 * @param {string} location - The current URL.
 */
function handleHistoryChange(location) {
    consoleLog("In handle history, location is: " + location);
    if (locationIsAdventurePlayPage(location)) {
        consoleLog("On play adventure page, starting timeout.");
        timeOut();
    } else if (!locationIsAdventurePlayPage(location) && timeoutVal !== null) {
        consoleLog("Leaving page, clearing timeout and button.");
        clearTimeout(timeoutVal);
        timeoutVal = null;
        const buttons = document.querySelectorAll(injectCharacterButtonQuerySelector);
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].remove();
        }
    }
}

/**
 * Overrides the history pushState and replaceState so we can tell when the SPA has navigated to the edit scenario page.
 */
(function (history) {
    var pushState = history.pushState;
    history.pushState = function (state) {
        handleHistoryChange(arguments[2]);
        return pushState.apply(history, arguments);
    };
    var replaceState = history.replaceState;
    history.replaceState = function (state) {
        handleHistoryChange(arguments[2]);
        return replaceState.apply(history, arguments);
    }
})(window.history);

/**
 * Starts the timeout immediately if the adventure play page was the first page loaded.
 */
handleHistoryChange(window.location.href);
