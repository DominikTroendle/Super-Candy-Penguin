/**
 * Generates an array of image file paths for a given endboss animation.
 *
 * @param {String} action - the name of the animation ("Idle", "Walk", "Attack", "Dead")
 * @param {Number} count - the total number of frames for the animation
 * @returns {Array} - an array of file path strings
 */
function generateFrames(action, count) {
    const frames = [];
    for (let i = 0; i < count; i++) {
        const num = i.toString();
        frames.push(`img/enemys/Boss/${action}/skeleton-${action}_${num}.png`);
    };
    return frames;
}

export const ENDBOSS_IMAGES = {
    idle : generateFrames('Idle', 18),
    walking: generateFrames('Walk', 18),
    attacking: generateFrames('Attack', 22),
    dead: generateFrames('Death', 10)
};