/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
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
  it('Constructor should set the properties correctly', () => {
    const props = UserDataBuilder({})
    expect(new User(props)).toMatchObject({
      props: {
        id: props.id,
        name: props.name,
        email: props.email,
        password: props.password,
        createdAt: props.createdAt,
      },
    })
  })
  it('Should create a UserEntity with the correct properties', () => {
    const props = UserDataBuilder({})

    const userEntity = new User(props)

    expect(userEntity).toMatchObject({
      props: {
        id: props.id,
        name: props.name,
        email: props.email,
        password: props.password,
        createdAt: props.createdAt,
      },
    })
  })
})
