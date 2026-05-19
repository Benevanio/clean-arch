import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'
import { UserEntity } from '../../user.entity'

describe('UserEntity', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should create a Json object with the correct properties', () => {
    const props = UserDataBuilder({})

    const userEntity = new UserEntity(props)

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
    expect(new UserEntity(props)).toMatchObject({
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

    const userEntity = new UserEntity(props)

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

  it("Get Name Field should return the user's name", () => {
    const props = UserDataBuilder({})

    const userEntity = new UserEntity(props)

    expect(userEntity.name).toBe(props.name)
  })
  it("Setter Name Field should update the user's name", () => {
    const props = UserDataBuilder({})

    const userEntity = new UserEntity(props)

    const newName = 'New Name'

    userEntity.update(newName)

    expect(userEntity.name).toBe(newName)
  })
})
