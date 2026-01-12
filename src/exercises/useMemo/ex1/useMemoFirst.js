
// memoizaition = remember the result of an expensive calculation so you don't have to do it again!
// think of it like this:
// without useMemo:
// component re-renders
// ↓
// calculate expensive result again (even if input didn't change!)
// ↓
// waste time!
// ↓
// with useMemo:
// user types in search box
// ↓
// component re-renders
// ↓
// check: did the input change?
// NO -> use cched result (fast)
// YES -> recalculate (only when needed)


// when react re-render:
// 1. state changes (useState)
// 2. props change
// 3. parent re-renders


// 