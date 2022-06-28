function first(callback) {
    setTimeout(() => {
        console.log("first function");
    }, 1000)
    callback();
}

function second(callback) {
    console.log("second function");
    callback();
}

function third() {
    console.log("third function");
}

first(() => {
    second(() => {
        third()
    })
});