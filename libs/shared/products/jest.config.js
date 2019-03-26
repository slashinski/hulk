module.exports = {
  name: 'shared-products',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/products',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
