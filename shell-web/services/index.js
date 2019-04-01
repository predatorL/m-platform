const os = require('os');


exports.getIp = () => {
    return os.networkInterfaces();
}
