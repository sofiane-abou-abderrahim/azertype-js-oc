/*********************************************************************************
 *
 * This file contains all the functions necessary for displaying and
 * closing the share popup.
 *
 *********************************************************************************/

/**
 * This function displays the popup to share your score.
 */
function displayPopup() {
  let popupBackground = document.querySelector('.popupBackground');
  // The popup is hidden by default (display:none), add the "active" class.
  // Will change its display and make it visible.
  popupBackground.classList.add('active');
}

/**
 * This function hides the popup to share your score.
 */
function hidePopup() {
  let popupBackground = document.querySelector('.popupBackground');
  // The popup is hidden by default (display:none), removing the "active" class
  // will restore this default display.
  popupBackground.classList.remove('active');
}

/**
 * This function initializes the event listeners related to
 * the display of the popup.
 */
function initAddEventListenerPopup() {
  // Listening for a click on the "share" button.
  shareBtn = document.querySelector('.shareZone button');
  let popupBackground = document.querySelector('.popupBackground');
  shareBtn.addEventListener('click', () => {
    // When the share button is clicked, the popup is displayed.
    displayPopup();
  });

  // Listening for a click on the "popupBackground" div.
  popupBackground.addEventListener('click', event => {
    // If we clicked specifically on the popupBackground
    // (and not on another element inside it)
    if (event.target === popupBackground) {
      // Then we hide the popup.
      hidePopup();
    }
  });
}
