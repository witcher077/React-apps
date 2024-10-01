import axios from 'axios';
import React, { useContext, useState } from 'react'
import UserContext from '../../AuthContext/userContext'

const Profile = () => {

  const { user } = useContext(UserContext);
  const [image, setImage] = useState()
  const onInputChange = (e) => {
    setImage(e.target.files[0])
    console.log(e.target.files[0]);

  }
  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('image', image);

    const result = await axios.post("http://localhost:8000/upload-image", formData,
      {
        headers: { "content-type": "multi-part/form-data" }
      })
  }

  return (<>
    <div id="algn">
      <div id="card">

        <div id="upper-bg">
          <form onSubmit={submitHandler}>
            <input type="file" onChange={onInputChange} />
            <button type="submit">upload</button>
          </form>
          <img src="https://nasemul1.github.io/my-portfolio/profile-pic.png" alt="profile-pic" class="profile-pic" />
        </div>
        <div id="lower-bg">
          <div class="text">
            <p class="name">{user}</p>
            <p class="title">Web developer  Competitive programmer</p>
          </div>
          <div id="icons">
            <a href="#" class="ico"><img width="48" height="48" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new" /></a>
            <a href="#" class="ico">
              <img width="48" height="48" src="https://img.icons8.com/fluency/48/github.png" alt="github" />
            </a>
            <a href="#" class="ico">
              <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
            </a>
            <a href="#" class="ico">
              <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
            </a>
          </div>
          <div id="btn">
            <button class="msg">Subscribe</button>
            <button class="msg">Message</button>
          </div>
          <div id="l-c-s">
            <div class="num">
              <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/facebook-like--v1.png" alt="facebook-like--v1" />
              <span>35k</span>
            </div>
            <div class="num dvr"></div>
            <div class="num">
              <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/speech-bubble--v1.png" alt="speech-bubble--v1" />
              <span>20k</span>
            </div>
            <div class="num dvr"></div>
            <div class="num">
              <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/share.png" alt="share" />
              <span>15k</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>)
}

export default Profile