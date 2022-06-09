function validate({method, uri, version, message}) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];


    const uriRegex = /(^[\w.]+$)/;
    const messageRegex = /([<>\\&'"])/;

      
    if (!method || !methods.includes(method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }


    else if (uri == '' && (uriRegex.test(uri) || uri != '*')){
        throw new Error(`Invalid request header: Invalid URI`);
    }

    else if (!versions.includes(version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    else if (message == undefined || messageRegex.test(message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    else return {method, uri, version, message};
}

console.log(validate({

    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
    
    }));