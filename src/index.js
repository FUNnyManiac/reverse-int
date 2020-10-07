module.exports = function reverse (n) {
    let q = String(n);
        q = q.split('');
    if(q[0]==='-'){
        let minus = q.splice(q[0], 1);
        return q.reverse().join('')
    } return q.reverse().join('');
}
