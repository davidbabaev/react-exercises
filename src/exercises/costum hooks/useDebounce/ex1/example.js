
export default function example() {
    let timerId;
    clearTimeout(timerId);

    // start new timer
    timerId = setTimeout(() => {
        console.log('User stopped typing!');
    }, 500)
}

example()
example()
example()
example()
