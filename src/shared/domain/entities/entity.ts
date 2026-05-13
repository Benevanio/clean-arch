import { randomUUID as uuidv4 } from 'node:crypto'

export abstract class Entity<Props> {
  public readonly props: Props
  private readonly _id: string

  constructor(props: Props, id?: string) {
    this.props = props
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
