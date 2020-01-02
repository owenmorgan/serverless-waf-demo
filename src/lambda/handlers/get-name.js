
export function handler(event, context, callback) {

    console.log("Network check initiated");
    var res ={
        "statusCode": 200,
        "headers": {
            "Content-Type": "*/*"
        }
    };

    res.body = process.env.NAME
    callback(null, res);
}