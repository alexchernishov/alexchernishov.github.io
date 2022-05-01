import renderer from 'react-test-renderer';
import App from './App';
import {store} from './store';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);


it('Init screen is working', () => {
  const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Maps exists', () => {

    const initialState = {
        board: {
            map:true,
            size: 1,
            connected: true,
            loading: false,
            lose: false,
            win: false,
        },
        rows:{
            items: [
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
            ],
        }
    };
    const store = mockStore(initialState);


  const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
  );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
it('Lose', () => {

    const initialState = {
        board: {
            map:true,
            size: 1,
            connected: true,
            loading: false,
            lose: true,
            win: false,
        },
        rows:{
            items: [
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
            ],
        }
    };
    const store = mockStore(initialState);


  const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
  );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
it('Win', () => {

    const initialState = {
        board: {
            map:true,
            size: 1,
            connected: true,
            loading: false,
            lose: false,
            win: true,
        },
        rows:{
            items: [
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
                '□□□□□□□□□□'.split(''),
            ],
        }
    };
    const store = mockStore(initialState);


  const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
  );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});