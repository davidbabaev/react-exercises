1. i didn't remembered what i need to write in the useMemoChild and why are we need it 
2. i struggled with filtering the array, with the filtering function i didn't knew what to do with that function, what actually do where to put it, how to use it
3. i taked out the array out of the component function and that was wrong. i don't needed to do that because we use here useState, in the previous ex we used just simple array not state.
4. i forgoted the darkMode state
5. i used useCallback on the filter function instead of using useMemo
6. i used regular search state in the filter instead debounceSearch, in the includes checking.
7. i didn't knew that i need to put the map list in the useMemoChild and pass to it in the props the productFilter function.
8. i used return clearTimeout(timer); without using () =>, what means the return runs always immidiately


3 rules:
1. useMemo = returns VALUE -> use directly: filterArray.map()
2. useCallback = returns FUNCTION -> pass to child's onClick
3. cleanup = (return () => clearTimeout) not (return clearTimeout)