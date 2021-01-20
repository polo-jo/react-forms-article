import * as React from 'react';
import { UncontrolledForm } from './UncontrolledForms';

/**
 * Methods of native forms
 *  - use ref for each element
 *  - load values into form? (oftentimes loading data from api and then populating form)
 *
 * Maybe its an education on web native forms, and then applying it to react...
 *  React might well have shortcommings and then knowing how to grapple with them and reason about them is the knowledge
 *    Furthermore, knowing that how can we use the native materials we have to make more accessible forms?
 */
export function App(): JSX.Element {
  return <UncontrolledForm />;
}
