module.exports = {
  name: 'ui-fast-click',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/fast-click',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
