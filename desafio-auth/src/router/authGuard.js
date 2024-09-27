import { onAuthStateChanged } from 'firebase/auth'
import { $auth } from '@/firebaseApp'

export function authGuard(to, from, next) {
  onAuthStateChanged($auth, (user) => {
    if(!user) {
      next({name: 'signup'})
    } else  {
      next()
    }
  })
}