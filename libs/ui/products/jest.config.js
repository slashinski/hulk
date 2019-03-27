module.exports = {
  name: 'ui-products',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/products',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
