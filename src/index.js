/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
   const SpichoneesinTriangles = [];
    for (let i = 0; i < preferences.length; ++i) 
        {
            if (SpichoneesinTriangles.indexOf(i) !== -1) {
                continue;
            }
            let loverone = preferences[i] - 1;
            if (loverone === i) {
                continue;
            }
            let lovertwo = preferences[loverone] - 1;
            let loverthree = preferences[lovertwo] - 1;
            if (loverthree ===i) {
             SpichoneesinTriangles.push(i, loverone, lovertwo);
                ++count;
            }   
        }
    return count;
};
