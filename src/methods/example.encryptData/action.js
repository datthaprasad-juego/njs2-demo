class ExampleEncryptDataAction extends baseAction {
  async executeMethod() {
    /*
    ENCRYPT DATA EXAMPLE

    Description:
    - This example encrypts data sent in request.

    Steps:
    1. Update the below configuration in the config.json file.
          "ENCRYPTION_KEY": "secret-key-XXX-YYY-ZZZ",
          "ENCRYPTION_IV": "secret-iv-XXX-YYY-ZZZ",
        (NOTE: The encryption key and iv can be changed to any string of your choice. This project uses the above configurations.)
    2. Go through the encryption.lib.js helper method, created under the library/helperLib.
    3. You can use the same snippet for future use.
    4. The data sent by the user is encrypted using the encryptText() method.
    5. In postman select example/encrypData API and pass the following data in params,
          data: {"name":"NJS2-user"}
    6. You will get the following response as encypted data:
          26mxjRXwmPVw7goGnnPxrcfTYWncNv50FJmPY5uFCgY=
    */

    const [encryptionLib] = AutoLoad.loadLibray("helperLib", ["encryption"]);

    let { data } = this;
    const encryptedData = encryptionLib.encryptText(data);

    this.setResponse("SUCCESS");
    return { encryptedData };
  }
}
module.exports = ExampleEncryptDataAction;
