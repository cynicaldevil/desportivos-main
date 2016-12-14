export default (path) => {
    if(process.env.NODE_ENV === 'development') {
        path = '../' + path;
    }
    return path;
};