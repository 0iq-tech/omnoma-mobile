/**
 * Helper type to infer the return type of a function
 */
type InferReturn<T> = T extends (...args: any[]) => infer R ? R : never

/**
 * Helper type to infer the parameters of a function
 */
type InferParams<T> = T extends (...args: infer P) => any ? P : never

/**
 * Composes multiple functions from right to left.
 *
 * @example
 * ```typescript
 * // Basic usage
 * const add1 = (x: number) => x + 1;
 * const multiply2 = (x: number) => x * 2;
 * const addThenMultiply = compose(multiply2, add1);
 *
 * // React HOC usage
 * const withProviders = compose(withTheme, withRouter);
 * ```
 */
interface ComposeFunction {
  (): <T>(x: T) => T
  <F extends Function>(f: F): F
  <A extends Function, B extends Function>(f: A, g: B): (
    ...args: InferParams<B>
  ) => InferReturn<A>
  <A extends Function, B extends Function, C extends Function>(
    f: A,
    g: B,
    h: C,
  ): (...args: InferParams<C>) => InferReturn<A>
  <
    A extends Function,
    B extends Function,
    C extends Function,
    D extends Function,
  >(
    f: A,
    g: B,
    h: C,
    i: D,
  ): (...args: InferParams<D>) => InferReturn<A>
}

/**
 * Implementation of the compose function.
 *
 * @param funcs - The functions to compose
 * @returns A composed function that applies all functions from right to left
 */
export const compose: ComposeFunction = (...funcs: Function[]): any => {
  if (funcs.length === 0) {
    return <T>(x: T): T => x
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce(
    (a, b) =>
      (...args: any[]) =>
        a(b(...args)),
  )
}
