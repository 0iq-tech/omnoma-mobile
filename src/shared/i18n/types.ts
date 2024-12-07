type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${P extends '' ? '' : ':'}${P}`
    : never
  : never

type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
    ? {
        [K in keyof T]: K extends string | number
          ? T[K] extends string
            ? `${K}`
            : T[K] extends object
              ? Join<K, Paths<T[K], Prev[D]>>
              : never
          : never
      }[keyof T]
    : ''

type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[],
]

export type TranslationResource = {
  [K: string]: TranslationResource | string
}

export type TranslationsSchema = {
  [locale: string]: TranslationResource
}

export type TranslationKey<T> = Paths<T>
