| Feature | `useReducer()` | `useActionState()` |
|---|---|---|
| **Main purpose** | Manage complex state updates | Manage the result of an action |
| **Import** | `import { useReducer } from "react"` | `import { useActionState } from "react"` |
| **Hook signature** | `useReducer(reducerFunction, initialState, initFunction?)` | `useActionState(actionFunction, initialState, permalink?)` |
| **Function signature** | `reducerFunction(currentState, action)` | `actionFunction(previousState, payload)` |
| **Return value** | `[state, dispatch]` | `[state, dispatchAction, isPending]` |
| **How state updates** | `dispatch()` sends an action object to the reducer | `dispatchAction()` invokes the action function and stores its returned state |
| **Action format** | Usually an object with `type` and `payload` | An action function receiving the previous state and a payload |
| **Previous state** | The reducer receives the current state | The action function receives the previous action result as its first argument |
| **Payload** | Usually included in the action object's `payload` property | Passed as the second argument to the action function |
| **Manual dispatch** | Call `dispatch(action)` to request a state update | Not necessary when the returned dispatcher is connected to a form's `action` prop |
| **Form integration** | Usually requires event-handler logic | Supports `<form action={formAction}>` |
| **Automatic form submission** | Not built in | Submitting the form automatically invokes the connected `formAction` |
| **Using `dispatchAction()` with a form** | Not applicable | You do not need to call it manually when the form's `action` prop invokes it |
| **Using `dispatchAction()` directly** | Not applicable | Call `dispatchAction(payload)` when invoking the action manually in an appropriate Action context |
| **Async operations** | Keep the reducer pure; handle asynchronous work separately | Supports asynchronous action functions |
| **Pending status** | No built-in pending flag | Provides `isPending` |
| **Validation errors** | Manage errors through reducer state and logic | Can return validation errors as the next state |
| **Side effects** | Keep reducer functions pure; handle side effects separately | Action functions can perform asynchronous work and side effects |
| **`startTransition()`** | Optional for marking updates as non-urgent | Useful when manually invoking the dispatcher outside an existing Action context |
| **Third parameter** | `initFunction?` optionally calculates the initial state | `permalink?` optionally specifies a URL for progressive form enhancement |
| **Typical use cases** | Shopping carts, filters, complex UI state | Form submissions, validation, asynchronous operations |