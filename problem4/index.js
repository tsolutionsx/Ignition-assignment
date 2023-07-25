function parseUrl(url) {
  const a = document.createElement('a');
  a.href = url;
  return {
    href: a.href,
    hash: a.hash,
    port: a.port,
    host: a.host,
    protocol: a.protocol,
    hostname: a.hostname,
    pathname: a.pathname,
    origin: a.origin
  };
}

let a = parseUrl('http://haveignition.com:8080/fizz/buzz.css?a=1&b[]=a&b[]=b#foo');
console.log(a.href === "http://haveignition.com:8080/fizz/buzz.css?a=1&b[]=a&b[]=b#foo");
console.log(a.hash === "#foo");
console.log(a.port === "8080");
console.log(a.host === "haveignition.com:8080");
console.log(a.protocol === "http:");
console.log(a.hostname === "haveignition.com");
console.log(a.pathname === "/fizz/buzz.css");
console.log(a.origin === "http://haveignition.com:8080");
