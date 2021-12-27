const AWS = require('aws-sdk');
const { DateTime } = require('luxon');
const dynamo = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
  region: "us-west-2"
});

module.exports.putRecord = async (event) => {
  const statusCode = {
    OK: 200,
    BadRequest: 400,
    InternalServerError: 500
  }
  try {
    const requestRecord = JSON.parse(JSON.stringify(event));
    try {
      await dynamo.put({
        TableName: "work-record-log",
        Item: {
          "date": DateTime.now().toFormat('yyyy-MM-dd'),
          "startTime": DateTime.now().toFormat('HH:mm:ss'),
          "endTime": null,
          "timeLength": null,
          "content": requestRecord.content,
          "category": requestRecord.category,
        }
      }).promise();
      return statusCode.OK;
    } catch (ex) {
      return statusCode.InternalServerError;
    }
  } catch (err) {
    console.log(err.message);
    return statusCode.BadRequest;
  }
}
