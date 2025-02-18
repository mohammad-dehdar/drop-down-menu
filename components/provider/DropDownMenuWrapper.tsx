"use client"

import DropdownMenu, { type DropdownOption } from "@/components/DropDownMenu"

import { FaGraduationCap, FaPalette, FaFootballBall, FaGamepad, FaHeartbeat } from "react-icons/fa"
import { FaFlask } from "react-icons/fa6"
import { FaMusic, FaLaptop, FaUtensils, FaPlane, FaMoneyBillWave, FaLeaf } from "react-icons/fa"

export default function DropdownWrapper() {
  const categories: DropdownOption[] = [
    { id: "science", label: "Science", icon: <FaFlask /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "art", label: "Art", icon: <FaPalette /> },
    { id: "sport", label: "Sport", icon: <FaFootballBall /> },
    { id: "games", label: "Games", icon: <FaGamepad /> },
    { id: "health", label: "Health", icon: <FaHeartbeat /> },
    { id: "music", label: "Music", icon: <FaMusic /> },
    { id: "technology", label: "Technology", icon: <FaLaptop /> },
    { id: "food", label: "Food", icon: <FaUtensils /> },
    { id: "travel", label: "Travel", icon: <FaPlane /> },
    { id: "finance", label: "Finance", icon: <FaMoneyBillWave /> },
    { id: "nature", label: "Nature", icon: <FaLeaf /> },
  ]

  const handleSelect = (option: DropdownOption) => {
    console.log("Selected option:", option)
  }

  return (
    <DropdownMenu
      options={categories}
      defaultSelectedId="science"
      onSelect={handleSelect}
      placeholder="Select category"
      maxHeight="200px"
    />
  )
}

