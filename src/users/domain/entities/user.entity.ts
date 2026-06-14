import { Entity } from '@/shared/domain/entities/entity'

type UserProps = {
  readonly id: string
  readonly name: string
  readonly email: string
  readonly password: string
  readonly createdAt: Date
}

type CreateUserProps = Omit<UserProps, 'createdAt'> & {
  createdAt?: Date
}

export class UserEntity extends Entity<UserProps> {
  aggregateProps: UserProps
  constructor(props: CreateUserProps) {
    super({
      id: props.id,
      name: props.name,
      email: props.email,
      password: props.password,
      createdAt: props.createdAt ?? new Date(),
    })
    this.aggregateProps = {
      id: props.id,
      name: props.name,
      email: props.email,
      password: props.password,
      createdAt: props.createdAt ?? new Date(),
    }
  }

  get props(): UserProps {
    return this.aggregateProps
  }

  get id(): string {
    return this.props.id
  }

  get name(): string {
    return this.props.name
  }

  get email(): string {
    return this.props.email
  }

  get password(): string {
    return this.props.password
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  update(value: string): void {
    this.aggregateProps = {
      ...this.aggregateProps,
      name: value,
    }
  }

  updatePassword(value: string): void {
    this.aggregateProps = {
      ...this.aggregateProps,
      password: value,
    }
  }

  toJSON(): UserProps {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      createdAt: this.createdAt,
    }
  }
}
