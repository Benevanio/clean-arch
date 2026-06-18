import { UserEntity } from '../../user.entity'

describe('UserEntity Integration Test', () => {
  it('should create a user entity successfully', () => {
    const userProps = {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      createdAt: new Date(),
    }
    const user = new UserEntity(userProps)
    expect(user).toBeInstanceOf(UserEntity)
    expect(user.id).toBe(userProps.id)
    expect(user.name).toBe(userProps.name)
    expect(user.email).toBe(userProps.email)
    expect(user.password).toBe(userProps.password)
    expect(user.createdAt).toBe(userProps.createdAt)
  })
  it('should accept invalid properties without throwing', () => {
    const invalidUserProps = {
      id: '1',
      name: '',
      email: 'invalid-email',
      password: 'short',
    }

    const user = new UserEntity(invalidUserProps)

    expect(user).toBeInstanceOf(UserEntity)
  })
})
