import jimp from 'jimp';

export const resize = (imgPath: string) => {
  const [imgName] = imgPath.match(/[^.]+(?=\.)/) || ['image'];

  const placeholderImgPath = imgName.concat('.placeholder').concat('.jpeg');

  return jimp.read(imgPath).then(img =>
    img
      .resize(835, 546)
      .quality(20)
      .write(placeholderImgPath),
  );
};
