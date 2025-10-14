// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });
})

// BibTeX Modal Functions
function showBibTeX(modalId) {
    // Handle both desktop and mobile modal IDs
    const modalIdToFind = modalId.includes('desktop-') || modalId.includes('mobile-') ?
        'bibtex-modal-' + modalId :
        'bibtex-modal-desktop-' + modalId;

    const modal = document.getElementById(modalIdToFind);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeBibTeX(modalId) {
    // Close both desktop and mobile modals for the same item
    const desktopModal = document.getElementById('bibtex-modal-desktop-' + modalId);
    const mobileModal = document.getElementById('bibtex-modal-mobile-' + modalId);

    if (desktopModal) {
        desktopModal.classList.remove('show');
    }
    if (mobileModal) {
        mobileModal.classList.remove('show');
    }

    document.body.style.overflow = 'auto'; // Restore scrolling

    // Hide success messages
    const successElements = document.querySelectorAll('[id^="copy-success-"][id$="' + modalId + '"]');
    successElements.forEach(el => el.style.display = 'none');
}

function copyBibTeX(modalId) {
    // Extract the actual item ID from modal ID
    const itemId = modalId.includes('mobile-') ? modalId.replace('mobile-', '') :
                   modalId.includes('desktop-') ? modalId.replace('desktop-', '') : modalId;

    const contentId = modalId.includes('mobile') ? 'bibtex-content-mobile-' + itemId : 'bibtex-content-desktop-' + itemId;
    const contentElement = document.getElementById(contentId);

    if (contentElement) {
        // Get the raw bib data from the Jekyll variable, not the formatted display
        const allElements = document.querySelectorAll('[id^="bibtex-content-"]');
        let rawBibText = '';

        // Find the corresponding raw bib data
        for (let el of allElements) {
            if (el.id.includes(itemId) && el.textContent.includes('@')) {
                rawBibText = el.textContent.trim();
                break;
            }
        }

        // If not found, fall back to the displayed text but clean it up
        if (!rawBibText) {
            rawBibText = contentElement.textContent.trim();
        }

        // Clean up the text for copying (preserve the original BibTeX structure but normalize whitespace)
        rawBibText = rawBibText
            .replace(/[ \t]+/g, ' ')  // Replace multiple spaces/tabs with single space
            .replace(/\n\s+/g, '\n')  // Remove spaces after newlines
            .replace(/\n{3,}/g, '\n\n')  // Replace multiple newlines with double newline
            .trim();

        // Use modern clipboard API if available, fallback to textarea method
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(rawBibText).then(() => {
                showCopySuccess(modalId);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                fallbackCopyTextToClipboard(rawBibText, modalId);
            });
        } else {
            fallbackCopyTextToClipboard(rawBibText, modalId);
        }
    }
}

function fallbackCopyTextToClipboard(text, modalId) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccess(modalId);
        } else {
            console.error('Fallback: Unable to copy');
        }
    } catch (err) {
        console.error('Fallback: Unable to copy', err);
    }

    document.body.removeChild(textArea);
}

function showCopySuccess(modalId) {
    // Extract the actual item ID from modal ID
    const itemId = modalId.includes('mobile-') ? modalId.replace('mobile-', '') :
                   modalId.includes('desktop-') ? modalId.replace('desktop-', '') : modalId;

    const successElementId = modalId.includes('mobile') ? 'copy-success-mobile-' + itemId : 'copy-success-desktop-' + itemId;
    const successElement = document.getElementById(successElementId);

    if (successElement) {
        successElement.style.display = 'inline';
        setTimeout(() => {
            successElement.style.display = 'none';
        }, 2000);
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll('.bibtex-modal.show');
    modals.forEach(modal => {
        if (event.target === modal) {
            const modalId = modal.id.replace('bibtex-modal-', '').replace('desktop-', '').replace('mobile-', '');
            closeBibTeX(modalId);
        }
    });
}

// Close modal on Escape key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.bibtex-modal.show');
        modals.forEach(modal => {
            const modalId = modal.id.replace('bibtex-modal-', '').replace('desktop-', '').replace('mobile-', '');
            closeBibTeX(modalId);
        });
    }
});
