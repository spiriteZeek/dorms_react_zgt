import {login as Login} from '@/components/component/login'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Route } from 'next'
export default function loginPage() {
  return <Login/>
}