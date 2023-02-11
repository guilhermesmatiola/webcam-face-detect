import styled from "styled-components";
import { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import Home from "../home/Home";

import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Webcam from 'react-webcam';
import { CameraOptions, useFaceDetection } from 'react-use-face-detection';
import FaceDetection from '@mediapipe/face_detection';
import { Camera } from '@mediapipe/camera_utils';
import html2canvas from "html2canvas";

export default function Main() {


  const { webcamRef, boundingBox, isLoading, detected, facesDetected } = useFaceDetection({
    faceDetectionOptions: {
      model: 'short',
    },
    faceDetection: new FaceDetection.FaceDetection({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
    }),
    camera: ({ mediaSrc, onFrame, width, height }: CameraOptions) =>
      new Camera(mediaSrc, {
        onFrame,
        width,
        height,
      }),
  });
  const divRef = useRef(null);

  const handleSave = async () => {
    const canvas = await html2canvas(divRef.current);
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = canvas.toDataURL();
    link.click();
  };


  return (
    <>
      <Home>
      </Home>
      <Conteudo>


        <Conteudo>
          <button onClick={handleSave}>Save as PNG</button>

          <h1>{`Detectou: ${detected}`}</h1>
          <h1>{`Faces detectadas: ${facesDetected}`}</h1>

          <div ref={divRef} style={{ marginTop: '-30px', width: '700px', height: '700px', position: 'relative' }}>
            {boundingBox.map((box, index) => (
              <div
                key={`${index + 1}`}
                style={{
                  border: '4px solid red',
                  position: 'absolute',
                  top: `${box.yCenter * 100}%`,
                  left: `${box.xCenter * 100}%`,
                  width: `${box.width * 100}%`,
                  height: `${box.height * 100}%`,
                  zIndex:1
                }}
              />
            ))}
            <Webcam
              ref={webcamRef}
              forceScreenshotSourceSize
              style={{
                height: '100%',
                width: '100%',
                // objectFit: 'cover',
                position: 'absolute',
              }}
            />
          </div>
        </Conteudo>
        ;
      </Conteudo>

    </>
  );
}
const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  h1{
    font-weight: bold;
    margin-top: 6px;
  }
  button{
    background-color: #008CBA;
    border-radius: 20px;
    padding: 12px 28px;
    margin-top: 7px;
  }
`

