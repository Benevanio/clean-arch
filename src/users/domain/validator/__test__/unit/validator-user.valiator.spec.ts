import {
  UserValidator,
  UserValidatorFactory,
} from '../../validator-user.validator'

describe('UserValidator Unit Tests', () => {
  let sut: UserValidator

  beforeEach(() => {
    sut = new UserValidator()
  })

  describe('validate', () => {
    it('should validate a valid user', () => {
      expect(
        sut.validate({
          name: 'Benevanio Santos',
          email: 'bene@gmail.com',
          password: '12345678',
        }),
      ).toBe(true)

      expect(sut.errors).toEqual({})
    })

    it('should return error when name is empty', () => {
      expect(
        sut.validate({
          name: '',
          email: 'bene@gmail.com',
          password: '12345678',
        }),
      ).toBe(false)

      expect(sut.errors).toHaveProperty('name')
    })

    it('should return error when email is invalid', () => {
      expect(
        sut.validate({
          name: 'Benevanio Santos',
          email: 'invalid-email',
          password: '12345678',
        }),
      ).toBe(false)

      expect(sut.errors).toHaveProperty('email')
    })

    it('should return error when password has less than 8 chars', () => {
      expect(
        sut.validate({
          name: 'Benevanio Santos',
          email: 'bene@gmail.com',
          password: '1234567',
        }),
      ).toBe(false)

      expect(sut.errors).toHaveProperty('password')
    })
  })

  describe('UserValidatorFactory', () => {
    it('should create a UserValidator instance', () => {
      const validator = UserValidatorFactory.create()

      expect(validator).toBeInstanceOf(UserValidator)
    })
  })
})
