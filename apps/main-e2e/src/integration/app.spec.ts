import { getGreeting } from '../support/app.po';

describe('Hello Hulk', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to Hulk-Main iea!');
  });
});
