/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'
import { User } from '../../user.entity'

describe('UserEntity', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should create a Json object with the correct properties', () => {
    const props = UserDataBuilder({})

    const userEntity = new User(props)

    expect(userEntity.toJSON()).toEqual({
      id: props.id,
      name: props.name,
      email: props.email,
      password: props.password,
      createdAt: userEntity.createdAt,
    })
  })
})
