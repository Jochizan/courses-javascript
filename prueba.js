function fibonacci(n) {
    let previus = 0;
    let current = 1;
    for (let i = 0; i < n; i++) {
        let temp = previus;
        previus = current;
        current = temp + current;
    }
    return current;
}
console.log(fibonacci(10));
