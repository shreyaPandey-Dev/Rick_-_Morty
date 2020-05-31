// import React from "react";
import { Provider } from "react-redux";
// import Adapter from 'enzyme-adapter-react-16';
// import { shallow, configure } from 'enzyme';
// import configureMockStore from "redux-mock-store";
// import App from "./App";
// import Layout from './containers/Layout/Layout'


// const mockStore = configureMockStore();
// const store = mockStore({});

// configure({adapter: new Adapter()});
// describe("Testpage Component", () => {
//     it("should render without throwing an error", () => {
//         expect(
//             shallow(
//                 <Provider store={mockStore}>
//                     <App />
//                </Provider>
//             ).exists( 
//               <Provider store={mockStore}>
//               <App />
//          </Provider>
//             )
//         ).toBe(true);
//     });
// });







import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
