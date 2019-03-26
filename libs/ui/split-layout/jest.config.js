module.exports = {
  name: 'ui-split-layout',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/split-layout',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
