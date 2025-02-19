class ExampleSocketIoAction extends baseAction {
  async executeMethod() {
    /*
    SOCKET CONNECTION USING SOCKET_IO EXAMPLE

    Steps:
    1. In config.json, set the following:
        "SOCKET_SYSTEM_TYPE": "SOCKET_IO"
    2. Please find index1.html and index2.html in the Assets/Downloads folder. Open both these files in your browser.
    3. Update the below content in global/constants.js.
          constant.CONNECTION_HANDLER_METHOD = "example/socketConnect";  //this will trigger while conection is established
          constant.DISCONNECTION_HANDLER_METHOD = "example/socketDisconnect";  //this will trigger while conection is disconnected
        (NOTE: Please read  example/socketConnect.js and example/socketDisconnect.js files for more details)
    4. In global/constants.js, define the following:
          constant.SOCKET_ID_ARRAY = [];
        (NOTE: This will used to store the socket ids for below example, you can use database or any other storage as per your requirement.)
    5. To test this example make sure you are running the server (njs2 run),
    6. Open index1.html and index2.html in browser and open developer console of the respective browsers. 
        (NOTE: You can find developer console in the settings of the browser)
    7. In console you will recieve the following message once the connection is established:
          message recieved=>  newly connected socket_id_JTcsKa8igIeBiewAAAD
    8. Press the send button in index1.html and you will recieve the following message in the console:
          Button pressed, So message will send
        (NOTE: This indicates that the message is sent to the socket)
    9. In html files, You might have noticed that 
          action : "example/socketIo" (While emitting message this action or API would execute).
          request_id : is just to maintain the identity for the request.
          method : specifies the http method, "GET" or "POST".
        (NOTE: Please read the html files for more understanding)


    */

    this.setResponse("SUCCESS");
    return { ALL_USERS: GLB.SOCKET_ID_ARRAY };
  }
}
module.exports = ExampleSocketIoAction;
