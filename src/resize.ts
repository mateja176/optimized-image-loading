import jimp from 'jimp';

jimp.read('neutron-star-collision.png').then(img =>
  img
    .resize(835, 546)
    .quality(20)
    .write('neutron-star-collision.placeholder.jpeg'),
);
