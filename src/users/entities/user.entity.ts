export type UserProps = {
  id: string
  name: string
  email: string
  password: string
  createdAt?: Date
}
export class User {
  constructor(public readonly props: UserProps) {
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  get id() {
    return this.props.id
  }
  get name() {
    return this.props.name
  }
  get email() {
    return this.props.email
  }
  get password() {
    return this.props.password
  }
  get createdAt() {
    return this.props.createdAt
  }
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      createdAt: this.props.createdAt,
    }
  }
}
