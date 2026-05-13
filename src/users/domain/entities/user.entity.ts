import { Entity } from '@/shared/domain/entities/entity'

export type UserProps = {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
}

type CreateUserProps = Omit<UserProps, 'createdAt'> & {
  createdAt?: Date
}

export class UserEntity extends Entity<UserProps> {
  constructor(props: CreateUserProps) {
    super({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    })
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
      createdAt: this.createdAt,
    }
  }
}
