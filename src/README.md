//Firebase:
https://bezkoder.com/react-firebase-crud/

initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      motherfirstName: "",
      fatherfirstName: "",
      nationality: "",
      dob: null,
      addrDoorNo:'',
      addrLine1:'',
      addrLine2:'',
      addrCityMandal:'',
      addrState:'',
      addrPincode:'',
      addrPermDoorNo:'',
      addrPermLine1:'',
      addrPermLine2:'',
      addrPermCityMandal:'',
      addrPermState:'',
      addrPermPincode:'',
      checkedPermAddress:false,
      mobileNumber:'',
      alternateNumber:'',
      // underGrad:{eduUnderGrad:false,eduInstituteName:'',},
      // grad:{eduGrad:false,eduInstituteName:''},
      // diploma:{eduDiploma:false,eduInstituteName:''},
      // postGrad:{eduPostGrad:'',eduInstituteName:''}
    }



DatePicker : https://medium.com/wesionary-team/using-material-datepicker-in-react-98685e272149

 <DatePicker
                      selected={values.dob}
                      dateFormat="dd/MM/yyyy" 
                      className="form-control"
                      name="dob"
                      showYearDropdown
                      scrollableYearDropdown
                      disableFutureDate
                      onChange={(date) => setFieldValue("dob", date)}
                      placeholderText="DOB, dd/MM/yyyy"
                    />

                    {/* <Grid container>
  {/* <DropzoneArea onChange={(files) => console.log("Files:", files)} filesLimit={6}/> */}
  {/* <DropAttachments
    submitButtonText={"Update"}
    onSave={handleDropAttachments}
    open={attachmentOpen}
    setOpen={setAttachmentOpen}
  /> */}
  {/* <BasicDropZoneAttachments noDrop={true} multiple={true}/> */}
</Grid> */}

 allow read, write: if request.auth != null;


 Firebase  : https://dev.to/itnext/how-to-do-image-upload-with-firebase-in-react-cpj
 ----------------

 <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC6qfX4TjQbcutxF_DxpbuHze0rhk2gKb8",
    authDomain: "incut-employee-onboard.firebaseapp.com",
    databaseURL: "https://incut-employee-onboard.firebaseio.com",
    projectId: "incut-employee-onboard",
    storageBucket: "incut-employee-onboard.appspot.com",
    messagingSenderId: "872224518379",
    appId: "1:872224518379:web:e77eeb98fc6ef26cd50eae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>


 const imageAsFile = filesAttached[0];
      const uploadTask = storage
        .ref(`/images/${imageAsFile.path}`)
        .put(imageAsFile);

      uploadTask.on(
        "state_changed",
        (snapShot) => {
          //takes a snap shot of the process as it is happening
          console.log(snapShot);
        },
        (err) => {
          //catches the errors
          console.log(err);
        },
        () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          storage
            .ref("images")
            .child(imageAsFile.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              console.log({fireBaseUrl})
            });
        }
      );