/**
 * Returns the HTML markup for imprint-related information based on the given key
 * (Imprint, Credits, Privacy, Disclaimer).
 *
 * @param {String} text - the given key to identify the correct section to bre returned
 * @returns {String} - HTML string representing the requested imprint section
 */
function getImprintHTML(text) {
    if (text === "Imprint") {
        return `<div>
                    <button id="imprint-close" onclick="closeImprintText()">X</button>
                    <h3>Imprint</h3>
                    <p>Dominik Tröndle<br>Munich 81735<br>Germany</p>
                    <p>Email: <a href="mailto:domi.troendle@gmail.com">domi.troendle@gmail.com</a></p>
                </div>`;
    } else if (text === "Credits") {
        return `<div>
                    <button id="imprint-close" onclick="closeImprintText()">X</button>
                    <h3>Credits</h2>
                    <ul>
                        <li>Sprites: <a href="https://craftpix.net" target="_blank">Craftpix</a></li>
                        <li>Music: <a href="https://freesound.org" target="_blank">Freesound</a></li>
                        <li>Sound effects: <a href="https://zapsplat.com" target="_blank">Zapsplat</a></li>
                        <li>Font: <a href="https://fonts.google.com/" target="_blank">Google Fonts</a></li>
                    </ul>
                </div>`;
    } else if (text === "Privacy") {
        return `<div>
                    <button id="imprint-close" onclick="closeImprintText()">X</button>
                    <h3>Privacy Policy</h2>
                    <p>This game does not collect or store any personal data.</p>
                </div>`;
    } else if (text === "Disclaimer") {
        return `<div>
                    <button id="imprint-close" onclick="closeImprintText()">X</button>
                    <h3>Disclaimer</h2>
                    <p>Despite careful content control, we assume no liability for the content of external links.<br>The operators of the linked pages are solely responsible for their content.</p>
                </div>`;
    }
}