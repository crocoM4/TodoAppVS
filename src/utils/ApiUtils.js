/* eslint quote-props: ["error", "consistent"] */

const getAntiForgeryToken = () => {
  const inputsToken = document.getElementsByName('__RequestVerificationToken');
  return inputsToken[0].value;
};

export const callApi = (url, options = {}) => (
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      '__RequestVerificationToken': getAntiForgeryToken(),
    },
    body: JSON.stringify(options),
  })
    .then(
      response => (response.ok ?
        response.json() :
        Promise.reject(response.text())
      ),
      error => Promise.reject(error),
    )
);

export default callApi;

