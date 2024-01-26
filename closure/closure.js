function greeting() {
    let username = 'Oscar';

    function displauUserName() {
        return `Helo ${username}`;
    }
    return displauUserName;
}

const g = greeting();
console.log(g);
console.log(g());