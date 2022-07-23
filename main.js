var upload = new Upload({ apiKey: "public_12a1xnU6fR7pUFPnr9AJtSE7R37d" })
var uploadFile = upload.createFileInputHandler({
    onUploaded: ({ fileUrl, fileId }) => {
        showThankyou(fileUrl);
    }
});

function showThankyou(fileUrl) {
    document.getElementById("upload").className = "hidden";
    document.getElementById("thankyou").className = "";
    document.getElementById("uploadPreview").setAttribute("src", fileUrl);
}