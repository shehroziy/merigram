import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='mycard'>
      <div className="card card__auth">
      <h2>Devgram</h2>
      <div class="input-field col s6">
          <i class="material-icons prefix">verified_user</i>
          <input id="icon_prefix" type="text" class="validate" />
          <label for="icon_prefix">Ismingiz</label>
        </div>

      <div class="input-field col s6">
          <i class="material-icons prefix">email</i>
          <input id="icon_prefix" type="text" class="validate" />
          <label for="icon_prefix">Pochta manzilingiz</label>
        </div>

      <div class="input-field col s6">
          <i class="material-icons prefix">password</i>
          <input id="icon_prefix" type="text" class="validate" />
          <label for="icon_prefix">Sizning parolingiz</label>
        </div>
        <button className="waves-effect waves-light btn">
          Ro'yxatdan otish
        </button>

        <p>
          <Link to="signin">Already have an account</Link>
        </p>
      </div>
    </div>
  )
}
