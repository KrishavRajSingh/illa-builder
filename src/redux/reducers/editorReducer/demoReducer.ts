import { createSlice } from "@reduxjs/toolkit"

const initValue: DemoState = {
  name: "demo name",
  value: {
    a: 1,
    b: [1, 2, 3],
    c: {
      value: "demo value",
    },
  },
}

const demoSlice = createSlice({
  name: "demo",
  initialState: initValue,
  reducers: {
    changeDemoValueA(state) {
      state.value.a++
    },
    changeDemoValueB(state) {
      state.value.b.push(4)
    },
    changeDemoValueC(state) {
      state.value.c.value = "demo C"
    },
  },
})

export const { changeDemoValueA, changeDemoValueB, changeDemoValueC } =
  demoSlice.actions

export default demoSlice.reducer

export interface DemoState {
  name: string
  value: {
    a: number
    b: number[]
    c: {
      value: string
    }
  }
}
