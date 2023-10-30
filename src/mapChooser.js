const mapChooser = (location) => {
  const image = !location ? "default.jpg" : location + ".jpg";
  return image;
};

export default mapChooser;
