![altText](https://cdn.image4.io/i4io/logo-dark-side.png "Logo")

![altText](https://img.shields.io/github/package-json/v/Image4IO/image4ionodeSDK "License") 
![altText](https://img.shields.io/github/license/Image4IO/image4ionodeSDK "License") ![altText](https://img.shields.io/github/languages/top/Image4IO/image4ionodeSDK "Lang")

# Image4ioNodeSDK 
image4io is a full stack image manager that stores, optimizes and delivers for websites and mobile applications. This is the Nodejs SDK for image4io API.

## Configuration
To send requests to API, APIKey and APISecret must be given as string first. Required keys can be retrieved from image4io console.
```javascript
import Image4ioAPI = require('./Image4ioAPI');

var apiKey = 'apiKey';
var apiSecret = 'apiSecret';

var api = new Image4ioAPI.Image4ioAPI(apiKey, apiSecret);
```
## Available Requests
This SDK currently supports 16 requests.

* GetSubscription
* GetImage
* UploadImage
* FetchImage
* CopyImage
* MoveImage
* DeleteImage
* CreateFolder
* DeleteFolder
* ListFolder
* StartUploadStream
* UploadStreamPart
* FinalizeStream
* GetStream
* FetchStream
* DeleteStream

Documentation is available at: [image4io API Documentation](https://image4.io/en/documentation)

## Usage
### Default Usage
With Image4io, it is very straightforward to do an operation on your images. GetImage example can be seen below.
```javascript
var getRes = api.GetImage(new Models.GetImageRequest("/folderName/test.png"));
getRes.then(response => {
    //Response returns a JSON object, which can be accessed here
}).catch(error => {
    throw error;
})
```

### Unit Testing
Unit testing could be done by using chai and mocha packages. Complete test can be found in the Test.ts file. Tests are run by ``` npm  run tsc ``` then ```mocha test.js``` commands.
```javascript
describe('Image4IOAPITest', () => {
    it('GetTest', () => {
        var getRes = api.GetImageDetails(new Models.GetImageDetailsRequestModel("/test.png"));
        return getRes.then(response => {
            chai.expect(response.name).of.equals("/test.png");
        }).catch(error => {
            throw error;
        })
    })
```
## Requirements
 1) ```mocha, chai``` and ```request-promise``` npm packages.
 2) ```createReadStream``` from ```fs``` module.
 3) Valid Image4io account.
## Contact Us
Image4io team is always ready to support you, feel free to 
[contact us.](https://image4.io/en/contact)
## Follow Us
* [Image4io Blog](https://image4.io/en/blog)

* [Twitter](https://twitter.com/image4io)

* [LinkedIn]( linkedin.com/company/image4io/)

## License
[MIT](https://choosealicense.com/licenses/mit/)
