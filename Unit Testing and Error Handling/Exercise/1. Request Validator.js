function validate({method, uri, verion, message}) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];

    if (!methods.includes(method)) {
        throw new Error(`Invalid request header: Invalid ${method}`)
    }


    if (uri != new RegExp('[A-z0-9]*\.[A-z0-9]+')) {
        throw new Error(`Invalid request header: Invalid ${uri}`)
    }


}