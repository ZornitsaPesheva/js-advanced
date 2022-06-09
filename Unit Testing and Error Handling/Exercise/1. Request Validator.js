function validate({method, uri, version, message}) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];


    function containsSpecialChars(str) {
        const specialChars = /[`'"\\,<>]/;
        return specialChars.test(str);
      }

    if (!methods.includes(method)) {
        throw new Error(`Invalid request header: Invalid ${method}`);
    }


    else if (uri == '' && (uri != new RegExp('[A-z0-9]*\.[A-z0-9]+' || uri != '*'))) {
        throw new Error(`Invalid request header: Invalid ${uri}`);
    }

    else if (!versions.includes(version)) {
        throw new Error(`Invalid request header: Invalid ${version}`);
    }

    else if (containsSpecialChars(message)) {
        throw new Error(`Invalid request header: Invalid ${message}`);
    }

    else return {method, uri, version, message};
}

console.log(validate({

    method: 'GET',
    
    uri: 'svn.public.catalog',
    
    version: 'HTTP/1.1',
    
    message: ''
    
    }));