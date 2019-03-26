module.exports = {
  name: 'shared-test-utilities',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/test-utilities',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
