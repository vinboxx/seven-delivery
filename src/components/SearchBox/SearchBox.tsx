import React, { useState, useRef, useEffect } from 'react'
import useClickAway from 'react-use/lib/useClickAway'
import classnames from 'classnames'

import SearchIcon from '../Icons/Search'
import styles from './SearchBox.module.scss'
import useDebouncedValue from './useDebouncedValue'

interface Props {
    className?: string,
    delay?: number,
    onChange: (value: string) => void,
    placeholder?: string
}

const SearchBox = ({
    className,
    delay = 800,
    onChange,
    placeholder
}: Props): React.ReactElement => {
    const ref = useRef()
    const inputElement = useRef(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')
    const searchTerm = useDebouncedValue(value, delay)

    const openInput = (): void => {
        setIsOpen(true)
        inputElement.current.focus()
    }

    const closeInput = (): void => {
        if (!value) {
            setIsOpen(false)
        }
    }

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value)
    }

    useClickAway(ref, closeInput)

    useEffect(
        () => {
            onChange(searchTerm)
        },
        [searchTerm]
    )

    const active = isOpen ? styles.active : null

    return (
        <div ref={ref} className={classnames(styles.container, className, active)}>
            <div title="Search"
                className={classnames(styles.iconContainer, active)}
                onClick={openInput}>
                <SearchIcon />
            </div>
            <div className={classnames(styles.inputContainer, active)}>
                <input
                    ref={inputElement}
                    className={styles.input}
                    onChange={onInputChange}
                    type="text"
                    placeholder={placeholder}
                    value={value} />
            </div>

        </div>
    )
}

export default SearchBox
