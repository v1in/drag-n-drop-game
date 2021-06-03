/* eslint-disable no-return-assign */
import {shallow} from 'enzyme';
import App from '../App';
import HomePage from '../components/Pages/Home';
import WelcomeForm from '../components/WelcomeForm';

describe('App', () => {
  it('should render a root <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.root').length).toEqual(1);
  });
});

describe('Home page', () => {
  const container = shallow(<HomePage />);

  it('should render a Home page', () => {
    expect(container.find('div.block[style]').length).toEqual(1);
  });

  const initialState = {
    onSubmit: () => {},
    onChange: () => {},
    buttonText: '',
    label: '',
    value: '',
  };

  let form;
  // eslint-disable-next-line react/jsx-props-no-spreading
  beforeEach(() => (form = shallow(<WelcomeForm {...initialState} />)));

  it('should render a <form> tag ', () => {
    expect(form.find('form').length).toEqual(1);
  });

  it('should render an input field', () => {
    expect(form.find('input[type="text"]').length).toEqual(1);
  });

  it('should change a value field', () => {
    const name = 'Name';
    const input = form.find('input[type="text"]').at(0);
    const event = {target: {value: name}};
    input.simulate('change', event);
    expect(input.prop('value')).toEqual('Name');
  });
});
