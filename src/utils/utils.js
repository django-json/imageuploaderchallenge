/**
 * @description This function upload image to the backend API
 * @param {Object} file The image file to be uploaded
 * @param {String} fieldName The name of the field that will contain the image file in the form data
 * @returns {Object} The response object if the upload is successfull or failure
 */

export function uploadImage(file, fieldName) {
    let formData = new FormData();

    formData.append(fieldName, file);

    return fetch(`imageuploaderchallenge-api.vercel.app/uploads`, {
        method: 'POST',
        body: formData
    })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));
}
