function validate({method, uri, verion, message}) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT']
    if (!methods.includes(method)) {
        throw new Error(`Invalid request header: Invalid ${method}`)
    }

    if(m)
}