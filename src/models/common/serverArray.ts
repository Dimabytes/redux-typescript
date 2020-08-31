export interface BaseServerArray<T> {
  [key: string]: T;
}

export type WithId<T> = T & {
  id: string;
};
