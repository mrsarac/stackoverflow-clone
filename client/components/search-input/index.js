import React, { useEffect, useRef } from 'react'

import cn from 'classnames'

import { Search } from '../icons'

import styles from './search-input.module.css'

function SearchInput({
  fullWidth,
  autoFocus,
  marginLeft = true,
  className,
  ...props
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (autoFocus) {
      ref.current.focus()
    }
  }, [ref])

  return (
    <div
      className={cn(
        styles.container,
        fullWidth && styles.fullWidth,
        marginLeft && styles.ml24
      )}
    >
      <input ref={ref} className={cn(styles.input, className)} {...props} />
      <Search className={styles.search} />
    </div>
  )
}

export default SearchInput
