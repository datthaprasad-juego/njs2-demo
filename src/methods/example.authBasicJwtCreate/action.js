const jwt = require("jsonwebtoken");
class ExampleAuthBasicJwtCreateAction extends baseAction {
  async executeMethod() {
    /*
    AUTHENTICATION TOKEN GENERATION USING JWT EXAMPLE

    Description:
    -This example will generate access_token for given user_id argument and will send in response.

    Steps:
    1. Install jsonwebtoken package: npm install jsonwebtoken --save
    2. Import: const jwt = require('jsonwebtoken');
    3. Send user_id as an argument to this action from postman or visit following URL in Browser,
        http://localhost:3000/example/authBasicJwtCreate?user_id=123
    4. Save or copy the access_token for further use.
    */

    let { user_id } = this;
    let access_token = jwt.sign({ user_id }, "my_secret_key");
    this.setResponse("SUCCESS");
    return { access_token };
  }
}
module.exports = ExampleAuthBasicJwtCreateAction;
