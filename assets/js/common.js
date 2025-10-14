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

        // Post-format the visible bib content to aligned style
        try {
            const idBase = modalId.replace('desktop-', '').replace('mobile-', '');
            const visibleId = modalId.includes('mobile') ? 'bibtex-content-mobile-' + idBase : 'bibtex-content-desktop-' + idBase;
            const rawId = modalId.includes('mobile') ? 'bibtex-raw-mobile-' + idBase : 'bibtex-raw-desktop-' + idBase;
            const visible = document.getElementById(visibleId);
            const raw = document.getElementById(rawId);
            if (visible && raw) {
                const formatted = formatBibAligned(raw.textContent || raw.innerText);
                visible.textContent = formatted;
            }
        } catch (e) {
            console.warn('BibTeX format failed', e);
        }
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

    const rawId = modalId.includes('mobile') ? 'bibtex-raw-mobile-' + itemId : 'bibtex-raw-desktop-' + itemId;
    const visibleId = modalId.includes('mobile') ? 'bibtex-content-mobile-' + itemId : 'bibtex-content-desktop-' + itemId;
    const rawElement = document.getElementById(rawId);
    const visibleElement = document.getElementById(visibleId);

    // Prefer: format the raw text, fallback to the currently displayed text
    let copyText = '';
    if (rawElement) {
        copyText = formatBibAligned((rawElement.textContent || rawElement.innerText || '').trim());
    }
    if (!copyText && visibleElement) {
        copyText = (visibleElement.textContent || visibleElement.innerText || '').trim();
    }

    if (copyText) {

        // Use modern clipboard API if available, fallback to textarea method
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(copyText).then(() => {
                showCopySuccess(modalId);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                fallbackCopyTextToClipboard(copyText, modalId);
            });
        } else {
            fallbackCopyTextToClipboard(copyText, modalId);
        }
    }
}

// Format bib lines so that keys align with equal signs
function formatBibAligned(text) {
    const lines = (text || '').trim().split(/\r?\n/);
    if (lines.length === 0) return '';
    const first = lines[0].trim();
    const last = lines[lines.length - 1].trim();
    const middle = lines.slice(1, lines.length - 1).map(l => l.trim());

    // extract key part before '=' and compute max length
    const parts = middle.map(l => {
        const idx = l.indexOf('=');
        if (idx === -1) return { key: l, val: '', raw: l };
        return { key: l.slice(0, idx).trim(), val: l.slice(idx + 1).trim(), raw: l };
    });
    const maxKey = parts.reduce((m, p) => Math.max(m, p.key.length), 0);
    const pad = n => ' '.repeat(n);
    const formatted = parts.map(p => {
        if (!p.val) return p.raw;
        return p.key + pad(Math.max(1, maxKey - p.key.length + 1)) + '= ' + p.val;
    });

    return [first].concat(formatted).concat([last]).join('\n');
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
