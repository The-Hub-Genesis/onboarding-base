export const ADD_PROFILE_PHOTO = "ADD_PROFILE_PHOTO";

export const addProfilePhoto = (title) => {
  return { type: ADD_PROFILE_PHOTO, profilePhotoData: { title: title } };
};
