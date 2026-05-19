import { randomUUID as uuidv4 } from 'node:crypto'

export abstract class Entity<Props> {
  private readonly _props: Props
  public get props(): Props {
    return this._props
  }
  private readonly _id: string

  constructor(props: Props, id?: string) {
    this._props = props
    this._id = id ?? uuidv4()
  }

  get id(): string {
    return this._id
  }

  toJSON(): Props & { id: string } {
    return {
      id: this._id,
      ...this.props,
    }
  }
}
