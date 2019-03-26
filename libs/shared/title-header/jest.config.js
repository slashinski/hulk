module.exports = {
  name: 'shared-title-header',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/title-header',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
