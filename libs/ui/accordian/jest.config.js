module.exports = {
  name: 'ui-accordian',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/accordian',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
