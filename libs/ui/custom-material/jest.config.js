module.exports = {
  name: 'user-interface-custom-material',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/user-interface/custom-material',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
