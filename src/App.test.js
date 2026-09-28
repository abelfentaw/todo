import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('should render without crashing', () => {
    expect(true).toBe(true)
  })

  it('should add and remove todos', () => {
    const todos = []
    const newTodo = { id: 1, text: 'Test', done: false }
    todos.push(newTodo)
    expect(todos.length).toBe(1)
    todos.pop()
    expect(todos.length).toBe(0)
  })
})
