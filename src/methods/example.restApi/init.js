
class ExampleRestApiInitalize extends baseInitialize {

  constructor() {
    super();
    this.pkgInitializer =  {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "user_id": {
        "name": "user_id",
        "type": "string",
        "description": "Example Id for user",
        "required": true,
        "default": "123"
      },
    };

    return { ...param };
  }
}

module.exports = ExampleRestApiInitalize;