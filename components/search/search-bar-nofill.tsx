"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React, { FC, useState } from "react"

// Style based on: https://www.youtube.com/watch?v=7gzoI9PIfn8

interface TextInputProps {
  onChange: (value: string) => void
  value: string
}

export default function SearchBarNoFill({ value, onChange }: TextInputProps) {
  return (
    <>
      <div className="relative">
        <input
          type="search"
          placeholder="Otsi lehelt"
          className="w-full p-4 rounded-full bg-slate-100 dark:bg-slate-800"
          value={value}
          onChange={e => onChange(e.target.value)}
        ></input>
      </div>
    </>
  )
}
