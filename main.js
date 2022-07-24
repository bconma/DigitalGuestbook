let upload = new Upload({ apiKey: "public_12a1xnU6fR7pUFPnr9AJtSE7R37d" });
let uploadImage = upload.createFileInputHandler({
    onBegin: () => {
        startUploading();
    },
    onUploaded: ({ fileUrl, fileId }) => {
        showPreview(fileUrl);
        finishedUploading();
    },
    onProgress: ({ bytesSent, bytesTotal }) => {
        updateProgress(100 * bytesSent / bytesTotal);
    },
});

function startUploading() {
    document.getElementById("submitBtn").disabled = true;
}

function finishedUploading() {
    document.getElementById("submitBtn").disabled = false;
}

function showPreview(fileUrl) {
    document.getElementById("uploadPreview").setAttribute("src", fileUrl + "/thumbnail");
    document.getElementById("uploadPreview").className = "";
    document.getElementById("captureBtn").setAttribute("value", `Re-take Picture`);
}

function showThankyou() {
    document.getElementById("upload").className = "hidden";
    document.getElementById("thankyou").className = "";
}

function updateProgress(percent) {
    percent = Math.floor(percent);
    document.getElementById("captureBtn").setAttribute("value", `Loading (${percent}%)`);
}

function handleSendMessage() {
    let msgFile = generateMessageFile();

    document.getElementById("submitBtn").disabled = true;

    let promise = upload.uploadFile({
        file: msgFile
    });

    promise.then(() => {
        showThankyou();
        document.getElementById("submitBtn").disabled = false;
    });

}

function generateMessageFile() {
    timestamp = Date.now();
    msgObj = {
        fileUrl: document.getElementById("uploadPreview").getAttribute("src"),
        message: document.getElementById("messageText").value,
        timestamp: timestamp
    };

    let blob = new Blob([JSON.stringify(msgObj, null, 2)],
        { type: "text/plain;charset=utf-8" });

    let file = new File([blob], `${timestamp}.json`);

    return file;
}