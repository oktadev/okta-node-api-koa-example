# Build A Secure Node.js API with KoaJS Example

This example project is for the blog post "[Build A Secure Node.js API with KoaJS](https://developer.okta.com/blog/2020/07/17/secure-node-api-with-koa)."

This project requires:

* [Node.js](https://nodejs.org) version 12 or higher
* Free [Okta Developer](https://developer.okta.com/) account

## Setup

It would be best to follow the tutorial using the link above.

* Clone or download this project
* Run `npm install` to install dependencies
* Create a file named `.env` in the root of the project

  ```sh
  OKTA_CLIENT_ID={yourOktaClientID}
  OKTA_ISSUER={yourOktaDomain}/oauth2/default
  OKTA_AUDIENCE=api://default
  ```

* Create a **Service** application in the Okta Developer dashboard
* Copy your application's **Client ID** and your Okta Developer **Org URL** to the `.env` file
* Launch server using `node index.js`
