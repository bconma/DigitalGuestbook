var upload = new Upload({ apiKey: "public_12a1xnU6fR7pUFPnr9AJtSE7R37d" });
var uploadFile = upload.createFileInputHandler({
    onBegin: showThankyou,
    onUploaded: ({ fileUrl, fileId }) => {
        showPreview(fileUrl);
    }
});

function showThankyou() {
    document.getElementById("upload").className = "hidden";
    document.getElementById("uploadingText").className = "";
    document.getElementById("thankyou").className = "";
}

function showPreview(fileUrl) {
    document.getElementById("uploadPreview").setAttribute("src", fileUrl);
    document.getElementById("uploadingText").className = "hidden";
}
