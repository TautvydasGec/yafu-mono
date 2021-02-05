declare function flip <A, B, C> (f: (a: A, b: B) => C): (x: B, y: A) => C
declare function flip <A, B, C> (f: (a: A, b: B) => C, x: B, y: A): C

declare function uniqBy <A, B> (fn: (a: A) => B, list: A[]): A[]
declare function uniqBy <A, B> (fn: (a: A) => B): (list: A[]) => A[]
