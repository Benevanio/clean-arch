import { faker } from '@faker-js/faker'
import { UserProps } from '../../entities/user.entity'
type Props = {
  id?: string
  name?: string
  email?: string
  password?: string
  createdAt?: Date | undefined
}
export function UserDataBuilder(props: Props): UserProps {
  return {
    id: props.id ?? faker.datatype.uuid(),
    name: props.name ?? faker.name.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.password(),
    createdAt: props.createdAt ?? new Date(),
  }
}
