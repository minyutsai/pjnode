const url = require('url');

const myUrl = new URL('http://webrakish.com/hello.html?id=100&status=active');


// serialized URL
console.log(myUrl);
console.log(myUrl.toString());
console.log(myUrl.href);
console.log(myUrl.host);
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

console.log(myUrl.searchParams);

myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
