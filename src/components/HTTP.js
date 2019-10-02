export const getHttpRequestPromise = url => new Promise(((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', url, true);

    req.onload = () => {
        if (req.status === 200) {
            resolve(req.response);
        } else {
            reject(Error(req.statusText));
        }
    };

    req.onerror = () => {
        reject(Error('Network Error'));
    };

    req.send();
}));

export const getHttpRequestJSON = url => getHttpRequestPromise(url).then(JSON.parse);

