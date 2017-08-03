// @flow

export type Action<Type: string, Payload> = {
  type: Type,
  payload?: ?Payload,
}
