/**
   * @jest-environment jsdom
   */
const { handleFormSubmit } = require('./index');

describe('handleFormSubmit', () => {
  it('redirects to bday.html for today\'s birthday', () => {

    document.body.innerHTML = `
      <form id="birthdayForm">
        <input id="name" type="text" value="John" />
        <input id="birthday" type="date" value="${new Date().toISOString().split('T')[0]}" />
        <div id="nameError"></div>
        <div id="birthdayError"></div>
        <div id="loadingSpinner"></div>
      </form>
    `;

    const mockLocation = { href: '' };
    Object.defineProperty(window, 'location', {
      value: mockLocation,
      writable: true,
    });

    const originalLocationHref = window.location.href;
    window.location.href = '';

    handleFormSubmit({
        preventDefault: jest.fn(),
    });

    expect(window.location.href).toBe('bday.html');

    window.location.href = originalLocationHref;
  });


});
  