/**
 * Generates an array of image file paths for a given character animation.
 *
 * @param {String} action - the name of the animation ("Idle", "Walk", "Jump", "Confused", "Dead")
 * @param {Number} count - the total number of frames for the animation
 * @returns {Array} - an array of file path strings
 */
function generateFrames(action, count) {
    const frames = [];
    for (let i = 0; i < count; i++) {
        const num = i.toString().padStart(2, '0');
        frames.push(`img/characters/Character02/${action}/All Characters-Character02-${action}_${num}.png`);
    };
    return frames;
}

export const CHARACTER_IMAGES = {
    idle : generateFrames('Idle', 20),
    walking: generateFrames('Walk', 30),
    jumping: generateFrames('Jump', 25),
    hurt: generateFrames('Confused', 24),
    dead: generateFrames('Dead', 45)
};