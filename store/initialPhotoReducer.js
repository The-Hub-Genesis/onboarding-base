import { ADD_PROFILE_PHOTO } from "./initialPhotoAction";
import ProfilePhoto from "../models/profilePhoto";

const initialState = {
  profilePhotos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE_PHOTO:
      const newProfilePhoto = new ProfilePhoto(
        new Date().toString(),
        action.placeData.title
      );
      return {
        profilePhoto: state.profilePhotos.concat(newProfilePhoto),
      };
    default:
      return state;
  }
};
