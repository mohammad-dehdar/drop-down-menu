"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import styles from "./DropdownMenu.module.scss"

export type DropdownOption = {
  id: string
  label: string
  icon?: React.ReactNode
}

type DropdownMenuProps = {
  options: DropdownOption[]
  defaultSelectedId?: string
  onSelect?: (option: DropdownOption) => void
  placeholder?: string
  maxHeight?: string
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  defaultSelectedId,
  onSelect,
  placeholder = "Select options",
  maxHeight = "300px",
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    defaultSelectedId ? options.find((opt) => opt.id === defaultSelectedId) || null : null,
  )

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSelect = (option: DropdownOption) => {
    setSelectedOption(option)
    if (onSelect) onSelect(option)
    setIsOpen(false)
  }

  return (
    <div className={styles.dropdown} ref={menuRef}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        {selectedOption ? (
          <span className={styles.selectedOption}>
            {selectedOption.icon && <span className={styles.icon}>{selectedOption.icon}</span>}
            {selectedOption.label}
          </span>
        ) : (
          placeholder
        )}
        <span className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`}>&#9650;</span>
      </button>

      {isOpen && (
        <ul className={styles.menu} role="menu" style={{ maxHeight }}>
          {options.map((option) => (
            <li
              key={option.id}
              className={`${styles.item} ${selectedOption?.id === option.id ? styles.selected : ""}`}
              onClick={() => handleSelect(option)}
              role="menuitem"
            >
              {option.label}
              {option.icon && <span className={styles.icon}>{option.icon}</span>}
              {selectedOption?.id === option.id && <span className={styles.checkmark}>✓</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownMenu

