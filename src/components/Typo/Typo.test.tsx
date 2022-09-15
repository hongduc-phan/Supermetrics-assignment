import React from 'react'
import renderer, { ReactTestRendererJSON } from 'react-test-renderer'
import { mount, ReactWrapper, configure }  from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import Typo from './Typo'
import { TypoColors, TypoAlignment, TypoVariants } from './types'

configure({ adapter: new Adapter() })

describe('<Typo />', () => {
  let typo: any
  let tree: ReactTestRendererJSON | null
  let component: ReactWrapper

  it('Should display a <span> tag', () => {
    typo = <Typo>Lorem</Typo>
    tree = renderer.create(typo).toJSON() as ReactTestRendererJSON
    expect(tree).toMatchSnapshot()
  })

  it('Should display a <div> tag', () => {
    typo = <Typo tag="div">Lorem</Typo>
    tree = renderer.create(typo).toJSON() as ReactTestRendererJSON
    expect(tree).toMatchSnapshot()
  })

  describe('Colors', () => {
    it('Should display with inherit color', () => {
      typo = <Typo color={TypoColors.inherit}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.inherit')
      expect(spans.length).toEqual(1)
    })

    it('Should display with black color', () => {
      typo = <Typo color={TypoColors.black}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.black')
      expect(spans.length).toEqual(1)
    })

    it('Should display with white color', () => {
      typo = <Typo color={TypoColors.white}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.white')
      expect(spans.length).toEqual(1)
    })

    it('Should display with greyDark color', () => {
      typo = <Typo color={TypoColors.greyDark}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.greyDark')
      expect(spans.length).toEqual(1)
    })

    it('Should display with greyMedium color', () => {
      typo = <Typo color={TypoColors.greyMedium}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.greyMedium')
      expect(spans.length).toEqual(1)
    })

    it('Should display with blue color', () => {
      typo = <Typo color={TypoColors.blue}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.blue')
      expect(spans.length).toEqual(1)
    })

    it('Should display with red color', () => {
      typo = <Typo color={TypoColors.red}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.red')
      expect(spans.length).toEqual(1)
    })
  })

  describe('Alignment', () => {
    it('Should display with align middle', () => {
      typo = <Typo align={TypoAlignment.middle}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.middle')
      expect(spans.length).toEqual(1)
    })

    it('Should display with align left', () => {
      typo = <Typo align={TypoAlignment.left}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.left')
      expect(spans.length).toEqual(1)
    })
  })

  describe('Variants', () => {
    it('Should display with h1', () => {
      typo = <Typo variant={TypoVariants.h1}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.h1')
      expect(spans.length).toEqual(1)
    })

    it('Should display with h2', () => {
      typo = <Typo variant={TypoVariants.h2}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.h2')
      expect(spans.length).toEqual(1)
    })

    it('Should display with h3', () => {
      typo = <Typo variant={TypoVariants.h3}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.h3')
      expect(spans.length).toEqual(1)
    })

    it('Should display with h4', () => {
      typo = <Typo variant={TypoVariants.h4}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.h4')
      expect(spans.length).toEqual(1)
    })

    it('Should display with h5', () => {
      typo = <Typo variant={TypoVariants.h5}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.h5')
      expect(spans.length).toEqual(1)
    })

    it('Should display with body1', () => {
      typo = <Typo variant={TypoVariants.body1}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.body1')
      expect(spans.length).toEqual(1)
    })

    it('Should display with body2', () => {
      typo = <Typo variant={TypoVariants.body2}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.body2')
      expect(spans.length).toEqual(1)
    })

    it('Should display with button', () => {
      typo = <Typo variant={TypoVariants.button}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.button')
      expect(spans.length).toEqual(1)
    })

    it('Should display with subTitle', () => {
      typo = <Typo variant={TypoVariants.subTitle}>Lorem</Typo>
      component = mount(typo)
      const spans = component.find('.subTitle')
      expect(spans.length).toEqual(1)
    })
  })
})