// File helper

export const fileToBase64 = (file) => {
    return new Promise(resolve => {
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const binaryString = event.target.result
                resolve(btoa(binaryString));
            };
            reader.readAsBinaryString(file);
        } else {
            resolve(null)
        }
    });
};

export const fileToBase64WithDataUrlDeclaration = (file) => {
    return new Promise(resolve => {
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                resolve(event.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            resolve(null)
        }
    });
};

export const getBase64EncodedDataWithDataUrlDeclaration = (imageContent) => {
    const mimeTypes = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
    if (!mimeTypes.includes(imageContent.mimeType)) {
        throw new Error('The image type for the file is invalid. Enter the correct image type and try again.')
    }

    if (typeof imageContent.base64EncodedData !== 'string') {
        throw new Error("Image's encoded data is invalid or corrupted.")
    }

    const declaration = ("data:" + imageContent.mimeType + ";base64,")
    if (imageContent.base64EncodedData.indexOf(declaration) === 0) {
        return imageContent.base64EncodedData
    }

    return declaration + imageContent.base64EncodedData
}