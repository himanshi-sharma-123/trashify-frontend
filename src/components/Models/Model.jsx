import React, { useState, useEffect } from "react";
import styles from "./Model.module.css";

const Model = () => {
  useEffect(() => {
    const videoElement = document.getElementById("video");

    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
        videoElement.srcObject = stream;
      } catch (err) {
        console.error("Error accessing the camera:", err);
      }
    };

    startVideo();

    return () => {
      if (videoElement.srcObject) {
        const stream = videoElement.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  return (
    <div name="models" className={styles.model}>
      <div className={styles.heading}>
        <h1>Models</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Waste Classification Model</span>
          </p>
        </div>
      </div>{" "}
      <div className={styles.video}>
        <video id="video" width="640" height="480" autoPlay></video>
        <img
          src="http://127.0.0.1:5000/video_feed"
          alt="Waste Classification"
        />
      </div>
    </div>
  );
};

export default Model;

// import React, { useState, useEffect } from "react";
// import styles from "./Model.module.css";
// import axios from "axios";

// const Model = () => {
//   const [data, setData] = useState([{}]);
//   const [fileData, setFileData] = useState(null);
//   const [imageUrl, setImageUrl] = useState(null);

//   const [detectionResult, setDetectionResult] = useState(null);

//   const loadImageBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });
//   };

//   const handleFileInputChange = (event) => {
//     const file = event.target.files[0];
//     setFileData(file);

//     // Load image as data URL for preview
//     loadImageBase64(file)
//       .then((url) => setImageUrl(url))
//       .catch((error) => console.error("Error loading image:", error.message));
//   };

//   const handleDetection = async () => {
//     if (fileData) {
//       try {
//         setDetectionResult(null);

//         const image = await loadImageBase64(fileData);
//         const response = await axios({
//           method: "POST",
//           url: "https://detect.roboflow.com/garbage-detector-lm49n/2",
//           params: {
//             api_key: "qwoFDPlqoe5IFEU8qAEb",
//           },
//           data: image,
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//         });
//         setDetectionResult(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error during detection:", error.message);
//         setDetectionResult({
//           error: "An error occurred during detection.",
//         });

//         // console.log(error.message);
//       }
//     } else {
//       console.log("No file selected.");
//     }
//   };

//   return (
//     <div name="models">
//       <h1>Model</h1>

//       <div className={styles.detection}>
//         <h3>Waste Detection</h3>
//         <input type="file" onChange={handleFileInputChange} />
//         <button onClick={handleDetection}>Detect Garbage</button>
//         {imageUrl && (
//           // <div style={{ marginTop: "20px", position: "relative" }}>
//           //   {/* Display the uploaded image */}
//           //   <img
//           //     src={imageUrl}
//           //     alt="Uploaded"
//           //     style={{ maxWidth: "100%", borderRadius: "8px" }}
//           //   />

//           //   {detectionResult && (
//           //     // Overlay predictions on the image
//           //     <div
//           //       style={{
//           //         position: "absolute",
//           //         top: 0,
//           //         left: 0,
//           //         color: "white",
//           //       }}
//           //     >
//           //       <pre>{JSON.stringify(detectionResult, null, 2)}</pre>

//           //       {detectionResult.predictions.map((prediction, index) => (
//           //         <div key={index}>
//           //           {`${prediction.label}: ${Math.round(
//           //             prediction.confidence * 100
//           //           )}%`}
//           //         </div>
//           //       ))}
//           //     </div>
//           //   )}
//           // </div>
//           <div style={{ marginTop: "20px", position: "relative" }}>
//             {/* Display the uploaded image */}
//             <img
//               src={imageUrl}
//               alt="Uploaded"
//               style={{ maxWidth: "100%", borderRadius: "8px" }}
//             />

//             {detectionResult && (
//               // Overlay yellow-bordered rectangles around predicted objects
//               <div style={{ position: "relative", top: 0, left: 0 }}>
//                 {detectionResult.predictions.map((prediction, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       position: "absolute",
//                       top: `${prediction.y * 100}%`,
//                       left: `${prediction.x * 100}%`,
//                       width: `${prediction.width * 100}px`, // Set the width of the rectangle
//                       height: `${prediction.height * 100}px`, // Set the height of the rectangle
//                       border: "2px solid yellow",
//                       borderRadius: "8px",
//                     }}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Model;
