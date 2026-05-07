export type UserProps = {
  id: string
  name: string
  email: string
  password: string
}
export class User {
  constructor(public props: UserProps) {}

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
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    }
  }
}
