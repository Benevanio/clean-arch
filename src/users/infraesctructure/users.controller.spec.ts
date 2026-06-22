import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersController } from './users.controller'

describe('UsersController', () => {
  let controller: UsersController

  const usersServiceMock = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()

    controller = new UsersController(usersServiceMock)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('create', () => {
    it('should call usersService.create', () => {
      const dto = {
        name: 'Bene',
      } as CreateUserDto

      usersServiceMock.create.mockReturnValue('created')

      const result = controller.create(dto)

      expect(usersServiceMock.create).toHaveBeenCalledWith(dto)
      expect(result).toBe('created')
    })
  })

  describe('findAll', () => {
    it('should call usersService.findAll', () => {
      usersServiceMock.findAll.mockReturnValue(['user'])

      const result = controller.findAll()

      expect(usersServiceMock.findAll).toHaveBeenCalledTimes(1)
      expect(result).toEqual(['user'])
    })
  })

  describe('findOne', () => {
    it('should convert id to number and call usersService.findOne', () => {
      usersServiceMock.findOne.mockReturnValue('user')

      const result = controller.findOne('123')

      expect(usersServiceMock.findOne).toHaveBeenCalledWith(123)
      expect(result).toBe('user')
    })
  })

  describe('update', () => {
    it('should convert id to number and call usersService.update', () => {
      const dto = {
        name: 'Novo Nome',
      } as UpdateUserDto

      usersServiceMock.update.mockReturnValue('updated')

      const result = controller.update('123', dto)

      expect(usersServiceMock.update).toHaveBeenCalledWith(123, dto)
      expect(result).toBe('updated')
    })
  })

  describe('remove', () => {
    it('should convert id to number and call usersService.remove', () => {
      usersServiceMock.remove.mockReturnValue('removed')

      const result = controller.remove('123')

      expect(usersServiceMock.remove).toHaveBeenCalledWith(123)
      expect(result).toBe('removed')
    })
  })
})
