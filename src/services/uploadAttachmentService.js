import { storage } from "../firebase/firebase";
import { uuid } from "uuidv4";

//Multiple file uploads
//https://dev.to/chriseickemeyergh/uploading-multiple-files-with-firebase-in-react-apps-1753

const uploadStorageTask = (imageAsFile, formData) => {
  const { firstName, lastName, email } = formData.employeePersonalInfomation;
  const folder = `${firstName}_${lastName}_${email}_ATTACHMENTS`;
  return storage.ref(`/images/${folder}/${imageAsFile.name}`).put(imageAsFile);
};

const getSnapshot = (snapshot, formData, imageAsFile) => {
  //takes a snap shot of the process as it is happening

  snapshot.ref.getDownloadURL().then( (downloadURL)=> {
    // You get your url from here
    // print the image url
    const name = imageAsFile.name.split(".")[0];
    formData.attachments = { ...formData.attachments, [name]: downloadURL };
    return formData.attachments;
  });
};

const getErrorInfo = (error) => {
  console.log(error);
};


const getUploadedAttachmentUrlAsync = async (imageAsFile, formData) => {
  return await storage
    .ref("images")
    .child(imageAsFile.name)
    .getDownloadURL();
  //  formData.empcustomId = getUuidForNewEmp();
  //const name = imageAsFile.name;
  //formData.attachments = { ...formData.attachments, [name]: downloadUrl };
  //return formData.attachments;
};

export const uploadAttachmentService = (
  imageAsFile,
  formData,
  uploadAttachmentTask
) => {
  const uploadTask = uploadAttachmentTask
    ? uploadAttachmentTask
    : uploadStorageTask(imageAsFile, formData);
  return uploadTask.on(
    "state_changed",
    (snapshot) => 
    {
     const snapResponse = getSnapshot(snapshot, formData, imageAsFile)
     console.log({snapResponse})
    },
    getErrorInfo,
    async () => await getUploadedAttachmentUrlAsync(imageAsFile, formData)
  );
};

export const uploadMultipleAttachmentService = (attachments, formData) => {
  let promises = [];
  attachments.map((attachment) => {
    const uploadTask = uploadStorageTask(attachment, formData);
    promises.push(uploadTask);
    return uploadAttachmentService(attachment, formData, uploadTask);
  });
  console.log({ formData });
  return Promise.all(promises)
    .then(() => {
      console.log("All Files Uploaded");
      return formData;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
