"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Image4ioAPI = require("./Image4ioAPI");
require("mocha");
var Models = __importStar(require("./Models"));
var chai = __importStar(require("chai"));
var apiKey = 'OlNgDAcLoBesIJMz6GTDhg==';
var apiSecret = '6YRWZGhOMmOPrLyMBVyazUmnZx6K0B23AuvnUeBCD+M=';
var api = new Image4ioAPI.Image4ioAPI(apiKey, apiSecret);
describe('Image4IOAPITest', function () {
    it('GetTest', function () {
        var getRes = api.GetImageDetails(new Models.GetImageDetailsRequestModel("/test.png"));
        return getRes.then(function (response) {
            chai.expect(response.name).of.equals("/test.png");
        }).catch(function (error) {
            throw error;
        });
    });
    it('UploadTest', function () {
        var uploadReq = new Models.UploadFilesRequestModel("Test", true, true);
        uploadReq.Add("./Pattern.jpg", "Pattern.jpg", "Pattern.jpg");
        var uploadRes = api.Upload(uploadReq);
        return uploadRes.then(function (response) {
            chai.expect(response.uploadedFiles[0].status == "Uploaded" || response.uploadedFiles[0].status == "Overwrited").to.equal(true);
        }).catch(function (error) {
            throw error;
        });
    });
    it('FetchTest', function () {
        var fetchRes = api.Fetch(new Models.FetchRequestModel("https://rockandresole.com/wp-content/uploads/2017/04/58832_300x300.jpg", "Test"));
        return fetchRes.then(function (response) {
            chai.expect(response.fetchedFile.status).of.equals("Fetched");
        }).catch(function (error) {
            throw error;
        });
    });
    it('CopyTest', function () {
        var copyRes = api.Copy(new Models.CopyRequestModel("/Test/test.png", "Test4"));
        return copyRes.then(function (response) {
            chai.expect(response.copiedFile.status).of.equals("Copied");
        }).catch(function (error) {
            throw error;
        });
    });
    it('MoveTest', function () {
        var moveRes = api.Move(new Models.MoveRequestModel("/Test/test.png", "Test3"));
        return moveRes.then(function (response) {
            chai.expect(response.movedFile.status).of.equals("Moved");
        }).catch(function (error) {
            throw error;
        });
    });
    it('ListTest', function () {
        var listFolderRes = api.ListFolder(new Models.ListFolderRequestModel("Test"));
        return listFolderRes.then(function (response) {
            chai.expect(response.files.length).greaterThan(0);
        }).catch(function (error) {
            throw error;
        });
    });
    it('CreateTest', function () {
        var createRes = api.CreateFolder(new Models.CreateFolderRequestModel("Test1"));
        return createRes.then(function (response) {
            chai.expect(response.createdFolder.status == "Created" || response.createdFolder.status == "AlredyExist").to.equal(true);
        }).catch(function (error) {
            throw error;
        });
    });
    it('DeleteFileTest', function () {
        var deleteFileRes = api.DeleteFile(new Models.DeleteFileRequestModel("/Test/Pattern.jpg"));
        return deleteFileRes.then(function (response) {
            chai.expect(response.deletedFile.status).of.equals("Deleted");
        }).catch(function (error) {
            throw error;
        });
    });
    it('DeleteFolderTest', function () {
        var deleteFolderRes = api.DeleteFolder(new Models.DeleteFolderRequestModel("Test1"));
        return deleteFolderRes.then(function (response) {
            chai.expect(response.deletedFolder.status).of.equals("Deleted");
        }).catch(function (error) {
            throw error;
        });
    });
});
