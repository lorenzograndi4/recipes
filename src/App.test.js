import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import ReactDOM from 'react-dom'
import App from './App'
import Title from './components/Title'
import Container from './components/Container'

chai.use(chaiEnzyme())

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe ('<App /', () => {
  const app = shallow(<App />)

  it ('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('shows the recipes container', () => {
    expect(app).to.have.descendants(Container)
  })
})

describe('with a different content prop', () => {
  const title = shallow(<Title content="It's showtime!" />)

  it ('renders a different title content', () => {
    expect(title).to.have.text("It's showtime!")
  })
})
