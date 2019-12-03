import Image4ioAPI = require('./Image4ioAPI');
import 'mocha';
import * as Models from './Models';
import * as chai from 'chai';

var apiKey = 'OlNgDAcLoBesIJMz6GTDhg==';
var apiSecret = '6YRWZGhOMmOPrLyMBVyazUmnZx6K0B23AuvnUeBCD+M=';

var api = new Image4ioAPI.Image4ioAPI(apiKey, apiSecret);

describe('Image4IOAPITest', () => {
    it('GetTest', () => {
        var getRes = api.GetImageDetails(new Models.GetImageDetailsRequestModel("/test.png"));
        return getRes.then(response => {
            chai.expect(response.name).of.equals("/test.png");
        }).catch(error => {
            throw error;
        })
    })
    it('UploadTest', () => {
        var uploadReq = new Models.UploadFilesRequestModel("Test", true, true);
        uploadReq.Add("./Pattern.jpg", "Pattern.jpg", "Pattern.jpg");
        var uploadRes = api.Upload(uploadReq);
        return uploadRes.then(response => {
            chai.expect(response.uploadedFiles[0].status == "Uploaded" || response.uploadedFiles[0].status == "Overwrited").to.equal(true);
        }).catch(error => {
            throw error;
        })
    })
    it('FetchTest', () => {
        var fetchRes = api.Fetch(new Models.FetchRequestModel("imageURL", "Test"));
        return fetchRes.then(response => {
            chai.expect(response.fetchedFile.status).of.equals("Fetched");
        }).catch(error => {
            throw error;
        })
    })
    it('CopyTest', () => {
        var copyRes = api.Copy(new Models.CopyRequestModel("/Test/test.png", "Test4"));
        return copyRes.then(response => {
            chai.expect(response.copiedFile.status).of.equals("Copied");
        }).catch(error => {
            throw error;
        })
    })
    it('MoveTest', () => {
        var moveRes = api.Move(new Models.MoveRequestModel("/Test/test.png", "Test3"));
        return moveRes.then(response => {
            chai.expect(response.movedFile.status).of.equals("Moved");
        }).catch(error => {
            throw error;
        })
    })
    it('ListTest', () => {
        var listFolderRes = api.ListFolder(new Models.ListFolderRequestModel("Test"));
        return listFolderRes.then(response => {
            chai.expect(response.files.length).greaterThan(0);
        }).catch(error => {
            throw error;
        })
    })
    it('CreateTest', () => {
        var createRes = api.CreateFolder(new Models.CreateFolderRequestModel("Test1"));
        return createRes.then(response => {
            chai.expect(response.createdFolder.status == "Created" || response.createdFolder.status == "AlredyExist").to.equal(true);
        }).catch(error => {
            throw error;
        })
    })
    it('DeleteFileTest', () => {
        var deleteFileRes = api.DeleteFile(new Models.DeleteFileRequestModel("/Test/Pattern.jpg"));
        return deleteFileRes.then(response => {
            chai.expect(response.deletedFile.status).of.equals("Deleted");
        }).catch(error => {
            throw error;
        })
    })
    it('DeleteFolderTest', () => {
        var deleteFolderRes = api.DeleteFolder(new Models.DeleteFolderRequestModel("Test1"));
        return deleteFolderRes.then(response => {
            chai.expect(response.deletedFolder.status).of.equals("Deleted");
        }).catch(error => {
            throw error;
        })
    })

})