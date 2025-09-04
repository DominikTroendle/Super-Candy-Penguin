/**
 * Generates an array of image file paths for a given enemy animation.
 *
 * @param {String} enemy - the name of the enemy ("Monster1", "Monster4")
 * @param {String} action - the name of the animation ("Walk", "Attack")
 * @param {Number} count - the total number of frames for the animation
 * @returns {Array} - an array of file path strings
 */
function generateFrames(enemy, action, count) {
    const frames = [];
    for (let i = 0; i < count; i++) {
        const num = i.toString();
        frames.push(`img/enemys/${enemy}/${action}/skeleton-${action}_${num}.png`);
    };
    return frames;
}

export const ENEMY_BIG_IMAGES = {
    walking: generateFrames('Monster1', 'Walk', 18),
    attacking: generateFrames('Monster1', 'Attack', 22)
};

export const ENEMY_SMALL_IMAGES = {
    walking: generateFrames('Monster4', 'Walk', 18),
    attacking: generateFrames('Monster4', 'Attack', 26)
};