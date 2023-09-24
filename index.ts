const fs = require('fs');

let fileDescriptor;
fs.open('/tmp/shairport-sync-metadata', fs.constants.O_RDONLY | fs.constants.O_NONBLOCK, (_, fd) => {
    fileDescriptor = fd;
})

const readStr = fs.createReadStream('/tmp/shairport-sync-metadata', { fd: fileDescriptor });
readStr.on('data', (data) => {
    console.log(data.toString())
})
