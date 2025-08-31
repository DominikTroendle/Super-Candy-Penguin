/**
 * Returns the HTML markup for imprint-related information based on the given key
 * (Imprint, Credits, Privacy, Disclaimer).
 *
 * @param {String} text - the given key to identify the correct section to bre returned
 * @returns {String} - HTML string representing the requested imprint section
 */
function getImprintHTML(text) {
    if (text === "Imprint") {
        return `<div class="container-template-content">
                    <button id="imprint-close" onclick="closeImprintText()">X</button>
                    <div class="container-template-text">
                        <h3>Imprint</h3>
                        <div>
                            <p>Dominik Tröndle<br>Munich 81735<br>Germany</p>
                            <p>Email: <a href="mailto:domi.troendle@gmail.com">domi.troendle@gmail.com</a></p>
                        </div>
                    </div>
                </div>`;
    } else if (text === "Credits") {
        return `<div class="container-template-content">
                    <button id="imprint-close" onclick="closeImprintText()">X</button>
                    <div class="container-template-text">
                        <h3>Credits</h2>
                        <div>
                            <ul>
                                <li>Sprites: <br><a href="https://craftpix.net" target="_blank">Craftpix</a></li>
                                <li>Music: <br><a href="https://freesound.org" target="_blank">Freesound</a></li>
                            </ul>
                            <ul>
                                <li>Sound effects: <br><a href="https://zapsplat.com" target="_blank">Zapsplat</a></li>
                                <li>Font: <br><a href="https://fonts.google.com/" target="_blank">Google Fonts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>`;
    } else if (text === "Privacy") {
        return `<div class="container-template-content">
                    <button id="imprint-close" onclick="closeImprintText()">X</button>
                    <div>
                        <h3>Privacy Policy</h2>
                        <p>This game does not collect or store any personal data.</p>
                    </div>
                </div>`;
    } else if (text === "Disclaimer") {
        return `<div class="container-template-content">
                    <button id="imprint-close" onclick="closeImprintText()">X</button>
                    <div>
                        <h3>Disclaimer</h2>
                        <p>Despite careful content control, we assume no liability for the content of external links.<br>The operators of the linked pages are solely responsible for their content.</p>
                    </div>
                </div>`;
    }
}