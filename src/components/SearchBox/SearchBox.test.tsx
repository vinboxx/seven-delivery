import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Uut from './SearchBox'

const props = {
    onChange: () => null
}

describe('SearchBox', () => {
    test('on click search icon', () => {
        const { container } = render(<Uut {...props} />)

        const button = screen.getByTitle('Search')

        expect(container.querySelectorAll('.inputContainer.active')).toHaveLength(0)

        userEvent.click(button)

        expect(container.querySelectorAll('.inputContainer.active')).toHaveLength(1)
    })

    test('on change input value', () => {
        const { container } = render(<Uut {...props} />)

        const button = screen.getByTitle('Search')

        userEvent.click(button)

        const input = container.querySelector('.inputContainer.active input')
        userEvent.type(input, 'Travel')

        expect(input).toHaveValue('Travel')
    })

    test('on click outside when there is no value in input', () => {
        const { container } = render(<Uut {...props} />)

        const button = screen.getByTitle('Search')

        userEvent.click(button)

        expect(container.querySelectorAll('.inputContainer.active')).toHaveLength(1)

        userEvent.click(document.body)

        expect(container.querySelectorAll('.inputContainer.active')).toHaveLength(0)
    })

    test('on click outside when there is value in input', () => {
        const { container } = render(<Uut {...props} />)

        const button = screen.getByTitle('Search')

        userEvent.click(button)

        const input = container.querySelector('.inputContainer.active input')
        userEvent.type(input, 'Travel')

        userEvent.click(document.body)

        expect(container.querySelectorAll('.inputContainer.active')).toHaveLength(1)
    })
})
