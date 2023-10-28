### BIG O 

``` swift
func loopy(string: String) : String {
    for char in str {
        return(char)
    }
}
```

**The runtime can be described as O(N). Meaning it's a linear correlation.**

``` swift
func loopy(string: String) : String {
    for char in str {
        return(char)
    }
}
```

**The runtime technically is O(2N), but since we drop the constants it's actually O(N).**

``` swift
func loopy(string: String) : String {
    for char in str {
        if (char == "H") { return(char)}
         continue;
    }
}
```

**The runtime is still O(2N), because we measure worst case scenario.**

``` swift
func loopy(arr: Array) : String {
    for str in arr {
        for char in str {
            print(char)
        }
    }
}
```

**The runtime is O(N^2), because we are looping through the array and then the characters in the string.**