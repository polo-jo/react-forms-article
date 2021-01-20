const nativeForm = document.getElementById('native-form');

nativeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  alert(Array.from(formData));
});

/**
 * There top might be more straightforward and is less likely to distract from the point
 * ...maybe leave an easter egg comment about there being a more functional way to do this and asking the user to spot it?
 */

// let responseString = 'Form Values';
// for (const [entryName, entryValue] of formData.entries()) {
//   responseString = responseString.concat(`\n ${entryName} - ${entryValue}`);
// }

// const alertMessage = Array.from(formData.entries()).reduce(
//   (alertString, [entryName, entryValue]) => {
//     return alertString + `\n ${entryName} - ${entryValue}`;
//   },
//   'Form Values',
// );
