import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import RecipeItem from './RecipeItem'

chai.use(chaiEnzyme())

const recipe = {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
}

describe ('<RecipeItem />', () => {
  const container = shallow(<RecipeItem { ...recipe } />)

  it('is wrapped in an article tag with class name "recipe"', () => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('recipe')
  })

  it('contains the recipe title', () => {
    expect(container.find('h1')).to.have.text(recipe.title)
  })

  // // Mind the use of find in this example
  // it('shows the carrot when vegetarian', () => {
  //   expect(container.find('ul > li')).to.have.text('🥕')
  // })

  it('shows the carrot when vegetarian', () => {
    expect(container).to.contain(<img src="vegetarian.svg" alt="vegetarian" />)
  })

})
