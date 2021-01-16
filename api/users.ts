export interface User {
  username: string
  password: string
  display_name?: string
  banner_url?: string
  avatar_url?: string
  profile_url?: string
  is_verified?: boolean
}

export const users: User[] = [
  {
    username: 'midudev',
    password: 'suscribete'
  },
  {
    username: "aomine",
    password: "$2a$10$3OTaA7PpqUEMtS3GcILaoenKw2UtEYGM1PsuogrErUS9gl3mKhL0i",
    display_name: "Omar Carrion Alcocer",
    banner_url: "https://images.unsplash.com/photo-1587018710457-e3dbc199bab3?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5NHxibzhqUUtUYUUwWXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=60",
    avatar_url: "https://i.imgur.com/QVrPcMU.jpg",
    profile_url: "https://aomine.teampixeland.com",
    is_verified: true
  }
]
