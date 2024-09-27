import { onAuthStateChanged } from 'firebase/auth'
import { $auth } from '@/firebaseApp'

export default function authGuard(to, from, next) {
  onAuthStateChanged($auth, (user) => {
    if (!user) {
      next({ name: 'home' })
    } else {
      next()
    }
  })
}
