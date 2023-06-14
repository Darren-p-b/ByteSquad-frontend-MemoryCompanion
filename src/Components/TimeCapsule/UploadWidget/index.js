import React from "react";
import { useEffect, useRef } from "react";

function UploadWidget() {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dcdmhdqbi",
        uploadPreset: "TimeCapsuleGallery1",
      },
      function (error, result) {
        console.log(result);
      },
      []
    );
  });
    return (
        <button onClick={() => widgetRef.current.open()}>Upload</button>
    )
}

export default UploadWidget;
