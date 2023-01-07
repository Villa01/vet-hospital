const aws_service = require('aws-sdk');

const region = 'us-west-2';
const accessKeyId = 'AKIAWLB7OR4QXIE5C3KA';
const secretKey = '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';

aws_service.config.update({region, credentials: {accessKeyId:accessKeyId, secretAccessKey:secretKey}});

module.exports = {
    aws_service
};